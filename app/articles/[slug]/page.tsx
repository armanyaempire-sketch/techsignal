import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getAllArticles,getArticleBySlug} from "@/lib/articles";
import {markdownToHtml} from "@/lib/markdown";
import {AffiliateCTA} from "@/components/affiliate-cta";
import {AdSlot} from "@/components/ad-slot";

export function generateStaticParams(){return getAllArticles().map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;const a=getArticleBySlug(slug);if(!a)return{};
  return{title:a.title,description:a.description,keywords:a.keywords,openGraph:{type:"article",title:a.title,description:a.description}};
}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const a=getArticleBySlug(slug);if(!a)notFound();
  return <><div className="breadcrumbs"><Link href="/">Home</Link> / <Link href={"/category/"+a.category+"/"}>{a.categoryName}</Link> / {a.title}</div>
  <div className="container article-layout"><article className="article-shell"><span className="eyebrow">{a.categoryName}</span><h1>{a.title}</h1>
    <div className="article-meta"><span>By {a.author}</span><span>•</span><span>Updated {a.updated}</span><span>•</span><span>{a.stage}</span></div>
    <div className="disclosure-note">Some links may be affiliate links. See our <Link href="/disclosure/">affiliate disclosure</Link>.</div>
    <AdSlot slot="inline" scriptUrl={process.env.NEXT_PUBLIC_AD_INLINE_SCRIPT_URL} zone={process.env.NEXT_PUBLIC_AD_INLINE_ZONE}/>
    <div dangerouslySetInnerHTML={{__html:markdownToHtml(a.body)}}/>
    {a.offerKey&&<AffiliateCTA articleSlug={a.slug} position="article-bottom"/>}
    {a.sources.length>0&&<section><h2>Sources & further reading</h2><ul>{a.sources.map(s=><li key={s}><a href={s} target="_blank" rel="noopener noreferrer">{s}</a></li>)}</ul></section>}
    <AdSlot slot="bottom" scriptUrl={process.env.NEXT_PUBLIC_AD_BOTTOM_SCRIPT_URL} zone={process.env.NEXT_PUBLIC_AD_BOTTOM_ZONE}/>
  </article><aside className="sidebar"><div className="info-card"><span className="eyebrow">About this guide</span><h3>Search intent: {a.intent}</h3><p className="muted">This page is part of the {a.stage} editorial funnel.</p></div>
    <AdSlot slot="sidebar" scriptUrl={process.env.NEXT_PUBLIC_AD_SIDEBAR_SCRIPT_URL} zone={process.env.NEXT_PUBLIC_AD_SIDEBAR_ZONE}/>
    <div className="info-card"><span className="eyebrow">Editorial standard</span><p className="muted">No guaranteed results, fake testimonials or unsupported claims. Health articles are general information, not medical advice.</p></div>
  </aside></div></>;
}