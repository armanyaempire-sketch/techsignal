import {EDITORIAL_REVIEW_DATE,SITE_NAME} from "@/lib/site";

export const metadata={
 title:"Affiliate & Advertising Disclosure",
 description:"GuideSignal's disclosure for affiliate compensation, advertising, seller claims and changing commercial terms.",
 alternates:{canonical:"/disclosure/"},
 openGraph:{type:"website",siteName:SITE_NAME,title:"Affiliate & Advertising Disclosure",description:"How GuideSignal handles affiliate compensation and advertising.",url:"/disclosure/"}
};

export default function Disclosure(){
 return <div className="container section"><div className="info-card reading-copy">
  <span className="eyebrow">Disclosure</span>
  <h1>Affiliate & advertising disclosure</h1>
  <p>GuideSignal may receive compensation when a reader purchases through a qualifying affiliate link. This does not add a separate affiliate fee to the reader's purchase price.</p>

  <h2>Where affiliate links appear</h2>
  <p>Relevant article pages can contain an affiliate call to action. The page identifies the relationship, and affiliate links use a sponsored relationship attribute.</p>

  <h2>Advertising</h2>
  <p>GuideSignal may display third-party advertising when an approved advertising provider is configured. Advertising is separate from editorial conclusions. Optional advertising tools are gated behind the site's privacy-choice mechanism.</p>

  <h2>Seller claims and changing terms</h2>
  <p>Product descriptions, testimonials, prices, availability, commissions, refund policies and seller terms can change. When a page has not independently verified a product claim, GuideSignal treats it as a seller claim rather than independent evidence.</p>

  <h2>What compensation does not mean</h2>
  <p>Affiliate compensation does not turn a seller statement into a fact and does not mean GuideSignal guarantees a product result. Health and wellness content remains general educational information, not individualized medical advice.</p>

  <p className="muted">Disclosure reviewed: {EDITORIAL_REVIEW_DATE}.</p>
 </div></div>;
}