# GuideSignal — Affiliate Content & Conversion Playbook

**Status: STRICT PROJECT STANDARD**

This is the mandatory architecture for every affiliate promotion on GuideSignal, regardless of network or merchant: ClickBank, ShareASale, Impact, PartnerStack, direct SaaS programs, or other approved affiliate programs.

GuideSignal owns the problem space and decision journey. The affiliate offer is a swappable component at the bottom of the funnel. Changing an offer must not require rebuilding upstream topical authority.

## 1. Site Architecture — Topical Authority, Not Product Pages

Every category is a topical hub with three interlinked spoke types:

Problem pages (TOFU) → Solution pages (MOFU) → Product research / comparison pages (BOFU)

Hub pages link down to relevant spokes. Spokes link back to the hub and sideways to closely related spokes.

Target structure for new clusters:
- /health-fitness/problems/...
- /health-fitness/solutions/...
- /health-fitness/products/...
- /health-fitness/comparisons/...

Equivalent structures apply to other categories. Legacy routes may remain during migration, but new planning follows the hub/spoke model with consistent canonicals.

## 2. Technical Foundation

- Mobile-first performance and Core Web Vitals discipline
- Clean crawl paths and XML sitemap
- Canonical URLs
- Deliberate internal linking
- Structured data only for verified facts
- Never invent price, availability, ratings, review counts, testimonials, or product claims

Relevant schema may include Article, FAQPage, Product, BreadcrumbList, or Review only when supported by the actual page and verified facts.

Before writing each article, assign 2–3 specific internal-link targets.

## 3. Content Production Standard

Every commercial page must have:
- Named author or clearly identified Research Desk
- Review / methodology note
- Updated date
- At least one original element competitors cannot trivially copy

Original value can be an original comparison table, decision framework, transaction research table, source synthesis, or genuinely useful FAQ.

AI-assisted drafting is allowed. Human fact-checking and editorial review before publication is mandatory.

## 4. Keyword and Topic Research

Run research in monthly batches:

Seed term → People Also Ask → Reddit/forums where relevant → competitor gaps → related queries → intent classification → funnel stage → content calendar

Classify each topic as informational, commercial investigation, or transactional and map it to TOFU, MOFU, or BOFU.

Research spelling variants and alternate phrasing, but never keyword-stuff misspellings or create hidden keyword lists.

## 5. Content Production Cadence

Build a backlog by category and publish consistently. The first pilot cluster should generally contain 10–15 genuinely distinct pieces before aggressive expansion.

TOFU and MOFU content must remain useful even if the featured product disappears.

## 6. Authority and Backlink Building

Priority tactics:
- Original research that others have a reason to cite
- Real expert interviews and accurately attributed practitioner quotations
- Legitimate journalist/source outreach
- Relevant resource-page outreach
- Legitimate, original bylined guest contributions

Do not use parasite-style hosting, fake authority sites, spun guest posts, paid link schemes, or manipulative link networks.

## 7. Trust Layer

Maintain:
- About
- Author / Research Desk bios
- Editorial Policy
- Review / Methodology Policy
- Affiliate & Advertising Disclosure
- Contact and corrections workflow
- Privacy
- Terms

Trust information must be easy to reach from commercial pages.

## 8. BOFU Product Research Template

Every product research page follows this order:

1. Hero
2. What is it?
3. What the seller claims
4. What's independently known
5. Who it's for / who should be cautious
6. Price, billing & refund terms
7. Comparison / alternatives
8. FAQ
9. Verdict + final CTA

Seller claims and independently established evidence must be clearly separated.

## 9. Offer Vetting

Every offer passes vetting before a cluster is committed:

Demand → marketplace metrics → SERP → compliance → funnel quality → longevity → content feasibility

Review applicable network metrics such as EPC, conversion rate, gravity/activity, average payout, APV and recurring value.

High payout alone does not make an offer attractive.

Check both product-name queries and underlying problem/solution queries. Review the actual SERP and identify differentiation opportunities.

Inspect the merchant funnel for mobile usability, pricing clarity, refund visibility, billing/continuity terms, upsells, and obvious dark patterns.

Do not build a cluster when the only possible content is a rewritten merchant sales page.

## 10. CTA and Affiliate-Link Rules

BOFU product-research pages use 2–3 CTAs maximum.

Comparison / alternatives pages use affiliate CTAs only when they directly compare affiliate products. A comparison against non-affiliate alternatives may intentionally use **0 affiliate CTAs** and route readers to the dedicated BOFU product-research page. This is a deliberate funnel design, not a missing CTA.

CTA #1 — contextual text link after enough product context.

CTA #2 — button after meaningful evidence / decision-support content.

CTA #3 — strongest final button after objections and decision factors have been addressed.

Preferred wording includes:
- See the full ingredient breakdown →
- Check Current Offer →
- View Current Price →

Rules:
- Never place an affiliate CTA in every paragraph
- Avoid aggressive opening CTAs for cold search visitors
- No fake countdowns
- No fake scarcity
- No autoplay video with sound
- No intrusive mobile interstitials
- Sticky CTA, if tested, must remain low-profile and not cover substantive content

Affiliate links use rel="sponsored nofollow noopener noreferrer".

## 11. Trust & Compliance

Non-negotiable on every commercial page:
- Disclosure before the first affiliate link
- Clear affiliate relationship language
- Author / Research Desk
- Updated date
- Verified product facts
- Seller claims clearly labeled
- No invented testing
- No fabricated testimonials
- No invented professional endorsement
- No guaranteed results
- No unsupported health claims
- No guaranteed earnings claims

Health claims require special care. E-Business/E-Marketing content must not make guaranteed-income or fabricated-performance claims.

## 12. Internal Linking

Every article receives internal-link targets before publication.

Required strategic direction:
TOFU → MOFU → BOFU

BOFU pages link sideways to relevant comparison, alternative, related product, and solution pages.

Hub pages link down. Spokes link back up. The graph should guide readers toward useful decision support without forcing a sale.

## 13. Pre-Publish QA

Before publishing:
- Seller claims and independent evidence are separated
- No invented price or availability
- No invented testimonials
- Disclosure before first affiliate link
- Maximum 2–3 CTAs
- Author and updated date present
- 2–3 planned internal links implemented
- Affiliate links carry sponsored/nofollow attributes
- Mobile layout checked
- No intrusive interstitial
- Structured data contains only verified facts
- Original value is present
- Page passes a skeptical-reader review

## 14. Measurement

Track:
Search Console impression → organic click → article engagement → product-page visit → CTA view → affiliate click → merchant conversion → commission

Also track:
- Query/page performance
- Ranking movement
- CTA placement CTR
- CTA wording CTR
- Outbound affiliate CTR
- Revenue per article
- Revenue per 1,000 organic visitors
- Backlink growth
- Cluster-level performance

Traffic alone is not the business KPI. Qualified traffic progressing through the decision funnel is.

## 15. Conversion Optimization

Test real behavior rather than guessing.

Possible variables:
- CTA wording
- CTA position
- Button vs contextual link
- Comparison placement
- Trust language
- Page ordering
- Product-page introduction
- Final CTA wording

Do not assume the first implementation is optimal. Keep decisions data-driven.

## 16. Monthly Offer Review

Review every promoted offer monthly for:
- Organic rankings and query growth
- CTA CTR
- Affiliate click rate
- Sales/conversion
- Revenue
- Network metrics
- Merchant/page changes
- Refund or transaction changes
- SERP changes
- Competitor changes
- Backlink growth

After a major Google core update, re-check the affected cluster.

## 17. Traffic Diversification

GuideSignal should not depend on Google alone.

Build an owned email audience using useful TOFU lead magnets such as checklists, comparison worksheets, and buyer guides.

Test Pinterest and other legitimate distribution channels where the content format and audience fit.

## 18. Network-Agnostic Offer Strategy

Affiliate sources may include ClickBank, ShareASale, Impact, PartnerStack, direct SaaS programs, direct merchant programs, and other approved networks.

The upstream architecture remains constant. Only the final commercial offer changes.

For E-Business/E-Marketing, evaluate recurring-commission software/SaaS programs and direct partnerships alongside marketplace offers.

Select based on audience fit, product usefulness, conversion performance, longevity, compliance, and content feasibility — not network name alone.

## 19. Product Replacement Rule

When an offer underperforms, disappears, becomes non-compliant, or no longer fits:

Do not discard the topical cluster.

Preserve the problem articles, solution guides, comparison framework, search authority and internal-link structure. Replace the bottom-of-funnel offer with another vetted product.

## 20. Realistic Growth Timeline

Months 1–2: technical foundation, trust pages, templates, keyword map, one pilot cluster with 10–15 useful pieces.

Months 3–6: consistent publishing, authority outreach, early links, email capture, ranking/query monitoring.

Months 6–12: expand categories, strengthen authority work, optimize conversions with real data, rotate weak offers.

12+ months: diversify traffic, add affiliate networks, strengthen owned audience, maintain monthly offer review.

Competitive organic search is a long-term asset-building process, not a guaranteed short-term traffic source.

## 21. Compliance Layer — All Networks

Health:
- No unsupported cure/treatment/prevention claims
- No fake professional endorsements
- No fabricated clinical evidence
- Seller claims clearly labeled

Finance / E-Business:
- No guaranteed earnings
- No fabricated screenshots
- No misleading typical-result claims
- No unsupported income promises

All categories:
- Clear affiliate disclosure
- Truthful product descriptions
- Accurate commercial terms
- No deceptive scarcity
- No fabricated experience
- No fake authority

## 22. Strict Project Rule

Every affiliate product added to GuideSignal must pass this playbook before promotion.

VET → MAP → WRITE → LINK → CONVERT → QA → PUBLISH → MEASURE → OPTIMIZE → REVIEW

No product skips offer vetting.
No BOFU page skips evidence and decision support.
No affiliate page skips disclosure.
No affiliate page exceeds the CTA standard without a documented testing reason.
No network change requires rebuilding the upstream problem-space architecture.

## Quick Reference

Problem → Solution → Product Research → Comparison → Decision → Affiliate Click → Merchant → Conversion

GuideSignal owns everything through the decision.
The affiliate network owns the final transaction.