"use client";
import {useEffect,useState} from "react";
export function ReadingProgress(){
  const [progress,setProgress]=useState(0);
  useEffect(()=>{
    const update=()=>{const article=document.querySelector(".article-reading");if(!article){setProgress(0);return;}const rect=article.getBoundingClientRect();const total=Math.max(article.scrollHeight-window.innerHeight,1);setProgress(Math.min(100,Math.max(0,(-rect.top/total)*100)));};
    update();window.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);
    return()=>{window.removeEventListener("scroll",update);window.removeEventListener("resize",update)};
  },[]);
  return <div className="reading-progress" aria-hidden="true"><span style={{width:progress+"%"}}/></div>;
}
