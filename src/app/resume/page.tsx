import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Resume
          </h1>
          <p className="mt-2 text-muted-foreground">
            Backend, platform and SRE engineer. Plano, TX; open to relocating
            anywhere in the US. US work authorization, no sponsorship needed.
            Available immediately.
          </p>
        </div>
        <a
          href="/resume.pdf"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-muted"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download PDF
        </a>
      </div>

      {/* Summary */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Summary
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Backend and platform engineer moving toward SRE, CS graduate from UT
          Dallas (August 2025). I build services in Python and Go and run them
          myself: a monitoring SaaS in production on a VPS, and a seven-host
          vSphere cluster at home with three Kubernetes environments, an
          observability stack, an internal CA and a fleet watchdog I wrote.
          Comfortable owning a system from the request path down to the
          hypervisor it lands on, and writing up the incidents when it breaks.
          Everything below is project work, not employment; each figure is
          sourced on the linked project page.
        </p>
      </section>

      {/* Engineering Projects */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Engineering Projects
        </h2>
        <div className="space-y-8">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Reliability and Platform Work on a Self-Operated Fleet
                </h3>
                <p className="text-accent">
                  Solo. Kubernetes, VictoriaMetrics, Grafana, step-ca, Forgejo, PostgreSQL, Python
                </p>
              </div>
              <p className="text-sm text-muted-foreground">Sep 2026 to present</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                <span>
                  Built and operate three RKE2 Kubernetes clusters (15 nodes) on
                vSphere with kube-vip control-plane VIPs, provisioned from the
                vCenter API with cloud-init; proved VIP failover by forcing a
                leadership transfer (about 3 s) after the first test gave a false
                pass. (<Link className="underline decoration-dotted" href="/projects/k8s-three-environments">details</Link>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                <span>
                  Wrote a fleet watchdog (Python, system cron, separate host) after
                a scheduled job failed 970 consecutive times with one alert;
                now 111 signals with stable IDs, dedupe, recovery messages and a
                dead man&apos;s switch, each red-run before being trusted.
                (<Link className="underline decoration-dotted" href="/projects/fleet-watchdog">details</Link>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                <span>
                  Stood up VictoriaMetrics, vmagent and Grafana over 77 scrape
                targets (23.6M rows/hr); verified all 30 dashboard panels by
                executing their queries, exposed etcd fsync latency with a
                rolling control-plane restart, and proved the remote-write queue
                by stopping the database for 100 s with zero sample loss.
                (<Link className="underline decoration-dotted" href="/projects/observability-stack">details</Link>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                <span>
                  Ran an internal step-ca CA issuing 24-hour certificates to four
                services with password-free automated renewal; found and fixed a
                renewer that had failed silently for 17 h (6h52m from expiry) and
                a restart hook that bounced a service 67 times a day.
                (<Link className="underline decoration-dotted" href="/projects/internal-pki">details</Link>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                <span>
                  Built a PostgreSQL task queue (SKIP LOCKED claims, leases with
                heartbeats, approval gates, capped concurrency) for long-running
                automated work; found a reaper bug where a NULL lease made stuck
                tasks invisible and fixed it with tests in both directions.
                (<Link className="underline decoration-dotted" href="/projects/task-queue">details</Link>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                <span>
                  Set up nightly restic backups to separate hardware for five
                databases that previously had none, with a scripted restore that
                read back 9,849 rows; split a flapping alert that was red in 369
                of 816 runs into an incident signal and a human nudge.
                (<Link className="underline decoration-dotted" href="/projects/verified-backups">details</Link>)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                <span>
                  Deployed a self-hosted forge with server-side branch protection
                and six parallel CI slots on Kubernetes, validated green, red and
                green again before trusting it; exposed a production cluster
                through a Cloudflare tunnel with zero inbound ports.
                (<Link className="underline decoration-dotted" href="/projects/dev-platform">details</Link>)
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  CheckPulse - Monitoring SaaS
                </h3>
                <p className="text-accent">
                  Solo build, deployed at checkpulse.dev
                </p>
              </div>
              <p className="text-sm text-muted-foreground">Mar 2026 to present</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Built and deployed a multi-tenant uptime, DNS, and SSL
                monitoring service in FastAPI, PostgreSQL, Redis, and Celery;
                seven containers on a single 1.9 GB VPS behind a Cloudflare
                tunnel with no inbound ports exposed.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Designed multi-region check consensus requiring two of three
                regions to agree before declaring an outage, trading small
                detection latency for a large reduction in false alerts.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Detected and shut down abuse of the signup endpoint as a
                third-party email-validation oracle (~1,191 bot accounts over
                three months); added a CAPTCHA gate on all mail-triggering
                endpoints and split transactional from outbound sending
                domains to protect sender reputation.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Integrated Stripe billing across three subscription tiers.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Distributed Log Analyzer
                </h3>
                <p className="text-accent">Go, gRPC</p>
              </div>
              <p className="text-sm text-muted-foreground">Jan 2025</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Built a master-worker system in Go that parses a 3.3 GB,
                10M-line access log by distributing byte ranges to workers over
                gRPC and merging their results.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Cut runtime from 36 seconds on a single worker to 6 seconds
                across 8-11 workers, and used profiling to identify the point
                where I/O and coordination overhead end the near-linear
                scaling.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  API Gateway
                </h3>
                <p className="text-accent">Go, Redis</p>
              </div>
              <p className="text-sm text-muted-foreground">Feb 2026</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Wrote an API gateway from scratch in Go with an explicit
                middleware chain: request IDs, structured logging, JWT
                authentication with role-based access control, and round-robin
                load balancing across backends.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Implemented two-layer rate limiting, in-memory for the common
                path and Redis-backed for limits shared across replicas, and
                exposed Prometheus metrics for request rate and latency.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Homelab Infrastructure
                </h3>
                <p className="text-accent">VMware vSphere 8, Linux</p>
              </div>
              <p className="text-sm text-muted-foreground">Nov 2024 to present</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Administer a seven-host ESXi cluster under vCenter 8 (132
                cores, 607 GB RAM, 40 powered-on VMs as of October 2026),
                operated through the vCenter API rather than the web client.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Applied least privilege to automation: a dedicated service
                account on a custom role whose mutating permissions are scoped
                to a single VM folder.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Repaired a two-node PowerDNS pair behind a keepalived VIP:
                found silent replication drift and two health checks that could
                not fail, then proved failover (VIP released in about 4 s, 20 of
                20 probes answered) and root-caused a netplan permissions outage
                I caused myself.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Work Experience
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Employment while completing my degree, and current. Not an
          engineering role; listed so the timeline is complete.
        </p>
        <div className="space-y-8">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Personal Shopper
                </h3>
                <p className="text-accent">Walmart Inc</p>
              </div>
              <p className="text-sm text-muted-foreground">July 2023 to present</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Delivered outstanding customer service by efficiently processing over 1,000 online grocery orders, achieving a 99% accuracy
rate in item selection and packaging.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Enhanced operational efficiency through meticulous scanning and organization of grocery items, ensuring prompt delivery and
pickup services.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Collaborated effectively with a team of personal shoppers and store associates, consistently meeting or surpassing daily
productivity goals.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-medium text-foreground mb-3">Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {["Linux", "Kubernetes (RKE2)", "Docker", "Terraform", "VMware vSphere", "Cloudflare", "AWS", "step-ca / TLS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-medium text-foreground mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Go", "PostgreSQL", "Redis", "FastAPI", "gRPC", "Kafka"].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-medium text-foreground mb-3">Reliability</h3>
            <div className="flex flex-wrap gap-2">
              {["VictoriaMetrics / Prometheus", "Grafana", "Alerting design", "Incident write-ups", "Backup and restore testing", "CI/CD"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-medium text-foreground mb-3">Networking</h3>
            <div className="flex flex-wrap gap-2">
              {["DNS (PowerDNS)", "keepalived / VRRP", "Cloudflare Tunnel", "VLANs", "kube-vip"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Education
        </h2>
        <div className="rounded-xl border border-border/50 bg-card/30 p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-muted-foreground">University of Texas at Dallas</p>
            </div>
            <p className="text-sm text-muted-foreground">Graduated Aug 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
