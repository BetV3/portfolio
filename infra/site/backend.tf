terraform {
    backend "s3" {
        bucket = "eramirez-cloud-pipeline-tfstate-117370072143-us-east-2"
        key = "porfolio-site/prod/terraform.tfstate"
        region = "us-east-2"
        dynamodb_table = "terraform-state-lock"
        encrypt = true
    }
}