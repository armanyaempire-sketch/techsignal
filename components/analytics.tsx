"use client";
import {useEffect} from "react";
import {hasOptionalConsent} from "./consent";

const DEFAULT_GA_ID="G-FVLT46Z99L";

export function Analytics(){
  useEffect(()=>{
    if(!hasOptionalConsent())return;
    const id=process.env.NEXT_PUBLIC_GA_ID||DEFAULT_GA_ID;
    if(!id||document.querySelector("[data-ts-ga]"))return;

    const script=document.createElement("script");
    script.async=true;
    script.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(id);
    script.dataset.tsGa="true";
    document.head.appendChild(script);

    const config=document.createElement("script");
    config.dataset.tsGa="true";
    config.textContent=
      "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}"+
      "gtag('js',new Date());"+
      "gtag('config',"+JSON.stringify(id)+",{anonymize_ip:true});";
    document.head.appendChild(config);

    return()=>{
      script.remove();
      config.remove();
    };
  },[]);
  return null;
}
