import {getAllArticles} from "@/lib/articles";
import {SITE_URL,SITE_NAME} from "@/lib/site";

export const dynamic="force-static";

function escapeXml(value:string){
 return value.replace(/[<>&'"]/g,char=>({"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'"':"&quot;"}[char]||char));
}

export async function GET(){
 const articles=getAllArticles().slice(0,31);
 const items=articles.map(a=>{
  const url=SITE_URL+"/articles/"+a.slug+"/";
  return "<item><title>"+escapeXml(a.title)+"</title><link>"+url+"</link><guid isPermaLink=\"true\">"+url+"</guid><description>"+escapeXml(a.description)+"</description><pubDate>"+new Date(a.updated+"T00:00:00Z").toUTCString()+"</pubDate></item>";
 }).join("\n");
 const xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<rss version=\"2.0\"><channel><title>"+escapeXml(SITE_NAME)+"</title><link>"+SITE_URL+"/</link><description>Practical, source-aware guides from GuideSignal.</description><language>en-us</language>"+items+"</channel></rss>";
 return new Response(xml,{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=3600"}});
}
