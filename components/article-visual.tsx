import styles from "./article-visual.module.css";

const exactImages:Record<string,string>={
 "01-ai-small-business-marketing":"ai-small-business.svg",
 "11-sustainable-fitness-routine":"sustainable-fitness.svg",
 "14-simple-skincare-routine":"simple-skincare.svg",
 "09-best-ai-affiliate-tools":"ai-affiliate-tools.svg",
 "12-home-workout-routine":"home-workout.svg"
};

const categoryImages:Record<string,string>={
 "e-business":"e-business.svg",
 "health-fitness":"health-fitness.svg",
 "womens-health-beauty":"womens-health-beauty.svg"
};

type Variant="top"|"card"|"hero";

export function ArticleVisual({slug,category,title,variant="card"}:{slug:string;category:string;title:string;variant?:Variant}){
 const file=exactImages[slug]??categoryImages[category]??"e-business.svg";
 return <div className={styles.visual+" "+styles[variant]}>
  <img
   src={"/article-visuals/"+file}
   alt={"Illustration for "+title}
   loading={variant==="hero"?"eager":"lazy"}
   decoding="async"
  />
 </div>;
}