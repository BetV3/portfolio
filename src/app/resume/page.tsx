export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Resume
          </h1>
          <p className="mt-2 text-muted-foreground">
            Backend Engineer
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
          Backend and platform engineer, CS graduate from UT Dallas (2025).
          I build services in Go and Python and run them myself: a monitoring
          SaaS deployed in production on a VPS, and a seven-host vSphere
          cluster at home that hosts the rest. Comfortable owning a system from
          the request path down to the hypervisor it lands on.
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
                  CheckPulse - Monitoring SaaS
                </h3>
                <p className="text-accent">
                  Solo build, deployed at checkpulse.dev
                </p>
              </div>
              <p className="text-sm text-muted-foreground">2026</p>
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
              <p className="text-sm text-muted-foreground">2025</p>
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
              <p className="text-sm text-muted-foreground">2026</p>
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
              <p className="text-sm text-muted-foreground">Ongoing</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Administer a seven-host ESXi cluster under vCenter 8 (132
                cores, ~607 GB RAM, 32 VMs), operated through the vCenter API
                rather than the web client.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Applied least privilege to automation: a dedicated service
                account on a custom role whose mutating permissions are scoped
                to a single VM folder.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Designing three Talos Kubernetes clusters with a frozen IP
                plan, host placement map, failure-test catalogue, and secrets
                policy written before any VM is provisioned.
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
          Employment while completing my degree.
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
              <p className="text-sm text-muted-foreground">2020 - Present</p>
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
              {["Linux", "Docker", "Terraform", "VMware vSphere", "Cloudflare", "AWS"].map(
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
              {["Go", "Python", "PostgreSQL", "Redis", "FastAPI", "gRPC"].map((skill) => (
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
            <h3 className="font-medium text-foreground mb-3">Observability</h3>
            <div className="flex flex-wrap gap-2">
              {["Prometheus", "Grafana", "Structured logging"].map(
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
              {["VLANs", "Firewalls", "VPN", "DNS", "Load Balancing"].map(
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
