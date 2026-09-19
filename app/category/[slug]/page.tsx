import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getArticlesByCategory,getCategories,getCategoryBySlug} from "@/lib/articles";
import {JsonLd} from "@/components/json-ld";
import {ArticleVisual} from "@/components/article-visual";
import {SITE_URL} from "@/lib/site";

export function generateStaticParams(){return getCategories().map(c=>({slug:c.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const c=getCategoryBySlug(slug);
  if(!c)return{};
  const base=SITE_URL;
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
  const siteUrl=SITE_URL;
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
    isPartOf:{"@id":siteUrl+"#website"},
    mainEntity:{"@type":"ItemList",itemListElement:itemList}
  };

  return <>
    <JsonLd data={[breadcrumb,collection]}/>
    <div className="breadcrumbs"><Link prefetch={false} href="/">Home</Link><span>/</span><span aria-current="page">{c.name}</span></div>
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
                  <ArticleVisual slug={x.slug} category={x.category} title={x.title} variant="card"/>
                  <div className="meta">{x.intent}</div>
                  <h3><Link prefetch={false} href={"/articles/"+x.slug+"/"}>{x.title}</Link></h3>
                  <p>{x.description}</p>
                </article>)}
              </div>
            </section>
          ))}

          {!articles.length&&<div className="notice">This desk is in the editorial queue.</div>}

        </main>

      </div>
    </section>
  </>;
}