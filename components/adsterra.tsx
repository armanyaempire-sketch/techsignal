"use client";
import {useEffect,useRef,useState} from "react";
import {hasOptionalConsent} from "./consent";

type BannerSize="468x60"|"300x250"|"160x300"|"160x600"|"728x90"|"320x50";
type Visibility="all"|"desktop";
const bannerConfig:Record<BannerSize,{key:string;width:number;height:number}>={
 "468x60":{key:"c5ddf1ec28d162c14fb4535f4e1ffdbb",width:468,height:60},
 "300x250":{key:"037d26ce79ace1819e9433122a0b6cf6",width:300,height:250},
 "160x300":{key:"a68d50000a4adb156285238e1956a796",width:160,height:300},
 "160x600":{key:"00139b8040a774bd95abad40435a790a",width:160,height:600},
 "728x90":{key:"6df62a3b575f3486c0959322a13181bd",width:728,height:90},
 "320x50":{key:"f9dc1efb35f69c1420fb8875abdde903",width:320,height:50}
};

let queue:Promise<void>=Promise.resolve();
function enqueue(task:()=>Promise<void>){const next=queue.then(task);queue=next.catch(()=>{});return next;}
function useConsent(){const[active,setActive]=useState(false);useEffect(()=>setActive(hasOptionalConsent()),[]);return active;}
function useDesktopVisibility(visibility:Visibility){
 const[visible,setVisible]=useState(visibility==="all");
 useEffect(()=>{
  if(visibility==="all"){setVisible(true);return;}
  const mq=window.matchMedia("(min-width:1001px)");const sync=()=>setVisible(mq.matches);
  sync();mq.addEventListener?.("change",sync);return()=>mq.removeEventListener?.("change",sync);
 },[visibility]);
 return visible;
}

export function AdsterraBanner({size,slot,visibility="all"}:{size:BannerSize;slot:string;visibility?:Visibility}){
 const active=useConsent();const visible=useDesktopVisibility(visibility);const mount=useRef<HTMLDivElement>(null);const cfg=bannerConfig[size];
 useEffect(()=>{
  if(!active||!visible||!mount.current)return;
  let cancelled=false;
  void enqueue(async()=>{
   if(cancelled)return;
   const el=mount.current;if(!el||el.dataset.loaded==="true"||el.dataset.loaded==="loading")return;
   el.dataset.loaded="loading";
   await new Promise<void>((resolve,reject)=>{
    (window as Window&{atOptions?:Record<string,unknown>}).atOptions={key:cfg.key,format:"iframe",height:cfg.height,width:cfg.width,params:{}};
    const script=document.createElement("script");
    script.src="https://disregardpervertmural.com/"+cfg.key+"/invoke.js";
    script.async=true;script.onload=()=>resolve();script.onerror=()=>{el.dataset.loaded="failed";el.dataset.failed="true";el.closest<HTMLElement>(".adsterra-slot")?.setAttribute("data-ad-failed","true");reject(new Error("Adsterra banner failed"));};
    el.appendChild(script);
   });
   if(el&&!cancelled)el.dataset.loaded="true";
  });
  return()=>{cancelled=true};
 },[active,visible,cfg.key,cfg.height,cfg.width]);
 if(!active||!visible)return null;
 return <div className={"ad-slot adsterra-slot adsterra-"+size} data-ad-format={size} data-ad-slot={slot}><span className="ad-label">Advertisement</span><div ref={mount} className="adsterra-mount"/></div>;
}

type LeaderboardTier="mobile"|"tablet"|"desktop";
export function ResponsiveLeaderboard({slot}:{slot:string}){
 const active=useConsent();const[tier,setTier]=useState<LeaderboardTier>("mobile");
 useEffect(()=>{
  if(!active)return;
  const mobile=window.matchMedia("(max-width:700px)");
  const tablet=window.matchMedia("(min-width:701px) and (max-width:1199px)");
  const sync=()=>setTier(mobile.matches?"mobile":tablet.matches?"tablet":"desktop");
  sync();mobile.addEventListener?.("change",sync);tablet.addEventListener?.("change",sync);
  return()=>{mobile.removeEventListener?.("change",sync);tablet.removeEventListener?.("change",sync)};
 },[active]);
 if(!active)return null;
 const size=tier==="mobile"?"320x50":tier==="tablet"?"468x60":"728x90";
 return <AdsterraBanner size={size} slot={slot}/>;
}

export function NativeBanner({slot,variant="horizontal"}:{slot:string;variant?: "horizontal"|"vertical"}){
 const active=useConsent();const wrap=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  if(!active||!wrap.current)return;
  let cancelled=false;
  void enqueue(async()=>{
   if(cancelled)return;
   const el=wrap.current;if(!el||el.dataset.loaded==="true"||el.dataset.loaded==="loading")return;
   el.dataset.loaded="loading";
   const container=document.createElement("div");container.id="container-c4d6c7521da8806f322e86f7b566a2e0";el.appendChild(container);
   await new Promise<void>((resolve,reject)=>{
    const script=document.createElement("script");script.async=true;script.setAttribute("data-cfasync","false");
    script.src="https://disregardpervertmural.com/c4d6c7521da8806f322e86f7b566a2e0/invoke.js";
    script.onload=()=>resolve();script.onerror=()=>{el.dataset.loaded="failed";el.dataset.failed="true";el.closest<HTMLElement>(".adsterra-slot")?.setAttribute("data-ad-failed","true");reject(new Error("Adsterra native failed"));};
    el.appendChild(script);
   });
   if(el&&!cancelled)el.dataset.loaded="true";
  });
  return()=>{cancelled=true};
 },[active]);
 if(!active)return null;
 return <div className={"ad-slot adsterra-slot adsterra-native adsterra-native-"+variant} data-ad-format={"native-"+variant} data-ad-slot={slot}><span className="ad-label">Advertisement</span><div ref={wrap} className="adsterra-native-mount"/></div>;
}

export function AdsterraGlobalAds(){
 const active=useConsent();
 useEffect(()=>{
  if(!active)return;
  const add=(id:string,src:string,parent:HTMLElement)=>{
   if(document.querySelector('script[data-guidesignal-ad="'+id+'"]'))return;
   const script=document.createElement("script");script.src=src;script.async=true;script.dataset.guidesignalAd=id;parent.appendChild(script);
  };
  add("popunder","https://disregardpervertmural.com/d7/91/75/d79175dc149cc5eb147c18b4a115716d.js",document.head);
  add("socialbar","https://disregardpervertmural.com/31/55/5f/31555f8da80d579a4c50e4ccf1cc5644.js",document.body);
 },[active]);
 return null;
}
