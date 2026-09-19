"use client";

/**
 * GuideSignal ad policy:
 * - No global popunders, social bars, forced redirects or opaque ad scripts.
 * - No third-party ad code is embedded here.
 * - This compatibility layer intentionally renders no units until a vetted
 *   network is configured through the generic AdSlot component.
 */

type BannerSize="468x60"|"300x250"|"160x300"|"160x600"|"728x90"|"320x50";
type Visibility="all"|"desktop";

export function AdsterraBanner(_props:{size:BannerSize;slot:string;visibility?:Visibility}){return null;}

export function ResponsiveLeaderboard(_props:{slot:string}){return null;}

export function NativeBanner(_props:{slot:string;variant?:"horizontal"|"vertical"}){return null;}

export function AdsterraGlobalAds(){return null;}
