import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Gateway Service | Portfolio",
  description:
    "High-performance API gateway with rate limiting, authentication, request routing, and detailed analytics.",
};

const technologies = [
  { name: "Go", category: "Language" },
  { name: "Redis", category: "Rate Limiting" },
  { name: "PostgreSQL", category: "Persistence" },
  { name: "Docker", category: "Containers" },
  { name: "JWT", category: "Auth" },
  { name: "OpenTelemetry", category: "Tracing" },
  { name: "Prometheus", category: "Metrics" },
];

const metrics = [
  { label: "Requests/sec", value: "X,XXX", subtext: "peak throughput" },
  { label: "Latency", value: "< X ms", subtext: "p99 response time" },
  { label: "Uptime", value: "XX.XX%", subtext: "over past 12 months" },
  { label: "Routes", value: "XX+", subtext: "configured endpoints" },
];

export default function ApiGatewayPage() {
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
          <span className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400">
            Backend Services
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Production
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          API Gateway Service
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          A high-performance API gateway built from scratch in Go, providing
          centralized authentication, rate limiting, request routing, and
          analytics for backend microservices.
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
              <div className="text-2xl font-bold text-orange-400">
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
            The gateway acts as the single entry point for all API traffic,
            enforcing security policies and providing observability across all
            backend services. Built with performance in mind - the gateway adds
            minimal latency overhead while providing essential cross-cutting
            concerns.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Rather than implementing authentication, rate limiting, and logging
            in each service, the gateway handles these concerns centrally. This
            keeps services focused on business logic and ensures consistent
            policy enforcement.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Core Features
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <FeatureCard
            title="JWT Authentication"
            description="Validates JWT tokens with configurable issuers. Supports both user tokens and service-to-service API keys with role-based access control."
            color="orange"
          />
          <FeatureCard
            title="Rate Limiting"
            description="Token bucket algorithm with per-user, per-IP, and per-API key limits. Sliding window counters in Redis with configurable burst allowance."
            color="orange"
          />
          <FeatureCard
            title="Request Routing"
            description="Path-based routing to backend services with load balancing, circuit breakers for failing backends, and header-based routing for A/B testing."
            color="orange"
          />
          <FeatureCard
            title="Observability"
            description="Distributed tracing with OpenTelemetry, Prometheus metrics endpoint, structured logging, and real-time analytics dashboard."
            color="orange"
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
              Project Structure
            </h3>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# PLACEHOLDER: Your actual structure
api-gateway/
├── cmd/
│   └── gateway/
│       └── main.go
├── internal/
│   ├── auth/
│   │   ├── jwt.go
│   │   └── apikey.go
│   ├── middleware/
│   │   ├── ratelimit.go
│   │   ├── logging.go
│   │   └── tracing.go
│   ├── proxy/
│   │   ├── router.go
│   │   └── loadbalancer.go
│   └── config/
│       └── config.go
├── pkg/
│   └── models/
├── configs/
│   └── routes.yaml
└── docker-compose.yaml`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              Rate Limiter Implementation
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Token bucket algorithm implemented with Redis for distributed rate
              limiting. Lua scripts ensure atomic operations across the check
              and decrement.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`// PLACEHOLDER: Your rate limiter code
type RateLimiter struct {
    redis  *redis.Client
    rate   int
    burst  int
    window time.Duration
}

func (rl *RateLimiter) Allow(key string) (bool, error) {
    ctx := context.Background()

    // Lua script for atomic token bucket
    script := \`
        local tokens = redis.call("GET", KEYS[1])
        if tokens == false then
            tokens = ARGV[1]
        end

        if tonumber(tokens) > 0 then
            redis.call("DECR", KEYS[1])
            redis.call("EXPIRE", KEYS[1], ARGV[2])
            return 1
        end
        return 0
    \`

    result, err := rl.redis.Eval(ctx, script,
        []string{key}, rl.burst, int(rl.window.Seconds())).Int()

    return result == 1, err
}`}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h3 className="font-semibold text-foreground mb-3">
              Route Configuration
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Routes are defined in YAML for easy updates without code changes.
              Each route specifies target service, allowed methods, auth
              requirements, and rate limits.
            </p>
            <div className="rounded-lg bg-background/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{`# PLACEHOLDER: Your route config
routes:
  - path: /api/v1/users/*
    service: user-service
    methods: [GET, POST, PUT, DELETE]
    auth: required
    rateLimit:
      requests: 100
      window: 1m

  - path: /api/v1/products/*
    service: product-service
    methods: [GET]
    auth: optional
    cache:
      ttl: 5m`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Performance Optimizations
        </h2>
        <div className="rounded-xl border border-border/50 bg-card/30 p-6">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {/* PLACEHOLDER: Your actual optimizations */}
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">*</span>
              <span>
                <strong className="text-foreground">Connection pooling</strong>{" "}
                - Reusable connections to backend services eliminate connection
                setup overhead
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">*</span>
              <span>
                <strong className="text-foreground">Response caching</strong> -
                Redis cache for frequently requested, cacheable responses
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">*</span>
              <span>
                <strong className="text-foreground">
                  Efficient JSON parsing
                </strong>{" "}
                - Using sonic/jsoniter for faster serialization
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">*</span>
              <span>
                <strong className="text-foreground">
                  Zero-allocation logging
                </strong>{" "}
                - Structured logging without heap allocations in hot path
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">*</span>
              <span>
                <strong className="text-foreground">HTTP/2 support</strong> -
                Multiplexed connections reduce latency for parallel requests
              </span>
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
            challenge="Hot key problem in distributed rate limiting"
            solution="Implemented local token buckets with periodic sync to Redis. Local decisions are fast, Redis ensures global consistency within acceptable window."
          />
          <ChallengeCard
            challenge="Graceful degradation when Redis is unavailable"
            solution="Added circuit breaker around Redis calls. When Redis is down, fall back to in-memory rate limiting with conservative limits."
          />
          <ChallengeCard
            challenge="Distributed tracing context propagation"
            solution="Standardized on W3C Trace Context headers. Gateway extracts or creates trace context and propagates to all backend calls."
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
              <span className="text-orange-400 font-bold">1.</span>
              <span>
                <strong className="text-foreground">
                  Measure before optimizing
                </strong>{" "}
                - Profiling revealed bottlenecks in unexpected places. JSON
                parsing was slower than network I/O.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">2.</span>
              <span>
                <strong className="text-foreground">
                  Design for failure
                </strong>{" "}
                - Every dependency will fail. Circuit breakers and fallbacks are
                not optional.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">3.</span>
              <span>
                <strong className="text-foreground">
                  Configuration as code
                </strong>{" "}
                - YAML route configs with validation catch errors before
                deployment.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">4.</span>
              <span>
                <strong className="text-foreground">
                  Observability is essential
                </strong>{" "}
                - Can&apos;t debug production issues without proper tracing and
                metrics.
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
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span>Add GraphQL support with query complexity analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span>Implement request/response transformation plugins</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span>Add WebSocket proxying support</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span>Build admin dashboard for real-time analytics</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Want to discuss this project?
        </h2>
        <p className="text-muted-foreground mb-6">
          I&apos;d love to share more about API design and Go performance
          optimization.
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
            className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500/90 transition-colors"
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
    color === "orange"
      ? "bg-orange-500/10 text-orange-400"
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
