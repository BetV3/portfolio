data "aws_iam_openid_connect_provider" "github" {
    url = "https://token.actions.githubusercontent.com"
}

resource "aws_iam_role" "gha_portfolio_deploy" {
  name = "gha-portfolio-deploy"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = { Federated = data.aws_iam_openid_connect_provider.github.arn },
      Action = "sts:AssumeRoleWithWebIdentity",
      Condition = {
        StringEquals = {
          "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com",
          "token.actions.githubusercontent.com:sub" = "repo:BetV3/portfolio:ref:refs/heads/main"
        }
      }
    }]
  })
}

resource "aws_iam_policy" "gha_portfolio_deploy" {
  name = "gha_portfolio-deploy-policy"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid    = "S3SyncListBucket",
        Effect = "Allow",
        Action = ["s3:ListBucket","s3:GetBucketLocation","s3:ListBucketMultipartUploads"],
        Resource = "arn:aws:s3:::porfolio-117370072143"
      },
      {
        Sid    = "S3SyncObjectRW",
        Effect = "Allow",
        Action = ["s3:GetObject","s3:PutObject","s3:DeleteObject","s3:AbortMultipartUpload","s3:ListMultipartUploadParts"],
        Resource = "arn:aws:s3:::porfolio-117370072143/*"
      },
      {
        Sid    = "InvalidateCloudFront",
        Effect = "Allow",
        Action = "cloudfront:CreateInvalidation",
        Resource = "arn:aws:cloudfront::117370072143:distribution/E13YN6JFDMLJA3"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach" {
  role = aws_iam_role.gha_portfolio_deploy
  policy_arn = aws_iam_policy.gha_portfolio_deploy.arn
}

output "gha_portfolio_deploy_role_arn" {
    value = aws_iam_role.gha_portfolio_deploy.arn
}