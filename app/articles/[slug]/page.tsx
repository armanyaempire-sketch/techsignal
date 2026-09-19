import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getAllArticles,getArticleBySlug,getRelatedArticles} from "@/lib/articles";
import {markdownToHtml} from "@/lib/markdown";
import {AffiliateCTA} from "@/components/affiliate-cta";
import {AdStack} from "@/components/ad-stack";
import {AdSlot} from "@/components/ad-slot";
import {AdsterraBanner,NativeBanner} from "@/components/adsterra";
import {AdRail} from "@/components/ad-rail";
import {ArticleAdFlow} from "@/components/article-ad-flow";
import {JsonLd} from "@/components/json-ld";
import {ReadingProgress} from "@/components/reading-progress";
import {FunnelBridge} from "@/components/funnel-bridge";
import {ArticleVisual} from "@/components/article-visual";
import {SITE_URL} from "@/lib/site";

export function generateStaticParams(){return getAllArticles().map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const a=getArticleBySlug(slug);if(!a)return{};
 const base=SITE_URL;const url=base+"/articles/"+a.slug+"/";
 return{title:a.title,description:a.description,keywords:a.keywords,authors:[{name:"GuideSignal Editorial Team",url:base+"/author/guidesignal-editorial-team/"}],alternates:{canonical:url},openGraph:{type:"article",siteName:"GuideSignal",title:a.title,description:a.description,url,publishedTime:a.date,modifiedTime:a.updated,authors:["GuideSignal Editorial Team"],section:a.categoryName,tags:a.keywords},twitter:{card:"summary",title:a.title,description:a.description}};
}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const a=getArticleBySlug(slug);if(!a)notFound();
 const related=getRelatedArticles(a,4);const siteUrl=SITE_URL;const articleUrl=siteUrl+"/articles/"+a.slug+"/";
 const totalWords=a.body.trim().split(/\s+/).filter(Boolean).length;
 const articleSchema={"@context":"https://schema.org","@type":"Article","headline":a.title,"description":a.description,"datePublished":a.date,"dateModified":a.updated,"inLanguage":"en","wordCount":totalWords,"isAccessibleForFree":true,"mainEntityOfPage":{"@type":"WebPage","@id":articleUrl},"author":{"@type":"Organization","name":"GuideSignal Editorial Team","url":siteUrl+"/author/guidesignal-editorial-team/"},"publisher":{"@type":"Organization","@id":siteUrl+"#organization","name":"GuideSignal","url":siteUrl},"articleSection":a.categoryName,"keywords":a.keywords};
 const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":siteUrl+"/"},{"@type":"ListItem","position":2,"name":a.categoryName,"item":siteUrl+"/category/"+a.category+"/"},{"@type":"ListItem","position":3,"name":a.title,"item":articleUrl}]};
 const minutes=Math.max(1,Math.round(totalWords/220));
 const articleHtml=markdownToHtml(a.body);
 return <><JsonLd data={[articleSchema,breadcrumb]}/><ReadingProgress/><div className="breadcrumbs"><Link prefetch={false} href="/">Home</Link><span>/</span><Link prefetch={false} href={"/category/"+a.category+"/"}>{a.categoryName}</Link><span>/</span><span aria-current="page">{a.title}</span></div>
 <div className="container article-layout"><article className="article-shell article-reading"><header className="article-header"><span className="eyebrow">{a.categoryName}</span><h1>{a.title}</h1><div className="article-meta"><span>By <Link prefetch={false} href="/author/guidesignal-editorial-team/">GuideSignal Editorial Team</Link></span><span>•</span><span>Updated {a.updated}</span><span>•</span><span>{minutes} min read</span><span>•</span><span>{a.stage}</span></div><div className="disclosure-note">Some links may be affiliate links. See our <Link prefetch={false} href="/disclosure/">affiliate disclosure</Link>.</div></header>
 <ArticleVisual slug={a.slug} category={a.category} title={a.title} variant="hero"/>
 <AdStack position="article"/>{a.offerKey&&<AffiliateCTA articleSlug={a.slug} position="article-top" offerKey={a.offerKey}/>}<ArticleAdFlow html={articleHtml} slug={a.slug} totalWords={totalWords}/>
 {a.offerKey&&<AffiliateCTA articleSlug={a.slug} position="article-bottom" offerKey={a.offerKey}/>}
 <FunnelBridge current={a} related={related}/>
 {a.sources.length>0&&<section className="sources-section"><h2>Sources & further reading</h2><ul>{a.sources.map(s=><li key={s}><a href={s} target="_blank" rel="noopener noreferrer">{s}</a></li>)}</ul></section>}
 {related.length>0&&<section className="related-section"><div className="section-header"><div><span className="eyebrow">Keep reading</span><h2>Related guides</h2></div></div><div className="related-grid">{related.map(x=><Link className="related-card" key={x.slug} href={"/articles/"+x.slug+"/"} prefetch={false}><span className="meta">{x.categoryName} · {x.stage}</span><h3>{x.title}</h3><p>{x.description}</p><span className="related-link">Read guide →</span></Link>)}</div></section>}<div className="article-end-ads"><NativeBanner slot={a.slug+"-native-bottom"} variant="horizontal"/><AdsterraBanner size="468x60" slot={a.slug+"-468-bottom"} visibility="desktop"/></div><AdSlot slot="bottom" scriptUrl={process.env.NEXT_PUBLIC_AD_BOTTOM_SCRIPT_URL} zone={process.env.NEXT_PUBLIC_AD_BOTTOM_ZONE}/></article>
 <aside className="sidebar"><div className="info-card"><span className="eyebrow">About this guide</span><h3>Search intent: {a.intent}</h3><p className="muted">This page is part of the {a.stage} editorial funnel.</p><Link className="text-link" href="/editorial-policy/">Read our editorial policy →</Link></div><AdRail prefix={a.slug+"-rail"}/><AdSlot slot="sidebar" scriptUrl={process.env.NEXT_PUBLIC_AD_SIDEBAR_SCRIPT_URL} zone={process.env.NEXT_PUBLIC_AD_SIDEBAR_ZONE}/><div className="info-card"><span className="eyebrow">Editorial standard</span><p className="muted">No guaranteed results, fake testimonials or unsupported claims. Health articles are general information, not medical advice.</p></div></aside></div></>;
}