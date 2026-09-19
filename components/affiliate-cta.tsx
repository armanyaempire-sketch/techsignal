"use client";
import {useEffect} from "react";
import {clickBankOffers,type ClickBankOfferKey} from "@/lib/clickbank";

const envMap:Record<ClickBankOfferKey,string|undefined>={
  prodentim:process.env.NEXT_PUBLIC_CLICKBANK_PRODENTIM_HOPLINK,
  brainsongx:process.env.NEXT_PUBLIC_CLICKBANK_BRAINSONGX_HOPLINK,
  enrev:process.env.NEXT_PUBLIC_CLICKBANK_ENREV_HOPLINK,
  prostavive:process.env.NEXT_PUBLIC_CLICKBANK_PROSTAVIVE_HOPLINK,
  audifort:process.env.NEXT_PUBLIC_CLICKBANK_AUDIFORT_HOPLINK
};

export function AffiliateCTA({articleSlug,position,offerKey}:{articleSlug:string;position:string;offerKey?:string}){
  const key=offerKey as ClickBankOfferKey|undefined;
  const offer=key&&clickBankOffers[key];
  const hop=(key&&envMap[key])||offer?.hoplink||process.env.NEXT_PUBLIC_CLICKBANK_DEFAULT_HOPLINK;
  useEffect(()=>{
    const fn=(e:MouseEvent)=>{
      const el=(e.target as HTMLElement).closest<HTMLAnchorElement>("[data-affiliate]");
      if(!el)return;
      const g=(window as Window & {gtag?:Function}).gtag;
      g?.("event","affiliate_click",{article_slug:articleSlug,cta_position:position,offer_key:offerKey||"default"});
    };
    document.addEventListener("click",fn);
    return()=>document.removeEventListener("click",fn);
  },[articleSlug,position,offerKey]);
  if(!hop)return null;
  const url=new URL(hop);
  url.searchParams.set("traffic_source","organic");
  url.searchParams.set("campaign",articleSlug);
  url.searchParams.set("creative",position);
  const name=offer?.name||"the current offer";
  return <aside className="affiliate-card"><div><span className="eyebrow">Affiliate disclosure</span><h3>Check {name}</h3><p>Review the seller's current pricing, terms, ingredients or product details before purchasing. TechSignal may earn a commission from a qualifying purchase.</p></div><a className="button" data-affiliate href={url.toString()} target="_blank" rel="sponsored noopener noreferrer">View current offer</a></aside>;
}
