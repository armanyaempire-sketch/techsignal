import type {Metadata} from "next";
import Link from "next/link";
import {getAllArticles,getCategories} from "@/lib/articles";
import {JsonLd} from "@/components/json-ld";

export const metadata:Metadata={
 title:"Practical Guides on AI, Online Business, Health & Wellness",
 description:"GuideSignal publishes practical, source-aware guides on AI tools, online business, fitness, health, skincare and product decisions.",
 alternates:{canonical:"https://guidesignal.vercel.app/"},
 openGraph:{
  type:"website",
  siteName:"GuideSignal",
  title:"Practical Guides on AI, Online Business, Health & Wellness",
  description:"Practical, source-aware guides on AI, online business, fitness, health, skincare and product decisions.",
  url:"https://guidesignal.vercel.app/"
 },
 twitter:{
  card:"summary",
  title:"Practical Guides on AI, Online Business, Health & Wellness",
  description:"Practical, source-aware guides on AI, online business, fitness, health, skincare and product decisions."
 }
};

const topSlugs=[
 "01-ai-small-business-marketing",
 "11-sustainable-fitness-routine",
 "14-simple-skincare-routine"
];

export default function Home(){
 const allArticles=getAllArticles();
 const categories=getCategories();
 const topArticles=topSlugs.map(slug=>allArticles.find(a=>a.slug===slug)).filter(Boolean);
 const latestArticles=allArticles.filter(a=>!topSlugs.includes(a.slug)).slice(0,8);
 const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";
 const data={
  "@context":"https://schema.org",
  "@type":"CollectionPage",
  name:"GuideSignal — Practical Guides for Smarter Choices",
  url:siteUrl,
  description:"Practical, source-aware guides on AI, online business, health, fitness, skincare and product decisions.",
  isPartOf:{"@type":"WebSite",name:"GuideSignal",url:siteUrl}
 };
 const organization={
  "@context":"https://schema.org",
  "@type":"Organization",
  "@id":siteUrl+"#organization",
  name:"GuideSignal",
  url:siteUrl,
  description:"An independent editorial publication covering practical guides across AI, online business, health, fitness and women's wellness."
 };
 const topItemList={
  "@context":"https://schema.org",
  "@type":"ItemList",
  name:"GuideSignal Top Articles",
  itemListElement:topArticles.map((a,i)=>({
   "@type":"ListItem",
   position:i+1,
   name:a!.title,
   url:siteUrl+"/articles/"+a!.slug+"/"
  }))
 };
 return <>
  <JsonLd data={[data,organization,topItemList]}/>

  <section className="hero">
   <div className="container hero-grid">
    <div className="hero-copy">
     <span className="eyebrow">Practical • Source-aware • Updated</span>
     <h1>Guides that help you decide what to do next.</h1>
     <p>GuideSignal explains real questions around AI tools, online business, health, fitness, skincare and everyday product choices—with clear trade-offs and useful next steps.</p>
     <div className="hero-actions">
      <Link className="button" href="#top-articles">Explore top articles</Link>
      <Link className="button button-secondary" href="#categories">Browse categories</Link>
     </div>
     <div className="hero-topic-links" aria-label="Popular topics">
      <Link href="/category/e-business/" prefetch={false}>AI & E-Business</Link>
      <Link href="/category/health-fitness/" prefetch={false}>Health & Fitness</Link>
      <Link href="/category/womens-health-beauty/" prefetch={false}>Women's Health & Beauty</Link>
     </div>
    </div>
    <div className="hero-card">
     <span className="eyebrow">Start here</span>
     <h2>Find the guide that matches your goal.</h2>
     <div className="hero-guide-list">
      {categories.map(c=><Link key={c.slug} href={"/category/"+c.slug+"/"} prefetch={false}>
       <span className={"category-dot category-dot-"+c.slug}></span>
       <span><strong>{c.name}</strong><small>{c.short}</small></span>
       <span aria-hidden="true">→</span>
      </Link>)}
     </div>
    </div>
   </div>
  </section>

  <section className="section" id="top-articles">
   <div className="container">
    <div className="section-header">
     <div>
      <span className="eyebrow">Editor's picks</span>
      <h2>Top Articles</h2>
      <p className="section-intro">Three cornerstone guides covering the topics readers most often use GuideSignal to research.</p>
     </div>
    </div>
    <div className="top-articles-grid">
     {topArticles.map((a,i)=>a&&(
      <article className={"top-article-card top-article-"+(i+1)} key={a.slug}>
       <div className="top-article-number">0{i+1}</div>
       <div className="meta">{a.categoryName} · {a.stage}</div>
       <h3><Link prefetch={false} href={"/articles/"+a.slug+"/"}>{a.title}</Link></h3>
       <p>{a.description}</p>
       <Link className="text-link" prefetch={false} href={"/articles/"+a.slug+"/"}>Open guide →</Link>
      </article>
     ))}
    </div>
   </div>
  </section>

  <section className="section section-soft" id="categories">
   <div className="container">
    <div className="section-header">
     <div>
      <span className="eyebrow">Browse by subject</span>
      <h2>Categories</h2>
      <p className="section-intro">Choose a desk to see related guides, grouped by the problem they help solve.</p>
     </div>
    </div>
    <div className="category-showcase">
     {categories.map((c)=>(
      <Link className={"category-showcase-card category-showcase-"+c.slug} key={c.slug} href={"/category/"+c.slug+"/"} prefetch={false}>
       <div className="category-showcase-head">
        <span className="eyebrow">{c.name}</span>
        <span className="category-arrow" aria-hidden="true">→</span>
       </div>
       <h3>{c.name}</h3>
       <p>{c.short}</p>
       <div className="category-card-link">Explore this category</div>
      </Link>
     ))}
    </div>
   </div>
  </section>

  <section className="section" id="latest">
   <div className="container">
    <div className="section-header">
     <div>
      <span className="eyebrow">Fresh from the desk</span>
      <h2>Latest Guides</h2>
      <p className="section-intro">New and recently updated practical guides, with the article title always acting as the main entry point.</p>
     </div>
    </div>
    <div className="latest-editorial-grid">
     {latestArticles.map(a=>(
      <article className="latest-editorial-card" key={a.slug}>
       <div className="meta">{a.categoryName} · {a.stage}</div>
       <h3><Link prefetch={false} href={"/articles/"+a.slug+"/"}>{a.title}</Link></h3>
       <p>{a.description}</p>
      </article>
     ))}
    </div>
   </div>
  </section>

  <section className="section section-soft">
   <div className="container seo-intro">
    <span className="eyebrow">What GuideSignal covers</span>
    <h2>Practical research for everyday decisions</h2>
    <p>GuideSignal brings together practical explainers for people evaluating AI and software, building online businesses, improving fitness habits, researching wellness topics, and comparing products before they buy. Each guide is organized around a clear reader question, explains meaningful trade-offs, and points to sources or seller information where it matters.</p>
    <p>For commercial topics, our editorial pages separate independent discussion from affiliate relationships. For health and wellness topics, we use general informational language and avoid presenting seller claims as proven outcomes. This structure keeps the publication useful whether you are learning the basics, solving a specific problem, or comparing an option before a purchase.</p>
    <div className="seo-topic-links">
     {categories.map(c=><Link key={c.slug} href={"/category/"+c.slug+"/"} prefetch={false}>{c.name}</Link>)}
    </div>
   </div>
  </section>
 </>;
}
