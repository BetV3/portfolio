import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";

const featuredProjects = [
  {
    title: "Cloud Infrastructure Pipeline",
    description:
      "Automated infrastructure provisioning with Terraform, featuring multi-region deployment, auto-scaling, and comprehensive monitoring.",
    tags: ["Terraform", "AWS", "CI/CD", "Python"],
    href: "/projects/cloud-infrastructure",
    github: "https://github.com",
    demo: undefined,
  },
  {
    title: "Data Pipeline Platform",
    description:
      "High-throughput data processing system handling 1M+ events/day with real-time analytics and fault-tolerant architecture.",
    tags: ["Apache Kafka", "Spark", "PostgreSQL", "Docker"],
    href: "/projects/data-pipeline",
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Homelab Network Architecture",
    description:
      "Enterprise-grade network segmentation with VLANs, firewall rules, VPN access, and comprehensive monitoring using Grafana.",
    tags: ["Networking", "pfSense", "Grafana", "Docker"],
    href: "/projects/homelab-network",
    github: "https://github.com",
    demo: undefined,
  },
];

const skills = [
  { name: "CI/CD", icon: null },
  { name: "Infrastructure as Code", icon: null },
  { name: "Data Pipelines", icon: null },
  { name: "Networking", icon: null },
  { name: "Observability", icon: null },
  { name: "Containerization", icon: null },
  { name: "Cloud (AWS)", icon: null },
  { name: "System Design", icon: null },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent-muted flex items-center justify-center">
              <span className="text-lg font-bold text-white">B</span>
            </div>
            <div>
              <p className="text-sm font-medium text-accent">Available for opportunities</p>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Backend & Platform{" "}
            <span className="text-accent">Engineer</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Building real systems with strong infrastructure and networking depth.
            From homelab experiments to production AWS deployments, I ship reliable,
            scalable solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Resume
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              href="https://github.com/BetV3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-card hover:border-accent/30"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-muted-foreground">
              Flagship work demonstrating system design and engineering depth.
            </p>
          </div>
          <a
            href="/projects"
            className="hidden sm:inline-flex items-center text-sm font-medium text-accent hover:text-accent-muted transition-colors"
          >
            View all
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-muted transition-colors"
          >
            View all projects
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a backend and platform engineer with a passion for building
                robust, scalable systems. My experience spans from designing data
                pipelines to architecting cloud infrastructure on AWS.
              </p>
              <p>
                Beyond production systems, I maintain an extensive homelab where I
                experiment with networking, containerization, and observability tools.
                This hands-on approach keeps my skills sharp and gives me deep insight
                into how systems behave under various conditions.
              </p>
              <p>
                I believe in building with intention: every system should be
                observable, maintainable, and documented. I write about my process
                and share learnings from both successes and failures.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                What I&apos;m Looking For
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  Backend or Platform Engineering roles
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  Data Engineering opportunities
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  DevOps / Infrastructure positions
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  Teams that value craft and documentation
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Current Focus
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  Expanding homelab with Kubernetes cluster
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  Building observability stack with Prometheus & Grafana
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  Writing technical blog posts on infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-border/50 bg-card/30 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              I&apos;m always interested in discussing new opportunities, technical
              challenges, or just chatting about infrastructure.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:elvisramirez999@gmail.com"
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/elvis-ramirez-7223b417a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-card hover:border-accent/30"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="/resume"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-card hover:border-accent/30"
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
