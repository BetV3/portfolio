import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Cloud Infrastructure Pipeline",
    description:
      "Automated infrastructure provisioning with Terraform, featuring multi-region deployment, auto-scaling, and comprehensive monitoring.",
    tags: ["Terraform", "AWS", "CI/CD", "Python"],
    href: "/projects/cloud-infrastructure",
    github: "https://github.com",
    demo: undefined,
  },
  {
    title: "Data Pipeline Platform",
    description:
      "High-throughput data processing system handling 1M+ events/day with real-time analytics and fault-tolerant architecture.",
    tags: ["Apache Kafka", "Spark", "PostgreSQL", "Docker"],
    href: "/projects/data-pipeline",
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Homelab Network Architecture",
    description:
      "Enterprise-grade network segmentation with VLANs, firewall rules, VPN access, and comprehensive monitoring using Grafana.",
    tags: ["Networking", "pfSense", "Grafana", "Docker"],
    href: "/projects/homelab-network",
    github: "https://github.com",
    demo: undefined,
  },
  {
    title: "Kubernetes Cluster Setup",
    description:
      "Production-ready K8s cluster with GitOps workflow, automated deployments, and comprehensive observability stack.",
    tags: ["Kubernetes", "ArgoCD", "Helm", "Prometheus"],
    href: "/projects/kubernetes-cluster",
    github: "https://github.com",
    demo: undefined,
  },
  {
    title: "API Gateway Service",
    description:
      "High-performance API gateway with rate limiting, authentication, request routing, and detailed analytics.",
    tags: ["Go", "Redis", "PostgreSQL", "Docker"],
    href: "/projects/api-gateway",
    github: "https://github.com",
    demo: undefined,
  },
  {
    title: "Log Aggregation System",
    description:
      "Centralized logging solution with ELK stack, custom dashboards, alerting, and long-term storage optimization.",
    tags: ["Elasticsearch", "Logstash", "Kibana", "Filebeat"],
    href: "/projects/log-aggregation",
    github: "https://github.com",
    demo: undefined,
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          A collection of projects showcasing system design, infrastructure
          automation, and backend development. Each project includes
          architecture decisions, implementation details, and lessons learned.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
