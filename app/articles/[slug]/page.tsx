import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getAllArticles,getArticleBySlug,getRelatedArticles,getArticleFaq} from "@/lib/articles";
import {AffiliateCTA} from "@/components/affiliate-cta";
import {markdownToHtml} from "@/lib/markdown";
import {AdSlot} from "@/components/ad-slot";
import {JsonLd} from "@/components/json-ld";
import {ReadingProgress} from "@/components/reading-progress";
import {FunnelBridge} from "@/components/funnel-bridge";
import {ArticleVisual} from "@/components/article-visual";
import {SITE_URL} from "@/lib/site";
import {getEditorialDesk} from "@/lib/editorial";

export function generateStaticParams(){return getAllArticles().map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const a=getArticleBySlug(slug);if(!a)return{};
 const base=SITE_URL;const url=base+"/articles/"+a.slug+"/";const desk=getEditorialDesk(a.category);
 return{title:a.title,description:a.description,keywords:a.keywords,authors:[{name:desk.name,url:base+"/author/guidesignal-editorial-team/"}],alternates:{canonical:url},openGraph:{type:"article",siteName:"GuideSignal",title:a.title,description:a.description,url,publishedTime:a.date,modifiedTime:a.updated,authors:[desk.name],section:a.categoryName,tags:a.keywords},twitter:{card:"summary",title:a.title,description:a.description}};
}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const a=getArticleBySlug(slug);if(!a)notFound();
 const related=getRelatedArticles(a,4);const siteUrl=SITE_URL;const articleUrl=siteUrl+"/articles/"+a.slug+"/";const desk=getEditorialDesk(a.category);
 const totalWords=a.body.trim().split(/\s+/).filter(Boolean).length;
 const articleImage=siteUrl+"/article-visuals/"+(a.category==="e-business"?"e-business.svg":a.category==="health-fitness"?"health-fitness.svg":"womens-health-beauty.svg");
 const articleSchema={"@context":"https://schema.org","@type":"Article","headline":a.title,"description":a.description,"image":[articleImage],"datePublished":a.date,"dateModified":a.updated,"inLanguage":"en","wordCount":totalWords,"isAccessibleForFree":true,"mainEntityOfPage":{"@type":"WebPage","@id":articleUrl},"author":{"@type":"Organization","@id":siteUrl+"#"+desk.id,"name":desk.name,"url":siteUrl+"/author/guidesignal-editorial-team/"},"publisher":{"@type":"Organization","@id":siteUrl+"#organization","name":"GuideSignal","url":siteUrl},"articleSection":a.categoryName,"keywords":a.keywords};
 const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":siteUrl+"/"},{"@type":"ListItem","position":2,"name":a.categoryName,"item":siteUrl+"/category/"+a.category+"/"},{"@type":"ListItem","position":3,"name":a.title,"item":articleUrl}]};
 const minutes=Math.max(1,Math.round(totalWords/220));
 const articleHtml=markdownToHtml(a.body);
 const faqs=getArticleFaq(a);
 return <><JsonLd data={[articleSchema,breadcrumb]}/><ReadingProgress/><div className="breadcrumbs"><Link prefetch={false} href="/">Home</Link><span>/</span><Link prefetch={false} href={"/category/"+a.category+"/"}>{a.categoryName}</Link><span>/</span><span aria-current="page">{a.title}</span></div>
 <div className="container article-layout"><article className="article-shell article-reading"><header className="article-header"><span className="eyebrow">{a.categoryName}</span><h1>{a.title}</h1><div className="article-meta"><span>By <Link prefetch={false} href="/author/guidesignal-editorial-team/">{desk.name}</Link></span><span>•</span><span>Desk: {desk.name}</span><span>•</span><span>Updated {a.updated}</span><span>•</span><span>{minutes} min read</span><span>•</span><span>{a.stage}</span></div><div className="editorial-trust-strip"><span><strong>Research desk</strong> {desk.focus}</span><span><strong>Sources</strong> {a.sources.length}</span><span><strong>Standard</strong> {desk.standard}</span></div><div className="disclosure-note">Some links may be affiliate links. See our <Link prefetch={false} href="/disclosure/">affiliate disclosure</Link>.</div></header>
 <ArticleVisual slug={a.slug} category={a.category} title={a.title} variant="hero"/>
 <div className="article-prose" dangerouslySetInnerHTML={{__html:articleHtml}}/><AdSlot slot={a.slug+"-contextual"} scriptUrl={process.env.NEXT_PUBLIC_AD_ARTICLE_SCRIPT_URL} zone={process.env.NEXT_PUBLIC_AD_ARTICLE_ZONE}/>{a.offerKey&&<AffiliateCTA articleSlug={a.slug} position="article-bottom" offerKey={a.offerKey}/>}
 <FunnelBridge current={a} related={related}/>
 <section className="article-faq" aria-labelledby="article-faq-title"><div className="section-header"><div><span className="eyebrow">Reader questions</span><h2 id="article-faq-title">Frequently asked questions</h2></div></div><div className="faq-list">{faqs.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>{a.sources.length>0&&<section className="sources-section"><h2>Sources & further reading</h2><ul>{a.sources.map(s=><li key={s}><a href={s} target="_blank" rel="noopener noreferrer">{s}</a></li>)}</ul></section>}
 {related.length>0&&<section className="related-section"><div className="section-header"><div><span className="eyebrow">Keep reading</span><h2>Related guides</h2></div></div><div className="related-grid">{related.map(x=><Link className="related-card" key={x.slug} href={"/articles/"+x.slug+"/"} prefetch={false}><span className="meta">{x.categoryName} · {x.stage}</span><h3>{x.title}</h3><p>{x.description}</p><span className="related-link">Read guide →</span></Link>)}</div></section>}</article>
 <aside className="sidebar"><div className="info-card"><span className="eyebrow">About this guide</span><h3>Search intent: {a.intent}</h3><p className="muted">This page is part of the {a.stage} editorial funnel.</p><Link className="text-link" href="/editorial-policy/">Read our editorial policy →</Link></div><div className="info-card"><span className="eyebrow">Editorial standard</span><p className="muted">No guaranteed results, fake testimonials or unsupported claims. Health articles are general information, not medical advice.</p></div></aside></div></>;
}