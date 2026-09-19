import styles from "./article-visual.module.css";

const exactImages:Record<string,string>={
 "01-ai-small-business-marketing":"ai-small-business.svg",
 "11-sustainable-fitness-routine":"sustainable-fitness.svg",
 "14-simple-skincare-routine":"simple-skincare.svg",
 "09-best-ai-affiliate-tools":"ai-affiliate-tools.svg",
 "12-home-workout-routine":"home-workout.svg"
};

type Diagram={title:string;subtitle:string;steps:[string,string,string]};
const diagrams:Record<string,Diagram>={
 "02-affiliate-marketing-basics":{title:"Affiliate basics",subtitle:"Audience → trust → offer",steps:["Audience","Trust","Offer"]},
 "03-one-person-online-business":{title:"One-person business",subtitle:"Problem → system → sale",steps:["Problem","System","Sale"]},
 "04-digital-marketing-funnels":{title:"Marketing funnel",subtitle:"Reach → capture → convert",steps:["Reach","Capture","Convert"]},
 "05-seo-vs-paid-traffic":{title:"SEO vs paid",subtitle:"Intent · cost · time",steps:["Intent","SEO","Paid"]},
 "06-email-marketing":{title:"Email marketing",subtitle:"Subscribe → nurture → act",steps:["Subscribe","Nurture","Act"]},
 "07-ai-content-workflow":{title:"AI content workflow",subtitle:"Research → draft → fact-check",steps:["Research","Draft","Fact-check"]},
 "08-affiliate-content-funnel":{title:"Affiliate content funnel",subtitle:"Guide → compare → decide",steps:["Guide","Compare","Decide"]},
 "10-best-ai-small-business-tools":{title:"AI tool selection",subtitle:"Task → tool → measure",steps:["Task","Tool","Measure"]},
 "13-fitness-after-40":{title:"Fitness after 40",subtitle:"Strength · cardio · recovery",steps:["Strength","Cardio","Recover"]},
 "15-beauty-product-comparison":{title:"Beauty comparison",subtitle:"Fit · ingredients · cost",steps:["Fit","Ingredients","Cost"]},
 "16-prodentim-buying-guide":{title:"Supplement buyer audit",subtitle:"Label · claims · cost",steps:["Label","Claims","Cost"]},
 "17-the-brain-song-buying-guide":{title:"Focus audio",subtitle:"Format · evidence · access",steps:["Format","Evidence","Access"]},
 "18-energy-revolution-system":{title:"Home energy",subtitle:"Use → efficiency → savings",steps:["Use","Efficiency","Savings"]},
 "19-prostavive-buying-guide":{title:"Prostate buyer audit",subtitle:"Label · claims · fit",steps:["Label","Claims","Fit"]},
 "20-audifort-buying-guide":{title:"Hearing buyer audit",subtitle:"Product · evidence · terms",steps:["Product","Evidence","Terms"]},
 "21-ai-workflow":{title:"AI workflow",subtitle:"Task → assist → review",steps:["Task","Assist","Review"]},
 "22-affiliate-keyword-research":{title:"Keyword research",subtitle:"Intent → difficulty → fit",steps:["Intent","Difficulty","Fit"]},
 "23-email-automation":{title:"Email automation",subtitle:"Trigger → sequence → measure",steps:["Trigger","Sequence","Measure"]},
 "24-strength-training-after-40":{title:"Strength after 40",subtitle:"Load · form · recovery",steps:["Load","Form","Recover"]},
 "25-skincare-budget":{title:"Skincare budget",subtitle:"Need → routine → cost",steps:["Need","Routine","Cost"]},
 "26-sunscreen":{title:"Sun protection",subtitle:"SPF · application · reapply",steps:["SPF","Apply","Reapply"]},
 "27-oral-care-supplement-evaluation":{title:"Oral care check",subtitle:"Label · evidence · care",steps:["Label","Evidence","Care"]},
 "28-focus-brain-training-audio":{title:"Brain-training audio",subtitle:"Routine · evidence · expectations",steps:["Routine","Evidence","Expect"]},
 "29-home-energy":{title:"Energy efficiency",subtitle:"Audit → upgrade → monitor",steps:["Audit","Upgrade","Monitor"]},
 "30-compare-prostate-health-supplements":{title:"Prostate comparison",subtitle:"Label → evidence → cost",steps:["Label","Evidence","Cost"]},
 "31-compare-hearing-support-products":{title:"Hearing comparison",subtitle:"Type → function → care",steps:["Type","Function","Care"]}
};

const categoryTone:Record<string,{bg:string;soft:string;accent:string;dark:string}>={
 "e-business":{bg:"#eef3ff",soft:"#d8e2ff",accent:"#2458d6",dark:"#173fa2"},
 "health-fitness":{bg:"#effaf5",soft:"#d9efe5",accent:"#2d9a72",dark:"#1e4c3d"},
 "womens-health-beauty":{bg:"#fff2f7",soft:"#f4dce8",accent:"#b34c78",dark:"#762d4d"}
};

function DiagramVisual({slug,category,title,variant}:{slug:string;category:string;title:string;variant:Variant}){
 const d=diagrams[slug]??{title,subtitle:"A practical visual summary",steps:["Understand","Compare","Decide"]};
 const tone=categoryTone[category]??categoryTone["e-business"];
 const id=slug.replace(/[^a-z0-9]/gi,"-");
 const xs=[78,307,536],ys=[116,86,116];
 return <div className={styles.visual+" "+styles[variant]+" "+styles.diagram}>
  <svg viewBox="0 0 800 450" role="img" aria-labelledby={id+"-title "+id+"-desc"} preserveAspectRatio="xMidYMid meet">
   <title id={id+"-title"}>{d.title}</title>
   <desc id={id+"-desc"}>{d.subtitle}</desc>
   <rect width="800" height="450" rx="28" fill={tone.bg}/>
   <path d="M72 78 C150 28 220 54 300 40 C392 24 470 62 540 42 C625 18 704 44 728 82" fill="none" stroke={tone.soft} strokeWidth="18" strokeLinecap="round"/>
   {d.steps.map((step,i)=><g key={step}>
    {i<2&&<><path d={`M ${xs[i]+186} ${ys[i]+46} H ${xs[i+1]-18}`} stroke={tone.accent} strokeWidth="7" strokeLinecap="round"/><path d={`M ${xs[i+1]-30} ${ys[i+1]+38} L ${xs[i+1]-18} ${ys[i+1]+46} L ${xs[i+1]-30} ${ys[i+1]+54}`} fill="none" stroke={tone.accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/></>}
    <rect x={xs[i]} y={ys[i]} width="186" height="92" rx="20" fill="#fff" stroke={tone.soft} strokeWidth="7"/>
    <circle cx={xs[i]+28} cy={ys[i]+28} r="11" fill={tone.accent}/>
    <text x={xs[i]+48} y={ys[i]+34} fontFamily="Arial, sans-serif" fontSize="18" fontWeight="800" fill={tone.dark}>{step}</text>
    <text x={xs[i]+22} y={ys[i]+66} fontFamily="Arial, sans-serif" fontSize="13" fill="#5f6b7c">{i===0?"Start here":i===1?"Check evidence":"Make the call"}</text>
   </g>)}
   <rect x="78" y="294" width="644" height="70" rx="18" fill={tone.soft}/>
   <text x="104" y="326" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="800" letterSpacing="2" fill={tone.accent}>GUIDESIGNAL VISUAL SUMMARY</text>
   <text x="104" y="352" fontFamily="Arial, sans-serif" fontSize="21" fontWeight="700" fill={tone.dark}>{d.subtitle}</text>
   <text x="78" y="410" fontFamily="Arial, sans-serif" fontSize="13" fill="#6b7280">Original editorial illustration · lightweight SVG</text>
  </svg>
 </div>;
}

type Variant="top"|"card"|"hero";

export function ArticleVisual({slug,category,title,variant="card"}:{slug:string;category:string;title:string;variant?:Variant}){
 const file=exactImages[slug];
 if(file) return <div className={styles.visual+" "+styles[variant]}>
  <img src={"/article-visuals/"+file} alt={"Illustration for "+title} loading={variant==="hero"?"eager":"lazy"} decoding="async"/>
 </div>;
 return <DiagramVisual slug={slug} category={category} title={title} variant={variant}/>;
}
