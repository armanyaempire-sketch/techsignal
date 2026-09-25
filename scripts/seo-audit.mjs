import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const articleDir=path.join(root,"content","articles");
const categoryFile=path.join(root,"content","categories.json");

const required=["title","description","category","categoryName","stage","intent","date","updated","author","keywords","sources"];
const validStages=new Set(["TOFU","MOFU","BOFU"]);
const knownStatic=new Set(["","about","contact","disclosure","editorial-policy","privacy","terms","author/guidesignal-editorial-team","search"]);
const unsafe=[
 "disregardpervertmural.com",
 "atOptions",
 "invoke.js",
 "d79175dc149cc5eb147c18b4a115716d",
 "31555f8da80d579a4c50e4ccf1cc5644",
 "NEXT_PUBLIC_AD_BOTTOM_SCRIPT_URL",
 "NEXT_PUBLIC_AD_ALLOWED_HOSTS",
];

function fail(messages){
 if(messages.length){console.error("\nSEO audit failed:\n- "+messages.join("\n- "));process.exit(1);}
 console.log("SEO audit passed.");
}

function parseFrontmatter(raw,file){
 const match=raw.match(/^---\n([\s\S]*?)\n---\n/);
 if(!match)return{data:null,body:raw};
 const data={};
 for(const line of match[1].split("\n")){
  const i=line.indexOf(":");
  if(i<0)continue;
  data[line.slice(0,i).trim()]=line.slice(i+1).trim();
 }
 return{data,body:raw.slice(match[0].length)};
}

if(!fs.existsSync(articleDir))fail(["content/articles directory is missing"]);
const files=fs.readdirSync(articleDir).filter(f=>f.endsWith(".md")).sort();
const errors=[];
if(files.length<1)errors.push("No article Markdown files found.");

let categories=[];
try{categories=JSON.parse(fs.readFileSync(categoryFile,"utf8"));}catch{errors.push("content/categories.json is missing or invalid.");}
const categoryMap=new Map(categories.map(c=>[c.slug,c]));

const slugs=new Set(files.map(f=>f.replace(/\.md$/,"")));
if(slugs.size!==files.length)errors.push("Duplicate article slugs detected.");

for(const file of files){
 const raw=fs.readFileSync(path.join(articleDir,file),"utf8");
 const {data,body}=parseFrontmatter(raw);
 if(!data){errors.push(file+": missing frontmatter.");continue;}
 for(const key of required){
  if(!data[key])errors.push(file+": missing "+key+".");
 }
 if(data.stage&&!validStages.has(data.stage))errors.push(file+": invalid stage "+data.stage+".");
 if(data.stage==="BOFU"&&!data.offerKey&&!file.includes("34-prodentim-alternatives-what-to-compare"))errors.push(file+": BOFU article is missing offerKey.");
 if(data.category&&!categoryMap.has(data.category))errors.push(file+": category does not exist: "+data.category+".");
 for(const key of ["date","updated"]){
  if(data[key]&&!/^\d{4}-\d{2}-\d{2}$/.test(data[key]))errors.push(file+": "+key+" must be YYYY-MM-DD.");
 }
 const sourceCount=(data.sources||"").split("|").map(x=>x.trim()).filter(Boolean).length;
 if(sourceCount<2)errors.push(file+": fewer than 2 listed sources.");
 if(/^#\s+/m.test(body))errors.push(file+": contains a Markdown H1; article template already supplies the page H1.");

 for(const m of body.matchAll(/\]\((\/[^)#?]+)\/?\)/g)){
  const target=m[1].replace(/^\//,"").replace(/\/$/,"");
  let ok=knownStatic.has(target);
  if(target.startsWith("articles/"))ok=slugs.has(target.slice("articles/".length));
  if(target.startsWith("category/"))ok=categoryMap.has(target.slice("category/".length));
  if(!ok)errors.push(file+": broken internal Markdown link target "+m[1]);
 }
}
for(const c of categories){
 if(!c.slug||!c.name||!c.short)errors.push("Category entry missing slug/name/short.");
 if(!Array.isArray(c.startSlugs)||c.startSlugs.length<1)errors.push(c.slug+": no Start Here articles.");
 for(const slug of c.startSlugs||[]){
  if(!slugs.has(slug))errors.push(c.slug+": Start Here article does not exist: "+slug);
 }
}

const configFiles=[
 "app/layout.tsx","app/articles/[slug]/page.tsx","app/category/[slug]/page.tsx",
 "app/robots.ts","app/sitemap.ts","components/ad-slot.tsx",".env.example"
];
for(const file of configFiles){
 const full=path.join(root,file);
 if(!fs.existsSync(full)){errors.push(file+" is missing.");continue;}
 const raw=fs.readFileSync(full,"utf8");
 for(const token of unsafe)if(raw.includes(token))errors.push(file+": forbidden legacy token found: "+token);
}

const robots=fs.readFileSync(path.join(root,"app/robots.ts"),"utf8");
if(!robots.includes("sitemap"))errors.push("robots.ts does not expose the sitemap.");
const sitemap=fs.readFileSync(path.join(root,"app/sitemap.ts"),"utf8");
if(!sitemap.includes("lastModified"))errors.push("sitemap.ts has no lastModified signals.");
if(sitemap.includes("changeFrequency")||sitemap.includes("priority"))errors.push("sitemap.ts still contains ignored changeFrequency/priority fields.");
const layout=fs.readFileSync(path.join(root,"app/layout.tsx"),"utf8");
if(!layout.includes('application/rss+xml'))errors.push("layout.tsx does not advertise the RSS feed.");
if(!layout.includes('verification:{google:verification}'))errors.push("layout.tsx is missing Google Search Console meta verification.");
if(!/const verification="[^"]+"/.test(layout))errors.push("layout.tsx has no Google verification token.");
if(!fs.existsSync(path.join(root,"public","googleb5dd74162d2e16fb.html")))errors.push("Google HTML verification file is missing.");
if(!fs.existsSync(path.join(root,"app/feed.xml/route.ts")))errors.push("RSS route is missing.");
if(!layout.includes('metadataBase:new URL(SITE_URL)'))errors.push("metadataBase is not tied to SITE_URL.");
if(!fs.existsSync(path.join(root,"app","icon.svg")))errors.push("app/icon.svg is missing.");

fail(errors);
