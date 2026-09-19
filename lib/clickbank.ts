export type ClickBankOfferKey = "prodentim" | "brainsongx" | "enrev" | "prostavive" | "audifort";

export const clickBankOffers: Record<ClickBankOfferKey,{name:string;hoplink:string;category:string}> = {
  prodentim:{name:"ProDentim",hoplink:"https://6dac7b0ltjf3cp9czhl2zsp99v.hop.clickbank.net",category:"Dental health"},
  brainsongx:{name:"The Brain Song",hoplink:"https://6c7d7dtjvku4av8ytxx92evb6j.hop.clickbank.net",category:"Health & fitness"},
  enrev:{name:"Energy Revolution System",hoplink:"https://8f109-pbofr4jo84ppqtexbl5d.hop.clickbank.net",category:"Alternative energy"},
  prostavive:{name:"ProstaVive",hoplink:"https://d8ab540btpgy7o3o5d95041q3c.hop.clickbank.net",category:"Men's health"},
  audifort:{name:"Audifort",hoplink:"https://779d5cvjpfu6az63wak72h-rak.hop.clickbank.net",category:"Hearing support"}
};
