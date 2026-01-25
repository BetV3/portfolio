import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log Aggregation System | Portfolio",
  description:
    "Centralized logging solution with ELK stack, custom dashboards, alerting, and long-term storage optimization.",
};

const technologies = [
  { name: "Elasticsearch", category: "Search" },
  { name: "Logstash", category: "Processing" },
  { name: "Kibana", category: "Visualization" },
  { name: "Filebeat", category: "Collection" },
  { name: "Docker", category: "Containers" },
  { name: "S3", category: "Archive" },
];

const metrics = [
  { label: "Logs/Day", value: "X GB", subtext: "ingested daily" },
  { label: "Sources", value: "XX+", subtext: "log sources" },
  { label: "Retention", value: "X days", subtext: "hot storage" },
  { label: "Query Time", value: "< X s", subtext: "typical searches" },
];

export default function LogAggregationPage() {
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
          <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
            Observability
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Production
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Log Aggregation System
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          A centralized logging solution built on the ELK stack that aggregates
          logs from all services and infrastructure components with fast
          full-text search and intelligent retention.
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
              <div className="text-2xl font-bold text-yellow-400">
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
            This system provides fast full-text search across all logs, custom
            dashboards for different teams, alerting on error patterns, and
            long-term storage optimization to keep costs manageable.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Designed to handle the logging needs of a growing infrastructure
            while keeping costs manageable through tiered storage and
            intelligent retention policies. Hot data stays on fast SSDs, while
            older logs are compressed and archived to S3.
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Architecture
        </h2>

        {/* Data Flow Diagram */}
        <div className="rounded-xl border border-border/50 bg-card/30 p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Data Flow</h3>
          <div className="flex items-center justify-center gap-2 flex-wrap text-sm font-mono">
            <span className="rounded bg-yellow-500/10 text-yellow-400 px-3 py-1">
              Applications
            </span>
            <span className="text-muted-foreground">→</span>
            <span className="rounded bg-yellow-500/10 text-yellow-400 px-3 py-1">
              Filebeat
            </span>
            <span className="text-muted-foreground">→</span>
            <span className="rounded bg-yellow-500/10 text-yellow-400 px-3 py-1">
              Logstash
            </span>
            <span className="text-muted-foreground">→</span>
            <span className="rounded bg-yellow-500/10 text-yellow-400 px-3 py-1">
              Elasticsearch
            </span>
            <span className="text-muted-foreground">→</span>
            <span className="rounded bg-yellow-500/10 text-yellow-400 px-3 py-1">
              Kibana
            </span>
          </div>
          <div className="flex justify-center mt-2">
            <span className="text-muted-foreground text-sm">
              ↓ (cold tier)
            </span>
          </div>
          <div className="flex justify-center">
            <span className="rounded bg-yellow-500/10 text-yellow-400 px-3 py-1 text-sm font-mono">
              S3 Archive
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
              </span>
              Collection Layer
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Filebeat</strong> -
                  Lightweight shipper on each host
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Docker driver</strong> -
                  Container log collection
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Syslog receiver</strong> -
                  Network device logs
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
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
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </span>
              Storage Tiers
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Hot</strong> - SSDs for
                  recent logs (X days)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Warm</strong> - HDDs for
                  older logs (X days)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Cold/Archive</strong> - S3
                  for long-term retention
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
              Filebeat Configuration
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Filebeat runs on each host, tailing log files and shipping to
              Logstash. Docker metadata is automatically added to container
              logs.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# PLACEHOLDER: Your Filebeat config
filebeat.inputs:
  - type: container
    paths:
      - '/var/lib/docker/containers/*/*.log'
    processors:
      - add_docker_metadata: ~

  - type: log
    paths:
      - /var/log/nginx/access.log
    fields:
      type: nginx-access
    fields_under_root: true

output.logstash:
  hosts: ["logstash:5044"]`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              Logstash Pipeline
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Logstash parses, transforms, and enriches logs before sending to
              Elasticsearch. Grok patterns extract structured fields from
              unstructured logs.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# PLACEHOLDER: Your Logstash pipeline
filter {
  if [type] == "nginx-access" {
    grok {
      match => {
        "message" => '%{IPORHOST:client_ip} - %{USER:ident} \\[%{HTTPDATE:timestamp}\\] "%{WORD:method} %{URIPATHPARAM:request} HTTP/%{NUMBER:http_version}" %{NUMBER:status} %{NUMBER:bytes}'
      }
    }

    geoip {
      source => "client_ip"
      target => "geoip"
    }

    date {
      match => [ "timestamp", "dd/MMM/yyyy:HH:mm:ss Z" ]
    }
  }
}`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              Index Lifecycle Policy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              ILM automatically manages index lifecycle: rollover when too
              large, move to warm tier after X days, archive to S3 after Y days,
              delete after Z days.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# PLACEHOLDER: Your ILM policy
{
  "policy": {
    "phases": {
      "hot": {
        "actions": {
          "rollover": {
            "max_size": "50gb",
            "max_age": "1d"
          }
        }
      },
      "warm": {
        "min_age": "7d",
        "actions": {
          "shrink": { "number_of_shards": 1 },
          "forcemerge": { "max_num_segments": 1 }
        }
      },
      "cold": {
        "min_age": "30d",
        "actions": {
          "searchable_snapshot": {
            "snapshot_repository": "s3-repository"
          }
        }
      },
      "delete": {
        "min_age": "90d"
      }
    }
  }
}`}</code>
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
            title="Full-Text Search"
            description="Elasticsearch powers fast searches across billions of log lines. Find that one error in seconds, not minutes."
            color="yellow"
          />
          <FeatureCard
            title="Custom Dashboards"
            description="Kibana dashboards for different use cases: error analysis, security events, performance metrics, and more."
            color="yellow"
          />
          <FeatureCard
            title="Intelligent Retention"
            description="ILM automatically tiers data from fast SSDs to cold S3 storage based on age, keeping costs manageable."
            color="yellow"
          />
          <FeatureCard
            title="Alerting"
            description="Automated alerts on error rate spikes, missing logs, and security events. Notifications via Slack/email."
            color="yellow"
          />
        </div>
      </section>

      {/* Dashboards */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Dashboards & Alerting
        </h2>
        <div className="rounded-xl border border-border/50 bg-card/30 p-6">
          <h3 className="font-semibold text-foreground mb-4">Key Dashboards</h3>
          <ul className="space-y-3 text-sm text-muted-foreground mb-6">
            {/* PLACEHOLDER: Your actual dashboards */}
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">*</span>
              <span>
                <strong className="text-foreground">Overview</strong> - Total
                log volume, error rates, top sources, system health
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">*</span>
              <span>
                <strong className="text-foreground">Error Analysis</strong> -
                Error trends, stack traces, affected services, root cause
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">*</span>
              <span>
                <strong className="text-foreground">Security</strong> - Failed
                logins, suspicious IPs, access patterns, blocked requests
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">*</span>
              <span>
                <strong className="text-foreground">Performance</strong> -
                Response times, slow queries, bottlenecks, throughput
              </span>
            </li>
          </ul>

          <h3 className="font-semibold text-foreground mb-4">Alert Rules</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              <span>Error rate spike ({">"}X% increase in 5 minutes)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Disk space warnings ({">"}X% used)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Missing logs (no data from source in X minutes)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              <span>Security events (failed logins, blocked IPs)</span>
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
            challenge="Elasticsearch heap pressure during peak hours"
            solution="Tuned JVM heap size, implemented index rollover before indices got too large, and added dedicated coordinating nodes for search queries."
          />
          <ChallengeCard
            challenge="Log parsing failures for inconsistent formats"
            solution="Created a library of grok patterns for different log formats. Added fallback parsing that preserves raw message when parsing fails."
          />
          <ChallengeCard
            challenge="Storage costs growing unsustainably"
            solution="Implemented ILM with aggressive tiering. Hot tier for 7 days, warm for 30, then archive to S3. Reduced costs by 60%."
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
              <span className="text-yellow-400 font-bold">1.</span>
              <span>
                <strong className="text-foreground">
                  Structured logging pays off
                </strong>{" "}
                - JSON logs with consistent fields are infinitely easier to
                query than unstructured text.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">2.</span>
              <span>
                <strong className="text-foreground">Plan for growth</strong> -
                Log volume grows faster than you expect. Build in capacity
                planning from the start.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">3.</span>
              <span>
                <strong className="text-foreground">
                  Retention policies matter
                </strong>{" "}
                - Keeping logs forever is expensive and rarely useful. Define
                retention based on actual needs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">4.</span>
              <span>
                <strong className="text-foreground">
                  Dashboards need owners
                </strong>{" "}
                - Dashboards without clear ownership become stale and
                untrustworthy.
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
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span>Add ML-based anomaly detection for automatic alerting</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span>Implement log sampling for high-volume, low-value logs</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span>Add correlation IDs for request tracing across services</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span>Explore Loki as lighter-weight alternative for some use cases</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Want to discuss this project?
        </h2>
        <p className="text-muted-foreground mb-6">
          I&apos;d love to share more about log management and observability
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
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-500/90 transition-colors"
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
    color === "yellow"
      ? "bg-yellow-500/10 text-yellow-400"
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
