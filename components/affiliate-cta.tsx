"use client";
import {useEffect} from "react";

const envMap:Record<string,string|undefined>={
  femicore:process.env.NEXT_PUBLIC_CLICKBANK_FEMICORE_HOPLINK,
  prodentim:process.env.NEXT_PUBLIC_CLICKBANK_PRODENTIM_HOPLINK,
  primebiome:process.env.NEXT_PUBLIC_CLICKBANK_PRIMEBIOME_HOPLINK,
  kerassentials:process.env.NEXT_PUBLIC_CLICKBANK_KERASSENTIALS_HOPLINK
};

export function AffiliateCTA({articleSlug,position,offerKey}:{articleSlug:string;position:string;offerKey?:string}){
  const hop=(offerKey&&envMap[offerKey])||process.env.NEXT_PUBLIC_CLICKBANK_DEFAULT_HOPLINK;
  useEffect(()=>{
    const fn=(e:MouseEvent)=>{
      const el=(e.target as HTMLElement).closest<HTMLAnchorElement>("[data-affiliate]");
      if(!el)return;
      const g=(window as Window & {gtag?:Function}).gtag;
      g?.("event","affiliate_click",{article_slug:articleSlug,cta_position:position,offer_key:offerKey||"default"});
    };
    document.addEventListener("click",fn);
    return()=>document.removeEventListener("click",fn)
  },[articleSlug,position,offerKey]);
  if(!hop)return null;
  const url=new URL(hop);
  url.searchParams.set("traffic_source","organic");
  url.searchParams.set("campaign",articleSlug);
  url.searchParams.set("creative",position);
  return <aside className="affiliate-card">
    <div><span className="eyebrow">Affiliate link</span><h3>Review the current offer</h3><p>Check current pricing, terms and product details on the seller's page. TechSignal may earn a commission from a qualifying purchase.</p></div>
    <a className="button" data-affiliate href={url.toString()} target="_blank" rel="sponsored noopener noreferrer">Check the offer</a>
  </aside>
}
