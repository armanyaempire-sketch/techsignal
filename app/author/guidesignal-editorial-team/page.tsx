import {JsonLd} from "@/components/json-ld";

export const metadata={title:"GuideSignal Editorial Team",description:"Meet the GuideSignal Editorial Team and learn how articles are researched, reviewed and updated."};

export default function Author(){
  const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";
  const profile={
    "@context":"https://schema.org",
    "@type":"ProfilePage",
    "name":"GuideSignal Editorial Team",
    "url":siteUrl+"/author/guidesignal-editorial-team/",
    "mainEntity":{
      "@type":"Organization",
      "name":"GuideSignal Editorial Team",
      "url":siteUrl+"/author/guidesignal-editorial-team/"
    }
  };
  return <><JsonLd data={profile}/><div className="container section"><div className="info-card reading-copy"><span className="eyebrow">Author profile</span><h1>GuideSignal Editorial Team</h1><p>The GuideSignal Editorial Team publishes practical, source-aware guides across technology, online business, health, fitness and women's wellness.</p><h2>Editorial approach</h2><p>Articles are written to answer a defined search question, explain trade-offs and distinguish sourced facts from seller claims or general advice.</p><h2>Review standard</h2><p>Health and wellness pages receive additional claim scrutiny and include appropriate limitations. We do not claim personal product testing unless it has actually occurred.</p></div></div></>;
}