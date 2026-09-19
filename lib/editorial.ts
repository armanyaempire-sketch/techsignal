export type EditorialDesk={
 id:string;
 name:string;
 focus:string;
 standard:string;
};

const DESKS:Record<string,EditorialDesk>={
 "e-business":{
  id:"business-desk",
  name:"GuideSignal E-Business Research Desk",
  focus:"AI tools, software, online business, marketing and affiliate workflows.",
  standard:"Prioritizes practical workflows, clear trade-offs and separation of independent guidance from seller claims."
 },
 "health-fitness":{
  id:"health-fitness-desk",
  name:"GuideSignal Health & Fitness Research Desk",
  focus:"Exercise, fitness habits and general wellness information.",
  standard:"Uses recognized public-health or professional sources where relevant and avoids individualized medical claims or guaranteed outcomes."
 },
 "womens-health-beauty":{
  id:"womens-health-beauty-desk",
  name:"GuideSignal Women’s Health & Beauty Research Desk",
  focus:"Skincare, beauty choices and general women’s wellness information.",
  standard:"Separates general educational guidance from seller claims and avoids presenting cosmetic or wellness claims as medical proof."
 }
};

export function getEditorialDesk(category:string):EditorialDesk{
 return DESKS[category]??{
  id:"editorial-team",
  name:"GuideSignal Editorial Team",
  focus:"Practical, source-aware guides.",
  standard:"Separates sourced facts, general guidance and seller claims."
 };
}

export function getEditorialDesks(){return Object.values(DESKS);}