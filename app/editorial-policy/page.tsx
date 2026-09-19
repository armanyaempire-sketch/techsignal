import {JsonLd} from "@/components/json-ld";
import {SITE_URL} from "@/lib/site";

export const metadata={
 title:"Editorial Policy",
 description:"Learn how GuideSignal researches sources, handles commercial content, reviews health and wellness claims, and applies updates and corrections.",
 alternates:{canonical:"/editorial-policy/"},
 openGraph:{
  type:"website",
  siteName:"GuideSignal",
  title:"Editorial Policy",
  description:"How GuideSignal researches information and handles updates, corrections and commercial claims.",
  url:"/editorial-policy/"
 }
};

export default function EditorialPolicy(){
 const data={
  "@context":"https://schema.org",
  "@type":"WebPage",
  name:"GuideSignal Editorial Policy",
  url:SITE_URL+"/editorial-policy/",
  description:"How GuideSignal researches information and handles updates, corrections and commercial claims.",
  isPartOf:{"@id":SITE_URL+"#website"}
 };
 return <><JsonLd data={data}/><div className="container section"><div className="info-card reading-copy"><span className="eyebrow">Editorial policy</span><h1>How GuideSignal evaluates information</h1><p>GuideSignal aims to publish useful, clearly qualified information rather than repeat seller marketing.</p><h2>Sources</h2><p>We prefer primary, official, government, academic or recognized professional sources when they are relevant to the question.</p><h2>Commercial content</h2><p>Affiliate relationships are disclosed. Product claims are attributed to the seller when they have not been independently verified.</p><h2>Health and wellness</h2><p>Health content avoids guaranteed outcomes, fabricated testimonials and unsupported medical claims. General information is not individualized medical advice.</p><h2>Updates and corrections</h2><p>Pages may be updated when source material, product terms, prices or search intent changes. Material corrections should be reflected in the page content and updated date.</p></div></div></>;
}