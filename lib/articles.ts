import fs from "node:fs";
import path from "node:path";
export type FunnelStage="TOFU"|"MOFU"|"BOFU";
export type Article={slug:string;title:string;description:string;category:string;categoryName:string;stage:FunnelStage;intent:string;date:string;updated:string;author:string;keywords:string[];offerKey?:string;sources:string[];body:string};
const DIR=path.join(process.cwd(),"content","articles");
function parse(raw:string){const t=raw.replace(/\r\n/g,"\n");if(!t.startsWith("---\n"))return{data:{},body:t};const end=t.indexOf("\n---\n",4);if(end<0)return{data:{},body:t};const data:Record<string,string>={};for(const line of t.slice(4,end).split("\n")){const i=line.indexOf(":");if(i<0)continue;data[line.slice(0,i).trim()]=line.slice(i+1).trim();}return{data,body:t.slice(end+5).trim()};}
function read(file:string):Article{const {data,body}=parse(fs.readFileSync(path.join(DIR,file),"utf8"));return{slug:file.replace(/\.md$/,""),title:data.title??file,description:data.description??"",category:data.category??"e-business",categoryName:data.categoryName??"E-Business & E-Marketing",stage:(data.stage as FunnelStage)??"TOFU",intent:data.intent??"informational",date:data.date??"2026-09-19",updated:data.updated??data.date??"2026-09-19",author:data.author??"TechSignal Editorial Team",keywords:(data.keywords??"").split(",").map(x=>x.trim()).filter(Boolean),offerKey:data.offerKey||undefined,sources:(data.sources??"").split("|").map(x=>x.trim()).filter(Boolean),body};}
export function getAllArticles(){if(!fs.existsSync(DIR))return[];return fs.readdirSync(DIR).filter(x=>x.endsWith(".md")).map(read).sort((a,b)=>b.date.localeCompare(a.date));}
export function getArticleBySlug(slug:string){return getAllArticles().find(x=>x.slug===slug);}
export function getArticlesByCategory(category:string){return getAllArticles().filter(x=>x.category===category);}
export function getCategories():Array<{slug:string;name:string;short:string}>{return JSON.parse(fs.readFileSync(path.join(process.cwd(),"content","categories.json"),"utf8"));}
export function getCategoryBySlug(slug:string){return getCategories().find(x=>x.slug===slug);}