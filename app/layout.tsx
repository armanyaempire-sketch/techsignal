import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ConsentProvider } from "@/components/consent";
import { Analytics } from "@/components/analytics";
import { AdsterraGlobalAds } from "@/components/adsterra";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";
const verification="TZ4UN7hYX8Xkb5NNifdkAeixecairRR0RqvKF3AeBKw";

export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"GuideSignal — Practical Guides for Smarter Choices",template:"%s | GuideSignal"},
 description:"Practical guides on AI, online business, health, fitness and women's wellness.",
 ...(verification?{verification:{google:verification}}:{}),
 robots:{index:true,follow:true},
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><head><meta name="google-adsense-account" content="ca-pub-4245594685213859" /></head><body><Header/><main>{children}</main><Footer/><ConsentProvider/><Analytics/><AdsterraGlobalAds/></body></html>;
}
