import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kubernetes Cluster Setup | Portfolio",
  description:
    "Production-ready K8s cluster with GitOps workflow, automated deployments, and comprehensive observability stack.",
};

const technologies = [
  { name: "Kubernetes", category: "Orchestration" },
  { name: "ArgoCD", category: "GitOps" },
  { name: "Helm", category: "Packaging" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Visualization" },
  { name: "Cert-Manager", category: "TLS" },
  { name: "Ingress-NGINX", category: "Ingress" },
  { name: "Longhorn", category: "Storage" },
];

const metrics = [
  { label: "Nodes", value: "X", subtext: "worker nodes" },
  { label: "Pods", value: "XX+", subtext: "running workloads" },
  { label: "Namespaces", value: "X", subtext: "isolated environments" },
  { label: "Deployments", value: "XX", subtext: "managed applications" },
];

export default function KubernetesClusterPage() {
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
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
            Container Orchestration
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Production
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Kubernetes Cluster Setup
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          A production-ready Kubernetes cluster implementing GitOps workflows
          for automated deployments, with comprehensive observability and
          self-healing capabilities.
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
              <div className="text-2xl font-bold text-cyan-400">
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
        <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            {/* PLACEHOLDER: Your story */}
            All application configurations are stored in Git, and ArgoCD
            ensures the cluster state matches the desired state defined in the
            repository. This GitOps approach provides auditability, easy
            rollbacks, and declarative infrastructure management.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The cluster runs a full observability stack with Prometheus for
            metrics, Grafana for visualization, and alerting for proactive
            incident response. Automatic certificate management and ingress
            routing simplify service exposure.
          </p>
        </div>
      </section>

      {/* GitOps Workflow */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          GitOps Workflow
        </h2>

        {/* Diagram Placeholder */}
        <div className="rounded-xl border border-border/50 bg-card/30 p-8 mb-6">
          <div className="flex items-center justify-center h-48 border-2 border-dashed border-border rounded-lg">
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
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
              <p className="mt-2 text-sm text-muted-foreground">
                GitOps workflow diagram
              </p>
              <p className="text-xs text-muted">Coming soon</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border/50 bg-card/30 p-6">
          <h3 className="font-semibold text-foreground mb-3">
            Repository Structure
          </h3>
          <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
              <code>{`# PLACEHOLDER: Your actual structure
k8s-gitops/
├── apps/
│   ├── production/
│   │   ├── app1/
│   │   ├── app2/
│   │   └── kustomization.yaml
│   └── staging/
│       └── ...
├── infrastructure/
│   ├── controllers/
│   │   ├── ingress-nginx/
│   │   └── cert-manager/
│   ├── monitoring/
│   │   ├── prometheus/
│   │   └── grafana/
│   └── storage/
│       └── longhorn/
└── clusters/
    └── homelab/
        ├── apps.yaml
        └── infrastructure.yaml`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Cluster Architecture */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Cluster Architecture
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
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
              Node Configuration
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {/* PLACEHOLDER: Your actual nodes */}
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Control Plane</strong> - X
                  nodes for API server, etcd, scheduler
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Workers</strong> - X nodes
                  for application workloads
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Storage</strong> - X nodes
                  for distributed storage
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
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
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
              </span>
              Namespaces
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">argocd</strong> - GitOps
                  controller and UI
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">monitoring</strong> -
                  Prometheus, Grafana, Alertmanager
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">ingress-nginx</strong> -
                  Ingress controllers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">apps</strong> - Production
                  workloads
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Technical Implementation
        </h2>

        <div className="space-y-6">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              ArgoCD Application
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Applications are defined declaratively with automatic sync and
              self-healing enabled. ArgoCD continuously monitors Git and
              reconciles drift.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# PLACEHOLDER: Your ArgoCD config
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/USERNAME/k8s-gitops
    targetRevision: HEAD
    path: apps/production/my-app
  destination:
    server: https://kubernetes.default.svc
    namespace: app-production
  syncPolicy:
    automated:
      prune: true
      selfHeal: true`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              Ingress with TLS
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Cert-manager automatically provisions and renews Let&apos;s
              Encrypt certificates. Ingress routes traffic based on hostname
              with TLS termination.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# PLACEHOLDER: Your ingress config
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-app
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - app.example.com
      secretName: app-tls
  rules:
    - host: app.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-app
                port:
                  number: 80`}</code>
              </pre>
            </div>
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
            title="GitOps Deployments"
            description="All changes go through Git. ArgoCD syncs automatically, providing audit trail and easy rollbacks to any previous state."
            color="cyan"
          />
          <FeatureCard
            title="Automatic TLS"
            description="Cert-manager provisions Let's Encrypt certificates automatically. No manual certificate management required."
            color="cyan"
          />
          <FeatureCard
            title="Self-Healing"
            description="ArgoCD detects drift from desired state and automatically reconciles. Manual kubectl changes are reverted."
            color="cyan"
          />
          <FeatureCard
            title="Full Observability"
            description="Prometheus metrics, Grafana dashboards, and Alertmanager notifications provide complete cluster visibility."
            color="cyan"
          />
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Challenges & Solutions
        </h2>
        <div className="space-y-4">
          {/* PLACEHOLDER: Your actual challenges */}
          <ChallengeCard
            challenge="Persistent storage across node failures"
            solution="Deployed Longhorn for distributed block storage with automatic replication. Data survives node failures with configurable replica count."
          />
          <ChallengeCard
            challenge="Secret management in GitOps workflow"
            solution="Implemented Sealed Secrets for encrypting secrets in Git. Only the cluster can decrypt them, keeping sensitive data safe in version control."
          />
          <ChallengeCard
            challenge="Zero-downtime deployments"
            solution="Configured proper readiness probes, PodDisruptionBudgets, and rolling update strategies. Ingress drains connections gracefully during updates."
          />
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Lessons Learned
        </h2>
        <div className="rounded-xl border border-border/50 bg-card/30 p-6">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {/* PLACEHOLDER: Your actual lessons */}
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">1.</span>
              <span>
                <strong className="text-foreground">
                  Start with observability
                </strong>{" "}
                - Deploy monitoring before applications. You&apos;ll need it to
                debug the first deployment issues.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">2.</span>
              <span>
                <strong className="text-foreground">
                  GitOps is worth the setup
                </strong>{" "}
                - The initial investment pays off quickly in reliability and
                peace of mind.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">3.</span>
              <span>
                <strong className="text-foreground">
                  Resource limits matter
                </strong>{" "}
                - One runaway pod can destabilize the whole cluster. Set limits
                and requests from day one.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">4.</span>
              <span>
                <strong className="text-foreground">
                  Practice disaster recovery
                </strong>{" "}
                - Regularly test restoring from backups. etcd snapshots saved me
                once already.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Future Improvements */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Future Improvements
        </h2>
        <div className="rounded-xl border border-border/50 bg-card/30 p-6">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {/* PLACEHOLDER: Your roadmap */}
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Add Istio service mesh for advanced traffic management</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Implement Velero for cluster backup and restore</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Add Kyverno for policy enforcement</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Deploy Loki for centralized logging</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Want to discuss this project?
        </h2>
        <p className="text-muted-foreground mb-6">
          I&apos;d love to share more about Kubernetes architecture and GitOps
          workflows.
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
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-500/90 transition-colors"
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
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  const colorClasses =
    color === "cyan"
      ? "bg-cyan-500/10 text-cyan-400"
      : "bg-accent/10 text-accent";

  return (
    <div className="rounded-xl border border-border/50 bg-card/30 p-5">
      <div className="flex items-start gap-4">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colorClasses}`}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
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
