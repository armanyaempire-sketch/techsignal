import {JsonLd} from "@/components/json-ld";
import {SITE_URL,SITE_NAME,EDITORIAL_REVIEW_DATE} from "@/lib/site";

export const metadata={
 title:"Editorial Policy",
 description:"Learn how GuideSignal researches sources, handles commercial content, reviews health and wellness claims, and applies updates and corrections.",
 alternates:{canonical:"/editorial-policy/"},
 openGraph:{type:"website",siteName:SITE_NAME,title:"Editorial Policy",description:"How GuideSignal researches information and handles updates, corrections and commercial claims.",url:"/editorial-policy/"}
};

export default function EditorialPolicy(){
 const data={
  "@context":"https://schema.org",
  "@type":"WebPage",
  name:"GuideSignal Editorial Policy",
  url:SITE_URL+"/editorial-policy/",
  description:"How GuideSignal researches information and handles updates, corrections and commercial claims.",
  isPartOf:{"@id":SITE_URL+"#website"},
  dateModified:"2026-09-20"
 };
 return <><JsonLd data={data}/><div className="container section"><div className="info-card reading-copy">
  <span className="eyebrow">Editorial policy</span>
  <h1>How GuideSignal evaluates information</h1>
  <p>GuideSignal aims to publish useful, clearly qualified information rather than repeat seller marketing.</p>

  <h2>Source hierarchy</h2>
  <p>When relevant, we prefer primary documents, official or government sources, academic research and recognized professional organizations. The source mix depends on the question.</p>

  <h2>Commercial content</h2>
  <p>Affiliate relationships are disclosed. Product claims are attributed to the seller when they have not been independently verified. We avoid turning a promotional statement into an established fact.</p>

  <h2>Health and wellness</h2>
  <p>Health content avoids guaranteed outcomes, fabricated testimonials and unsupported medical claims. General information is not individualized medical advice, and urgent or persistent symptoms should not be managed solely through a product-purchase article.</p>

  <h2>Originality and useful work</h2>
  <p>Articles are built around a defined reader question, practical decision steps, meaningful trade-offs and source-backed context. We do not use a target word count as a substitute for usefulness.</p>

  <h2>Author transparency</h2>
  <p>GuideSignal uses research-desk bylines. We do not invent personal testing, licenses, degrees, clinical credentials or firsthand experiences. The <a href="/author/guidesignal-editorial-team/">Editorial Team profile</a> explains the desk structure.</p>

  <h2>Updates and corrections</h2>
  <p>Pages may be updated when source material, product terms, prices or search intent changes. Material corrections should be reflected in the page content and updated date. Readers can use the <a href="/contact/">Contact page</a> to report a factual issue.</p>

  <h2>Review date</h2>
  <p className="muted">This policy was reviewed on {EDITORIAL_REVIEW_DATE}.</p>
 </div></div></>;
}