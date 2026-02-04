import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Infrastructure Pipeline | Portfolio",
  description:
    "Automated AWS infrastructure provisioning with Terraform, featuring multi-region deployment, auto-scaling, and comprehensive monitoring.",
};

const technologies = [
  { name: "Terraform", category: "IaC" },
  { name: "AWS", category: "Cloud" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "Python", category: "Scripting" },
  { name: "S3", category: "State" },
  { name: "DynamoDB", category: "Locking" },
  { name: "CloudWatch", category: "Monitoring" },
  { name: "SNS", category: "Alerts" },
];

const metrics = [
  { label: "Deployment Time", value: "~X min", subtext: "down from Y min" },
  { label: "AWS Resources", value: "10+", subtext: "managed via IaC" },
  { label: "Environments", value: "3", subtext: "dev / staging / prod" },
  { label: "Regions", value: "2", subtext: "multi-region HA" },
];

export default function CloudInfrastructurePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Projects
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Infrastructure
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Production
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Cloud Infrastructure Pipeline
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          A fully automated infrastructure-as-code pipeline that provisions,
          configures, and manages AWS resources across multiple environments
          with zero manual intervention.
        </p>

        {/* Quick Links */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/USERNAME/REPO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-card/80 hover:border-accent/30 transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View Repository
          </a>
        </div>
      </header>

      {/* Metrics Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border/50 bg-card/30 p-4 text-center"
            >
              <div className="text-2xl font-bold text-accent">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-foreground">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/50 px-3 py-1.5 text-sm"
            >
              <span className="text-foreground font-medium">{tech.name}</span>
              <span className="text-muted-foreground text-xs">
                {tech.category}
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Overview
        </h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            This project automates the entire lifecycle of AWS infrastructure
            using Terraform and GitHub Actions. What started as a need to
            {/* PLACEHOLDER: Your origin story - why you built this */}
            {" "}consistently reproduce environments evolved into a production-grade
            pipeline that handles everything from VPC creation to application
            deployment.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The pipeline follows GitOps principles: all infrastructure changes
            go through pull requests, are validated by automated checks, and
            require approval before applying. This ensures auditability,
            reduces human error, and makes infrastructure changes as reviewable
            as application code.
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Architecture
        </h2>

        {/* Architecture Diagram Placeholder */}
        <div className="rounded-xl border border-border/50 bg-card/30 p-8 mb-6">
          <div className="flex items-center justify-center h-64 border-2 border-dashed border-border rounded-lg">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <p className="mt-2 text-sm text-muted-foreground">
                Architecture diagram
              </p>
              <p className="text-xs text-muted">
                {/* PLACEHOLDER: Add your diagram or remove this section */}
                Coming soon
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                  />
                </svg>
              </span>
              AWS Resources Provisioned
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {/* PLACEHOLDER: Replace with your actual resources */}
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">*</span>
                <span>
                  <strong className="text-foreground">VPC</strong> - Multi-AZ
                  with public/private subnets, NAT gateways, and VPC endpoints
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">*</span>
                <span>
                  <strong className="text-foreground">EC2 / ASG</strong> -
                  Auto-scaling groups with launch templates and mixed instances
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">*</span>
                <span>
                  <strong className="text-foreground">RDS</strong> - PostgreSQL
                  with Multi-AZ, automated backups, and read replicas
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">*</span>
                <span>
                  <strong className="text-foreground">ALB</strong> - Application
                  Load Balancer with SSL termination and path-based routing
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">*</span>
                <span>
                  <strong className="text-foreground">S3</strong> - Static
                  assets, logs, and Terraform state storage
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">*</span>
                <span>
                  <strong className="text-foreground">IAM</strong> - Least
                  privilege roles and policies for all services
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </span>
              Pipeline Stages
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">1.</span>
                <span>
                  <strong className="text-foreground">Validate</strong> -
                  terraform fmt, validate, and tflint checks
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">2.</span>
                <span>
                  <strong className="text-foreground">Security Scan</strong> -
                  tfsec and checkov for misconfigurations
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">3.</span>
                <span>
                  <strong className="text-foreground">Cost Estimation</strong> -
                  Infracost diff posted to PR comments
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">4.</span>
                <span>
                  <strong className="text-foreground">Plan</strong> - Generate
                  and display execution plan for review
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">5.</span>
                <span>
                  <strong className="text-foreground">Approve</strong> - Manual
                  approval gate for production changes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">6.</span>
                <span>
                  <strong className="text-foreground">Apply</strong> - Execute
                  changes with state locking
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Key Features
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <FeatureCard
            title="Remote State Management"
            description="Terraform state stored in S3 with DynamoDB locking. Enables team collaboration and prevents concurrent modifications that could corrupt state."
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            }
          />
          <FeatureCard
            title="Multi-Environment Support"
            description="Separate configurations for dev, staging, and production using Terraform workspaces. Each environment is isolated with its own state file and variables."
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
              />
            }
          />
          <FeatureCard
            title="Automated Security Scanning"
            description="Every PR triggers tfsec and checkov scans to catch security misconfigurations before they reach production. Blocks merges on critical findings."
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            }
          />
          <FeatureCard
            title="Cost Visibility"
            description="Infracost integration estimates cost impact of every change. PR comments show monthly cost diff so teams can make informed decisions before merging."
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            }
          />
          <FeatureCard
            title="Drift Detection"
            description="Scheduled workflows detect configuration drift between Terraform state and actual AWS resources. Alerts team when manual changes are detected."
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            }
          />
          <FeatureCard
            title="Modular Design"
            description="Reusable Terraform modules for common patterns (VPC, ECS cluster, RDS). Reduces duplication and ensures consistency across environments."
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
              />
            }
          />
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Technical Implementation
        </h2>

        <div className="space-y-6">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              State Management Strategy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Remote state is stored in an S3 bucket with versioning enabled for
              rollback capability. DynamoDB provides state locking to prevent
              concurrent operations. Each environment (dev/staging/prod) has its
              own state file, ensuring complete isolation.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# Backend configuration
terraform {
  backend "s3" {
    bucket         = "BUCKET_NAME-terraform-state"
    key            = "infrastructure/terraform.tfstate"
    region         = "REGION"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              Secrets Management
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Sensitive values are never stored in code or state. AWS Secrets
              Manager holds database credentials and API keys. The pipeline uses
              OIDC federation for AWS authentication - no long-lived credentials
              in GitHub.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# GitHub Actions OIDC authentication
- name: Configure AWS Credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: arn:aws:iam::ACCOUNT_ID:role/github-actions
    aws-region: REGION`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              Module Structure
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Infrastructure is organized into reusable modules. Each module is
              self-contained with its own variables, outputs, and documentation.
              This enables consistent patterns across environments and easy
              updates.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`infrastructure/
├── modules/
│   ├── vpc/              # Network foundation
│   ├── security-groups/  # Firewall rules
│   ├── alb/              # Load balancer
│   ├── ecs-cluster/      # Container orchestration
│   ├── rds/              # Database
│   └── monitoring/       # CloudWatch + alerts
├── environments/
│   ├── dev/
│   ├── staging/
│   └── prod/
└── global/               # Shared resources (IAM, S3)`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Challenges & Solutions
        </h2>
        <div className="space-y-4">
          <ChallengeCard
            challenge="State file corruption during concurrent applies"
            solution="Implemented DynamoDB-based state locking and added pipeline guards to queue concurrent runs. Added automatic state backup before each apply."
          />
          <ChallengeCard
            challenge="Managing secrets without exposing them in logs or state"
            solution="Migrated to AWS Secrets Manager with data sources that fetch secrets at plan time. Enabled state encryption and added log sanitization in CI."
          />
          <ChallengeCard
            challenge="Long apply times blocking development velocity"
            solution="Split monolithic configuration into targeted modules. Parallelized independent resource creation. Added plan caching for unchanged modules."
          />
          {/* PLACEHOLDER: Add your own challenges */}
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Lessons Learned
        </h2>
        <div className="rounded-xl border border-border/50 bg-card/30 p-6">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">1.</span>
              <span>
                <strong className="text-foreground">
                  Start with state management
                </strong>{" "}
                - Getting remote state and locking right from day one saves
                countless headaches. Retrofitting is painful.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">2.</span>
              <span>
                <strong className="text-foreground">
                  Plan output is documentation
                </strong>{" "}
                - Training the team to read and review terraform plans caught
                multiple issues before they hit production.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">3.</span>
              <span>
                <strong className="text-foreground">
                  Cost visibility changes behavior
                </strong>{" "}
                - Once developers could see the cost impact of their
                infrastructure requests, they started right-sizing from the
                start.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">4.</span>
              <span>
                <strong className="text-foreground">
                  Drift happens
                </strong>{" "}
                - No matter how disciplined the team, manual changes sneak in.
                Automated drift detection is essential for maintaining IaC as
                source of truth.
              </span>
            </li>
            {/* PLACEHOLDER: Add your own lessons */}
          </ul>
        </div>
      </section>

      {/* What's Next */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Future Improvements
        </h2>
        <div className="rounded-xl border border-border/50 bg-card/30 p-6">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {/* PLACEHOLDER: Add your roadmap items */}
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>
                Add Atlantis for PR-based plan/apply workflow with team review
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>
                Implement policy-as-code with OPA/Sentinel for governance
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>
                Add disaster recovery automation with cross-region replication
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>
                Explore Terraform Cloud for enhanced collaboration features
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-accent/20 bg-accent/5 p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Want to discuss this project?
        </h2>
        <p className="text-muted-foreground mb-6">
          I&apos;d love to walk through the architecture decisions and
          implementation details.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/USERNAME/REPO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-card border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-card/80 transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View Source
          </a>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
          >
            View Resume
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-card/30 p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            {icon}
          </svg>
        </span>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ChallengeCard({
  challenge,
  solution,
}: {
  challenge: string;
  solution: string;
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-card/30 p-5">
      <div className="flex items-start gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold">
          !
        </span>
        <div>
          <h3 className="font-medium text-foreground">{challenge}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            <span className="text-emerald-400 font-medium">Solution:</span>{" "}
            {solution}
          </p>
        </div>
      </div>
    </div>
  );
}
