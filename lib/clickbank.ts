export type ClickBankOfferKey = "prodentim" | "brainsongx" | "prostavive" | "audifort" | "enrev" | "femicore";

export const clickBankOffers: Record<ClickBankOfferKey,{name:string;hoplink:string;category:string}> = {
  prodentim:{name:"ProDentim",hoplink:"https://9b62f6sfobn44n1a3gm6voua4a.hop.clickbank.net",category:"Dental health"},
  brainsongx:{name:"The Brain Song",hoplink:"https://6c7d7dtjvku4av8ytxx92evb6j.hop.clickbank.net",category:"Health & fitness"},
  prostavive:{name:"ProstaVive",hoplink:"https://d8ab540btpgy7o3o5d95041q3c.hop.clickbank.net",category:"Men's health"},
  audifort:{name:"Audifort",hoplink:"https://779d5cvjpfu6az63wak72h-rak.hop.clickbank.net",category:"Hearing support"},
  enrev:{name:"Energy Revolution System",hoplink:"",category:"Alternative energy"},
  femicore:{name:"FemiCore",hoplink:"",category:"Women’s health"}
};
