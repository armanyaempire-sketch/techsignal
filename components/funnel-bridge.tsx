import Link from "next/link";
import type {Article} from "@/lib/articles";

export function FunnelBridge({current,related}:{current:Article;related:Article[]}){
 if(current.stage==="BOFU")return null;
 const target=related.find(x=>x.stage==="BOFU"&&x.category===current.category&&x.offerKey);
 if(!target)return null;
 return <aside className="funnel-bridge">
  <div><span className="eyebrow">Next step</span><h3>Ready to compare a specific option?</h3><p>Move from this general guide to our product-specific research before reviewing the seller's current offer.</p></div>
  <Link className="button" href={"/articles/"+target.slug+"/"}>Open the product guide</Link>
 </aside>;
}
