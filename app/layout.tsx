import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ConsentProvider } from "@/components/consent";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const verification="TZ4UN7hYX8Xkb5NNifdkAeixecairRR0RqvKF3AeBKw";

export const metadata:Metadata={
 metadataBase:new URL(SITE_URL),
 title:{default:"GuideSignal — Practical, Source-Aware Guides",template:"%s | GuideSignal"},
 description:"Practical, source-aware guides on AI, online business, health, fitness, skincare and women's wellness.",
 ...(verification?{verification:{google:verification}}:{}),
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
};

const organization={
 "@context":"https://schema.org",
 "@type":"Organization",
 "@id":SITE_URL+"#organization",
 name:"GuideSignal",
 url:SITE_URL,
 description:"An independent editorial publication covering practical guides across AI, online business, health, fitness and women's wellness."
};

const website={
 "@context":"https://schema.org",
 "@type":"WebSite",
 "@id":SITE_URL+"#website",
 url:SITE_URL,
 name:"GuideSignal",
 publisher:{"@id":SITE_URL+"#organization"},
 potentialAction:{
  "@type":"SearchAction",
  target:{"@type":"EntryPoint","urlTemplate":SITE_URL+"/search/?q={search_term_string}"},
  "query-input":"required name=search_term_string"
 }
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><head><meta name="google-adsense-account" content="ca-pub-4245594685213859" /><link rel="alternate" type="application/rss+xml" title="GuideSignal RSS" href={SITE_URL+"/feed.xml"} /></head><body><Header/><main>{children}</main><Footer/><ConsentProvider/><Analytics/><JsonLd data={[organization,website]}/></body></html>;
}