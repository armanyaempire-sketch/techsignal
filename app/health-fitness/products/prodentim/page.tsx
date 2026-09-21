import type {Metadata} from "next";
import Link from "next/link";
import {AffiliateCTA} from "@/components/affiliate-cta";
import {JsonLd} from "@/components/json-ld";
import {SITE_URL,SITE_NAME,EDITORIAL_REVIEW_DATE} from "@/lib/site";

const productUrl=SITE_URL+"/health-fitness/products/prodentim/";
const sellerUrl="https://prodentim101.com/";
const sellerContact="https://prodentim101.com/help/contact-us.php";

export const metadata:Metadata={
 title:"ProDentim Review: Ingredients, Claims & What to Check Before Buying",
 description:"A source-aware ProDentim buying guide covering seller claims, product details, evidence, purchase terms, alternatives and buyer questions.",
 alternates:{canonical:productUrl},
 openGraph:{
  type:"article",
  siteName:SITE_NAME,
  title:"ProDentim Review: Ingredients, Claims & What to Check Before Buying",
  description:"A source-aware ProDentim buying guide covering seller claims, product details, evidence, purchase terms and alternatives.",
  url:productUrl
 },
 twitter:{
  card:"summary",
  title:"ProDentim Review: Ingredients, Claims & What to Check Before Buying",
  description:"A source-aware ProDentim buying guide covering seller claims, product details, evidence, purchase terms and alternatives."
 }
};

export default function ProDentimPage(){
 const productSchema={
  "@context":"https://schema.org",
  "@type":"Product",
  name:"ProDentim",
  description:"A dietary supplement marketed for oral-care support. GuideSignal separates seller claims from independent evidence and transaction checks.",
  brand:{"@type":"Brand",name:"ProDentim"},
  category:"Dietary supplement",
  url:productUrl
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
      <h1>ProDentim Review: Ingredients, Claims & What to Check Before Buying</h1>
      <div className="article-meta">
       <span>GuideSignal Health Research Desk</span><span>•</span><span>Updated {EDITORIAL_REVIEW_DATE}</span><span>•</span><span>Commercial research</span>
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

     <section className="section">
      <span className="eyebrow">1 · What is it?</span>
      <h2>What is ProDentim?</h2>
      <p>ProDentim is marketed as an oral-care dietary supplement containing probiotics and other ingredients intended to support oral health. The seller's current text presentation describes 3.5 billion probiotics and names three probiotic strains.</p>
      <p>That description explains how the product is marketed. It does not independently prove that the complete formulation produces a particular dental or gum-health outcome.</p>
     </section>

     <section className="section section-soft">
      <span className="eyebrow">2 · Seller claims</span>
      <h2>What the seller says about the product</h2>
      <p>The seller presents ProDentim as a dissolvable oral-care supplement and highlights product features including probiotic content and several formulation characteristics.</p>
      <p>The seller's text presentation currently states 3.5 billion probiotics and identifies Lactobacillus paracasei, Bifidobacterium lactis BL-04 and Lactobacillus reuteri. Buyers should check the current package and Supplement Facts panel because commercial materials can change.</p>
      <AffiliateCTA articleSlug="prodentim-product-page" position="product-text" offerKey="prodentim" variant="text" label="See the current ProDentim offer →"/>
     </section>

     <section className="section">
      <span className="eyebrow">3 · Independent evidence</span>
      <h2>What is independently known?</h2>
      <p>Research on oral probiotics is more specific than the broad statement that “probiotics are good for your teeth.” Effects can depend on the strain, dose, delivery format, population and outcome being studied.</p>
      <p>Recent reviews have reported potential improvements in some periodontal measures, while also identifying important uncertainty and a need for better standardized research. Evidence about probiotics generally should not be presented as proof that a particular commercial formula produces a guaranteed result.</p>
      <p>For a deeper evidence review, read our <Link prefetch={false} href="/articles/33-oral-probiotics-what-the-evidence-says/">oral probiotics evidence guide</Link>.</p>
      <AffiliateCTA articleSlug="prodentim-product-page" position="product-evidence" offerKey="prodentim" variant="button" label="Check Current ProDentim Offer →"/>
     </section>

     <section className="section">
      <span className="eyebrow">4 · Fit & cautions</span>
      <h2>Who is this for, and who should be cautious?</h2>
      <div className="grid-3">
       <div className="card"><h3>Researching oral-care supplements</h3><p>This page can help readers compare the product's current label, claims, evidence and transaction terms.</p></div>
       <div className="card"><h3>Persistent symptoms</h3><p>Bleeding, swelling, pain or other persistent oral symptoms should be evaluated appropriately rather than treated as a shopping problem.</p></div>
       <div className="card"><h3>Medication or health questions</h3><p>People who use medicines or have relevant health circumstances should consider professional advice before starting a dietary supplement.</p></div>
      </div>
     </section>

     <section className="section section-soft">
      <span className="eyebrow">5 · Price, billing & refund</span>
      <h2>What should you verify before checkout?</h2>
      <p>GuideSignal does not publish a current ProDentim price here because prices, package options and checkout terms can change. Verify the current transaction page before ordering.</p>
      <table><thead><tr><th>Factor</th><th>What to check</th></tr></thead><tbody>
       <tr><td>Price</td><td>Exact current amount shown at checkout</td></tr>
       <tr><td>Quantity</td><td>Bottles, servings or package size</td></tr>
       <tr><td>Billing</td><td>One-time or recurring purchase</td></tr>
       <tr><td>Shipping</td><td>Included or additional</td></tr>
       <tr><td>Refund</td><td>Current window and requirements</td></tr>
       <tr><td>Support</td><td>Current seller contact method</td></tr>
      </tbody></table>
      <p><a href={sellerContact} target="_blank" rel="noopener noreferrer">Review current seller support information</a></p>
     </section>

     <section className="section">
      <span className="eyebrow">6 · Comparison / alternatives</span>
      <h2>What should you compare with ProDentim?</h2>
      <p>An alternative does not have to be another supplement. The correct comparison depends on the actual problem a reader is trying to solve.</p>
      <table><thead><tr><th>Factor</th><th>ProDentim</th><th>Other oral-care option</th></tr></thead><tbody>
       <tr><td>Primary role</td><td>Optional dietary supplement</td><td>Varies: routine care, product, or professional service</td></tr>
       <tr><td>Evidence</td><td>Check product/strain-specific evidence</td><td>Check evidence for the specific approach</td></tr>
       <tr><td>Label / specifications</td><td>Check current package</td><td>Check current product/service details</td></tr>
       <tr><td>Cost</td><td>Check current offer</td><td>Check current total cost</td></tr>
       <tr><td>Billing</td><td>Check purchase terms</td><td>Check purchase/service terms</td></tr>
       <tr><td>Professional input</td><td>May be appropriate depending on circumstances</td><td>Depends on the problem and option</td></tr>
      </tbody></table>
      <p>Read our <Link prefetch={false} href="/articles/34-prodentim-alternatives-what-to-compare/">ProDentim alternatives and comparison guide</Link> for the broader framework.</p>
     </section>

     <section className="section">
      <span className="eyebrow">7 · FAQ</span>
      <h2>Frequently asked questions</h2>
      <div className="faq-list">
       <details><summary>Does ProDentim replace brushing, flossing or dental treatment?</summary><p>No. A dietary supplement should not be treated as a substitute for routine oral hygiene, diagnosis or professional dental treatment.</p></details>
       <details><summary>Does the seller's probiotic claim prove a specific dental result?</summary><p>No. Seller claims describe how the product is marketed. They are not automatically independent evidence of a particular clinical outcome.</p></details>
       <details><summary>What should I check on the current ProDentim label?</summary><p>Check the serving size, named strains, ingredient amounts, directions, warnings and manufacturer or distributor information available with the current product.</p></details>
       <details><summary>Should I trust an old ProDentim price shown in a review?</summary><p>No. Price, package choices, shipping and billing terms can change. Check the current purchase page.</p></details>
      </div>
     </section>

     <section className="section section-soft">
      <span className="eyebrow">8 · Verdict</span>
      <h2>A decision framework, not a guaranteed outcome</h2>
      <p>ProDentim is a branded oral-care supplement that can be evaluated on the same basis as other commercial health products: current formulation, seller claims, independent evidence, personal fit and transaction terms.</p>
      <p>GuideSignal does not claim that ProDentim treats, cures or prevents a dental condition, and it does not treat marketing statements as proof of a guaranteed result. Readers should resolve the health question first, then decide whether the product is worth further investigation.</p>
     </section>

     <div className="info-card">
      <span className="eyebrow">Research sources</span>
      <h2>Check the underlying information</h2>
      <p><a href={sellerUrl} target="_blank" rel="noopener noreferrer">Seller product presentation</a></p>
      <p><a href="https://www.nccih.nih.gov/health/probiotics-usefulness-and-safety" target="_blank" rel="noopener noreferrer">NCCIH: Probiotics</a></p>
      <p><a href="https://www.nidcr.nih.gov/health-info/gum-disease" target="_blank" rel="noopener noreferrer">NIDCR: Gum Disease</a></p>
      <p><a href="https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance" target="_blank" rel="noopener noreferrer">FTC: Health Products Compliance Guidance</a></p>
     </div>

     <AffiliateCTA articleSlug="prodentim-product-page" position="product-final" offerKey="prodentim" variant="card" label="Check Current ProDentim Offer →"/>
    </main>

    <aside className="sidebar">
     <div className="info-card">
      <span className="eyebrow">GuideSignal Research Desk</span>
      <h3>Research first. Purchase second.</h3>
      <p className="muted">This page separates seller claims, independent evidence and transaction details so the reader can make an informed purchase decision.</p>
      <Link className="text-link" prefetch={false} href="/disclosure/">Read our affiliate disclosure →</Link>
     </div>
     <div className="info-card">
      <span className="eyebrow">Related research</span>
      <p><Link className="text-link" prefetch={false} href="/articles/32-why-do-gums-bleed-when-brushing/">Why do gums bleed when brushing? →</Link></p>
      <p><Link className="text-link" prefetch={false} href="/articles/33-oral-probiotics-what-the-evidence-says/">Oral probiotics evidence →</Link></p>
      <p><Link className="text-link" prefetch={false} href="/articles/34-prodentim-alternatives-what-to-compare/">ProDentim alternatives →</Link></p>
     </div>
    </aside>
   </div>
  </section>
 </>;
}
