"use client";
import {useEffect,useRef,useState} from "react";
export function ReadingProgress(){
  const [progress,setProgress]=useState(0);
  const sent=useRef(new Set<number>());
  useEffect(()=>{
    const update=()=>{
      const article=document.querySelector(".article-reading");
      if(!article){setProgress(0);return;}
      const rect=article.getBoundingClientRect();
      const total=Math.max(article.scrollHeight-window.innerHeight,1);
      const value=Math.min(100,Math.max(0,(-rect.top/total)*100));
      setProgress(value);
      const g=(window as Window&{gtag?:Function}).gtag;
      for(const milestone of [25,50,75,90]){
        if(value>=milestone&&!sent.current.has(milestone)){
          sent.current.add(milestone);
          g?.("event","scroll_depth",{percent_scrolled:milestone});
        }
      }
    };
    update();window.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);
    return()=>{window.removeEventListener("scroll",update);window.removeEventListener("resize",update)};
  },[]);
  return <div className="reading-progress" aria-hidden="true"><span style={{width:progress+"%"}}/></div>;
}