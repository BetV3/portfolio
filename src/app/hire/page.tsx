import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contract work | Elvis Ramirez",
  description:
    "Contract infrastructure work: Kubernetes platforms, monitoring that catches real failures, verified backups, and CI pipelines. Every claim links to code you can read.",
};

const EMAIL = "elvisramirez999@gmail.com";

const services = [
  {
    title: "Kubernetes platform buildout",
    summary:
      "Multi-environment clusters with HA control planes, a virtual IP that survives node loss, ingress, and a documented rebuild path. Not a demo cluster: dev, staging and production, each isolated and each proven with a real workload.",
    proof: [
      { label: "The three-environment platform", href: "/projects/k8s-three-environments" },
      { label: "Provisioning scripts", href: "https://github.com/BetV3/Homelab_Scripts/tree/main/vsphere" },
    ],
    evidence:
      "Control-plane failover tested by killing the VIP holder: traffic moved in about 3 seconds. etcd fsync p99 measured at 8.0 to 13.6 ms against a 25 ms budget.",
  },
  {
    title: "Monitoring that catches real failures",
    summary:
      "Most monitoring proves a process is running. That is the weakest possible signal. I build output checks: did the pipeline actually produce anything, did the backup actually contain data, did the certificate actually renew.",
    proof: [
      { label: "The fleet watchdog", href: "/projects/fleet-watchdog" },
      { label: "Watchdog modules and red-run tests", href: "https://github.com/BetV3/Homelab_Scripts/tree/main/monitoring" },
    ],
    evidence:
      "97 signals across 20 hosts. It caught a certificate 6 hours from expiry, a renewal timer that restarted a service 67 times in a day, and a trace pipeline that had silently ingested nothing for two days.",
  },
  {
    title: "Backups you have actually restored",
    summary:
      "A backup that has never been restored is a hypothesis. I set up the backup, then break something on purpose and restore it, then automate a verifier that fails loudly when a restore would not work.",
    proof: [
      { label: "Verified backups", href: "/projects/verified-backups" },
      { label: "The restore that returned an empty file", href: "/blog/backup-that-restored-nothing" },
    ],
    evidence:
      "The first verifier here printed a 0-byte warning and RESTORE VERIFIED in the same run. It computed the right answer and ignored it. That is the bug class I look for.",
  },
  {
    title: "CI and deploy pipelines",
    summary:
      "Pipelines that fail for the right reason. I prove a check works by making it go red on purpose before I trust it, because a check that has never failed is decoration.",
    proof: [
      { label: "The public edge", href: "/projects/public-edge" },
      { label: "CheckPulse", href: "/projects/checkpulse" },
    ],
    evidence:
      "On this site's own pipeline: lint, types, build, plus checks for stale figures, dead links, and unrendered pages. Each one red-run against a deliberately broken tree before it shipped.",
  },
];

export default function HirePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
      <header className="mb-12">
        <p className="text-sm font-medium text-accent">Contract work</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Available for contract infrastructure work
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          I build and operate the unglamorous layer: clusters, monitoring,
          backups, and the pipelines that ship code. I take on part-time
          contract and retainer work, around 10 to 15 hours a week, on
          projects where that focus is worth more than a full-time seat.
        </p>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Everything below links to the actual code or the actual incident
          writeup. If a number appears on this page, you can go read the thing
          that produced it.
        </p>
      </header>

      <section className="mb-14 rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">Rate and terms</h2>
        <dl className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Rate</dt>
            <dd className="mt-1 text-2xl font-bold text-foreground">$65&ndash;85/hr</dd>
            <dd className="mt-1 text-sm text-muted-foreground">
              Depends on scope and urgency
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">Availability</dt>
            <dd className="mt-1 text-2xl font-bold text-foreground">10&ndash;15 hrs/wk</dd>
            <dd className="mt-1 text-sm text-muted-foreground">
              Evenings and weekends, US Central
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">First step</dt>
            <dd className="mt-1 text-2xl font-bold text-foreground">Free call</dd>
            <dd className="mt-1 text-sm text-muted-foreground">
              30 minutes, no obligation
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-6 text-muted-foreground">
          For a small, well-defined first piece of work I will quote a fixed
          price instead of hourly, so you can judge the result before
          committing to anything ongoing.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-xl font-semibold text-foreground">What I do</h2>
        <p className="mb-8 text-muted-foreground">
          Four things, each with the work that backs it.
        </p>

        <div className="space-y-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {s.summary}
              </p>
              <p className="mt-4 border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-muted-foreground">
                {s.evidence}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {s.proof.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          How I work
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              Strongest on Linux, Kubernetes, and AWS with Terraform. That is
              where I have built the most and where I will move fastest for
              you.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              I hand over work you can run without me: the scripts, the
              runbook, and the checks that tell you when something breaks.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              Scheduled work in evenings and weekends, US Central, with a
              standing weekly check-in so you always know where things stand.
            </span>
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">Start a conversation</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Tell me what is broken or what you are trying to stand up, and I
          will tell you how I would approach it and what it would take. No
          pitch deck, no discovery process.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${EMAIL}?subject=Contract%20work`}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-muted"
          >
            {EMAIL}
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            See all the work
          </Link>
        </div>
      </section>
    </div>
  );
}
