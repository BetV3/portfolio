terraform {
    required_version = ">= 1.6"
    required_providers {
      aws ={
        source = "hashicorp/aws"
        version = "~> 5.0"
      }
    }
}

# AWS requires CloudFront cert requests to be from us-east-1
provider "aws" {
    region = "us-east-1"
}