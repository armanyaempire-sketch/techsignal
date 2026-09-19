"use client";
import Script from "next/script";
import {useEffect,useState} from "react";
import {hasOptionalConsent} from "./consent";
export function AdSlot({slot,scriptUrl,zone}:{slot:string;scriptUrl?:string;zone?:string}){const[ok,setOk]=useState(false);useEffect(()=>setOk(hasOptionalConsent()),[]);if(!ok||!scriptUrl||!zone)return null;const id="ts-ad-"+slot;return <div className="ad-slot" data-slot={slot}><span className="ad-label">Advertisement</span><div id={id}></div><Script src={scriptUrl} strategy="afterInteractive"/></div>}