import Link from "next/link";

export function Footer(){
 return <footer className="site-footer">
  <div className="container footer-grid">
   <div className="footer-brand">
    <Link prefetch={false} href="/" className="footer-logo">GuideSignal</Link>
    <p>Practical editorial guides for better decisions, clearer trade-offs and useful next steps.</p>
    <div className="footer-category-links">
     <Link prefetch={false} href="/category/e-business/">E-Business</Link>
     <Link prefetch={false} href="/category/health-fitness/">Health & Fitness</Link>
     <Link prefetch={false} href="/category/womens-health-beauty/">Women's Health & Beauty</Link>
    </div>
   </div>
   <div>
    <div className="eyebrow">Explore</div>
    <div className="footer-links">
     <Link prefetch={false} href="/about/">About</Link>
     <Link prefetch={false} href="/contact/">Contact</Link>
     <Link prefetch={false} href="/sitemap.xml">Sitemap</Link>
    </div>
   </div>
   <div>
    <div className="eyebrow">Trust & policies</div>
    <div className="footer-links">
     <Link prefetch={false} href="/editorial-policy/">Editorial Policy</Link>
     <Link prefetch={false} href="/disclosure/">Disclosure</Link>
     <Link prefetch={false} href="/privacy/">Privacy</Link>
     <Link prefetch={false} href="/terms/">Terms</Link>
    </div>
   </div>
  </div>
  <div className="container footer-bottom">GuideSignal publishes independent editorial content and may earn from qualifying affiliate links or advertising.</div>
 </footer>;
}