import { Metadata } from "next";
import Link from "next/link";
import {
  series,
  getPostsBySeries,
  getStandalonePosts,
  getAllPostsSorted,
  BlogPost,
  BlogSeries,
} from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Portfolio",
  description:
    "Technical deep dives, project write-ups, and lessons learned from building systems. Infrastructure, backend development, and DevOps.",
};

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string; accent: string }
> = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    accent: "bg-blue-500",
  },
  yellow: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
    border: "border-yellow-500/20",
    accent: "bg-yellow-500",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    accent: "bg-emerald-500",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
    accent: "bg-purple-500",
  },
  red: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
    accent: "bg-accent",
  },
};

export default function BlogPage() {
  const standalonePosts = getStandalonePosts();
  const allPosts = getAllPostsSorted();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
      {/* Header */}
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

      {/* Series Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <svg
            className="h-5 w-5 text-accent"
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
          Series
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {series.map((s) => (
            <SeriesCard key={s.id} series={s} />
          ))}
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <svg
            className="h-5 w-5 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Latest Posts
        </h2>
        <div className="space-y-4">
          {allPosts.slice(0, 5).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* All Posts by Series */}
      {series.map((s) => {
        const seriesPosts = getPostsBySeries(s.id);
        return (
          <section key={s.id} className="mb-12" id={s.id}>
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`h-3 w-3 rounded-full ${colorClasses[s.color].accent}`}
              />
              <h2 className="text-xl font-semibold text-foreground">
                {s.title}
              </h2>
              <span className="text-sm text-muted-foreground">
                {seriesPosts.length} posts
              </span>
            </div>
            <div className="space-y-4 ml-6 border-l border-border/50 pl-6">
              {seriesPosts.map((post, index) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  seriesIndex={index + 1}
                  seriesColor={s.color}
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* Standalone Posts */}
      {standalonePosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <svg
              className="h-5 w-5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            Standalone Posts
          </h2>
          <div className="space-y-4">
            {standalonePosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="mt-12 text-center rounded-xl border border-border/50 bg-card/30 p-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          More content coming soon
        </h3>
        <p className="text-muted-foreground mb-4">
          Building in public means sharing the process. Follow along as I
          continue documenting my infrastructure and development journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-card border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-card/80 transition-colors"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
          >
            Follow on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function SeriesCard({ series: s }: { series: BlogSeries }) {
  const seriesPosts = getPostsBySeries(s.id);
  const colors = colorClasses[s.color];

  return (
    <Link
      href={`#${s.id}`}
      className={`card-glow group relative rounded-2xl border ${colors.border} ${colors.bg} p-6 transition-all hover:border-opacity-50`}
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full ${colors.bg} px-2.5 py-1 text-xs font-medium ${colors.text}`}
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          {seriesPosts.length} parts
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
        {s.title}
      </h3>

      <p className="text-sm text-muted-foreground line-clamp-2">
        {s.description}
      </p>

      <div className="mt-4 flex items-center text-sm text-muted-foreground">
        <span>Start reading</span>
        <svg
          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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
    </Link>
  );
}

function PostCard({
  post,
  seriesIndex,
  seriesColor,
}: {
  post: BlogPost;
  seriesIndex?: number;
  seriesColor?: string;
}) {
  const colors = seriesColor
    ? colorClasses[seriesColor]
    : colorClasses.red;

  return (
    <article className="card-glow group relative rounded-xl border border-border/50 bg-card/50 p-5 transition-all hover:border-accent/30 hover:bg-card">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
            {seriesIndex !== undefined && (
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${colors.bg} text-xs font-bold ${colors.text}`}
              >
                {seriesIndex}
              </span>
            )}
            <span
              className={`inline-flex items-center rounded-full ${colors.bg} px-2 py-0.5 text-xs font-medium ${colors.text}`}
            >
              {post.category}
            </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span>{post.readTime}</span>
          </div>

          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            <Link
              href={`/blog/${post.slug}`}
              className="before:absolute before:inset-0"
            >
              {post.title}
            </Link>
          </h3>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
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
  );
}
