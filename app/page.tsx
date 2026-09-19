import type {Metadata} from "next";
import type {Article} from "@/lib/articles";
import Link from "next/link";
import {getAllArticles,getArticlesByCategory,getCategories} from "@/lib/articles";
import {JsonLd} from "@/components/json-ld";
import {ResponsiveLeaderboard} from "@/components/adsterra";
import {ArticleVisual} from "@/components/article-visual";
import {EditorialPicks} from "@/components/editor-picks";
import {SITE_URL} from "@/lib/site";

export const metadata:Metadata={
 title:"Practical Guides on AI, Online Business, Health & Wellness",
 description:"GuideSignal publishes practical, source-aware guides on AI tools, online business, fitness, health, skincare and product decisions.",
 alternates:{canonical:"/"},
 openGraph:{
  type:"website",
  siteName:"GuideSignal",
  title:"Practical Guides on AI, Online Business, Health & Wellness",
  description:"Practical, source-aware guides on AI, online business, fitness, health, skincare and product decisions.",
  url:"/"
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
 "14-simple-skincare-routine",
 "09-best-ai-affiliate-tools",
 "12-home-workout-routine"
];

const editorPickSlugs=[
 "10-best-ai-small-business-tools",
 "13-fitness-after-40",
 "15-compare-beauty-products",
 "22-affiliate-keyword-research-beginners"
];

export default function Home(){
 const allArticles=getAllArticles();
 const categories=getCategories();
 const isArticle=(article:Article|undefined):article is Article=>Boolean(article);
 const topArticles=topSlugs.map(slug=>allArticles.find(a=>a.slug===slug)).filter(isArticle);
 const editorPicks=editorPickSlugs.map(slug=>allArticles.find(a=>a.slug===slug)).filter(isArticle);
 const latestByCategory=categories.map(c=>({
  ...c,
  articles:getArticlesByCategory(c.slug).filter(a=>!topSlugs.includes(a.slug)).slice(0,3)
 }));
 const siteUrl=SITE_URL;
 const data={
  "@context":"https://schema.org",
  "@type":"CollectionPage",
  name:"GuideSignal — Practical Guides for Smarter Choices",
  url:siteUrl,
  description:"Practical, source-aware guides on AI, online business, health, fitness, skincare and product decisions.",
  isPartOf:{"@id":siteUrl+"#website"}
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
      <span className="eyebrow">Top reading</span>
      <h2>Top Articles</h2>
      <p className="section-intro">Five standout guides across all three GuideSignal desks, giving visitors an immediate path into the site's strongest topics.</p>
     </div>
    </div>
    <div className="top-articles-grid">
     {topArticles.map((a,i)=>a&&(
      <article className={"top-article-card top-article-"+(i+1)} key={a.slug}>
       <ArticleVisual slug={a.slug} category={a.category} title={a.title} variant="top"/>
       <div className="top-article-number">{String(i+1).padStart(2,"0")}</div>
       <div className="meta">{a.categoryName} · {a.stage}</div>
       <h3><Link prefetch={false} href={"/articles/"+a.slug+"/"}>{a.title}</Link></h3>
       <p>{a.description}</p>
       <Link className="text-link" prefetch={false} href={"/articles/"+a.slug+"/"}>Open guide →</Link>
      </article>
     ))}
    </div>
    <div className="home-inline-ad"><ResponsiveLeaderboard slot="home-top-after-feature"/></div>
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
     {categories.map(c=>(
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
      <span className="eyebrow">Fresh from every desk</span>
      <h2>Latest Guides</h2>
      <p className="section-intro">Browse the newest practical guides by desk so no part of GuideSignal disappears behind a single mixed feed.</p>
     </div>
    </div>
    <div className="latest-desk-sections">
     {latestByCategory.map(desk=>(
      <section className={"latest-desk latest-desk-"+desk.slug} key={desk.slug}>
       <div className="latest-desk-header">
        <div>
         <span className="eyebrow">{desk.name}</span>
         <h3>{desk.name}</h3>
         <p>{desk.short}</p>
        </div>
        <Link className="text-link" prefetch={false} href={"/category/"+desk.slug+"/"}>View all →</Link>
       </div>
       {desk.articles.length>0?(
        <div className="latest-editorial-grid">
         {desk.articles.map(a=>(
          <article className="latest-editorial-card" key={a.slug}>
           <ArticleVisual slug={a.slug} category={a.category} title={a.title} variant="card"/>
           <div className="meta">{a.stage} · {a.intent}</div>
           <h4><Link prefetch={false} href={"/articles/"+a.slug+"/"}>{a.title}</Link></h4>
           <p>{a.description}</p>
           <Link className="text-link" prefetch={false} href={"/articles/"+a.slug+"/"}>Read guide →</Link>
          </article>
         ))}
        </div>
       ):<p className="latest-empty">New guides for this desk are in the editorial queue.</p>}
      </section>
     ))}
    </div>
   </div>
  </section>

  <EditorialPicks articles={editorPicks}/>

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