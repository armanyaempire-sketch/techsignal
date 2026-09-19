import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getArticlesByCategory,getCategories,getCategoryBySlug} from "@/lib/articles";
import {JsonLd} from "@/components/json-ld";
import {AdsterraBanner,NativeBanner,ResponsiveLeaderboard} from "@/components/adsterra";
import {AdRail} from "@/components/ad-rail";

export function generateStaticParams(){return getCategories().map(c=>({slug:c.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const c=getCategoryBySlug(slug);
  if(!c)return{};
  const base=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";
  const url=base+"/category/"+c.slug+"/";
  return{
    title:c.name,
    description:c.short,
    alternates:{canonical:url},
    openGraph:{type:"website",siteName:"GuideSignal",title:c.name,description:c.short,url}
  };
}

export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const c=getCategoryBySlug(slug);
  if(!c)notFound();

  const articles=getArticlesByCategory(slug);
  const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";
  const categoryUrl=siteUrl+"/category/"+c.slug+"/";
  const stages=(["TOFU","MOFU","BOFU"] as const).map(stage=>({stage,articles:articles.filter(a=>a.stage===stage)}));
  const itemList=articles.map((a,i)=>({
    "@type":"ListItem",
    position:i+1,
    url:siteUrl+"/articles/"+a.slug+"/",
    name:a.title
  }));
  const breadcrumb={
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:siteUrl+"/"},
      {"@type":"ListItem",position:2,name:c.name,item:categoryUrl}
    ]
  };
  const collection={
    "@context":"https://schema.org",
    "@type":"CollectionPage",
    name:c.name,
    description:c.short,
    url:categoryUrl,
    isPartOf:{"@type":"WebSite",name:"GuideSignal",url:siteUrl},
    mainEntity:{"@type":"ItemList",itemListElement:itemList}
  };

  return <>
    <JsonLd data={[breadcrumb,collection]}/>
    <div className="breadcrumbs"><Link prefetch={false} href="/">Home</Link><span>/</span><span aria-current="page">{c.name}</span></div>
    <div className="container category-ad-top"><ResponsiveLeaderboard slot={c.slug+"-leaderboard"}/><AdsterraBanner size="468x60" slot={c.slug+"-468-top"} visibility="desktop"/></div>
    <section className="section">
      <div className="container category-hub-layout">
        <main className="category-hub-main">
          <span className="eyebrow">Content desk</span>
          <h1 style={{fontSize:"clamp(38px,6vw,58px)",marginBottom:14}}>{c.name}</h1>
          <p className="muted" style={{maxWidth:760,fontSize:18}}>{c.short}</p>

          {stages.map(({stage,articles:stageArticles},stageIndex)=>stageArticles.length>0&&(
            <section className="section category-stage" key={stage}>
              <div className="section-header">
                <div>
                  <span className="eyebrow">{stage}</span>
                  <h2>{stage==="TOFU"?"Learn the basics":stage==="MOFU"?"Solve the problem":"Compare before you buy"}</h2>
                </div>
              </div>
              <div className="grid-3">
                {stageArticles.map(x=><article className="card" key={x.slug}>
                  <div className="meta">{x.intent}</div>
                  <h3><Link prefetch={false} href={"/articles/"+x.slug+"/"}>{x.title}</Link></h3>
                  <p>{x.description}</p>
                </article>)}
              </div>
              {stageIndex===0&&stageArticles.length>0&&<div className="category-mid-ads"><NativeBanner slot={c.slug+"-native-transition"} variant="horizontal"/></div>}
            </section>
          ))}

          {!articles.length&&<div className="notice">This desk is in the editorial queue.</div>}

          {articles.length>0&&<div className="category-end-ads"><NativeBanner slot={c.slug+"-native-end"} variant="horizontal"/><AdsterraBanner size="468x60" slot={c.slug+"-468-end"} visibility="desktop"/></div>}
        </main>

        <aside className="category-hub-rail"><AdRail prefix={c.slug+"-rail"}/></aside>
      </div>
    </section>
  </>;
}