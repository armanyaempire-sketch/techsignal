import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getArticlesByCategory,getCategories,getCategoryBySlug} from "@/lib/articles";
import {JsonLd} from "@/components/json-ld";
import {ArticleVisual} from "@/components/article-visual";
import {SITE_URL,SITE_NAME} from "@/lib/site";

type CategoryConfig={slug:string;name:string;short:string;intro:string;startSlugs:string[]};

function getCategoryConfig(slug:string):CategoryConfig|undefined{
 return getCategories().find(c=>c.slug===slug) as CategoryConfig|undefined;
}

export function generateStaticParams(){return getCategories().map(c=>({slug:c.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const c=getCategoryConfig(slug);if(!c)return{};
 const url=SITE_URL+"/category/"+c.slug+"/";
 return{title:c.name,description:c.short,alternates:{canonical:url},openGraph:{type:"website",siteName:SITE_NAME,title:c.name,description:c.short,url}};
}

const stageLabels={TOFU:"Learn the basics",MOFU:"Solve the problem",BOFU:"Compare before you buy"};

export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const c=getCategoryConfig(slug);
 const base=getCategoryBySlug(slug);
 if(!c||!base)notFound();

 const articles=getArticlesByCategory(slug);
 const siteUrl=SITE_URL,categoryUrl=siteUrl+"/category/"+c.slug+"/";
 const stages=(["TOFU","MOFU","BOFU"] as const).map(stage=>({stage,articles:articles.filter(a=>a.stage===stage)}));
 const starters=c.startSlugs.map(slug=>articles.find(a=>a.slug===slug)).filter(Boolean);
 const latestModified=articles.map(a=>a.updated).sort().at(-1)??"2026-09-20";

 const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
  {"@type":"ListItem",position:1,name:"Home",item:siteUrl+"/"},
  {"@type":"ListItem",position:2,name:c.name,item:categoryUrl}
 ]};
 const collection={"@context":"https://schema.org","@type":"CollectionPage",name:c.name,description:c.intro,url:categoryUrl,dateModified:latestModified,isPartOf:{"@id":siteUrl+"#website"},
  mainEntity:{"@type":"ItemList",itemListElement:articles.map((a,i)=>({"@type":"ListItem",position:i+1,url:siteUrl+"/articles/"+a.slug+"/",name:a.title}))}};
 return <>
  <JsonLd data={[breadcrumb,collection]}/>
  <div className="breadcrumbs"><Link prefetch={false} href="/">Home</Link><span>/</span><span aria-current="page">{c.name}</span></div>

  <section className="section category-pillar">
   <div className="container category-hub-layout">
    <main className="category-hub-main">
     <span className="eyebrow">Content desk</span>
     <h1 style={{fontSize:"clamp(38px,6vw,58px)",marginBottom:14}}>{c.name}</h1>
     <p className="muted category-pillar-intro">{c.intro}</p>

     <section className="category-start-here">
      <div className="section-header"><div><span className="eyebrow">Start here</span><h2>A clear path through this topic</h2><p className="section-intro">Move from foundations to problem-solving and then to product or tool research.</p></div></div>
      <div className="category-start-grid">
       {starters.map((a,i)=>a&&<article className="card category-start-card" key={a.slug}>
        <div className="category-step">0{i+1}</div>
        <ArticleVisual slug={a.slug} category={a.category} title={a.title} variant="card"/>
        <span className="eyebrow">{stageLabels[a.stage]}</span>
        <h3><Link prefetch={false} href={"/articles/"+a.slug+"/"}>{a.title}</Link></h3>
        <p>{a.description}</p>
        <Link className="text-link" prefetch={false} href={"/articles/"+a.slug+"/"}>Open {stageLabels[a.stage].toLowerCase()} guide →</Link>
       </article>)}
      </div>
     </section>

     {stages.map(({stage,articles:stageArticles})=>stageArticles.length>0&&(
      <section className="section category-stage" key={stage}>
       <div className="section-header">
        <div><span className="eyebrow">{stage}</span><h2>{stageLabels[stage]}</h2><p className="section-intro">{stage==="TOFU"?"Build the background and vocabulary needed to make a sensible decision.":stage==="MOFU"?"Use focused guides to solve a specific workflow, habit or product-research problem.":"Compare a defined option using evidence, fit, cost and current seller terms."}</p></div>
       </div>
       <div className="grid-3">
        {stageArticles.map(x=><article className="card" key={x.slug}>
         <ArticleVisual slug={x.slug} category={x.category} title={x.title} variant="card"/>
         <div className="meta">{x.intent}</div>
         <h3><Link prefetch={false} href={"/articles/"+x.slug+"/"}>{x.title}</Link></h3>
         <p>{x.description}</p>
        </article>)}
       </div>
      </section>
     ))}

     {slug==="health-fitness"&&<section className="category-trust-block"><div><span className="eyebrow">Featured product research</span><h2>ProDentim: buyer due diligence</h2><p>Review the seller’s current claims, label details and purchase terms before considering an oral-care supplement.</p></div><Link className="button button-secondary" prefetch={false} href="/products/prodentim/">Read the ProDentim research page →</Link></section>}

     <section className="category-trust-block">
      <div><span className="eyebrow">Editorial standard</span><h2>Source-aware guidance, not sales copy</h2><p>Commercial pages identify affiliate relationships and distinguish seller claims from independent evidence. Health and wellness pages remain general information and do not replace individualized professional advice.</p></div>
      <Link className="button button-secondary" prefetch={false} href="/editorial-policy/">Read the editorial policy</Link>
     </section>
     {!articles.length&&<div className="notice">This desk is in the editorial queue.</div>}
    </main>
   </div>
  </section>
 </>;
}