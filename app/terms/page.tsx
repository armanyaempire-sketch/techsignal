import Link from "next/link";
import {EDITORIAL_REVIEW_DATE,SITE_NAME} from "@/lib/site";

export const metadata={
 title:"Terms of Use",
 description:"GuideSignal terms of use for general editorial information, health and wellness content, affiliate relationships and third-party services.",
 alternates:{canonical:"/terms/"},
 openGraph:{type:"website",siteName:SITE_NAME,title:"Terms of Use",description:"GuideSignal terms of use and information limitations.",url:"/terms/"}
};

export default function Terms(){
 return <div className="container section"><div className="info-card reading-copy">
  <span className="eyebrow">Terms</span>
  <h1>Terms of use</h1>
  <p>GuideSignal provides general editorial information for educational and informational purposes. Information can change and should not be treated as a guarantee of any outcome.</p>

  <h2>Editorial information</h2>
  <p>Articles are intended to help readers research a question, compare options and identify practical next steps. They are not a promise that a particular product, service, strategy or result will work for every person.</p>

  <h2>Health and wellness</h2>
  <p>Health and wellness articles are general information and are not a substitute for advice from a qualified healthcare professional. Do not use a product-purchase article to delay urgent care or to diagnose a health condition.</p>

  <h2>Third-party products and links</h2>
  <p>GuideSignal does not control third-party merchants, fulfillment, shipping, pricing, returns, refunds, customer service or product availability. Review the third party's current terms before completing a transaction.</p>

  <h2>Affiliate relationships</h2>
  <p>Some links may be affiliate links. See the <Link href="/disclosure/">Affiliate & Advertising Disclosure</Link> for details.</p>

  <h2>Changes</h2>
  <p>GuideSignal may revise content, links and site functionality as information changes. The relevant page's updated or review date is the best indicator of when it was last checked.</p>

  <p className="muted">Terms reviewed: {EDITORIAL_REVIEW_DATE}.</p>
 </div></div>;
}