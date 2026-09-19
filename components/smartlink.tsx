"use client";
const SMARTLINK="https://disregardpervertmural.com/vh1wyu66?key=611ba899079718c725036280a49aea90";

export function Smartlink({articleSlug}:{articleSlug?:string}){
 const onClick=()=>{
  const g=(window as Window&{gtag?:Function}).gtag;
  g?.("event","smartlink_click",{article_slug:articleSlug||"home",link_url:SMARTLINK});
 };
 return <aside className="smartlink-card">
  <div><span className="eyebrow">Sponsored resource</span><h3>Explore a relevant resource</h3><p>This is a third-party advertising link. Review the destination before continuing.</p></div>
  <a className="button button-secondary" href={SMARTLINK} target="_blank" rel="sponsored noopener noreferrer" onClick={onClick}>Explore resource</a>
 </aside>;
}
