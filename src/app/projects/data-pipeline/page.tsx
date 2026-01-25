import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Pipeline Platform | Portfolio",
  description:
    "High-throughput data processing system handling 1M+ events/day with real-time analytics and fault-tolerant architecture.",
};

const technologies = [
  { name: "Apache Kafka", category: "Streaming" },
  { name: "Apache Spark", category: "Processing" },
  { name: "PostgreSQL", category: "Storage" },
  { name: "Docker", category: "Containers" },
  { name: "Python", category: "ETL" },
  { name: "Redis", category: "Caching" },
  { name: "Grafana", category: "Monitoring" },
  { name: "Airflow", category: "Orchestration" },
];

const metrics = [
  { label: "Events/Day", value: "X M+", subtext: "processed in real-time" },
  { label: "Latency", value: "< X ms", subtext: "p99 end-to-end" },
  { label: "Uptime", value: "XX.X%", subtext: "over past 12 months" },
  { label: "Data Sources", value: "X", subtext: "integrated systems" },
];

export default function DataPipelinePage() {
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
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            Data Engineering
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Production
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Data Pipeline Platform
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          A high-throughput data processing system designed to handle millions
          of events daily with real-time analytics capabilities and
          fault-tolerant architecture.
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
              <div className="text-2xl font-bold text-blue-400">
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
            {/* PLACEHOLDER: Your origin story */}
            This platform ingests data from multiple sources, transforms it
            through a series of processing stages, and makes it available for
            analytics and reporting. Built with fault-tolerance as a core
            principle - the system gracefully handles failures, ensures
            exactly-once processing semantics, and automatically recovers from
            outages without data loss.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The architecture separates concerns into distinct layers: ingestion
            handles raw data intake, processing applies business logic and
            transformations, storage manages persistence across hot and cold
            tiers, and serving exposes data to consumers through multiple
            interfaces.
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Pipeline Architecture
        </h2>

        {/* Architecture Diagram Placeholder */}
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
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
              <p className="mt-2 text-sm text-muted-foreground">
                Data flow diagram
              </p>
              <p className="text-xs text-muted">Coming soon</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
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
              Ingestion Layer
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {/* PLACEHOLDER: Your actual data sources */}
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Kafka Producers</strong> -
                  Real-time event streams from applications
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Batch Ingestion</strong> -
                  Historical data loads and backfills
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Schema Registry</strong> -
                  Avro schemas for data validation
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
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
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              Processing Layer
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">
                    Spark Structured Streaming
                  </strong>{" "}
                  - Real-time transformations
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Batch Jobs</strong> -
                  Aggregations and report generation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">*</span>
                <span>
                  <strong className="text-foreground">Data Quality</strong> -
                  Validation and anomaly detection
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
              Kafka Configuration
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Topics are partitioned for parallelism and replicated for
              durability. Consumer groups enable horizontal scaling of
              processors.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# PLACEHOLDER: Your Kafka configuration
kafka:
  brokers:
    - broker1:9092
    - broker2:9092
    - broker3:9092
  topics:
    events:
      partitions: X
      replication_factor: X
      retention_ms: XXXXXXX`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              Spark Streaming Job
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Structured Streaming provides exactly-once semantics with
              checkpointing. Watermarks handle late-arriving data gracefully.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# PLACEHOLDER: Your Spark job
df = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", BROKERS) \\
    .option("subscribe", "events") \\
    .load()

processed = df \\
    .select(from_json(col("value"), schema).alias("data")) \\
    .select("data.*") \\
    .withWatermark("timestamp", "10 minutes") \\
    .groupBy(window("timestamp", "1 hour"), "event_type") \\
    .count()`}</code>
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
            title="Exactly-Once Semantics"
            description="Kafka transactions combined with Spark checkpointing ensure each event is processed exactly once, even during failures or restarts."
            color="blue"
          />
          <FeatureCard
            title="Schema Evolution"
            description="Avro schemas with backward/forward compatibility allow data formats to evolve without breaking downstream consumers."
            color="blue"
          />
          <FeatureCard
            title="Backpressure Handling"
            description="Automatic rate limiting when downstream systems are slow prevents memory exhaustion and ensures stable operation under load."
            color="blue"
          />
          <FeatureCard
            title="Dead Letter Queue"
            description="Failed events are routed to a DLQ for investigation and reprocessing, ensuring no data is silently dropped."
            color="blue"
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
            challenge="Data skew causing processing bottlenecks"
            solution="Implemented salted keys for hot partitions and dynamic partition rebalancing based on throughput metrics."
          />
          <ChallengeCard
            challenge="Maintaining exactly-once semantics during failures"
            solution="Combined Kafka transactions with Spark checkpointing and idempotent writes to storage layer."
          />
          <ChallengeCard
            challenge="Schema evolution without breaking consumers"
            solution="Adopted Avro with schema registry, enforcing backward compatibility rules and automated compatibility checks in CI."
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
              <span className="text-blue-400 font-bold">1.</span>
              <span>
                <strong className="text-foreground">
                  Start with observability
                </strong>{" "}
                - You can&apos;t optimize what you can&apos;t measure. Instrument
                everything from day one.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">2.</span>
              <span>
                <strong className="text-foreground">
                  Design for failure
                </strong>{" "}
                - Every component will fail eventually. Build retry logic, dead
                letter queues, and alerting from the start.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">3.</span>
              <span>
                <strong className="text-foreground">
                  Schema contracts matter
                </strong>{" "}
                - Investing in schema management upfront prevents painful
                migrations later.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">4.</span>
              <span>
                <strong className="text-foreground">Test with real data</strong>{" "}
                - Synthetic data never captures the edge cases that production
                traffic reveals.
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
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Add real-time ML feature computation pipeline</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Implement data lineage tracking with OpenLineage</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Migrate to Delta Lake for ACID transactions on S3</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Add self-service data quality rules UI</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Want to discuss this project?
        </h2>
        <p className="text-muted-foreground mb-6">
          I&apos;d love to walk through the data architecture and processing
          patterns.
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
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500/90 transition-colors"
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
    color === "blue" ? "bg-blue-500/10 text-blue-400" : "bg-accent/10 text-accent";

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
