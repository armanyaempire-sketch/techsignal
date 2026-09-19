import Link from "next/link";
import {getAllArticles,getCategories} from "@/lib/articles";
import {AdStack} from "@/components/ad-stack";
import {JsonLd} from "@/components/json-ld";

export default function Home(){
  const a=getAllArticles().slice(0,9),c=getCategories();
  const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";
  const data={"@context":"https://schema.org","@type":"CollectionPage","name":"GuideSignal","url":siteUrl,"description":"Practical guides on AI, online business, health, fitness and women's wellness.","isPartOf":{"@type":"WebSite","name":"GuideSignal","url":siteUrl}};
  return <><JsonLd data={data}/><section className="hero"><div className="container hero-grid"><div>
      <span className="eyebrow">GuideSignal editorial</span><h1>Practical guides for smarter choices.</h1>
      <p>Research-aware guides for people comparing tools, improving routines and choosing products online.</p>
      <div className="hero-actions"><Link className="button" href="#latest">Read latest</Link><Link className="button button-secondary" href="/about/">How we work</Link></div>
    </div><div className="hero-card"><span className="eyebrow">Reader-first</span><h3>Every article has a job.</h3><ul><li>Answer a real search question.</li><li>Add original decision value.</li><li>Explain trade-offs clearly.</li><li>Disclose affiliate relationships plainly.</li></ul></div></div></section>
    <div className="container"><AdStack position="home"/></div>
    <section className="section"><div className="container"><div className="section-header"><div><span className="eyebrow">Explore</span><h2>Three content desks</h2><p className="section-intro">Start with the subject that matches what you are trying to solve.</p></div></div><div className="grid-3">{c.map(x=><Link className="card category-card" key={x.slug} href={"/category/"+x.slug+"/"}><span className="eyebrow">{x.name}</span><h3>{x.name}</h3><p>{x.short}</p><strong>Explore desk <span aria-hidden="true">→</span></strong></Link>)}</div></div></section>
    <section className="section section-soft" id="latest"><div className="container"><div className="section-header"><div><span className="eyebrow">Latest</span><h2>New guides</h2></div></div><div className="grid-3">{a.map(x=><article className="card" key={x.slug}><div className="meta">{x.categoryName} · {x.stage}</div><h3>{x.title}</h3><p>{x.description}</p><Link href={"/articles/"+x.slug+"/"}>Read guide <span aria-hidden="true">→</span></Link></article>)}</div></div></section>
  </>;
}
