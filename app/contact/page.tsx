import Link from "next/link";

export const metadata={title:"Contact GuideSignal",description:"Contact GuideSignal about editorial corrections, factual issues, content feedback and partnership questions.",alternates:{canonical:"/contact/"},openGraph:{type:"website",siteName:"GuideSignal",title:"Contact GuideSignal",description:"Contact GuideSignal about editorial and partnership questions.",url:"/contact/"}};

export default function Contact(){
 return <div className="container section"><div className="info-card reading-copy">
  <span className="eyebrow">Contact</span>
  <h1>Contact GuideSignal</h1>
  <p>For factual corrections, source questions or editorial feedback, use the public GitHub issue form. Please include the page URL, the specific claim and a reliable source where possible.</p>
  <p><a className="button" href="https://github.com/armanyaempire-sketch/techsignal/issues/new" target="_blank" rel="noopener noreferrer">Open a correction request</a></p>
  <p>For general information about how editorial decisions are made, see our <Link href="/editorial-policy/">editorial policy</Link> and <Link href="/disclosure/">advertising disclosure</Link>.</p>
  <p className="muted">A dedicated public email address can be added later without changing the editorial workflow.</p>
 </div></div>;
}