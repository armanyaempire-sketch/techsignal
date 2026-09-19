import Link from "next/link";

export function Header(){
 return <header className="site-header">
  <div className="container header-inner">
   <Link prefetch={false} href="/" className="brand" aria-label="GuideSignal home">
    <span className="brand-mark">GS</span>
    <span><strong>GuideSignal</strong><small>Practical guides for smarter choices.</small></span>
   </Link>
   <nav className="main-nav" aria-label="Primary navigation">
    <Link className="nav-category nav-business" prefetch={false} href="/category/e-business/">E-Business</Link>
    <Link className="nav-category nav-health" prefetch={false} href="/category/health-fitness/">Health & Fitness</Link>
    <Link className="nav-category nav-womens" prefetch={false} href="/category/womens-health-beauty/">Women's Health & Beauty</Link>
    <Link className="nav-about" prefetch={false} href="/about/">About</Link>
   </nav>
  </div>
 </header>;
}
