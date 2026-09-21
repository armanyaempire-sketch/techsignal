import type {Metadata} from "next";
import Link from "next/link";
import {AffiliateCTA} from "@/components/affiliate-cta";
import {JsonLd} from "@/components/json-ld";
import {SITE_URL,SITE_NAME,EDITORIAL_REVIEW_DATE} from "@/lib/site";

const productUrl=SITE_URL+"/products/prodentim/";

export const metadata:Metadata={
 title:"ProDentim: What the Seller Claims & What to Check Before Buying",
 description:"A source-aware ProDentim buying guide covering the seller's claims, product details, purchase terms and questions to check before ordering.",
 alternates:{canonical:productUrl},
 openGraph:{
  type:"article",
  siteName:SITE_NAME,
  title:"ProDentim: What the Seller Claims & What to Check Before Buying",
  description:"A source-aware ProDentim buying guide covering seller claims, product details, purchase terms and buyer checks.",
  url:productUrl
 },
 twitter:{
  card:"summary",
  title:"ProDentim: What the Seller Claims & What to Check Before Buying",
  description:"A source-aware ProDentim buying guide covering seller claims, product details, purchase terms and buyer checks."
 }
};

const sellerUrl="https://prodentim101.com/";
const sellerContact="https://prodentim101.com/help/contact-us.php";

export default function ProDentimPage(){
 const productSchema={
  "@context":"https://schema.org",
  "@type":"Product",
  name:"ProDentim",
  description:"A dietary supplement marketed for oral-care support. GuideSignal summarizes seller claims and buyer checks without independently validating health outcomes.",
  url:productUrl,
  brand:{"@type":"Brand",name:"ProDentim"},
  category:"Dietary supplement",
  offers:{
   "@type":"Offer",
   url:sellerUrl,
   availability:"https://schema.org/InStock"
  }
 };
 const breadcrumb={
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  itemListElement:[
   {"@type":"ListItem",position:1,name:"Home",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Health & Fitness",item:SITE_URL+"/category/health-fitness/"},
   {"@type":"ListItem",position:3,name:"ProDentim",item:productUrl}
  ]
 };

 return <>
  <JsonLd data={[productSchema,breadcrumb]}/>
  <div className="breadcrumbs">
   <Link prefetch={false} href="/">Home</Link><span>/</span>
   <Link prefetch={false} href="/category/health-fitness/">Health & Fitness</Link><span>/</span>
   <span aria-current="page">ProDentim</span>
  </div>

  <section className="section">
   <div className="container article-layout">
    <main className="article-shell article-reading">
     <header className="article-header">
      <span className="eyebrow">Featured ClickBank product · Health & Fitness</span>
      <h1>ProDentim: What the Seller Claims & What to Check Before Buying</h1>
      <div className="article-meta">
       <span>GuideSignal Research Desk</span><span>•</span><span>Updated {EDITORIAL_REVIEW_DATE}</span><span>•</span><span>Commercial research</span>
      </div>
      <div className="editorial-trust-strip">
       <span><strong>Relationship</strong> Affiliate link</span>
       <span><strong>Focus</strong> Buyer due diligence</span>
       <span><strong>Standard</strong> Seller claims separated from evidence</span>
      </div>
      <div className="disclosure-note">
       GuideSignal may earn a commission from a qualifying purchase. This page is consumer information, not dental or medical advice.
      </div>
     </header>

     <div className="info-card">
      <span className="eyebrow">At a glance</span>
      <h2>What is ProDentim?</h2>
      <p>ProDentim is marketed as an oral-care dietary supplement containing probiotics and other ingredients intended to support the health of teeth and gums. The seller's current text presentation describes 3.5 billion probiotics and identifies three named probiotic strains.</p>
      <p>The seller's materials should be treated as marketing information rather than independent proof of outcomes. FDA explains that dietary supplements are not approved by the agency for safety and effectiveness before they are marketed.</p>
     </div>

     <section className="section">
      <span className="eyebrow">Seller claims</span>
      <h2>What the current seller materials say</h2>
      <ul>
       <li>The text presentation describes a total of 3.5 billion probiotics and names Lactobacillus paracasei, Bifidobacterium lactis BL-04 and Lactobacillus reuteri.</li>
       <li>The seller describes the product as a soft, dissolvable oral-care supplement and presents several product features such as non-GMO, gluten-free and no stimulants.</li>
       <li>The seller advertises a 60-day money-back guarantee and directs customers to the seller or ClickBank for support.</li>
      </ul>
      <p><strong>Important:</strong> other seller materials on the same site use different formulation figures, so buyers should check the current package and Supplement Facts label rather than relying on an older sales-page version or transcript.</p>
     </section>

     <section className="section">
      <span className="eyebrow">Buyer checks</span>
      <h2>What to verify before ordering</h2>
      <div className="grid-3">
       <div className="card"><h3>Current label</h3><p>Check serving size, probiotic strains, ingredient amounts, directions and warnings on the current package.</p></div>
       <div className="card"><h3>Total cost</h3><p>Confirm quantity, shipping, taxes where applicable, billing terms and whether the offer is one-time or recurring.</p></div>
       <div className="card"><h3>Refund terms</h3><p>Read the current guarantee and cancellation instructions before checkout and save the terms shown at purchase time.</p></div>
      </div>
     </section>

     <section className="section section-soft">
      <span className="eyebrow">Health context</span>
      <h2>What this page does not establish</h2>
      <p>GuideSignal does not independently verify that ProDentim treats, prevents or cures gum disease, cavities, tooth decay or any other disease. Health-related advertising claims should be supported by appropriate scientific evidence, and the FTC advises that health-product claims must be truthful, not misleading and appropriately substantiated.</p>
      <p>FDA also advises consumers to discuss dietary supplements with a doctor, pharmacist or other healthcare professional because supplements can interact with medicines or affect people differently.</p>
     </section>

     <section className="section">
      <span className="eyebrow">Before checkout</span>
      <h2>Five questions worth answering</h2>
      <ol>
       <li>What does the current Supplement Facts label actually list?</li>
       <li>What is the complete price for the package I am considering?</li>
       <li>Is the purchase one-time or recurring?</li>
       <li>What are the current refund and cancellation terms?</li>
       <li>Do I have a health or medication question that should be discussed with a professional first?</li>
      </ol>
     </section>

     <div className="info-card">
      <span className="eyebrow">Source links</span>
      <h2>Research the current offer</h2>
      <p><a href={sellerUrl} target="_blank" rel="noopener noreferrer">Seller product presentation</a></p>
      <p><a href={sellerContact} target="_blank" rel="noopener noreferrer">Seller support and FAQ</a></p>
      <p><a href="https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements" target="_blank" rel="noopener noreferrer">FDA: Questions and Answers on Dietary Supplements</a></p>
      <p><a href="https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance" target="_blank" rel="noopener noreferrer">FTC: Health Products Compliance Guidance</a></p>
     </div>

     <AffiliateCTA articleSlug="prodentim-product-page" position="product-primary" offerKey="prodentim"/>
    </main>

    <aside className="sidebar">
     <div className="info-card">
      <span className="eyebrow">GuideSignal position</span>
      <h3>Research first. Purchase second.</h3>
      <p className="muted">This page is designed to help readers inspect the current seller information, product label and transaction terms before clicking through.</p>
      <Link className="text-link" prefetch={false} href="/disclosure/">Read our affiliate disclosure →</Link>
     </div>
     <div className="info-card">
      <span className="eyebrow">Related reading</span>
      <Link className="text-link" prefetch={false} href="/category/health-fitness/">Browse Health & Fitness →</Link>
     </div>
    </aside>
   </div>
  </section>
 </>;
}
