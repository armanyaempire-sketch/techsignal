# Monetization architecture

Traffic path:
Organic search -> useful article -> deeper guide -> comparison -> relevant ClickBank offer.

Revenue paths:
Pageview -> advertising revenue.
Commercial intent -> affiliate click -> ClickBank sale.

The affiliate CTA is controlled by one public environment variable so offers can be switched without changing the article template.

## Advertising safety rules

- Render ads only through explicit, consent-gated slots.
- Keep advertisement labels visible and keep ads visually distinct from editorial navigation and content.
- Do not use site-wide popunders, forced redirects, click-jacking overlays, or deceptive "sponsored resource" links.
- Do not hardcode a third-party smartlink into article or homepage templates.
- If an ad provider returns no creative or fails to load, collapse the slot so the reader is not left with a blank reserved box.
- Keep homepage advertising intentionally spaced around major editorial sections rather than inserting an ad between every card.

## Affiliate safety rules

Before enabling a live offer, validate the current ClickBank listing, EPC/APV/conversion signals, landing page, geography, refund terms, affiliate requirements and claims/compliance risk.
