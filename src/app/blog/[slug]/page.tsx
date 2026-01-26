import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getSeriesById,
  getPostsBySeries,
  posts,
} from "@/data/blog";
import { blogContent } from "@/data/blog-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Portfolio",
    };
  }

  return {
    title: `${post.title} | Portfolio`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = blogContent[slug];
  const series = post.series ? getSeriesById(post.series) : null;
  const seriesPosts = post.series ? getPostsBySeries(post.series) : [];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "border-blue-500/20",
    },
    yellow: {
      bg: "bg-yellow-500/10",
      text: "text-yellow-400",
      border: "border-yellow-500/20",
    },
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      border: "border-purple-500/20",
    },
    red: {
      bg: "bg-accent/10",
      text: "text-accent",
      border: "border-accent/20",
    },
  };

  const colors = series ? colorClasses[series.color] : colorClasses.red;

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link
          href="/blog"
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
          Back to Blog
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        {/* Series Badge */}
        {series && (
          <Link
            href={`/blog?series=${series.id}`}
            className={`inline-flex items-center gap-2 rounded-full ${colors.bg} px-3 py-1 text-xs font-medium ${colors.text} mb-4 hover:opacity-80 transition-opacity`}
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
            {series.title} - Part {post.seriesOrder}
          </Link>
        )}

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
          <span
            className={`inline-flex items-center rounded-full ${colors.bg} px-2.5 py-0.5 text-xs font-medium ${colors.text}`}
          >
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

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          {post.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border/50 bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Table of Contents for series */}
      {series && seriesPosts.length > 1 && (
        <nav className={`mb-12 rounded-xl border ${colors.border} ${colors.bg} p-6`}>
          <h2 className={`text-sm font-semibold ${colors.text} mb-4`}>
            In this series
          </h2>
          <ol className="space-y-2">
            {seriesPosts.map((seriesPost, index) => (
              <li key={seriesPost.slug} className="flex items-start gap-3">
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    seriesPost.slug === slug
                      ? `${colors.bg} ${colors.text}`
                      : "bg-card/50 text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </span>
                {seriesPost.slug === slug ? (
                  <span className="text-sm font-medium text-foreground">
                    {seriesPost.title}
                  </span>
                ) : (
                  <Link
                    href={`/blog/${seriesPost.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {seriesPost.title}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        {content ? (
          <BlogContent content={content} colors={colors} />
        ) : (
          <PlaceholderContent post={post} colors={colors} />
        )}
      </div>

      {/* Series Navigation */}
      {series && seriesPosts.length > 1 && (
        <nav className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            {post.seriesOrder && post.seriesOrder > 1 && (
              <Link
                href={`/blog/${seriesPosts[post.seriesOrder - 2].slug}`}
                className="group flex-1 rounded-xl border border-border/50 bg-card/30 p-4 hover:border-border hover:bg-card/50 transition-colors"
              >
                <span className="text-xs text-muted-foreground">Previous</span>
                <p className="mt-1 font-medium text-foreground group-hover:text-accent transition-colors">
                  {seriesPosts[post.seriesOrder - 2].title}
                </p>
              </Link>
            )}
            {post.seriesOrder && post.seriesOrder < seriesPosts.length && (
              <Link
                href={`/blog/${seriesPosts[post.seriesOrder].slug}`}
                className="group flex-1 rounded-xl border border-border/50 bg-card/30 p-4 hover:border-border hover:bg-card/50 transition-colors text-right"
              >
                <span className="text-xs text-muted-foreground">Next</span>
                <p className="mt-1 font-medium text-foreground group-hover:text-accent transition-colors">
                  {seriesPosts[post.seriesOrder].title}
                </p>
              </Link>
            )}
          </div>
        </nav>
      )}

      {/* CTA */}
      <section className={`mt-16 rounded-xl border ${colors.border} ${colors.bg} p-8 text-center`}>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Found this helpful?
        </h2>
        <p className="text-muted-foreground mb-6">
          I write about infrastructure, backend development, and DevOps. Follow
          along as I continue building.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-card border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-card/80 transition-colors"
          >
            More Posts
          </Link>
          <Link
            href="/projects"
            className={`inline-flex items-center gap-2 rounded-lg ${colors.text === "text-accent" ? "bg-accent" : colors.bg.replace("/10", "")} px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition-colors`}
            style={{
              backgroundColor:
                series?.color === "blue"
                  ? "#3b82f6"
                  : series?.color === "yellow"
                  ? "#eab308"
                  : series?.color === "emerald"
                  ? "#10b981"
                  : series?.color === "purple"
                  ? "#a855f7"
                  : "#dc2626",
            }}
          >
            View Projects
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
    </article>
  );
}

interface ContentSection {
  type: "heading" | "paragraph" | "code" | "list" | "callout" | "image";
  content?: string;
  items?: string[];
  language?: string;
  level?: number;
  variant?: "info" | "warning" | "tip";
  alt?: string;
}

function BlogContent({
  content,
  colors,
}: {
  content: ContentSection[];
  colors: { bg: string; text: string; border: string };
}) {
  return (
    <>
      {content.map((section, index) => {
        switch (section.type) {
          case "heading":
            if (section.level === 2) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-foreground mt-12 mb-4"
                >
                  {section.content}
                </h2>
              );
            }
            return (
              <h3
                key={index}
                className="text-xl font-semibold text-foreground mt-8 mb-3"
              >
                {section.content}
              </h3>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed mb-4"
              >
                {section.content}
              </p>
            );

          case "code":
            return (
              <div
                key={index}
                className="rounded-xl border border-border/50 bg-card/30 p-6 my-6 overflow-x-auto"
              >
                {section.language && (
                  <div className="text-xs text-muted-foreground mb-3 font-mono">
                    {section.language}
                  </div>
                )}
                <pre className="text-sm font-mono text-muted-foreground">
                  <code>{section.content}</code>
                </pre>
              </div>
            );

          case "list":
            return (
              <ul key={index} className="space-y-2 mb-6">
                {section.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`${colors.text} mt-1.5`}>*</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "callout":
            const variantStyles = {
              info: "border-blue-500/20 bg-blue-500/10",
              warning: "border-amber-500/20 bg-amber-500/10",
              tip: "border-emerald-500/20 bg-emerald-500/10",
            };
            return (
              <div
                key={index}
                className={`rounded-xl border p-4 my-6 ${
                  variantStyles[section.variant || "info"]
                }`}
              >
                <p className="text-sm text-muted-foreground">
                  {section.content}
                </p>
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}

function PlaceholderContent({
  post,
  colors,
}: {
  post: { title: string; description: string; tags: string[] };
  colors: { bg: string; text: string; border: string };
}) {
  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
        Overview
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {post.description}
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        This post is coming soon. I&apos;m currently writing detailed content
        covering the implementation, challenges faced, and lessons learned.
        Check back soon for the full write-up.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
        What This Post Will Cover
      </h2>
      <ul className="space-y-2 mb-6">
        <li className="flex items-start gap-3">
          <span className={`${colors.text} mt-1.5`}>*</span>
          <span className="text-muted-foreground">
            Architecture decisions and trade-offs
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className={`${colors.text} mt-1.5`}>*</span>
          <span className="text-muted-foreground">
            Step-by-step implementation guide
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className={`${colors.text} mt-1.5`}>*</span>
          <span className="text-muted-foreground">
            Code examples and configuration snippets
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className={`${colors.text} mt-1.5`}>*</span>
          <span className="text-muted-foreground">
            Challenges encountered and how I solved them
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className={`${colors.text} mt-1.5`}>*</span>
          <span className="text-muted-foreground">
            Performance considerations and optimizations
          </span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
        Technologies Covered
      </h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className={`inline-flex items-center rounded-full ${colors.bg} px-3 py-1.5 text-sm font-medium ${colors.text}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className={`rounded-xl border ${colors.border} ${colors.bg} p-6 my-8`}
      >
        <p className={`text-sm ${colors.text} font-medium mb-2`}>
          Content in progress
        </p>
        <p className="text-sm text-muted-foreground">
          This article is actively being written. The full content will include
          detailed explanations, code examples, and practical insights from
          real-world implementation.
        </p>
      </div>
    </>
  );
}
