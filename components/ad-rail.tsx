import {AdsterraBanner} from "@/components/adsterra";

export function AdRail({prefix}:{prefix:string}){
 return <div className="ad-rail" aria-label="Sponsored sidebar placements">
  <AdsterraBanner size="300x250" slot={prefix+"-300x250"} visibility="desktop"/>
  <AdsterraBanner size="160x300" slot={prefix+"-160x300"} visibility="desktop"/>
  <AdsterraBanner size="160x600" slot={prefix+"-160x600"} visibility="desktop"/>
 </div>;
}
