import fs from "node:fs";
import path from "node:path";
export type FunnelStage="TOFU"|"MOFU"|"BOFU";
export type Article={slug:string;title:string;description:string;category:string;categoryName:string;stage:FunnelStage;intent:string;cluster?:string;date:string;updated:string;author:string;keywords:string[];offerKey?:string;sources:string[];body:string};
export type ArticleFaq={question:string;answer:string};
const DIR=path.join(process.cwd(),"content","articles");
function parse(raw:string){const t=raw.replace(/\r\n/g,"\n");if(!t.startsWith("---\n"))return{data:{},body:t};const end=t.indexOf("\n---\n",4);if(end<0)return{data:{},body:t};const data:Record<string,string>={};for(const line of t.slice(4,end).split("\n")){const i=line.indexOf(":");if(i<0)continue;data[line.slice(0,i).trim()]=line.slice(i+1).trim();}return{data,body:t.slice(end+5).trim()};}
function read(file:string):Article{const {data,body}=parse(fs.readFileSync(path.join(DIR,file),"utf8"));return{slug:file.replace(/\.md$/,""),title:data.title??file,description:data.description??"",category:data.category??"e-business",categoryName:data.categoryName??"E-Business & E-Marketing",stage:(data.stage as FunnelStage)??"TOFU",intent:data.intent??"informational",cluster:data.cluster||undefined,date:data.date??"2026-09-19",updated:data.updated??data.date??"2026-09-19",author:data.author??"GuideSignal Editorial Team",keywords:(data.keywords??"").split(",").map(x=>x.trim()).filter(Boolean),offerKey:data.offerKey||undefined,sources:(data.sources??"").split("|").map(x=>x.trim()).filter(Boolean),body};}
export function getAllArticles(){if(!fs.existsSync(DIR))return[];return fs.readdirSync(DIR).filter(x=>x.endsWith(".md")).map(read).sort((a,b)=>b.date.localeCompare(a.date));}
export function getArticleBySlug(slug:string){return getAllArticles().find(x=>x.slug===slug);}
export function getArticlesByCategory(category:string){return getAllArticles().filter(x=>x.category===category);}
export function getRelatedArticles(current:Article,limit=4){
 const rank=(s:FunnelStage)=>s==="TOFU"?0:s==="MOFU"?1:2;
 const candidates=getAllArticles().filter(x=>x.slug!==current.slug);
 const scoped=current.cluster
  ? candidates.filter(x=>x.cluster===current.cluster)
  : candidates;
 return scoped
  .map(x=>{
   const sameCategory=x.category===current.category;
   const overlap=x.keywords.filter(k=>current.keywords.some(c=>c.toLowerCase()===k.toLowerCase())).length;
   const sameStage=x.stage===current.stage;
   const adjacentStage=Math.abs(rank(x.stage)-rank(current.stage))===1;
   const score=(sameCategory?8:0)+(overlap*3)+(sameStage?1:0)+(adjacentStage&&sameCategory?2:0);
   return{article:x,score};
  })
  .filter(x=>x.score>0)
  .sort((a,b)=>b.score-a.score||b.article.updated.localeCompare(a.article.updated))
  .slice(0,limit)
  .map(x=>x.article);
}
export function getCategories():Array<{slug:string;name:string;short:string}>{return JSON.parse(fs.readFileSync(path.join(process.cwd(),"content","categories.json"),"utf8"));}
export function getCategoryBySlug(slug:string){return getCategories().find(x=>x.slug===slug);}
export function getArticleFaq(a:Article):ArticleFaq[]{
 const common=[
  {question:"What should I check first?",answer:"Start with the current product, service or topic details, then identify the exact claim or decision you are evaluating before comparing alternatives."},
  {question:"Should I rely on the seller or search snippet alone?",answer:"No. Use the current seller or official information for changeable details, but compare important claims with independent or primary sources where they exist."},
  {question:"Why can prices, terms or results differ?",answer:"Prices, availability, usage needs and individual circumstances can change. Treat current seller terms and your own circumstances as inputs to the decision rather than assumptions."}
 ];
 if(a.category==="health-fitness")return[
  {question:"What makes a health product claim worth investigating?",answer:"Look for a specific claim, the evidence supporting that exact claim, and clear limits around what the product can and cannot establish for an individual."},
  {question:"Can an online buying guide diagnose a health problem?",answer:"No. A consumer guide can organize product information and questions, but symptoms, diagnosis and treatment decisions may require an appropriately qualified healthcare professional."},
  {question:"What should I check before buying a supplement or hearing product?",answer:"Check the current label or product specifications, ingredients or features, total cost, recurring billing, refund terms, seller identity and any relevant safety considerations."},
  {question:"Why are seller testimonials not enough?",answer:"A testimonial describes an individual's experience. It does not by itself establish that the same outcome will occur for another person or prove a product-specific health claim."}
 ];
 if(a.category==="womens-health-beauty")return[
  {question:"How should I compare skincare or beauty products?",answer:"Compare the intended use, current label or ingredient list, directions, usability, total cost, seller terms and the strength of any specific claims."},
  {question:"Can a popular skincare product still be a poor fit?",answer:"Yes. Skin type, sensitivity, routine, climate and the reason for using the product can all affect whether it is a practical fit."},
  {question:"How should I treat dramatic beauty claims?",answer:"Treat words such as 'miracle' or 'guaranteed' as marketing language until you can identify reliable evidence that supports the specific claim."},
  {question:"When should a beauty question become a health question?",answer:"Persistent or significant symptoms, suspected reactions or concerns about treatment deserve appropriate professional guidance rather than relying only on a product-purchase page."}
 ];
 return common;
}
