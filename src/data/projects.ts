// Project data.
//
// RULE FOR THIS FILE: every metric here must be reproducible from the repo,
// a live service, or a measurement I can re-run. If a number cannot be
// backed up in an interview, it does not belong here. Projects that are
// still in progress say so via `status` rather than borrowing future numbers.

export type ProjectStatus = "live" | "complete" | "in-progress" | "design";

export interface ProjectMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: ProjectStatus;
  accent: string; // tailwind color stem, e.g. "emerald"
  github?: string;
  demo?: string;
  tech: { name: string; category: string }[];
  metrics?: ProjectMetric[];
  sections: ProjectSection[];
  featured?: boolean;
  order: number;
}

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live in production",
  complete: "Complete",
  "in-progress": "In progress",
  design: "Design phase",
};

export const projects: Project[] = [
  {
    slug: "checkpulse",
    title: "CheckPulse",
    tagline:
      "Multi-region uptime, DNS, and SSL monitoring for agencies. Deployed, public, and handling real traffic.",
    category: "SaaS / Platform",
    status: "live",
    accent: "emerald",
    github: "https://github.com/BetV3/UptimeBot",
    demo: "https://checkpulse.dev",
    order: 1,
    featured: true,
    tech: [
      { name: "FastAPI", category: "API" },
      { name: "PostgreSQL", category: "Storage" },
      { name: "Redis", category: "Cache / Broker" },
      { name: "Celery", category: "Scheduling" },
      { name: "Docker Compose", category: "Deploy" },
      { name: "Cloudflare Tunnel", category: "Ingress" },
      { name: "Stripe", category: "Billing" },
      { name: "Jinja2 + Tailwind", category: "Dashboard" },
    ],
    metrics: [
      { label: "Regions", value: "3", subtext: "US / EU / Asia probes" },
      { label: "Consensus", value: "2+", subtext: "regions must agree to alert" },
      { label: "Alert channels", value: "5", subtext: "Slack, Discord, Telegram, email, webhook" },
      { label: "Containers", value: "7", subtext: "on a single 1.9 GB VPS" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "CheckPulse monitors uptime, DNS resolution, and SSL certificate health for agencies that are contractually on the hook for a portfolio of client websites. Each client gets a brandable public status page; alerts fan out to Slack, Discord, Telegram, email, or a webhook.",
          "It is deployed and publicly reachable at checkpulse.dev, running as seven containers behind a Cloudflare tunnel with no inbound ports open on the host.",
        ],
      },
      {
        heading: "The design decision I care about: consensus before alerting",
        body: [
          "Single-probe monitors cry wolf. A blip between one probe and one target produces a 3am page for an outage that never happened, and after enough false alarms people stop reading the alerts — which is worse than having no monitoring at all.",
          "CheckPulse runs probes from three regions and only transitions a monitor to DOWN when at least two regions independently agree. That trades a small amount of detection latency for alerts that are worth waking up for. The check workers are Celery tasks; region agreement is resolved in the incident detector rather than in the probe, so adding a fourth region is a config change rather than a rewrite.",
        ],
      },
      {
        heading: "Running seven containers in 1.9 GB",
        body: [
          "The whole stack lives on one small VPS: API, worker pool, beat scheduler, Postgres, Redis, the tunnel connector, and the dashboard. Memory is the binding constraint, not CPU.",
          "That constraint drove real choices — Postgres tuned down from its defaults, worker concurrency capped so Celery prefetch cannot balloon resident memory, and no per-service observability sidecars. It is a useful exercise in sizing a system for the box you actually have instead of the box you would like to have.",
        ],
      },
      {
        heading: "Incident: the signup form became someone else's email validator",
        body: [
          "Between April and July 2026, roughly 1,191 accounts were created by a bot walking an alphabetical list of corporate email addresses. It was not trying to use the product. It was using my verification email as an oracle: submit an address, see whether the mail bounces, learn whether the mailbox is real.",
          "The damage was not CPU or storage, it was sender reputation — three months of unsolicited verification mail went out from the transactional domain, with my DKIM signature on it.",
          "The fix was a Cloudflare Turnstile gate on every endpoint that can trigger an outbound email, and a split between the transactional sending domain and any other mail. The fake accounts are quarantined rather than deleted so the abuse pattern stays auditable.",
          "The general lesson: any unauthenticated endpoint that sends mail to an attacker-supplied address is an email validation service you are operating for free, and you will not notice from your own dashboards — the traffic looks like growth.",
        ],
      },
      {
        heading: "Honest status",
        body: [
          "Three real user accounts, zero paying customers. Stripe is wired up with Free / $12 / $49 tiers and one checkout was started and abandoned.",
          "I am listing it because the engineering is real and deployed, not because it has traction. It does not.",
        ],
      },
    ],
  },
  {
    slug: "distributed-log-analyzer",
    title: "Distributed Log Analyzer",
    tagline:
      "Go master-worker system that parses a 3.3 GB, 10M-line access log. 36s single worker, 6s at 8-11 workers.",
    category: "Distributed Systems",
    status: "complete",
    accent: "blue",
    github: "https://github.com/BetV3/Distributed-Multithreaded-Log-Analyzer",
    order: 2,
    featured: true,
    tech: [
      { name: "Go", category: "Language" },
      { name: "gRPC", category: "Coordination" },
      { name: "Goroutines / channels", category: "Concurrency" },
      { name: "Docker", category: "Packaging" },
    ],
    metrics: [
      { label: "Input size", value: "3.3 GB", subtext: "single access log" },
      { label: "Lines", value: "10M+", subtext: "parsed per run" },
      { label: "Single worker", value: "36 s", subtext: "measured baseline" },
      { label: "8-11 workers", value: "6 s", subtext: "~6x speedup" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "A master process splits a large web server access log into ranges and hands them to worker nodes over gRPC. Workers parse their range and return HTTP status code counts, which the master merges.",
          "The numbers above are measured on a real 3.3 GB / 10 million line log, not projected: 36 seconds with one worker, 6 seconds with 8 to 11 workers.",
        ],
      },
      {
        heading: "Where the speedup stops",
        body: [
          "Scaling is close to linear up to roughly 8 workers and then flattens. Past that point the job is no longer parse-bound — it is bound by reading the file and by the coordination chatter of handing out and collecting ranges.",
          "The interesting part of this project was not writing the parser, it was finding that ceiling with profiling and buffer tuning instead of guessing at it. Adding workers past the knee makes the run slower, which is the kind of result that only shows up if you actually measure.",
        ],
      },
    ],
  },
  {
    slug: "api-gateway",
    title: "API Gateway",
    tagline:
      "A Go gateway written from scratch: JWT auth with RBAC, layered rate limiting, round-robin load balancing, Prometheus metrics.",
    category: "Backend Services",
    status: "complete",
    accent: "orange",
    github: "https://github.com/BetV3/apigateway",
    order: 3,
    featured: true,
    tech: [
      { name: "Go", category: "Language" },
      { name: "Redis", category: "Distributed rate limiting" },
      { name: "JWT", category: "Auth" },
      { name: "Prometheus", category: "Metrics" },
      { name: "Docker", category: "Containers" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "A single entry point in front of multiple backend services. Requests pass through an explicit middleware chain — request ID, structured logging, authentication, rate limiting — before being routed to a backend by path prefix and balanced round-robin across healthy instances.",
          "Written from scratch in Go rather than configured on top of an existing proxy, because the point was to understand what a gateway actually has to do.",
        ],
      },
      {
        heading: "Two-layer rate limiting",
        body: [
          "Rate limiting runs in-memory first and falls back to Redis for limits that must hold across gateway replicas. The in-memory layer absorbs the common case without a network hop; Redis is only consulted when a limit is genuinely shared.",
          "The trade-off is deliberate and worth stating plainly: the in-memory layer means a burst can slightly exceed a global limit during the window before replicas reconcile. For protecting a backend from overload that is an acceptable error; for billing or quota enforcement it would not be.",
        ],
      },
      {
        heading: "No performance numbers here on purpose",
        body: [
          "I have not run a load test against this gateway on hardware I would be willing to quote, so there are no requests-per-second or p99 figures on this page. When I benchmark it properly, the numbers will go here with the method next to them.",
        ],
      },
    ],
  },
  {
    slug: "talos-platform",
    title: "Talos Kubernetes Platform",
    tagline:
      "Three Talos clusters across a 7-host vSphere estate. Design freeze, IP plan, and failure tests written before any VM exists.",
    category: "Infrastructure",
    status: "design",
    accent: "cyan",
    github: "https://github.com/BetV3/talos-platform",
    order: 4,
    tech: [
      { name: "Talos Linux", category: "OS" },
      { name: "Kubernetes", category: "Orchestration" },
      { name: "vSphere / ESXi", category: "Virtualization" },
      { name: "OpenTofu", category: "IaC" },
      { name: "govc", category: "Tooling" },
    ],
    metrics: [
      { label: "Clusters", value: "3", subtext: "mgmt / east / west" },
      { label: "Topology", value: "3+3", subtext: "control plane + workers each" },
      { label: "ESXi hosts", value: "7", subtext: "cluster Compute-01" },
      { label: "VLANs", value: "110/120/130", subtext: "one per cluster" },
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "Three immutable Talos Kubernetes clusters — a management cluster and two workload clusters — planned across my vSphere estate, each on its own VLAN with its own API VIP.",
          "This project is in its design phase and the page says so. What exists today is the part most homelab writeups skip: an architecture doc with an explicit failure model and stated non-goals, a full IP plan covering VLANs, pod and service CIDRs and static addresses, a host-to-VM placement map with DRS rules, a bootstrap runbook, a failure-test catalogue, and a secrets policy that keeps generated Talos configs and secrets out of git.",
        ],
      },
      {
        heading: "Why design-first",
        body: [
          "Talos has no SSH and no shell. You cannot fix a node by logging into it, which means the config has to be right before the machine boots. That property turns 'write the IP plan first' from good hygiene into a hard requirement, and it is the main reason I picked Talos for this.",
          "Deciding the failure model on paper — what happens when a host dies, when a VLAN drops, when etcd loses quorum — is also considerably cheaper than discovering it with 18 VMs already running.",
        ],
      },
    ],
  },
  {
    slug: "data-pipeline",
    title: "Data Pipeline Platform",
    tagline:
      "Kafka-based event pipeline built in explicit tiers. Producer, consumer, and metrics are working; the reliability tiers are not built yet.",
    category: "Data Engineering",
    status: "in-progress",
    accent: "purple",
    github: "https://github.com/BetV3/data-pipeline",
    order: 5,
    tech: [
      { name: "Apache Kafka", category: "Streaming" },
      { name: "Python", category: "ETL" },
      { name: "PostgreSQL", category: "Storage" },
      { name: "Docker Compose", category: "Local stack" },
      { name: "Prometheus", category: "Metrics" },
    ],
    sections: [
      {
        heading: "Where it actually is",
        body: [
          "The project is structured as four tiers, and I am partway through the second. T0 (local stack plus an end-to-end tracer-bullet flow) works. T1 adds a dead letter queue, schema evolution, backpressure handling, and basic observability — the producer and consumer with metrics are committed, the rest is in progress.",
          "T2 (multi-source ingestion, backfills, hot/cold storage, orchestration) and T3 (reliability drills, SLOs, scale tests, a capacity model) are planned and not started.",
        ],
      },
      {
        heading: "Why the tiers are public",
        body: [
          "It would be easy to describe this as a system 'handling millions of events per day'. It is not doing that, and I would rather the page match the repository.",
          "The tier structure is the honest version and I think it is also the more useful one: it states what reliability work is done, what is next, and what 'finished' means. Throughput numbers go on this page when T3 scale tests produce them.",
        ],
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure Pipeline",
    tagline:
      "Terraform modules for provisioning AWS environments, wired to a CI deployment workflow.",
    category: "Infrastructure",
    status: "in-progress",
    accent: "amber",
    github: "https://github.com/BetV3/cloud-infrastructure-pipeline",
    order: 6,
    tech: [
      { name: "Terraform", category: "IaC" },
      { name: "AWS", category: "Cloud" },
      { name: "GitHub Actions", category: "CI/CD" },
      { name: "Python", category: "Tooling" },
    ],
    sections: [
      {
        heading: "What exists",
        body: [
          "Terraform configuration for provisioning AWS environments reproducibly, with a CI workflow that plans and applies changes rather than relying on anyone running Terraform from a laptop.",
          "This is a working but early module set, not a multi-region auto-scaling platform. It is listed at its real size.",
        ],
      },
    ],
  },
  {
    slug: "homelab",
    title: "Homelab Infrastructure",
    tagline:
      "A 7-host vSphere cluster that runs everything else on this page, managed through the vCenter API rather than the web UI.",
    category: "Infrastructure",
    status: "live",
    accent: "pink",
    order: 7,
    tech: [
      { name: "VMware vSphere 8", category: "Hypervisor" },
      { name: "vCenter", category: "Management" },
      { name: "govc", category: "API tooling" },
      { name: "Cloudflare Tunnel", category: "Remote access" },
      { name: "Linux", category: "Guests" },
    ],
    metrics: [
      { label: "ESXi hosts", value: "7", subtext: "cluster Compute-01" },
      { label: "CPU cores", value: "132", subtext: "aggregate physical" },
      { label: "Memory", value: "~607 GB", subtext: "aggregate" },
      { label: "VMs", value: "32", subtext: "at time of writing" },
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "A seven-host ESXi cluster under vCenter 8, totalling 132 physical cores and roughly 607 GB of RAM, currently running 32 VMs. These figures were read from the vCenter API when this page was written, not estimated.",
          "It is the substrate for the Talos platform, the data pipeline, and the build and automation hosts behind my other projects.",
        ],
      },
      {
        heading: "Managed through the API, with a scoped service account",
        body: [
          "Day-to-day operations go through the vCenter API rather than the web client. Automation authenticates as a dedicated service account bound to a custom role, and its mutating permissions are scoped to a single VM folder — so an automation bug can damage a sandbox, not the estate.",
          "Least privilege is easy to endorse and slightly annoying to implement, which is exactly why it is worth doing on your own infrastructure first. Getting the role definition wrong at home costs an afternoon.",
        ],
      },
      {
        heading: "Remote access with no inbound ports",
        body: [
          "Nothing in the lab is exposed by port forwarding. External access runs over Cloudflare tunnels, so the lab makes outbound connections and there is no inbound attack surface on my home IP.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsSorted(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getProjectsSorted().filter((p) => p.featured);
}
