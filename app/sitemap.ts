import type {MetadataRoute} from "next";
import {getAllArticles,getCategories} from "@/lib/articles";

export const dynamic = "force-static";

export default function sitemap():MetadataRoute.Sitemap{
  const base=process.env.NEXT_PUBLIC_SITE_URL||"https://techsignal.example";
  return[
    {url:base+"/",lastModified:new Date()},
    ...getCategories().map(c=>({url:base+"/category/"+c.slug+"/",lastModified:new Date()})),
    ...getAllArticles().map(a=>({url:base+"/articles/"+a.slug+"/",lastModified:a.updated})),
    ...["about","disclosure","privacy","terms","contact"].map(p=>({url:base+"/"+p+"/",lastModified:new Date()}))
  ];
}
