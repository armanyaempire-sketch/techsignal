import {AdsterraBanner,NativeBanner} from "@/components/adsterra";

function blockWords(html:string){
 return html.replace(/<[^>]+>/g," ").replace(/&(?:amp|lt|gt|quot|#039);/g," ").trim().split(/\s+/).filter(Boolean).length;
}

function insertionIndex(blocks:string[],target:number,start:number){
 let words=0;
 for(let i=0;i<blocks.length;i++){
  words+=blockWords(blocks[i]);
  if(i<start)continue;
  if(words>=target && /^<p[ >]/.test(blocks[i]))return i;
 }
 return -1;
}

export function ArticleAdFlow({html,slug,totalWords}:{html:string;slug:string;totalWords:number}){
 const blocks=html.split("\n").filter(Boolean);
 const plans:{index:number;kind:"rect"|"native";slot:string}[]=[];
 const used=new Set<number>();
 const addPlan=(target:number,kind:"rect"|"native",slot:string)=>{
  const index=insertionIndex(blocks,target,Math.max(0,(plans.at(-1)?.index??-1)+1));
  if(index>=0&&!used.has(index)){plans.push({index,kind,slot});used.add(index);}
 };
 if(totalWords>=700)addPlan(Math.round(totalWords*.30),"rect",slug+"-inline-rect-1");
 if(totalWords>=1400)addPlan(Math.round(totalWords*.58),"native",slug+"-inline-native");
 if(totalWords>=2200)addPlan(Math.round(totalWords*.80),"rect",slug+"-inline-rect-2");

 const byIndex=new Map(plans.map(plan=>[plan.index,plan]));
 return <div className="article-prose">
  {blocks.map((block,index)=><div className="article-block" key={index}>
   <div dangerouslySetInnerHTML={{__html:block}}/>
   {byIndex.has(index)&&<div className="article-inline-ad">
    {byIndex.get(index)?.kind==="native"
      ? <NativeBanner slot={byIndex.get(index)!.slot} variant="horizontal"/>
      : <AdsterraBanner size="300x250" slot={byIndex.get(index)!.slot}/>}
   </div>}
  </div>)}
 </div>;
}
