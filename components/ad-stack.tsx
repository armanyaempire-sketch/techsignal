"use client";
import {AdsterraBanner,ResponsiveLeaderboard} from "@/components/adsterra";

type Position="home"|"article";
export function AdStack({position}:{position:Position}){
 return <section className="ad-stack" aria-label="Sponsored placements">
  <ResponsiveLeaderboard slot={position+"-leaderboard"}/>
  <AdsterraBanner size="468x60" slot={position+"-468-top"} visibility="desktop"/>
 </section>;
}
