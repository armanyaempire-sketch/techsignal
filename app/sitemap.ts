import type {MetadataRoute} from "next";
import {getAllArticles,getCategories} from "@/lib/articles";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{
 const base=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";
 return[{url:base+"/",lastModified:new Date()},...getCategories().map(c=>({url:base+"/category/"+c.slug+"/",lastModified:new Date()})),...getAllArticles().map(a=>({url:base+"/articles/"+a.slug+"/",lastModified:a.updated})),...["about","editorial-policy","disclosure","privacy","terms","contact","author/guidesignal-editorial-team"].map(p=>({url:base+"/"+p+"/",lastModified:new Date()}))];
}
