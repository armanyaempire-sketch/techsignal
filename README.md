# TechSignal

Performance-first editorial site for practical guides across AI and online business, health and fitness, and women's health and beauty.

## Build
- Next.js App Router + TypeScript
- Static export to minimize runtime/serverless usage
- GitHub as source of truth
- Provider-neutral advertising integration points
- Explicit, disclosed ClickBank affiliate CTA support
- Google Analytics and Search Console hooks
- Markdown content under content/articles
- Programmatic sitemap and robots.txt

## Deployment discipline
Batch validated code and content changes and deploy once. Avoid API routes and request-time functions unless a clear business need exists.

## Current production safeguards
- Homepage and category hubs are editorial-first and ad-free.
- No popunder, forced redirect, opaque smartlink, or retired third-party ad-network code is shipped.
- Article pages render their full Markdown body before any optional contextual advertisement.
- At most one contextual advertisement slot is available per article.
- Affiliate offers are disclosed and removed when an article does not provide substantive decision support.
- Health and wellness pages use transparent research-desk authorship and avoid invented clinical credentials or personal-testing claims.
- Contact includes a public correction workflow.

## Before enabling a new monetization provider
Set the real site URL for the production environment, configure the approved provider only after its exact snippets/IDs and privacy requirements are reviewed, verify analytics and consent behavior, and run npm run typecheck plus npm run build in a trusted environment.

The current repository contains 36 seed articles, including dedicated BOFU product research and a Women’s Health commercial funnel. The longer-term 90-article roadmap is documented in docs/90-article-plan.md.
