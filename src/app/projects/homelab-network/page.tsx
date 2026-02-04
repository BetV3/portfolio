import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Homelab Network Architecture | Portfolio",
  description:
    "Enterprise-grade network segmentation with VLANs, firewall rules, VPN access, and comprehensive monitoring using Grafana.",
};

const technologies = [
  { name: "pfSense", category: "Firewall" },
  { name: "VLANs", category: "Segmentation" },
  { name: "WireGuard", category: "VPN" },
  { name: "Grafana", category: "Monitoring" },
  { name: "Prometheus", category: "Metrics" },
  { name: "Docker", category: "Services" },
  { name: "Proxmox", category: "Virtualization" },
  { name: "Pi-hole", category: "DNS" },
];

const metrics = [
  { label: "VLANs", value: "6", subtext: "network segments" },
  { label: "Devices", value: "200+", subtext: "managed endpoints" },
  { label: "Uptime", value: "99%", subtext: "over past 12 months" },
  { label: "Firewall Rules", value: "60+", subtext: "active policies" },
];

export default function HomelabNetworkPage() {
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
          <span className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
            Networking
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Production
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Homelab Network Architecture
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          An enterprise-grade network architecture implemented in a home
          environment, featuring proper network segmentation, firewall rules,
          VPN access, and comprehensive monitoring.
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
              <div className="text-2xl font-bold text-purple-400">
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
            This lab serves as both a learning environment and a production
            platform for self-hosted services. The network follows
            defense-in-depth principles with multiple security layers, ensuring
            that a compromise in one segment cannot easily spread to others.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Every design decision prioritizes security without sacrificing
            usability. IoT devices are isolated from sensitive systems,
            workstations have controlled access to servers, and remote access is
            only possible through VPN.
          </p>
        </div>
      </section>

      {/* Network Topology */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Network Topology
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
                  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                />
              </svg>
              <p className="mt-2 text-sm text-muted-foreground">
                Network topology diagram
              </p>
              <p className="text-xs text-muted">Coming soon</p>
            </div>
          </div>
        </div>

        {/* VLAN Table */}
        <div className="rounded-xl border border-border/50 bg-card/30 p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">
            VLAN Configuration
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">
                    VLAN
                  </th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">
                    Name
                  </th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">
                    Purpose
                  </th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">
                    Subnet
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {/* PLACEHOLDER: Your actual VLANs */}
                <tr className="border-b border-border/30">
                  <td className="py-2 px-3 text-purple-400 font-mono">10</td>
                  <td className="py-2 px-3 text-foreground">Management</td>
                  <td className="py-2 px-3">Network infrastructure</td>
                  <td className="py-2 px-3 font-mono">10.0.10.0/24</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-2 px-3 text-purple-400 font-mono">20</td>
                  <td className="py-2 px-3 text-foreground">Servers</td>
                  <td className="py-2 px-3">Production services</td>
                  <td className="py-2 px-3 font-mono">10.0.20.0/24</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-2 px-3 text-purple-400 font-mono">30</td>
                  <td className="py-2 px-3 text-foreground">Workstations</td>
                  <td className="py-2 px-3">User devices</td>
                  <td className="py-2 px-3 font-mono">10.0.30.0/24</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-2 px-3 text-purple-400 font-mono">40</td>
                  <td className="py-2 px-3 text-foreground">IoT</td>
                  <td className="py-2 px-3">Smart devices (isolated)</td>
                  <td className="py-2 px-3 font-mono">10.0.40.0/24</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-2 px-3 text-purple-400 font-mono">50</td>
                  <td className="py-2 px-3 text-foreground">Guest</td>
                  <td className="py-2 px-3">Visitor access</td>
                  <td className="py-2 px-3 font-mono">10.0.50.0/24</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-purple-400 font-mono">99</td>
                  <td className="py-2 px-3 text-foreground">DMZ</td>
                  <td className="py-2 px-3">Public-facing services</td>
                  <td className="py-2 px-3 font-mono">10.0.99.0/24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Security Architecture
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <FeatureCard
            title="Network Segmentation"
            description="IoT devices cannot reach server VLAN. Each segment has explicit allow rules for required services only."
            color="purple"
          />
          <FeatureCard
            title="VPN-Only Remote Access"
            description="No ports exposed to the internet except WireGuard VPN. All management is done through encrypted tunnels."
            color="purple"
          />
          <FeatureCard
            title="DNS Filtering"
            description="Pi-hole blocks malicious domains at the network level. All devices use internal DNS with no bypass allowed."
            color="purple"
          />
          <FeatureCard
            title="IDS/IPS"
            description="Suricata monitors traffic for suspicious patterns. Alerts are sent to monitoring stack for investigation."
            color="purple"
          />
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
              Firewall Rules Philosophy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Default deny all inter-VLAN traffic with explicit allow rules for
              required services. This ensures new devices are isolated until
              explicitly permitted.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`
VLAN30 (Workstations) -> VLAN20 (Servers)
  - Allow: TCP 443 (HTTPS)
  - Allow: TCP 22 (SSH)
  - Allow: TCP 5432 (PostgreSQL)
  - Deny: ALL (default)

VLAN40 (IoT) -> ANY
  - Allow: UDP 53 (DNS to Pi-hole only)
  - Allow: TCP 443 (HTTPS to internet)
  - Deny: ALL local networks`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              WireGuard VPN Configuration
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              WireGuard provides fast, modern VPN access with minimal overhead.
              Each device gets a unique key pair for easy revocation.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`
[Interface]
Address = 10.0.100.1/24
ListenPort = 51820
PrivateKey = <REDACTED>

[Peer]
PublicKey = <PEER_PUBLIC_KEY>
AllowedIPs = 10.0.100.2/32`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              Monitoring Stack
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Prometheus collects metrics from all network devices and services.
              Grafana provides dashboards for real-time visibility and
              historical analysis.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`
services:
  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"

  node-exporter:
    image: prom/node-exporter`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">Hardware</h2>
        <div className="rounded-xl border border-border/50 bg-card/30 p-6">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {/* PLACEHOLDER: Your actual hardware */}
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold shrink-0">
                Firewall
              </span>
              <span>(Model and specs)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold shrink-0">
                Core Switch
              </span>
              <span>(Model and specs)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold shrink-0">
                Access Points
              </span>
              <span>(Model and specs)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold shrink-0">Servers</span>
              <span>(Model and specs)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold shrink-0">Storage</span>
              <span>(Model and specs)</span>
            </li>
          </ul>
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
            challenge="IoT devices requiring cloud access while staying isolated"
            solution="Created strict egress rules allowing only HTTPS to internet while blocking all local network access. DNS filtering prevents command-and-control communication."
          />
          <ChallengeCard
            challenge="Maintaining remote access securely"
            solution="Deployed WireGuard VPN with certificate-based authentication. No services exposed except VPN port. Fail2ban monitors for brute force attempts."
          />
          <ChallengeCard
            challenge="Monitoring devices across VLANs"
            solution="Prometheus server in management VLAN with firewall rules allowing metric scraping from all segments. SNMP for network devices, node-exporter for servers."
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
              <span className="text-purple-400 font-bold">1.</span>
              <span>
                <strong className="text-foreground">
                  Document everything
                </strong>{" "}
                - Network configs are easy to forget. Maintain a living document
                of all rules and their purposes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">2.</span>
              <span>
                <strong className="text-foreground">
                  Test failover scenarios
                </strong>{" "}
                - Regularly test what happens when components fail. Discovered
                several single points of failure this way.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">3.</span>
              <span>
                <strong className="text-foreground">
                  IoT devices are hostile
                </strong>{" "}
                - Treat every IoT device as potentially compromised. Isolation
                is not optional.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">4.</span>
              <span>
                <strong className="text-foreground">
                  Monitoring pays off
                </strong>{" "}
                - Caught a failing drive, a compromised device, and a bandwidth
                hog all through proactive monitoring.
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
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Add 802.1X authentication for network access control</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Implement network traffic analysis with ntopng</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Add redundant internet connection with failover</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Deploy network-wide certificate authority</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Want to discuss this project?
        </h2>
        <p className="text-muted-foreground mb-6">
          I&apos;d love to share more about network design and security
          architecture.
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
            className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500/90 transition-colors"
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
    color === "purple"
      ? "bg-purple-500/10 text-purple-400"
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
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
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
