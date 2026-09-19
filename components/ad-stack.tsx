"use client";
import {AdsterraBanner,NativeBanner,ResponsiveLeaderboard} from "@/components/adsterra";

type Position="home"|"article";
export function AdStack({position}:{position:Position}){
 return <section className="ad-stack" aria-label="Sponsored placements">
  <ResponsiveLeaderboard slot={position+"-leaderboard"}/>
  <AdsterraBanner size="468x60" slot={position+"-468-top"}/>
  {position==="article"&&<NativeBanner slot="article-native-horizontal" variant="horizontal"/>}
 </section>;
}
