// Blog post content - detailed content for each post

interface ContentSection {
  type: "heading" | "paragraph" | "code" | "list" | "callout" | "image";
  content?: string;
  items?: string[];
  language?: string;
  level?: number;
  variant?: "info" | "warning" | "tip";
  alt?: string;
}

export const blogContent: Record<string, ContentSection[]> = {
  // ============================================
  // KUBERNETES SERIES
  // ============================================
  "kubernetes-cluster-architecture": [
    {
      type: "heading",
      level: 2,
      content: "Why Architecture Matters",
    },
    {
      type: "paragraph",
      content:
        "Before spinning up your first cluster, it's worth spending time on architecture. The decisions you make now will affect everything from day-to-day operations to disaster recovery. I've seen teams rush into Kubernetes only to rebuild their clusters from scratch six months later.",
    },
    {
      type: "paragraph",
      content:
        "This post covers the key architectural decisions for a production Kubernetes cluster: control plane design, node sizing, networking, and capacity planning.",
    },
    {
      type: "heading",
      level: 2,
      content: "Control Plane High Availability",
    },
    {
      type: "paragraph",
      content:
        "For production workloads, a single control plane node is a non-starter. If it goes down, you can't deploy, scale, or manage your cluster. The standard approach is three control plane nodes, distributed across failure domains.",
    },
    {
      type: "list",
      items: [
        "Three control plane nodes minimum - provides quorum for etcd",
        "Spread across availability zones or physical racks",
        "Load balancer in front for API server access",
        "Dedicated nodes (don't schedule workloads on control plane)",
      ],
    },
    {
      type: "code",
      language: "yaml",
      content: `# Control plane node configuration
apiVersion: kubeadm.k8s.io/v1beta3
kind: ClusterConfiguration
kubernetesVersion: v1.29.0
controlPlaneEndpoint: "k8s-api.internal:6443"
etcd:
  local:
    dataDir: /var/lib/etcd
apiServer:
  extraArgs:
    audit-log-path: /var/log/kubernetes/audit.log
    audit-log-maxage: "30"
    audit-log-maxbackup: "10"
controllerManager:
  extraArgs:
    bind-address: "0.0.0.0"
scheduler:
  extraArgs:
    bind-address: "0.0.0.0"`,
    },
    {
      type: "heading",
      level: 2,
      content: "Node Sizing Strategy",
    },
    {
      type: "paragraph",
      content:
        "The eternal question: fewer large nodes or many small nodes? Both approaches have trade-offs. I've landed on a middle ground that balances resource utilization with blast radius.",
    },
    {
      type: "list",
      items: [
        "Medium-sized nodes (8-16 cores, 32-64GB RAM) offer the best balance",
        "Large nodes improve bin-packing but increase blast radius when they fail",
        "Small nodes waste resources on kubelet and system overhead",
        "Consider separate node pools for different workload types",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      content:
        "Start with nodes sized for your largest expected pod, then adjust based on actual utilization patterns. Over-provisioning early is better than under-provisioning.",
    },
    {
      type: "heading",
      level: 2,
      content: "Networking Decisions",
    },
    {
      type: "paragraph",
      content:
        "Kubernetes networking can be complex. The CNI (Container Network Interface) you choose affects performance, security features, and operational complexity. Here's what I considered:",
    },
    {
      type: "list",
      items: [
        "Cilium - eBPF-based, great observability, built-in network policies",
        "Calico - Mature, flexible, good for hybrid environments",
        "Flannel - Simple, good for learning, limited features",
        "Pod CIDR sizing - plan for growth, /16 is usually safe",
      ],
    },
    {
      type: "code",
      language: "yaml",
      content: `# Cilium configuration for production
apiVersion: cilium.io/v1alpha1
kind: CiliumConfig
metadata:
  name: cilium-config
spec:
  ipam:
    mode: kubernetes
  kubeProxyReplacement: strict
  hubble:
    enabled: true
    relay:
      enabled: true
    ui:
      enabled: true
  bpf:
    masquerade: true
  loadBalancer:
    mode: dsr`,
    },
    {
      type: "heading",
      level: 2,
      content: "Capacity Planning",
    },
    {
      type: "paragraph",
      content:
        "Plan for growth from day one. It's much easier to scale out than to migrate to a larger cluster. I use these guidelines:",
    },
    {
      type: "list",
      items: [
        "Target 60-70% average utilization (leaves room for bursts)",
        "Plan for 2x current workload as minimum headroom",
        "Set up cluster autoscaler early, even if not needed immediately",
        "Monitor etcd size - large clusters can hit etcd limits",
      ],
    },
    {
      type: "heading",
      level: 2,
      content: "Lessons Learned",
    },
    {
      type: "paragraph",
      content:
        "After running Kubernetes in my homelab for several years, here are the architectural decisions I'd make again:",
    },
    {
      type: "list",
      items: [
        "Invest in control plane HA from the start - retrofitting is painful",
        "Choose your CNI carefully - migrating later is very disruptive",
        "Use separate node pools for stateful vs stateless workloads",
        "Plan your IP address space generously - running out is a crisis",
        "Document everything - future you will thank present you",
      ],
    },
  ],

  "kubernetes-gitops-argocd": [
    {
      type: "heading",
      level: 2,
      content: "What is GitOps?",
    },
    {
      type: "paragraph",
      content:
        "GitOps is an operational framework that takes DevOps best practices used for application development and applies them to infrastructure automation. The core idea: Git is the single source of truth for your entire system.",
    },
    {
      type: "list",
      items: [
        "All configuration stored in Git repositories",
        "Changes made through pull requests (auditable, reviewable)",
        "Automated sync between Git state and cluster state",
        "Drift detection and self-healing",
      ],
    },
    {
      type: "heading",
      level: 2,
      content: "Why ArgoCD?",
    },
    {
      type: "paragraph",
      content:
        "I evaluated several GitOps tools including Flux, Jenkins X, and ArgoCD. ArgoCD won for my use case because of its excellent UI, multi-cluster support, and straightforward application model.",
    },
    {
      type: "code",
      language: "yaml",
      content: `# ArgoCD Application definition
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/myorg/k8s-manifests
    targetRevision: HEAD
    path: apps/my-app/overlays/production
  destination:
    server: https://kubernetes.default.svc
    namespace: my-app
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
      - CreateNamespace=true`,
    },
    {
      type: "heading",
      level: 2,
      content: "Repository Structure",
    },
    {
      type: "paragraph",
      content:
        "How you organize your GitOps repository matters. I use a structure that separates base manifests from environment-specific overlays using Kustomize:",
    },
    {
      type: "code",
      language: "text",
      content: `k8s-manifests/
├── apps/
│   ├── my-app/
│   │   ├── base/
│   │   │   ├── deployment.yaml
│   │   │   ├── service.yaml
│   │   │   └── kustomization.yaml
│   │   └── overlays/
│   │       ├── staging/
│   │       │   ├── kustomization.yaml
│   │       │   └── replica-patch.yaml
│   │       └── production/
│   │           ├── kustomization.yaml
│   │           └── replica-patch.yaml
├── infrastructure/
│   ├── cert-manager/
│   ├── ingress-nginx/
│   └── monitoring/
└── clusters/
    ├── staging/
    └── production/`,
    },
    {
      type: "heading",
      level: 2,
      content: "Deployment Strategies",
    },
    {
      type: "paragraph",
      content:
        "ArgoCD supports multiple sync strategies. For production, I use automated sync with self-heal enabled, but with sync windows to prevent deployments during peak hours.",
    },
    {
      type: "callout",
      variant: "warning",
      content:
        "Be careful with automated pruning in production. It will delete resources that aren't in Git, which can cause outages if you're not careful about what's tracked.",
    },
    {
      type: "heading",
      level: 2,
      content: "Secrets Management",
    },
    {
      type: "paragraph",
      content:
        "The one thing GitOps doesn't solve elegantly is secrets. You can't (and shouldn't) commit secrets to Git. I use Sealed Secrets to encrypt secrets that can be safely stored in Git:",
    },
    {
      type: "code",
      language: "bash",
      content: `# Seal a secret for GitOps
kubeseal --format=yaml \\
  --cert=pub-sealed-secrets.pem \\
  < secret.yaml > sealed-secret.yaml

# The sealed secret can be committed to Git
git add sealed-secret.yaml
git commit -m "Add database credentials (sealed)"`,
    },
    {
      type: "heading",
      level: 2,
      content: "Results",
    },
    {
      type: "paragraph",
      content:
        "After implementing GitOps with ArgoCD, deployment confidence increased significantly. Every change is reviewed, tracked, and can be rolled back by reverting a Git commit. The cluster state always matches what's in Git.",
    },
  ],

  // ============================================
  // LOG AGGREGATION SERIES
  // ============================================
  "log-aggregation-architecture": [
    {
      type: "heading",
      level: 2,
      content: "The Challenge",
    },
    {
      type: "paragraph",
      content:
        "When you're running dozens of services across multiple environments, logs become both essential and overwhelming. grep-ing through files on individual servers doesn't scale. You need centralized logging.",
    },
    {
      type: "paragraph",
      content:
        "But centralized logging comes with its own challenges: How do you handle millions of log events per day? How do you keep storage costs manageable? How do you make logs searchable without destroying query performance?",
    },
    {
      type: "heading",
      level: 2,
      content: "Architecture Overview",
    },
    {
      type: "paragraph",
      content:
        "After evaluating several approaches, I settled on the ELK stack (Elasticsearch, Logstash, Kibana) with Filebeat for collection. Here's the high-level architecture:",
    },
    {
      type: "list",
      items: [
        "Filebeat on each host - lightweight, low overhead",
        "Logstash for parsing and enrichment - handles complex transformations",
        "Elasticsearch cluster for storage and search - scales horizontally",
        "Kibana for visualization and exploration - powerful query interface",
      ],
    },
    {
      type: "code",
      language: "text",
      content: `┌─────────────┐    ┌─────────────┐    ┌─────────────────┐
│ Application │───▶│  Filebeat   │───▶│    Logstash     │
│   Servers   │    │  (shipper)  │    │   (processor)   │
└─────────────┘    └─────────────┘    └────────┬────────┘
                                               │
                                               ▼
                                    ┌─────────────────┐
                                    │  Elasticsearch  │
                                    │    (3 nodes)    │
                                    └────────┬────────┘
                                               │
                                               ▼
                                    ┌─────────────────┐
                                    │     Kibana      │
                                    └─────────────────┘`,
    },
    {
      type: "heading",
      level: 2,
      content: "Sizing Considerations",
    },
    {
      type: "paragraph",
      content:
        "Elasticsearch sizing is part art, part science. The main factors are daily ingest volume, retention period, and query patterns. Here's my approach:",
    },
    {
      type: "list",
      items: [
        "Estimate daily log volume (usually 2-5GB per service)",
        "Multiply by retention period (30 days typical)",
        "Add 50% for replicas and overhead",
        "Plan for 3x growth",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      content:
        "Start with 3 nodes minimum for high availability. Each node should have SSDs and plenty of RAM - Elasticsearch loves memory for caching.",
    },
    {
      type: "heading",
      level: 2,
      content: "Cost Management",
    },
    {
      type: "paragraph",
      content:
        "Log storage can get expensive quickly. I use Index Lifecycle Management (ILM) to automatically tier data from hot (SSD) to warm (HDD) to cold (S3) storage:",
    },
    {
      type: "code",
      language: "json",
      content: `{
  "policy": {
    "phases": {
      "hot": {
        "actions": {
          "rollover": {
            "max_size": "50gb",
            "max_age": "1d"
          }
        }
      },
      "warm": {
        "min_age": "7d",
        "actions": {
          "shrink": { "number_of_shards": 1 }
        }
      },
      "cold": {
        "min_age": "30d",
        "actions": {
          "searchable_snapshot": {
            "snapshot_repository": "s3-logs"
          }
        }
      },
      "delete": { 
        "min_age": "90d",
        "actions": { "delete": {} } 
      }
    }
  }
}`,
    },
    {
      type: "heading",
      level: 2,
      content: "Key Design Decisions",
    },
    {
      type: "list",
      items: [
        "JSON structured logging from applications (much easier to parse)",
        "Separate indices per application (isolation, different retention)",
        "Index templates for consistent mappings",
        "Correlation IDs for tracing requests across services",
      ],
    },
  ],

  // ============================================
  // DEVOPS SERIES
  // ============================================
  "terraform-patterns-scale": [
    {
      type: "heading",
      level: 2,
      content: "Beyond the Basics",
    },
    {
      type: "paragraph",
      content:
        "Everyone can write basic Terraform. The challenge is organizing Terraform for teams, multiple environments, and growing infrastructure. Here are the patterns I've found work at scale.",
    },
    {
      type: "heading",
      level: 2,
      content: "Module Design",
    },
    {
      type: "paragraph",
      content:
        "Good modules are the foundation of maintainable Terraform. A module should do one thing well and be reusable across environments.",
    },
    {
      type: "code",
      language: "hcl",
      content: `# modules/vpc/main.tf
variable "environment" {
  type        = string
  description = "Environment name (staging, production)"
}

variable "cidr_block" {
  type        = string
  description = "VPC CIDR block"
}

variable "availability_zones" {
  type        = list(string)
  description = "AZs to use for subnets"
}

resource "aws_vpc" "main" {
  cidr_block           = var.cidr_block
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "\${var.environment}-vpc"
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}

# ... subnet creation, route tables, etc.

output "vpc_id" {
  value = aws_vpc.main.id
}`,
    },
    {
      type: "heading",
      level: 2,
      content: "Environment Separation",
    },
    {
      type: "paragraph",
      content:
        "Keep environments isolated. I use separate state files and separate directories for each environment:",
    },
    {
      type: "code",
      language: "text",
      content: `terraform/
├── modules/
│   ├── vpc/
│   ├── eks/
│   └── rds/
├── environments/
│   ├── staging/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── terraform.tfvars
│   └── production/
│       ├── main.tf
│       ├── variables.tf
│       └── terraform.tfvars
└── backend.tf`,
    },
    {
      type: "heading",
      level: 2,
      content: "State Management",
    },
    {
      type: "paragraph",
      content:
        "Remote state with locking is non-negotiable for teams. I use S3 + DynamoDB for AWS projects:",
    },
    {
      type: "code",
      language: "hcl",
      content: `terraform {
  backend "s3" {
    bucket         = "mycompany-terraform-state"
    key            = "environments/production/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}`,
    },
    {
      type: "callout",
      variant: "warning",
      content:
        "Never store state files in Git. They can contain secrets and will cause conflicts when multiple people work on infrastructure.",
    },
    {
      type: "heading",
      level: 2,
      content: "CI/CD Integration",
    },
    {
      type: "paragraph",
      content:
        "Terraform changes should go through the same review process as application code. Here's my GitHub Actions workflow:",
    },
    {
      type: "code",
      language: "yaml",
      content: `name: Terraform
on:
  pull_request:
    paths: ['terraform/**']

jobs:
  plan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Terraform Init
        run: terraform init
        working-directory: terraform/environments/staging

      - name: Terraform Plan
        run: terraform plan -out=plan.tfplan
        working-directory: terraform/environments/staging

      - name: Comment Plan
        uses: actions/github-script@v7
        with:
          script: |
            // Post plan output as PR comment`,
    },
  ],

  "cicd-pipeline-design": [
    {
      type: "heading",
      level: 2,
      content: "Pipeline Philosophy",
    },
    {
      type: "paragraph",
      content:
        "A good CI/CD pipeline is fast, reliable, and catches problems early. Every commit should trigger the pipeline, and developers should trust the results.",
    },
    {
      type: "heading",
      level: 2,
      content: "Pipeline Stages",
    },
    {
      type: "paragraph",
      content:
        "I structure pipelines with these stages, each acting as a quality gate:",
    },
    {
      type: "list",
      items: [
        "Lint - Fast syntax and style checks",
        "Build - Compile code, build containers",
        "Unit Test - Fast, isolated tests",
        "Integration Test - Tests with dependencies",
        "Security Scan - Vulnerability scanning",
        "Deploy to Staging - Automated",
        "Deploy to Production - Manual approval",
      ],
    },
    {
      type: "code",
      language: "yaml",
      content: `name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run lint

  test:
    needs: lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm test

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build Docker image
        run: docker build -t myapp:\${{ github.sha }} .
      - name: Push to registry
        run: docker push myapp:\${{ github.sha }}

  deploy-staging:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - name: Deploy to staging
        run: kubectl set image deployment/myapp myapp=myapp:\${{ github.sha }}

  deploy-production:
    needs: deploy-staging
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy to production
        run: kubectl set image deployment/myapp myapp=myapp:\${{ github.sha }}`,
    },
    {
      type: "heading",
      level: 2,
      content: "Deployment Strategies",
    },
    {
      type: "paragraph",
      content:
        "For production deployments, I use rolling updates with health checks. For risky changes, blue-green or canary deployments provide safer rollout:",
    },
    {
      type: "list",
      items: [
        "Rolling Update - Default, gradual replacement",
        "Blue-Green - Full environment switch, instant rollback",
        "Canary - Route small percentage of traffic to new version",
      ],
    },
  ],

  // ============================================
  // HOMELAB SERIES
  // ============================================
  "why-homelab": [
    {
      type: "heading",
      level: 2,
      content: "The Case for a Homelab",
    },
    {
      type: "paragraph",
      content:
        "A homelab is your personal playground for learning infrastructure, networking, and systems administration. It's where you can break things without consequences (other than annoying your family when the internet goes down).",
    },
    {
      type: "heading",
      level: 2,
      content: "Learning Opportunities",
    },
    {
      type: "paragraph",
      content:
        "The best way to learn is by doing. My homelab has taught me more about networking, storage, and automation than any course or certification.",
    },
    {
      type: "list",
      items: [
        "Networking - VLANs, firewalls, VPNs, DNS",
        "Virtualization - Proxmox, ESXi, containers",
        "Storage - NAS, ZFS, backup strategies",
        "Automation - Ansible, Terraform, scripts",
        "Monitoring - Prometheus, Grafana, alerting",
      ],
    },
    {
      type: "heading",
      level: 2,
      content: "Cost Analysis",
    },
    {
      type: "paragraph",
      content:
        "Running a homelab costs money, but it can also save money by replacing cloud services. Here's a rough breakdown of my setup:",
    },
    {
      type: "list",
      items: [
        "Initial hardware investment: ~$500-1000 (used enterprise gear)",
        "Monthly electricity: ~$20-40",
        "Cloud services replaced: ~$50/month",
        "Learning value: Priceless",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      content:
        "Start small. A Raspberry Pi or old laptop is enough to learn the basics. You can always expand later.",
    },
    {
      type: "heading",
      level: 2,
      content: "My Current Setup",
    },
    {
      type: "paragraph",
      content:
        "After several iterations, my homelab has grown to include dedicated networking, compute, and storage:",
    },
    {
      type: "list",
      items: [
        "pfSense firewall on dedicated mini PC",
        "UniFi access points and switches",
        "Proxmox cluster (3 nodes)",
        "Synology NAS for storage",
        "UPS for power protection",
      ],
    },
  ],

  "network-segmentation-homelab": [
    {
      type: "heading",
      level: 2,
      content: "Why Segment Your Network?",
    },
    {
      type: "paragraph",
      content:
        "A flat network where everything can talk to everything is convenient but insecure. Network segmentation limits the blast radius when something goes wrong - whether that's a compromised IoT device or a misconfigured service.",
    },
    {
      type: "heading",
      level: 2,
      content: "VLAN Design",
    },
    {
      type: "paragraph",
      content:
        "I use VLANs to create isolated network segments. Each VLAN has its own subnet and firewall rules:",
    },
    {
      type: "list",
      items: [
        "VLAN 10 - Management (network gear, IPMI)",
        "VLAN 20 - Trusted (workstations, laptops)",
        "VLAN 30 - Servers (VMs, containers)",
        "VLAN 40 - IoT (smart devices, isolated)",
        "VLAN 50 - Guest (internet only)",
      ],
    },
    {
      type: "code",
      language: "text",
      content: `Network Topology:
┌────────────────────────────────────────────────┐
│                   Internet                      │
└────────────────────┬───────────────────────────┘
                     │
              ┌──────┴──────┐
              │   pfSense   │
              │  (Firewall) │
              └──────┬──────┘
                     │
          ┌──────────┼──────────┐
          │          │          │
    ┌─────┴────┐ ┌───┴───┐ ┌───┴────┐
    │ VLAN 20  │ │VLAN 30│ │VLAN 40 │
    │ Trusted  │ │Servers│ │  IoT   │
    └──────────┘ └───────┘ └────────┘`,
    },
    {
      type: "heading",
      level: 2,
      content: "Firewall Rules",
    },
    {
      type: "paragraph",
      content:
        "The firewall is where network segmentation becomes real. I follow the principle of least privilege - deny by default, allow only what's needed:",
    },
    {
      type: "list",
      items: [
        "IoT can reach the internet but not other VLANs",
        "Servers can be accessed from Trusted VLAN only",
        "Guest VLAN gets internet access, nothing else",
        "Management VLAN is only accessible from specific hosts",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      content:
        "Document your firewall rules. Future you will not remember why that specific port was opened.",
    },
  ],

  // ============================================
  // STANDALONE POSTS
  // ============================================
  "api-rate-limiting-go": [
    {
      type: "heading",
      level: 2,
      content: "Why Rate Limiting?",
    },
    {
      type: "paragraph",
      content:
        "Rate limiting protects your API from abuse, prevents resource exhaustion, and ensures fair usage among clients. Without it, a single misbehaving client can take down your entire service.",
    },
    {
      type: "heading",
      level: 2,
      content: "Token Bucket Algorithm",
    },
    {
      type: "paragraph",
      content:
        "The token bucket is the most common rate limiting algorithm. Tokens are added to a bucket at a fixed rate, and each request consumes a token. When the bucket is empty, requests are rejected.",
    },
    {
      type: "code",
      language: "go",
      content: `package ratelimit

import (
    "sync"
    "time"
)

type TokenBucket struct {
    capacity   int
    tokens     int
    refillRate time.Duration
    mu         sync.Mutex
    lastRefill time.Time
}

func NewTokenBucket(capacity int, refillRate time.Duration) *TokenBucket {
    return &TokenBucket{
        capacity:   capacity,
        tokens:     capacity,
        refillRate: refillRate,
        lastRefill: time.Now(),
    }
}

func (tb *TokenBucket) Allow() bool {
    tb.mu.Lock()
    defer tb.mu.Unlock()

    // Refill tokens based on elapsed time
    now := time.Now()
    elapsed := now.Sub(tb.lastRefill)
    tokensToAdd := int(elapsed / tb.refillRate)

    if tokensToAdd > 0 {
        tb.tokens = min(tb.capacity, tb.tokens+tokensToAdd)
        tb.lastRefill = now
    }

    // Check if request is allowed
    if tb.tokens > 0 {
        tb.tokens--
        return true
    }
    return false
}`,
    },
    {
      type: "heading",
      level: 2,
      content: "Distributed Rate Limiting with Redis",
    },
    {
      type: "paragraph",
      content:
        "For distributed systems, you need centralized rate limiting. Redis is perfect for this - it's fast and supports atomic operations:",
    },
    {
      type: "code",
      language: "go",
      content: `func (r *RedisRateLimiter) Allow(ctx context.Context, key string) (bool, error) {
    script := redis.NewScript(\`
        local tokens = redis.call('GET', KEYS[1])
        if tokens == false then
            tokens = ARGV[1]
        end
        tokens = tonumber(tokens)
        if tokens > 0 then
            redis.call('DECR', KEYS[1])
            redis.call('EXPIRE', KEYS[1], ARGV[2])
            return 1
        end
        return 0
    \`)

    result, err := script.Run(ctx, r.client, []string{key}, r.capacity, r.window).Int()
    if err != nil {
        return false, err
    }
    return result == 1, nil
}`,
    },
    {
      type: "heading",
      level: 2,
      content: "Middleware Implementation",
    },
    {
      type: "paragraph",
      content:
        "Rate limiting is typically implemented as HTTP middleware. Here's how to integrate it with a standard Go HTTP server:",
    },
    {
      type: "code",
      language: "go",
      content: `func RateLimitMiddleware(limiter *RedisRateLimiter) func(http.Handler) http.Handler {
    return func(next http.Handler) http.Handler {
        return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            // Use client IP as rate limit key
            key := "ratelimit:" + getClientIP(r)

            allowed, err := limiter.Allow(r.Context(), key)
            if err != nil {
                http.Error(w, "Internal Server Error", 500)
                return
            }

            if !allowed {
                w.Header().Set("Retry-After", "60")
                http.Error(w, "Rate limit exceeded", 429)
                return
            }

            next.ServeHTTP(w, r)
        })
    }
}`,
    },
  ],

  "postgres-performance-tuning": [
    {
      type: "heading",
      level: 2,
      content: "Start with EXPLAIN ANALYZE",
    },
    {
      type: "paragraph",
      content:
        "Before tuning anything, you need to understand where time is being spent. EXPLAIN ANALYZE is your most important tool:",
    },
    {
      type: "code",
      language: "sql",
      content: `EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id
ORDER BY order_count DESC
LIMIT 10;`,
    },
    {
      type: "paragraph",
      content:
        "Look for sequential scans on large tables, high buffer reads, and nested loops with many iterations. These are usually your performance bottlenecks.",
    },
    {
      type: "heading",
      level: 2,
      content: "Index Strategy",
    },
    {
      type: "paragraph",
      content:
        "Indexes are the most impactful optimization. But more isn't always better - each index slows down writes and uses disk space.",
    },
    {
      type: "list",
      items: [
        "Index columns used in WHERE clauses",
        "Index foreign keys (JOIN performance)",
        "Consider partial indexes for filtered queries",
        "Use INCLUDE for covering indexes",
      ],
    },
    {
      type: "code",
      language: "sql",
      content: `-- Partial index for active users only
CREATE INDEX idx_users_active_email ON users(email)
WHERE status = 'active';

-- Covering index to avoid table lookups
CREATE INDEX idx_orders_user_covering ON orders(user_id)
INCLUDE (total, created_at);`,
    },
    {
      type: "heading",
      level: 2,
      content: "Connection Pooling",
    },
    {
      type: "paragraph",
      content:
        "PostgreSQL creates a new process for each connection. With many concurrent connections, this becomes a bottleneck. Use PgBouncer or similar for connection pooling:",
    },
    {
      type: "code",
      language: "ini",
      content: `[databases]
mydb = host=localhost port=5432 dbname=mydb

[pgbouncer]
listen_port = 6432
listen_addr = *
auth_type = md5
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 20`,
    },
    {
      type: "heading",
      level: 2,
      content: "Configuration Tuning",
    },
    {
      type: "paragraph",
      content:
        "PostgreSQL's default configuration is conservative. For production workloads, these settings usually need adjustment:",
    },
    {
      type: "list",
      items: [
        "shared_buffers - 25% of RAM (up to ~8GB)",
        "work_mem - 256MB-1GB for analytics workloads",
        "effective_cache_size - 75% of RAM",
        "random_page_cost - 1.1-1.5 for SSDs",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      content:
        "Always benchmark configuration changes. What works for OLTP may hurt analytics workloads and vice versa.",
    },
  ],
};
