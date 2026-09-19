import {JsonLd} from "@/components/json-ld";
import {SITE_URL,SITE_NAME,EDITORIAL_REVIEW_DATE,PUBLIC_REPOSITORY} from "@/lib/site";
import {getEditorialDesks} from "@/lib/editorial";

export const metadata={
 title:"GuideSignal Editorial Team",
 description:"Meet the GuideSignal Editorial Team, its research desks, source standards, health-content safeguards and correction process.",
 alternates:{canonical:"/author/guidesignal-editorial-team/"},
 openGraph:{type:"website",siteName:SITE_NAME,title:"GuideSignal Editorial Team",description:"How GuideSignal researches, reviews and updates practical guides.",url:"/author/guidesignal-editorial-team/"}
};

export default function Author(){
 const desks=getEditorialDesks();
 const team={
  "@context":"https://schema.org",
  "@type":"ProfilePage",
  name:"GuideSignal Editorial Team",
  url:SITE_URL+"/author/guidesignal-editorial-team/",
  dateModified:"2026-09-20",
  mainEntity:{
   "@type":"Organization",
   "@id":SITE_URL+"#editorial-team",
   name:"GuideSignal Editorial Team",
   url:SITE_URL+"/author/guidesignal-editorial-team/",
   description:"Editorial research team covering AI, online business, health, fitness, skincare and women's wellness."
  }
 };
 return <><JsonLd data={team}/><div className="container section"><div className="info-card reading-copy">
  <span className="eyebrow">Author profile</span>
  <h1>GuideSignal Editorial Team</h1>
  <p>GuideSignal uses a team-based byline because its guides are editorial research work rather than personal testimonials. Articles identify the research desk responsible for the subject area so readers can see the scope and standards behind each page.</p>

  <h2>Research desks</h2>
  <div className="editorial-desk-list">
   {desks.map(d=><section className="editorial-desk-card" key={d.id}><span className="eyebrow">{d.name}</span><h3>{d.focus}</h3><p>{d.standard}</p></section>)}
  </div>

  <h2>How articles are researched</h2>
  <p>Each guide starts with a defined reader question and is structured around practical decisions, meaningful trade-offs and clearly labeled limitations. Where sources matter, the article lists further reading so readers can inspect the underlying material.</p>

  <h2>Commercial content</h2>
  <p>Affiliate relationships are disclosed. Seller claims are identified as seller claims when they have not been independently verified. GuideSignal does not claim personal testing, firsthand experience or endorsements that did not occur.</p>

  <h2>Health and wellness safeguards</h2>
  <p>Health and wellness pages are general educational information, not individualized medical advice. We avoid guaranteed outcomes, fabricated testimonials and unsupported medical claims, and we prefer recognized public-health, government or professional sources where relevant.</p>

  <h2>Corrections</h2>
  <p>Readers can report factual issues through the <a href="/contact/">Contact page</a>. The current public workflow uses GitHub issues; avoid posting private or sensitive information in a public issue.</p>

  <h2>What we do not claim</h2>
  <p>GuideSignal does not imply professional licensure, clinical treatment, personal product testing or guaranteed business results unless a page explicitly documents a verifiable basis for such a statement.</p>

  <p className="muted">Editorial profile reviewed: {EDITORIAL_REVIEW_DATE}. Public source repository: <a href={PUBLIC_REPOSITORY} target="_blank" rel="noopener noreferrer">GitHub / techsignal</a>.</p>
 </div></div></>;
}