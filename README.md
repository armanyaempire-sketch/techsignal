# TechSignal

Performance-first editorial site for practical guides across AI and online business, health and fitness, and women's health and beauty.

## Build
- Next.js App Router + TypeScript
- Static export to minimize runtime/serverless usage
- GitHub as source of truth
- Provider-neutral advertising integration points
- ClickBank affiliate CTA tracking
- Google Analytics and Search Console hooks
- Markdown content under content/articles
- Programmatic sitemap and robots.txt

## Deployment discipline
Batch validated code and content changes into one commit and deploy once. Avoid API routes and request-time functions unless a clear business need exists.

## Before production
Set the real site URL, add the verified ClickBank hoplink, configure the exact ad-network snippets/IDs, configure analytics and consent appropriately, replace the contact placeholder, and run npm run typecheck plus npm run build.

The initial release contains 15 seed articles. The 90-article roadmap is documented in docs/90-article-plan.md.