"use client";
import {useEffect,useRef} from "react";

export function ReadingProgress(){
  const barRef=useRef<HTMLSpanElement>(null);

  useEffect(()=>{
    let frame=0;
    const update=()=>{
      if(frame)return;
      frame=window.requestAnimationFrame(()=>{
        frame=0;
        const article=document.querySelector(".article-reading");
        const bar=barRef.current;
        if(!article||!bar)return;
        const rect=article.getBoundingClientRect();
        const total=Math.max(article.scrollHeight-window.innerHeight,1);
        const value=Math.min(1,Math.max(0,-rect.top/total));
        bar.style.transform="scaleX("+value+")";

        const g=(window as Window&{gtag?:Function}).gtag;
        const percent=Math.round(value*100);
        for(const milestone of [25,50,75,90]){
          if(percent>=milestone&&!bar.dataset["sent"+milestone]){
            bar.dataset["sent"+milestone]="true";
            g?.("event","scroll_depth",{percent_scrolled:milestone});
          }
        }
      });
    };
    update();
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return()=>{
      window.removeEventListener("scroll",update);
      window.removeEventListener("resize",update);
      if(frame)window.cancelAnimationFrame(frame);
    };
  },[]);

  return <div className="reading-progress" aria-hidden="true"><span ref={barRef}/></div>;
}
