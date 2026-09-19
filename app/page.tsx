import Link from "next/link";
import {getAllArticles,getCategories} from "@/lib/articles";
import {AdSlot} from "@/components/ad-slot";

export default function Home(){
  const a=getAllArticles().slice(0,9),c=getCategories();
  return <>
    <section className="hero"><div className="container hero-grid"><div>
      <span className="eyebrow">TechSignal editorial</span>
      <h1>Useful ideas. Smarter decisions.</h1>
      <p>Research-aware guides for people comparing tools, improving routines and choosing products online.</p>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:24}}><Link className="button" href="#latest">Read latest</Link><Link className="button button-secondary" href="/about/">How it works</Link></div>
    </div><div className="hero-card"><span className="eyebrow">Reader-first</span><h3>Every article has a job.</h3><ul><li>Answer a real search question.</li><li>Add original decision value.</li><li>Link to useful next steps.</li><li>Disclose affiliate relationships plainly.</li></ul></div></div></section>
    <div className="container"><AdSlot slot="top" scriptUrl={process.env.NEXT_PUBLIC_AD_TOP_SCRIPT_URL} zone={process.env.NEXT_PUBLIC_AD_TOP_ZONE}/></div>
    <section className="section"><div className="container"><div className="section-header"><div><span className="eyebrow">Explore</span><h2>Three content desks</h2></div></div><div className="grid-3">{c.map(x=><Link className="card" key={x.slug} href={"/category/"+x.slug+"/"}><span className="eyebrow">{x.name}</span><h3>{x.name}</h3><p>{x.short}</p><strong>Explore desk →</strong></Link>)}</div></div></section>
    <section className="section" id="latest"><div className="container"><div className="section-header"><div><span className="eyebrow">Latest</span><h2>New guides</h2></div></div><div className="grid-3">{a.map(x=><article className="card" key={x.slug}><div className="meta">{x.categoryName} · {x.stage}</div><h3>{x.title}</h3><p>{x.description}</p><Link href={"/articles/"+x.slug+"/"}>Read guide →</Link></article>)}</div></div></section>
  </>;
}