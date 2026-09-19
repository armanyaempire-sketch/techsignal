# Monetization architecture

Traffic path:
Organic search -> useful article -> deeper guide -> comparison -> optional relevant affiliate offer.

Revenue paths:
Pageview -> advertising revenue when a vetted network is configured.
Commercial intent -> clearly disclosed affiliate click -> merchant sale.

## Advertising safety rules

GuideSignal currently ships without the retired third-party display network. This is intentional until a vetted network is selected and its exact snippets are reviewed.

- Render advertising only through explicit, consent-gated slots.
- Keep advertisement labels visible and keep ads visually distinct from editorial navigation and content.
- Do not use site-wide popunders, forced redirects, click-jacking overlays, deceptive sponsored-resource links, or opaque smartlinks.
- Do not embed or allowlist scripts from unreviewed ad hosts.
- Keep the homepage and category hubs free of display ads unless a future network is deliberately introduced with a documented placement plan.
- Limit article advertising to a single contextual slot, after substantive content and below the primary reading introduction.
- If an approved provider returns no creative or fails to load, collapse the slot so the reader is not left with a blank reserved box.

## Affiliate safety rules

Before enabling a live offer, validate the current merchant landing page, claims, pricing and billing terms, refund policy, geography, affiliate requirements and editorial fit.

A commercial article must contain substantive independent decision-support content before an affiliate CTA is shown. Affiliate CTAs are clearly labeled and use sponsored/noopener/noreferrer link attributes.

The Energy Revolution System offer was removed from the site because it was not necessary to the educational article. The corresponding article remains informational with no affiliate CTA.

## Current state

No third-party display network is active in the repository. ClickBank offers remain explicit, per-article mappings and should only be enabled where the surrounding article provides real consumer decision support.
