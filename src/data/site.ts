// Site-wide recruiter facts and the at-a-glance stats strip.
//
// RULE FOR THIS FILE: same as projects.ts. Every number carries the source it
// was read from and the date. A number without a source does not go in the
// strip. The facts sheet these were written from lives in the owner's vault
// (portfolio-facts-2026-10.md); update both when a figure changes.

export const recruiterFacts = {
  name: "Elvis Ramirez",
  roles: "Backend, platform, infrastructure, SRE and DevOps roles",
  location: "Plano, TX",
  relocation: "Open to relocating anywhere in the US, including hybrid and on-site",
  authorization: "US work authorization, no sponsorship needed",
  availability: "Available to start immediately",
  education: "BS Computer Science, UT Dallas, August 2025",
  email: "elvisramirez999@gmail.com",
  github: "https://github.com/BetV3",
  linkedin: "https://www.linkedin.com/in/elvis-ramirez-7223b417a/",
  resumePdf: "/resume.pdf",
};

export interface SiteStat {
  value: string;
  label: string;
  /** How and when it was read. Rendered under the number. */
  source: string;
  /** The project page that proves it. */
  href: string;
}

export const siteStats: SiteStat[] = [
  {
    value: "7 hosts / 40 VMs",
    label: "vSphere estate I administer",
    source: "vCenter API, 7 Oct 2026",
    href: "/projects/homelab",
  },
  {
    value: "3 clusters, 15 nodes",
    label: "Kubernetes environments (dev, staging, prod)",
    source: "kubectl get nodes, 7 Oct 2026",
    href: "/projects/k8s-three-environments",
  },
  {
    value: "109",
    label: "monitored signals in a watchdog I wrote",
    source: "watchdog.py --list, 7 Oct 2026",
    href: "/projects/fleet-watchdog",
  },
  {
    value: "77",
    label: "scrape targets, 23.6M rows/hr ingested",
    source: "vmagent targets API, 7 Oct 2026",
    href: "/projects/observability-stack",
  },
  {
    value: "11",
    label: "incident write-ups with the root cause",
    source: "3 blog posts plus 8 project pages, each with a root-caused incident section",
    href: "/blog",
  },
  {
    value: "9,849",
    label: "rows read back from a restore-tested backup",
    source: "scripted restore, 18 Sep 2026",
    href: "/projects/verified-backups",
  },
];

export interface SkillEvidence {
  skill: string;
  /** Project slugs (or blog paths) that demonstrate it. */
  proof: { label: string; href: string }[];
}

// Each skill links to the page that demonstrates it. A skill nothing on the
// site proves is not listed here.
export const skillsToEvidence: SkillEvidence[] = [
  {
    skill: "Kubernetes",
    proof: [
      { label: "Three-environment RKE2 platform", href: "/projects/k8s-three-environments" },
      { label: "CI runners on Kubernetes", href: "/projects/dev-platform" },
    ],
  },
  {
    skill: "Linux",
    proof: [
      { label: "HA DNS pair (netplan outage root-caused)", href: "/projects/ha-dns" },
      { label: "Internal PKI with systemd timers", href: "/projects/internal-pki" },
    ],
  },
  {
    skill: "Python",
    proof: [
      { label: "Fleet watchdog", href: "/projects/fleet-watchdog" },
      { label: "Alert-to-runbook responder", href: "/projects/sre-agent" },
      { label: "CheckPulse (FastAPI)", href: "/projects/checkpulse" },
    ],
  },
  {
    skill: "Go",
    proof: [
      { label: "Distributed log analyzer", href: "/projects/distributed-log-analyzer" },
      { label: "API gateway", href: "/projects/api-gateway" },
    ],
  },
  {
    skill: "PostgreSQL",
    proof: [
      { label: "Durable task queue (SKIP LOCKED, leases)", href: "/projects/task-queue" },
      { label: "Restore-tested backups", href: "/projects/verified-backups" },
    ],
  },
  {
    skill: "Prometheus / VictoriaMetrics / Grafana",
    proof: [
      { label: "Fleet observability", href: "/projects/observability-stack" },
      { label: "API gateway metrics", href: "/projects/api-gateway" },
    ],
  },
  {
    skill: "Incident response and root cause analysis",
    proof: [
      { label: "The outage I caused (DNS)", href: "/projects/ha-dns" },
      { label: "The runbook that never worked", href: "/blog/runbook-that-never-worked" },
      { label: "Signup abuse on CheckPulse", href: "/projects/checkpulse" },
    ],
  },
  {
    skill: "Alerting and on-call design",
    proof: [
      { label: "Fleet watchdog (output signals, dedupe, dead man's switch)", href: "/projects/fleet-watchdog" },
      { label: "Splitting a flapping signal by owner", href: "/projects/task-queue" },
    ],
  },
  {
    skill: "CI/CD",
    proof: [
      { label: "Self-hosted forge and CI, red-run proven", href: "/projects/dev-platform" },
      { label: "Terraform pipeline (GitHub Actions)", href: "/projects/cloud-infrastructure" },
    ],
  },
  {
    skill: "Terraform",
    proof: [
      { label: "Cloud infrastructure pipeline", href: "/projects/cloud-infrastructure" },
    ],
  },
  {
    skill: "DNS and networking",
    proof: [
      { label: "HA DNS pair with keepalived", href: "/projects/ha-dns" },
      { label: "Public edge with zero inbound ports", href: "/projects/public-edge" },
    ],
  },
  {
    skill: "Backup and restore",
    proof: [
      { label: "Restore-tested backups", href: "/projects/verified-backups" },
      { label: "The backup that restored nothing", href: "/blog/backup-that-restored-nothing" },
    ],
  },
  {
    skill: "TLS / PKI",
    proof: [{ label: "Internal CA with automated renewal", href: "/projects/internal-pki" }],
  },
  {
    skill: "Cloudflare",
    proof: [
      { label: "Public edge (tunnels)", href: "/projects/public-edge" },
      { label: "CheckPulse (tunnel, Turnstile)", href: "/projects/checkpulse" },
    ],
  },
  {
    skill: "Docker",
    proof: [
      { label: "CheckPulse (7 containers on 1.9 GB)", href: "/projects/checkpulse" },
      { label: "Observability stack (compose)", href: "/projects/observability-stack" },
    ],
  },
  {
    skill: "VMware vSphere",
    proof: [{ label: "Homelab infrastructure", href: "/projects/homelab" }],
  },
  {
    skill: "AWS",
    proof: [{ label: "Cloud infrastructure pipeline (Terraform)", href: "/projects/cloud-infrastructure" }],
  },
  {
    skill: "Kafka",
    proof: [{ label: "Data pipeline (in progress)", href: "/projects/data-pipeline" }],
  },
];
