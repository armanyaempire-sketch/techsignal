import type {MetadataRoute} from "next";
import {getAllArticles,getCategories} from "@/lib/articles";

export const dynamic="force-static";

export default function sitemap():MetadataRoute.Sitemap{
  const base=process.env.NEXT_PUBLIC_SITE_URL||"https://guidesignal.vercel.app";
  const articles=getAllArticles();
  const latest=articles.map(a=>a.updated).sort().at(-1)||"2026-09-19";

  return[
    {url:base+"/",lastModified:latest},
    ...getCategories().map(c=>{
      const categoryArticles=articles.filter(a=>a.category===c.slug);
      const lastModified=categoryArticles.map(a=>a.updated).sort().at(-1)||latest;
      return{url:base+"/category/"+c.slug+"/",lastModified};
    }),
    ...articles.map(a=>({url:base+"/articles/"+a.slug+"/",lastModified:a.updated})),
    ...["about","editorial-policy","disclosure","privacy","terms","contact","author/guidesignal-editorial-team"].map(p=>({url:base+"/"+p+"/",lastModified:latest}))
  ];
}