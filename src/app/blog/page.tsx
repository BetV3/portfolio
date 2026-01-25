import Link from "next/link";

const posts = [
  {
    title: "Building a Production-Ready Kubernetes Cluster",
    description:
      "A deep dive into setting up a K8s cluster with proper security, observability, and GitOps workflows.",
    date: "2025-01-15",
    category: "Infrastructure",
    href: "/blog/kubernetes-cluster-setup",
    readTime: "12 min read",
  },
  {
    title: "Network Segmentation in the Homelab",
    description:
      "How I implemented VLANs, firewall rules, and zero-trust principles in my home network.",
    date: "2025-01-08",
    category: "Networking",
    href: "/blog/network-segmentation",
    readTime: "8 min read",
  },
  {
    title: "CI/CD Pipeline for Infrastructure as Code",
    description:
      "Automating Terraform deployments with proper testing, validation, and rollback strategies.",
    date: "2024-12-28",
    category: "DevOps",
    href: "/blog/cicd-terraform",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Technical deep dives, project write-ups, and lessons learned from
          building systems. I write about infrastructure, backend development,
          and the engineering process.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.title}
            className="card-glow group relative rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-accent/30 hover:bg-card"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  <Link href={post.href} className="before:absolute before:inset-0">
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="flex-shrink-0 self-end sm:self-center">
                <svg
                  className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors"
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
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          More posts coming soon. Building in public means sharing the process.
        </p>
      </div>
    </div>
  );
}
