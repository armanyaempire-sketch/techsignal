import {EDITORIAL_REVIEW_DATE,SITE_NAME} from "@/lib/site";

export const metadata={
 title:"Privacy Policy",
 description:"GuideSignal privacy policy covering consent choices, analytics, advertising technologies, affiliate links and information used to operate the publication.",
 alternates:{canonical:"/privacy/"},
 openGraph:{type:"website",siteName:SITE_NAME,title:"Privacy Policy",description:"How GuideSignal handles consent, analytics, advertising and affiliate links.",url:"/privacy/"}
};

export default function Privacy(){
 return <div className="container section"><div className="info-card reading-copy">
  <span className="eyebrow">Privacy</span>
  <h1>Privacy policy</h1>
  <p>GuideSignal is designed so the core editorial pages remain usable without optional analytics or advertising tools. This page describes the current implementation and should be read as a plain-language site policy, not legal advice.</p>

  <h2>Privacy choices</h2>
  <p>When the site asks for privacy choices, it stores that choice in your browser's local storage so the preference can be remembered. You can choose necessary tools only or allow optional tools.</p>

  <h2>Analytics</h2>
  <p>Google Analytics is loaded only after optional consent. When enabled, the current implementation uses an analytics identifier configured for the site, sets IP anonymization in the Google Analytics configuration, and can record events such as non-affiliate outbound clicks and affiliate call-to-action views or clicks.</p>

  <h2>Advertising</h2>
  <p>Advertising scripts are not loaded without optional consent. The current ad component also accepts only HTTPS script URLs from an explicitly allowlisted set of Google advertising hosts. If no approved ad script is configured, the article ad slot renders nothing.</p>

  <h2>Affiliate links</h2>
  <p>When a reader clicks an affiliate link, the destination affiliate network may receive information associated with that click and the transaction according to that network's own policies. GuideSignal adds campaign information to qualifying ClickBank links so the publication can distinguish article-level referrals.</p>

  <h2>Public correction requests</h2>
  <p>The current public correction workflow uses GitHub issues. Information you choose to post there is public and is governed by GitHub's own policies. Do not submit sensitive information through a public issue.</p>

  <h2>Third-party services</h2>
  <p>GuideSignal links to third-party sites and may use third-party services for analytics, advertising or affiliate referrals. Their collection and use of information are governed by their own policies.</p>

  <h2>Changes to this policy</h2>
  <p>We may update this page when the site's data practices or third-party tools change. Material changes should be reflected in the page and its review date.</p>

  <p className="muted">Privacy policy reviewed: {EDITORIAL_REVIEW_DATE}.</p>
 </div></div>;
}