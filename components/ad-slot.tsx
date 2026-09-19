"use client";
import Script from "next/script";
import {useEffect,useState} from "react";
import {hasOptionalConsent} from "./consent";

const allowedHosts=[
  "pagead2.googlesyndication.com",
  "googleads.g.doubleclick.net",
  "securepubads.g.doubleclick.net",
  "www.googletagservices.com"
];

function isAllowedAdScript(raw:string){
  try{
    const url=new URL(raw);
    return url.protocol==="https:"&&allowedHosts.some(host=>url.hostname===host||url.hostname.endsWith("."+host));
  }catch{
    return false;
  }
}

export function AdSlot({slot,scriptUrl,zone}:{slot:string;scriptUrl?:string;zone?:string}){
  const [ok,setOk]=useState(false);
  useEffect(()=>setOk(hasOptionalConsent()),[]);
  if(!ok||!scriptUrl||!zone||!isAllowedAdScript(scriptUrl))return null;
  return <div className="ad-slot" data-slot={slot} data-zone={zone}>
    <span className="ad-label">Advertisement</span>
    <div id={zone} />
    <Script src={scriptUrl} strategy="afterInteractive" data-ts-ad={slot}/>
  </div>;
}
