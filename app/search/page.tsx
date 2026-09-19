import {getAllArticles} from "@/lib/articles";
import {SiteSearch} from "@/components/site-search";
import {JsonLd} from "@/components/json-ld";

export const metadata={
 title:"Search Guides",
 description:"Search GuideSignal's practical guides across AI, online business, health, fitness, skincare and wellness.",
 robots:{index:false,follow:true},
 alternates:{canonical:"https://guidesignal.vercel.app/search/"}
};

export default function SearchPage(){
 const articles=getAllArticles();
 const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";
 const data={
  "@context":"https://schema.org",
  "@type":"WebPage",
  name:"Search GuideSignal",
  url:siteUrl+"/search/",
  isPartOf:{"@type":"WebSite",name:"GuideSignal",url:siteUrl}
 };
 return <><JsonLd data={data}/><section className="section search-page-wrap"><div className="container"><span className="eyebrow">Find a guide</span><h1>Search GuideSignal</h1><p className="section-intro">Search across our practical guides by topic, phrase, category or reader question.</p><SiteSearch articles={articles}/></div></section></>;
}
