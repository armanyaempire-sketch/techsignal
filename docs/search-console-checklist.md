# TechSignal — Search Console & Indexing Checklist

This runbook covers the production indexing workflow for the TechSignal repository and its public site.

## Production endpoints

- Site: https://guidesignal.vercel.app/
- Robots: https://guidesignal.vercel.app/robots.txt
- XML sitemap: https://guidesignal.vercel.app/sitemap.xml
- RSS feed: https://guidesignal.vercel.app/feed.xml
- Google HTML verification: /googleb5dd74162d2e16fb.html

## Repository safeguards

The site currently has these source-level safeguards:

- app/robots.ts allows normal crawling and advertises the XML sitemap.
- app/sitemap.ts includes the homepage, category pages, articles, and trust pages.
- Sitemap entries use lastModified values derived from article update dates or the editorial review date.
- Article pages emit canonical URLs tied to SITE_URL.
- The root layout includes Google Search Console HTML-meta verification.
- The repository also contains the Google HTML verification file in public/.
- The search page is intentionally non-indexable; normal editorial and trust pages remain indexable.
- CI runs the SEO/content audit before the production build.

Google documents lastmod as useful when it is accurate and consistently verifiable, and recommends sitemaps for helping Google discover URLs. Google ignores priority and changefreq values.

## Search Console setup after deployment

1. Open Google Search Console and use the property for the exact public URL: https://guidesignal.vercel.app/.
2. Complete verification using the configured HTML meta tag or the root HTML verification file.
3. Open Sitemaps and submit: https://guidesignal.vercel.app/sitemap.xml
4. Confirm the submitted sitemap is readable and check for processing errors.
5. Inspect the homepage and one representative article with URL Inspection.
6. Run Test live URL and confirm crawling is allowed, page fetch is successful, and indexing is allowed.
7. Request indexing for a small number of important pages when a significant change has just shipped. For larger batches, keep the sitemap current rather than requesting URLs one by one.
8. After meaningful site changes, review Page indexing and the Sitemaps report for coverage changes.

Google notes that sitemap submission does not guarantee crawling or indexing, and that URL Inspection is the appropriate tool for checking an individual URL.

## Ongoing monitoring

Review Search Console after major releases and periodically for:

- sitemap read or processing errors
- unexpected increases in not-indexed URLs
- accidental crawl blocks or noindex directives
- canonical URLs that differ from the intended site URLs
- search performance changes after large content or template changes

Do not treat “URL is on Google” as a guarantee of search visibility; it indicates eligibility under the conditions checked by Search Console.

## Release checklist

Before considering a major SEO release complete:

- [ ] GitHub main contains the intended production commit.
- [ ] CI passes typecheck, SEO audit, and production build.
- [ ] Vercel production deployment is complete.
- [ ] /robots.txt is reachable.
- [ ] /sitemap.xml is reachable and contains the expected URLs.
- [ ] Search Console property remains verified.
- [ ] Sitemap is submitted in the correct Search Console property.
- [ ] Homepage and at least one article pass live URL inspection.
- [ ] Page Indexing shows no unexpected site-wide indexing problem.

## Important limitation

Repository code can prepare and validate the indexing infrastructure, but sitemap submission, URL Inspection, and Search Console monitoring require access to the site's Google Search Console property. They are not performed by the GitHub repository itself.
