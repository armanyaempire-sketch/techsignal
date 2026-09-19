import type {MetadataRoute} from "next";
import {getAllArticles,getCategories} from "@/lib/articles";
import {SITE_URL} from "@/lib/site";

export const dynamic="force-static";

export default function sitemap():MetadataRoute.Sitemap{
 const articles=getAllArticles();
 const categories=getCategories();
 const latest=articles.map(a=>a.updated).sort().at(-1)||"2026-09-19";
 return[
  {url:SITE_URL+"/",lastModified:latest,changeFrequency:"daily" as const,priority:1},
  ...categories.map(c=>{
   const categoryArticles=articles.filter(a=>a.category===c.slug);
   const lastModified=categoryArticles.map(a=>a.updated).sort().at(-1)||latest;
   return{url:SITE_URL+"/category/"+c.slug+"/",lastModified,changeFrequency:"weekly" as const,priority:.8};
  }),
  ...articles.map(a=>({url:SITE_URL+"/articles/"+a.slug+"/",lastModified:a.updated,changeFrequency:"monthly" as const,priority:.7})),
  ...["about","editorial-policy","disclosure","privacy","terms","contact","author/guidesignal-editorial-team"].map(p=>({url:SITE_URL+"/"+p+"/",changeFrequency:"yearly" as const,priority:.3}))
 ];
}