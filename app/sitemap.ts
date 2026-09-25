import type {MetadataRoute} from "next";
import {getAllArticles,getCategories} from "@/lib/articles";
import {SITE_URL,EDITORIAL_REVIEW_ISO} from "@/lib/site";

export const dynamic="force-static";

export default function sitemap():MetadataRoute.Sitemap{
 const articles=getAllArticles();
 const categories=getCategories();
 const latest=articles.map(a=>a.updated).sort().at(-1)||EDITORIAL_REVIEW_ISO;
 const trustPages=["about","editorial-policy","disclosure","privacy","terms","contact","author/guidesignal-editorial-team"];
 return[
  {url:SITE_URL+"/",lastModified:latest},
  ...categories.map(c=>{
   const categoryArticles=articles.filter(a=>a.category===c.slug);
   const lastModified=categoryArticles.map(a=>a.updated).sort().at(-1)||latest;
   return{url:SITE_URL+"/category/"+c.slug+"/",lastModified};
  }),
  ...articles.map(a=>({url:SITE_URL+"/articles/"+a.slug+"/",lastModified:a.updated})),
  {url:SITE_URL+"/health-fitness/products/prodentim/",lastModified:EDITORIAL_REVIEW_ISO},
  {url:SITE_URL+"/womens-health-beauty/products/femicore/",lastModified:EDITORIAL_REVIEW_ISO},
  ...trustPages.map(p=>({url:SITE_URL+"/"+p+"/",lastModified:EDITORIAL_REVIEW_ISO}))
 ];
}