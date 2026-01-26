// Blog post and series data

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  series?: string;
  seriesOrder?: number;
  tags: string[];
  featured?: boolean;
}

export interface BlogSeries {
  id: string;
  title: string;
  description: string;
  color: string; // Tailwind color class prefix (e.g., "blue", "emerald", "purple")
}

export const series: BlogSeries[] = [
  {
    id: "kubernetes-production",
    title: "Kubernetes in Production",
    description:
      "A comprehensive guide to building and operating production-ready Kubernetes clusters, from initial setup to advanced GitOps workflows.",
    color: "blue",
  },
  {
    id: "log-aggregation-deep-dive",
    title: "Log Aggregation Deep Dive",
    description:
      "Building a scalable centralized logging solution with the ELK stack, covering architecture, implementation, and operations.",
    color: "yellow",
  },
  {
    id: "devops-best-practices",
    title: "DevOps Best Practices",
    description:
      "Practical patterns and strategies for CI/CD, infrastructure as code, and building reliable deployment pipelines.",
    color: "emerald",
  },
  {
    id: "homelab-journey",
    title: "Homelab Journey",
    description:
      "Documenting the evolution of my homelab - from initial setup to a fully automated, self-hosted infrastructure.",
    color: "purple",
  },
];

export const posts: BlogPost[] = [
  // ============================================
  // KUBERNETES IN PRODUCTION SERIES (5 posts)
  // ============================================
  {
    slug: "kubernetes-cluster-architecture",
    title: "Kubernetes Cluster Architecture: Planning for Production",
    description:
      "How to design a Kubernetes cluster that can handle real workloads. Covering node sizing, control plane HA, networking decisions, and capacity planning.",
    date: "2025-01-15",
    category: "Infrastructure",
    readTime: "12 min read",
    series: "kubernetes-production",
    seriesOrder: 1,
    tags: ["Kubernetes", "Architecture", "Infrastructure"],
    featured: true,
  },
  {
    slug: "kubernetes-gitops-argocd",
    title: "GitOps with ArgoCD: Declarative Kubernetes Deployments",
    description:
      "Implementing GitOps workflows with ArgoCD for automated, auditable, and rollback-friendly deployments to Kubernetes.",
    date: "2025-01-22",
    category: "Infrastructure",
    readTime: "15 min read",
    series: "kubernetes-production",
    seriesOrder: 2,
    tags: ["Kubernetes", "GitOps", "ArgoCD", "CI/CD"],
  },
  {
    slug: "kubernetes-observability-stack",
    title: "Building a Kubernetes Observability Stack",
    description:
      "Setting up Prometheus, Grafana, and Loki for comprehensive monitoring, alerting, and log aggregation in Kubernetes.",
    date: "2025-01-29",
    category: "Observability",
    readTime: "14 min read",
    series: "kubernetes-production",
    seriesOrder: 3,
    tags: ["Kubernetes", "Prometheus", "Grafana", "Monitoring"],
  },
  {
    slug: "kubernetes-network-policies",
    title: "Kubernetes Network Policies and Service Mesh",
    description:
      "Securing pod-to-pod communication with Network Policies and exploring service mesh options for traffic management.",
    date: "2025-02-05",
    category: "Security",
    readTime: "11 min read",
    series: "kubernetes-production",
    seriesOrder: 4,
    tags: ["Kubernetes", "Networking", "Security", "Cilium"],
  },
  {
    slug: "kubernetes-secrets-security",
    title: "Kubernetes Secrets Management and Security Hardening",
    description:
      "Best practices for managing secrets in Kubernetes, from sealed secrets to external secret operators, plus cluster hardening tips.",
    date: "2025-02-12",
    category: "Security",
    readTime: "13 min read",
    series: "kubernetes-production",
    seriesOrder: 5,
    tags: ["Kubernetes", "Security", "Secrets", "RBAC"],
  },

  // ============================================
  // LOG AGGREGATION DEEP DIVE SERIES (4 posts)
  // ============================================
  {
    slug: "log-aggregation-architecture",
    title: "Designing a Scalable Log Aggregation Architecture",
    description:
      "Architecture decisions for building a logging system that can handle millions of events per day while remaining queryable and cost-effective.",
    date: "2024-12-15",
    category: "Observability",
    readTime: "10 min read",
    series: "log-aggregation-deep-dive",
    seriesOrder: 1,
    tags: ["Logging", "Architecture", "Elasticsearch"],
    featured: true,
  },
  {
    slug: "elk-stack-deployment",
    title: "Deploying the ELK Stack: Elasticsearch, Logstash, Kibana",
    description:
      "Step-by-step guide to deploying a production ELK stack with proper clustering, security, and performance tuning.",
    date: "2024-12-22",
    category: "Observability",
    readTime: "16 min read",
    series: "log-aggregation-deep-dive",
    seriesOrder: 2,
    tags: ["Elasticsearch", "Logstash", "Kibana", "ELK"],
  },
  {
    slug: "log-collection-fluentd",
    title: "Log Collection at Scale with Fluentd and Fluent Bit",
    description:
      "Comparing log shippers and implementing efficient log collection across containers, VMs, and network devices.",
    date: "2024-12-29",
    category: "Observability",
    readTime: "12 min read",
    series: "log-aggregation-deep-dive",
    seriesOrder: 3,
    tags: ["Fluentd", "Fluent Bit", "Logging", "Docker"],
  },
  {
    slug: "kibana-dashboards-alerting",
    title: "Building Kibana Dashboards and Alerting Rules",
    description:
      "Creating actionable dashboards and setting up intelligent alerts that reduce noise and catch real issues.",
    date: "2025-01-05",
    category: "Observability",
    readTime: "9 min read",
    series: "log-aggregation-deep-dive",
    seriesOrder: 4,
    tags: ["Kibana", "Dashboards", "Alerting", "Visualization"],
  },

  // ============================================
  // DEVOPS BEST PRACTICES SERIES (4 posts)
  // ============================================
  {
    slug: "terraform-patterns-scale",
    title: "Infrastructure as Code: Terraform Patterns That Scale",
    description:
      "Organizing Terraform code for real-world projects. Modules, workspaces, state management, and team collaboration patterns.",
    date: "2024-11-20",
    category: "DevOps",
    readTime: "14 min read",
    series: "devops-best-practices",
    seriesOrder: 1,
    tags: ["Terraform", "IaC", "AWS", "DevOps"],
    featured: true,
  },
  {
    slug: "cicd-pipeline-design",
    title: "CI/CD Pipeline Design for Modern Applications",
    description:
      "Building robust CI/CD pipelines with proper testing stages, security scanning, and deployment strategies.",
    date: "2024-12-01",
    category: "DevOps",
    readTime: "13 min read",
    series: "devops-best-practices",
    seriesOrder: 2,
    tags: ["CI/CD", "GitHub Actions", "Testing", "Automation"],
  },
  {
    slug: "container-security-practices",
    title: "Container Security Best Practices",
    description:
      "Securing container images and runtime environments. From Dockerfile best practices to runtime security monitoring.",
    date: "2024-12-08",
    category: "Security",
    readTime: "11 min read",
    series: "devops-best-practices",
    seriesOrder: 3,
    tags: ["Docker", "Security", "Containers", "DevSecOps"],
  },
  {
    slug: "monitoring-alerting-strategies",
    title: "Monitoring and Alerting Strategies That Work",
    description:
      "Building an observability culture: what to monitor, how to alert without fatigue, and creating actionable runbooks.",
    date: "2024-12-15",
    category: "Observability",
    readTime: "10 min read",
    series: "devops-best-practices",
    seriesOrder: 4,
    tags: ["Monitoring", "Alerting", "SRE", "Observability"],
  },

  // ============================================
  // HOMELAB JOURNEY SERIES (4 posts)
  // ============================================
  {
    slug: "why-homelab",
    title: "Why I Built a Homelab (And You Should Too)",
    description:
      "The case for running your own infrastructure at home. Learning opportunities, cost analysis, and getting started.",
    date: "2024-10-15",
    category: "Homelab",
    readTime: "8 min read",
    series: "homelab-journey",
    seriesOrder: 1,
    tags: ["Homelab", "Self-Hosting", "Learning"],
  },
  {
    slug: "network-segmentation-homelab",
    title: "Network Segmentation in the Homelab",
    description:
      "Implementing VLANs, firewall rules, and zero-trust principles to secure a home network with multiple trust zones.",
    date: "2024-10-28",
    category: "Networking",
    readTime: "11 min read",
    series: "homelab-journey",
    seriesOrder: 2,
    tags: ["Networking", "VLANs", "pfSense", "Security"],
  },
  {
    slug: "self-hosting-essentials",
    title: "Self-Hosting Essential Services",
    description:
      "Running your own DNS, reverse proxy, password manager, and more. What to self-host and what to leave in the cloud.",
    date: "2024-11-10",
    category: "Homelab",
    readTime: "12 min read",
    series: "homelab-journey",
    seriesOrder: 3,
    tags: ["Self-Hosting", "Docker", "Homelab", "Privacy"],
  },
  {
    slug: "ansible-automation-homelab",
    title: "Automating Everything with Ansible",
    description:
      "Using Ansible to manage homelab infrastructure: from initial provisioning to ongoing configuration management.",
    date: "2024-11-25",
    category: "Automation",
    readTime: "13 min read",
    series: "homelab-journey",
    seriesOrder: 4,
    tags: ["Ansible", "Automation", "IaC", "Homelab"],
  },

  // ============================================
  // STANDALONE POSTS
  // ============================================
  {
    slug: "api-rate-limiting-go",
    title: "API Rate Limiting Patterns in Go",
    description:
      "Implementing token bucket, sliding window, and distributed rate limiting in Go with Redis backing.",
    date: "2024-11-05",
    category: "Backend",
    readTime: "15 min read",
    tags: ["Go", "API", "Rate Limiting", "Redis"],
  },
  {
    slug: "data-pipeline-kafka-spark",
    title: "Building Data Pipelines with Kafka and Spark",
    description:
      "Designing and implementing real-time data pipelines for processing streaming events at scale.",
    date: "2024-10-20",
    category: "Data Engineering",
    readTime: "16 min read",
    tags: ["Kafka", "Spark", "Data Engineering", "Streaming"],
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: Practical Strategies",
    description:
      "Reducing AWS bills without sacrificing reliability. Reserved instances, spot fleets, rightsizing, and architectural changes.",
    date: "2024-09-28",
    category: "Cloud",
    readTime: "12 min read",
    tags: ["AWS", "Cost Optimization", "Cloud", "FinOps"],
  },
  {
    slug: "postgres-performance-tuning",
    title: "PostgreSQL Performance Tuning in Production",
    description:
      "Real-world PostgreSQL optimization: query analysis, index strategies, connection pooling, and configuration tuning.",
    date: "2024-09-15",
    category: "Database",
    readTime: "14 min read",
    tags: ["PostgreSQL", "Database", "Performance", "SQL"],
  },
];

// Helper functions
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getSeriesById(id: string): BlogSeries | undefined {
  return series.find((s) => s.id === id);
}

export function getPostsBySeries(seriesId: string): BlogPost[] {
  return posts
    .filter((post) => post.series === seriesId)
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));
}

export function getStandalonePosts(): BlogPost[] {
  return posts.filter((post) => !post.series);
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter((post) => post.featured);
}

export function getAllPostsSorted(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
