import Link from "next/link";
import {SITE_NAME,EDITORIAL_REVIEW_DATE} from "@/lib/site";

export const metadata={
 title:"Contact GuideSignal",
 description:"Contact GuideSignal about editorial corrections, factual issues, content feedback and publication questions.",
 alternates:{canonical:"/contact/"},
 openGraph:{type:"website",siteName:SITE_NAME,title:"Contact GuideSignal",description:"Contact GuideSignal about editorial and factual questions.",url:"/contact/"}
};

export default function Contact(){
 return <div className="container section"><div className="info-card reading-copy">
  <span className="eyebrow">Contact</span>
  <h1>Contact GuideSignal</h1>
  <p>For factual corrections, source questions or editorial feedback, use the public correction workflow below.</p>

  <h2>Editorial corrections</h2>
  <p>Include the GuideSignal page URL, the exact statement you are questioning, why it may be inaccurate and a reliable source that supports the correction where possible.</p>
  <p><a className="button" href="https://github.com/armanyaempire-sketch/techsignal/issues/new" target="_blank" rel="noopener noreferrer">Open a correction request</a></p>

  <h2>Privacy note</h2>
  <p>The correction workflow is a public GitHub issue. Do not include private contact details, medical information, payment information, account credentials or other sensitive data in a public issue.</p>

  <h2>Commercial or partnership questions</h2>
  <p>For publication-related partnership questions, use the same public workflow only for non-confidential messages. Do not post confidential business information in a public issue.</p>

  <h2>Other trust pages</h2>
  <p>See our <Link href="/editorial-policy/">editorial policy</Link>, <Link href="/disclosure/">advertising disclosure</Link>, <Link href="/privacy/">privacy policy</Link> and <Link href="/terms/">terms of use</Link>.</p>

  <p className="muted">Current public contact method reviewed: {EDITORIAL_REVIEW_DATE}.</p>
 </div></div>;
}