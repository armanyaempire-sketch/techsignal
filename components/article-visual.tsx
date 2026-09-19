import styles from "./article-visual.module.css";

const exactImages:Record<string,string>={
 "01-ai-small-business-marketing":"ai-small-business.svg",
 "02-affiliate-marketing-basics":"02-affiliate-marketing-basics.svg",
 "03-one-person-online-business":"03-one-person-online-business.svg",
 "04-digital-marketing-funnels":"04-digital-marketing-funnels.svg",
 "05-seo-vs-paid-traffic":"05-seo-vs-paid-traffic.svg",
 "06-email-marketing":"06-email-marketing.svg",
 "07-ai-content-workflow":"07-ai-content-workflow.svg",
 "08-affiliate-content-funnel":"08-affiliate-content-funnel.svg",
 "09-best-ai-affiliate-tools":"ai-affiliate-tools.svg",
 "10-best-ai-small-business-tools":"10-best-ai-small-business-tools.svg",
 "11-sustainable-fitness-routine":"sustainable-fitness.svg",
 "12-home-workout-routine":"home-workout.svg",
 "13-fitness-after-40":"13-fitness-after-40.svg",
 "14-simple-skincare-routine":"simple-skincare.svg",
 "15-beauty-product-comparison":"15-beauty-product-comparison.svg",
 "16-prodentim-buying-guide":"16-prodentim-buying-guide.svg",
 "17-the-brain-song-buying-guide":"17-the-brain-song-buying-guide.svg",
 "18-energy-revolution-system":"18-energy-revolution-system.svg",
 "19-prostavive-buying-guide":"19-prostavive-buying-guide.svg",
 "20-audifort-buying-guide":"20-audifort-buying-guide.svg",
 "21-ai-workflow":"21-ai-workflow.svg",
 "22-affiliate-keyword-research":"22-affiliate-keyword-research.svg",
 "23-email-automation":"23-email-automation.svg",
 "24-strength-training-after-40":"24-strength-training-after-40.svg",
 "25-skincare-budget":"25-skincare-budget.svg",
 "26-sunscreen":"26-sunscreen.svg",
 "27-oral-care-supplement-evaluation":"27-oral-care-supplement-evaluation.svg",
 "28-focus-brain-training-audio":"28-focus-brain-training-audio.svg",
 "29-home-energy":"29-home-energy.svg",
 "30-compare-prostate-health-supplements":"30-compare-prostate-health-supplements.svg",
 "31-compare-hearing-support-products":"31-compare-hearing-support-products.svg"
};

const categoryImages:Record<string,string>={
 "e-business":"e-business.svg",
 "health-fitness":"health-fitness.svg",
 "womens-health-beauty":"womens-health-beauty.svg"
};

export function getArticleVisualFile(slug:string,category:string){
 return exactImages[slug]??categoryImages[category]??"e-business.svg";
}

type Variant="top"|"card"|"hero";

export function ArticleVisual({slug,category,title,variant="card"}:{slug:string;category:string;title:string;variant?:Variant}){
 const file=getArticleVisualFile(slug,category);
 return <div className={styles.visual+" "+styles[variant]}>
  <img
   src={"/article-visuals/"+file}
   alt={"Illustration for "+title}
   loading={variant==="hero"?"eager":"lazy"}
   decoding="async"
   fetchPriority={variant==="hero"?"high":"auto"}
  />
 </div>;
}
