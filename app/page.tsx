import type {Metadata} from "next";
import Link from "next/link";
import {getAllArticles,getCategories} from "@/lib/articles";
import {JsonLd} from "@/components/json-ld";

export const metadata:Metadata={
 title:"Practical Guides for Smarter Choices",
 description:"Research-aware guides on AI, online business, health, fitness and women's wellness.",
 alternates:{canonical:"https://guidesignal.vercel.app/"},
 openGraph:{type:"website",siteName:"GuideSignal",title:"Practical Guides for Smarter Choices",description:"Research-aware guides on AI, online business, health, fitness and women's wellness.",url:"https://guidesignal.vercel.app/"},
 twitter:{card:"summary",title:"Practical Guides for Smarter Choices",description:"Research-aware guides on AI, online business, health, fitness and women's wellness."}
};

export default function Home(){
 const articles=getAllArticles().slice(0,9),categories=getCategories(),siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";
 const data={"@context":"https://schema.org","@type":"CollectionPage","name":"GuideSignal","url":siteUrl,"description":"Practical guides on AI, online business, health, fitness and women's wellness.","isPartOf":{"@type":"WebSite","name":"GuideSignal","url":siteUrl}};
 return <><JsonLd data={data}/><section className="hero"><div className="container hero-grid"><div>
  <span className="eyebrow">GuideSignal editorial</span><h1>Practical guides for smarter choices.</h1><p>Research-aware guides for people comparing tools, improving routines and choosing products online.</p><div className="hero-actions"><Link className="button" href="#latest">Read latest</Link><Link className="button button-secondary" href="/about/">How we work</Link></div>
 </div><div className="hero-card"><span className="eyebrow">Explore</span><h3>Browse the latest guides</h3><p>Practical research and explainers across business, health, fitness and women’s wellness.</p></div></div></section>

 <section className="section"><div className="container"><div className="section-header"><div><span className="eyebrow">Explore</span><h2>Three content desks</h2><p className="section-intro">Start with the subject that matches what you are trying to solve.</p></div></div><div className="grid-3">{categories.map(x=><Link className="card category-card" key={x.slug} href={"/category/"+x.slug+"/"} prefetch={false}><span className="eyebrow">{x.name}</span><h3>{x.name}</h3><p>{x.short}</p><strong>Explore desk <span aria-hidden="true">→</span></strong></Link>)}</div></div></section>
 <section className="section section-soft" id="latest"><div className="container"><div className="section-header"><div><span className="eyebrow">Latest</span><h2>New guides</h2></div></div><div className="home-latest-layout"><main className="home-latest-main"><div className="grid-3">{articles.map(x=><article className="card" key={x.slug}><div className="meta">{x.categoryName} · {x.stage}</div><h3><Link prefetch={false} href={"/articles/"+x.slug+"/"}>{x.title}</Link></h3><p>{x.description}</p></article>)}</div></main></div></div></section>
 </>;
}
