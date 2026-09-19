"use client";

import {FormEvent,useEffect,useMemo,useState} from "react";
import {useRouter} from "next/navigation";
import type {Article} from "@/lib/articles";

export function SiteSearch({articles,compact=false}:{articles?:Article[];compact?:boolean}){
 const router=useRouter();
 const [query,setQuery]=useState("");
 useEffect(()=>{if(typeof window!=="undefined"){setQuery(new URLSearchParams(window.location.search).get("q")||"");}},[]);
 const submit=(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  const value=query.trim();
  router.push(value?"/search/?q="+encodeURIComponent(value):"/search/");
 };
 const results=useMemo(()=>{
  if(!articles)return[];
  const q=query.trim().toLowerCase();
  if(!q)return[];
  return articles.filter(a=>[
    a.title,a.description,a.body,a.categoryName,a.intent,a.author,...a.keywords
  ].join(" ").toLowerCase().includes(q)).slice(0,50);
 },[articles,query]);
 if(!articles){
  return <form className="site-search site-search-compact" role="search" onSubmit={submit}>
   <label className="sr-only" htmlFor="site-search-input">Search GuideSignal</label>
   <input id="site-search-input" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search guides..." autoComplete="off"/>
   <button type="submit" aria-label="Search GuideSignal">Search</button>
  </form>;
 }
 return <section className="site-search-page" aria-label="Site search">
  <form className="site-search site-search-large" role="search" onSubmit={submit}>
   <label className="sr-only" htmlFor="site-search-page-input">Search GuideSignal guides</label>
   <input id="site-search-page-input" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search AI, fitness, skincare, business..." autoFocus={!compact}/>
   <button type="submit">Search</button>
  </form>
  {query.trim()?<div className="search-results" aria-live="polite">
    <div className="search-results-header"><h2>{results.length} result{results.length===1?"":"s"} for “{query.trim()}”</h2><span>Searches titles, descriptions, article text, topics and categories.</span></div>
    {results.length?results.map(a=><article className="search-result-card" key={a.slug}>
      <div className="meta">{a.categoryName} · {a.stage}</div>
      <h3><a href={"/articles/"+a.slug+"/"}>{a.title}</a></h3>
      <p>{a.description}</p>
    </article>):<div className="search-empty"><h2>No matching guides yet</h2><p>Try a broader term such as AI, fitness, skincare, business or email marketing.</p></div>}
  </div>:<div className="search-empty"><h2>Search GuideSignal</h2><p>Find guides by topic, category, phrase or question.</p></div>}
 </section>;
}
