import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ConsentProvider } from "@/components/consent";
import { Analytics } from "@/components/analytics";
import "./globals.css";
const url=process.env.NEXT_PUBLIC_SITE_URL;
export const metadata:Metadata={...(url?{metadataBase:new URL(url)}:{}),title:{default:"TechSignal — Useful ideas. Smarter decisions.",template:"%s | TechSignal"},description:"Practical guides on AI, online business, health, fitness and women's wellness.",robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/><ConsentProvider/><Analytics/></body></html>;}