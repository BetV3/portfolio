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
          Backend and Platform Engineer with experience in infrastructure
          automation, data pipelines, and system design. Strong focus on
          building observable, maintainable systems. Hands on experience with
          AWS, Kubernetes, and modern DevOps practices through both production
          work and extensive homelab experimentation.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Experience
        </h2>
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

{/*           <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Backend Engineer
                </h3>
                <p className="text-accent">Previous Company</p>
              </div>
              <p className="text-sm text-muted-foreground">2021 - 2023</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Developed high-throughput data pipeline processing 1M+
                events/day
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Implemented API services with comprehensive testing and
                documentation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                Collaborated on database optimization improving query
                performance 3x
              </li>
            </ul>
          </div> */}
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
              {["AWS", "Terraform", "Kubernetes", "Docker", "Linux"].map(
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
              {["Python", "Go", "PostgreSQL", "Redis", "Kafka"].map((skill) => (
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
              {["Prometheus", "Grafana", "ELK Stack", "Datadog"].map(
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
            <p className="text-sm text-muted-foreground">2020 - 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
