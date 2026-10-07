# eramirez.dev

Source for [eramirez.dev](https://eramirez.dev), the portfolio of Elvis Ramirez: backend, platform and SRE engineering, with the numbers behind each project read from the systems that produced them.

## What it is

A statically exported Next.js site. Every page is plain HTML served from Cloudflare's edge; there is no server, no database and no client-side data fetching.

- **Projects** (`/projects`): one page per project with role, timeframe, outcome, a problem / approach / result summary, and metrics that each carry a source line saying how and when the figure was measured.
- **Resume** (`/resume`): HTML resume plus the PDF at `/resume.pdf`, both generated from the same facts.
- **Blog** (`/blog`): incident write-ups and design notes.
- **Hire** (`/hire`): scope and terms for contract work.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, `output: 'export'`), React 19, TypeScript |
| Styling | Tailwind CSS 4 |
| Content | Typed data files in `src/data/` (`projects.ts`, `blog.ts`, `blog-content.ts`, `site.ts`); no CMS |
| Hosting | Cloudflare Workers static assets (`wrangler.jsonc`, assets from `./out`) |
| CI | GitHub Actions (`.github/workflows/ci.yml`) |

## Layout

```
src/
  app/            routes: /, /projects, /projects/[slug], /resume, /blog, /hire
  components/     Header, Footer, ProjectCard, SkillBadge
  data/           all site content, typed
public/
  resume.pdf      generated from the LaTeX master CV, not hand-edited
  *.svg           diagrams, content-hashed so a stale copy can never be served
infra/site/       Terraform for the previous AWS hosting; retained for history, not applied
```

## Content rules

The site makes quantitative claims, so the repository enforces how those claims are written. CI fails the build if any of these are violated.

1. **Every figure has a source.** Each metric in `src/data/projects.ts` has a `source` field (the command, query or file it came from, and the date). Figures that cannot be reproduced are not published.
2. **Superseded figures are denylisted.** When a live number changes, the old value is added to the `No superseded figures` CI step with a note, so it cannot reappear in prose, diagrams or the resume.
3. **No placeholder or template text.** A sweep rejects lorem ipsum, `TODO`, `[CONFIRM]` markers and similar.
4. **No em or en dashes, no double hyphens** in source or built output.
5. **Outbound links must resolve** at CI time, including every evidence link on a metric.
6. **Blog posts must have content** and **project pages must render real text**, checked against the built export.
7. **Nothing internal.** No private hostnames, addresses or credentials. Diagrams use role names, not host names.

The full check list is in `.github/workflows/ci.yml`; each step is a shell script that can be run locally against the tree.

## Development

Requires Node 20.

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build      # static export to ./out
```

The build is CPU and memory heavy for a small host; run it on a machine with at least 4 GB free.

## Deploy

Merging to `main` triggers a Cloudflare Workers build that runs `next build` and publishes `./out`. There is no deploy step in GitHub Actions; CI only verifies. Changes land through pull requests.

## Updating a number

1. Re-read the figure from the live system and record the command and date.
2. Change it everywhere it appears: metric card, prose, resume page, `public/resume.pdf`, diagrams.
3. Add the old value to the superseded denylist in `ci.yml`.
4. Run the CI checks locally, then open a PR.

## License

All rights reserved. The code may be read for reference; the written content, the resume and the diagrams are copyright Elvis Ramirez and are not licensed for reuse.
