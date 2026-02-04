data "aws_caller_identity" "current" {}

locals {
  bucket_name = var.site_bucket_name != "" ? var.site_bucket_name : "porfolio-${data.aws_caller_identity.current.account_id}"
}

# -----------------------
# S3 (private origin)
# -----------------------
resource "aws_s3_bucket" "site" {
  bucket = local.bucket_name
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id
  block_public_acls = true
  block_public_policy = true
  ignore_public_acls = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "site" {
  bucket = aws_s3_bucket.site.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "site" {
  bucket = aws_s3_bucket.site.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# -----------------------
# ACM cert (us-east-1 for CloudFront) :contentReference[oaicite:2]{index=2}
# ----------------------- 
resource "aws_acm_certificate" "site_cert" {
  domain_name = var.domain_name
  subject_alternative_names = [var.www_domain_name]
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# We won't create DNS records automatically (Cloudflare), but this resource will wait
# once you add the validation records in Cloudflare.

resource "aws_acm_certificate_validation" "site_cert" {
  certificate_arn = aws_acm_certificate.site_cert.arn
  validation_record_fqdns = [
    for dvo in aws_acm_certificate.site_cert.domain_validation_options : dvo.resource_record_name
  ]
}

# -----------------------
# CloudFront Function: www -> apex redirect
# (Querystring is an object; we rebuild it) :contentReference[oaicite:3]{index=3}
# -----------------------
resource "aws_cloudfront_function" "www_redirect" {
  name = "www-to-apex-redirect"
  runtime = "cloudfront-js-2.0"
  comment = "Redirect www to apex domain"
  publish = true

  code = <<EOT
function handler(event) {
  var request = event.request;
  var host = request.headers.host.value;

  if (host === "${var.www_domain_name}") {
    var qs = request.querystring || {};
    var parts = [];
    for (var k in qs) {
      if (qs[k] && qs[k].value !== undefined) {
        parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(qs[k].value));
      }
    }
    var query = parts.length ? ("?" + parts.join("&")) : "";
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "https://${var.domain_name}" + request.uri + query }
      }
    };
  }

  return request;
}
EOT
}

# -----------------------
# CloudFront OAC (recommended over OAI) :contentReference[oaicite:4]{index=4}
# -----------------------

resource "aws_cloudfront_origin_access_control" "oac" {
  name = "site-oac"
  description = "OAC for private S3 Origin"
  origin_access_control_origin_type = "s3"
  signing_behavior = "always"
  signing_protocol = "sigv4"
}

data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "site" {
  enabled = true
  comment = "eramirez.dev porfolio"
  default_root_object = "index.html"

  aliases = [ var.domain_name, var.www_domain_name ]

  origin {
    domain_name = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id = "s3-origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
    
    s3_origin_config {
      origin_access_identity = ""
    }
  }

  default_cache_behavior {
    target_origin_id = "s3-origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods = [ "GET", "HEAD" ]
    compress = true
    cache_policy_id = data.aws_cloudfront_cache_policy.caching_optimized.id
  
    function_association {
      event_type = "viewer-request"
      function_arn = aws_cloudfront_function.www_redirect.arn
    }
  }

  # Make missing files return my exported 404 page
  custom_error_response {
    error_code = 404
    response_code = 404
    response_page_path = "/404.html"
    error_caching_min_ttl = 0
  }
  custom_error_response {
    error_code = 403
    response_code = 404
    response_page_path = "/404.html"
    error_caching_min_ttl = 0
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.site_cert.certificate_arn
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

# Allow ONLY my distribution (via OAC) to read from the bucket
resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipalReadOnly",
        Effect    = "Allow",
        Principal = { Service = "cloudfront.amazonaws.com" },
        Action    = ["s3:GetObject"],
        Resource  = "${aws_s3_bucket.site.arn}/*",
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.site.arn
          }
        }
      }
    ]
  })
}

resource "aws_s3_bucket_ownership_controls" "site" {
  bucket = aws_s3_bucket.site.id
  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

