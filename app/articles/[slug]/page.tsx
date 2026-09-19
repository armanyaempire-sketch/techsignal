import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getAllArticles,getArticleBySlug,getRelatedArticles} from "@/lib/articles";
import {markdownToHtml} from "@/lib/markdown";
import {AffiliateCTA} from "@/components/affiliate-cta";
import {AdStack} from "@/components/ad-stack";
import {AdSlot} from "@/components/ad-slot";
import {AdsterraBanner,NativeBanner} from "@/components/adsterra";
import {Smartlink} from "@/components/smartlink";
import {JsonLd} from "@/components/json-ld";
import {ReadingProgress} from "@/components/reading-progress";

export function generateStaticParams(){return getAllArticles().map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const a=getArticleBySlug(slug);if(!a)return{};
 const base=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";const url=base+"/articles/"+a.slug+"/";
 return{title:a.title,description:a.description,keywords:a.keywords,authors:[{name:"GuideSignal Editorial Team",url:base+"/author/guidesignal-editorial-team/"}],alternates:{canonical:url},openGraph:{type:"article",siteName:"GuideSignal",title:a.title,description:a.description,url,publishedTime:a.date,modifiedTime:a.updated,authors:["GuideSignal Editorial Team"],section:a.categoryName,tags:a.keywords},twitter:{card:"summary",title:a.title,description:a.description}};
}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const a=getArticleBySlug(slug);if(!a)notFound();
 const related=getRelatedArticles(a,4);const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";const articleUrl=siteUrl+"/articles/"+a.slug+"/";
 const articleSchema={"@context":"https://schema.org","@type":"Article","headline":a.title,"description":a.description,"datePublished":a.date,"dateModified":a.updated,"mainEntityOfPage":{"@type":"WebPage","@id":articleUrl},"author":{"@type":"Organization","name":"GuideSignal Editorial Team","url":siteUrl+"/author/guidesignal-editorial-team/"},"publisher":{"@type":"Organization","name":"GuideSignal","url":siteUrl},"articleSection":a.categoryName,"keywords":a.keywords};
 const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":siteUrl+"/"},{"@type":"ListItem","position":2,"name":a.categoryName,"item":siteUrl+"/category/"+a.category+"/"},{"@type":"ListItem","position":3,"name":a.title,"item":articleUrl}]};
 const minutes=Math.max(1,Math.round(a.body.trim().split(/\s+/).filter(Boolean).length/220));
 return <><JsonLd data={[articleSchema,breadcrumb]}/><ReadingProgress/><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href={"/category/"+a.category+"/"}>{a.categoryName}</Link><span>/</span><span aria-current="page">{a.title}</span></div>
 <div className="container article-layout"><article className="article-shell article-reading"><header className="article-header"><span className="eyebrow">{a.categoryName}</span><h1>{a.title}</h1><div className="article-meta"><span>By <Link href="/author/guidesignal-editorial-team/">GuideSignal Editorial Team</Link></span><span>•</span><span>Updated {a.updated}</span><span>•</span><span>{minutes} min read</span><span>•</span><span>{a.stage}</span></div><div className="disclosure-note">Some links may be affiliate links. See our <Link href="/disclosure/">affiliate disclosure</Link>.</div></header>
 <AdStack position="article"/>{a.offerKey&&<AffiliateCTA articleSlug={a.slug} position="article-top" offerKey={a.offerKey}/>}<div className="article-prose" dangerouslySetInnerHTML={{__html:markdownToHtml(a.body)}}/>
 <div className="article-ad-break"><AdsterraBanner size="300x250" slot={a.slug+"-300-inline-1"}/><AdsterraBanner size="468x60" slot={a.slug+"-468-inline-2"}/></div>
 {a.offerKey&&<AffiliateCTA articleSlug={a.slug} position="article-bottom" offerKey={a.offerKey}/>}
 {a.sources.length>0&&<section className="sources-section"><h2>Sources & further reading</h2><ul>{a.sources.map(s=><li key={s}><a href={s} target="_blank" rel="noopener noreferrer">{s}</a></li>)}</ul></section>}
 {related.length>0&&<section className="related-section"><div className="section-header"><div><span className="eyebrow">Keep reading</span><h2>Related guides</h2></div></div><div className="related-grid">{related.map(x=><Link className="related-card" key={x.slug} href={"/articles/"+x.slug+"/"}><span className="meta">{x.categoryName} · {x.stage}</span><h3>{x.title}</h3><p>{x.description}</p><span className="related-link">Read guide →</span></Link>)}</div></section>}
 <Smartlink articleSlug={a.slug}/><AdsterraBanner size="300x250" slot={a.slug+"-300-bottom"}/><AdsterraBanner size="468x60" slot={a.slug+"-468-bottom"}/><AdSlot slot="bottom" scriptUrl={process.env.NEXT_PUBLIC_AD_BOTTOM_SCRIPT_URL} zone={process.env.NEXT_PUBLIC_AD_BOTTOM_ZONE}/></article>
 <aside className="sidebar"><div className="info-card"><span className="eyebrow">About this guide</span><h3>Search intent: {a.intent}</h3><p className="muted">This page is part of the {a.stage} editorial funnel.</p><Link className="text-link" href="/editorial-policy/">Read our editorial policy →</Link></div><AdsterraBanner size="300x250" slot={a.slug+"-300-sidebar"}/><AdsterraBanner size="160x300" slot={a.slug+"-160x300-sidebar"}/><AdsterraBanner size="160x600" slot={a.slug+"-160x600-sidebar"}/><AdSlot slot="sidebar" scriptUrl={process.env.NEXT_PUBLIC_AD_SIDEBAR_SCRIPT_URL} zone={process.env.NEXT_PUBLIC_AD_SIDEBAR_ZONE}/><div className="info-card"><span className="eyebrow">Editorial standard</span><p className="muted">No guaranteed results, fake testimonials or unsupported claims. Health articles are general information, not medical advice.</p></div></aside></div></>;
}
