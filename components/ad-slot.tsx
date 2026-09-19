"use client";
import Script from "next/script";
import {useEffect,useState} from "react";
import {hasOptionalConsent} from "./consent";

export function AdSlot({slot,scriptUrl,zone}:{slot:string;scriptUrl?:string;zone?:string}){
  const [ok,setOk]=useState(false);
  useEffect(()=>setOk(hasOptionalConsent()),[]);
  if(!ok||!scriptUrl||!zone)return null;
  return <div className="ad-slot" data-slot={slot} data-zone={zone}>
    <span className="ad-label">Advertisement</span>
    <div id={zone} />
    <Script src={scriptUrl} strategy="afterInteractive" data-ts-ad={slot}/>
  </div>;
}