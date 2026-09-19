import Link from "next/link";
import {SITE_NAME,EDITORIAL_REVIEW_DATE,PUBLIC_REPOSITORY} from "@/lib/site";

export const metadata={
 title:"About GuideSignal",
 description:"Learn what GuideSignal covers, how its guides are researched, how commercial relationships work, and how readers can request corrections.",
 alternates:{canonical:"/about/"},
 openGraph:{type:"website",siteName:SITE_NAME,title:"About GuideSignal",description:"How GuideSignal researches and publishes practical guides.",url:"/about/"}
};

export default function About(){
 return <div className="container section"><div className="info-card reading-copy">
  <span className="eyebrow">About</span>
  <h1>Useful information before the purchase decision.</h1>
  <p>GuideSignal publishes practical guides around technology, online business, health, fitness and women's wellness. The publication is built around source-aware research, practical decision frameworks and clearly stated limits.</p>

  <h2>Editorial identity</h2>
  <p>GuideSignal uses a team-based editorial byline rather than inventing individual biographies or credentials. Articles identify the research desk responsible for the subject area, and the <Link href="/author/guidesignal-editorial-team/">Editorial Team profile</Link> explains the publication's research standards and safeguards.</p>

  <h2>How we research</h2>
  <p>We prefer primary, official, government, academic and recognized professional sources where they are relevant. Commercial claims are identified as seller claims when they have not been independently verified.</p>

  <h2>How we make money</h2>
  <p>The site may earn money from qualifying affiliate purchases and, when configured, third-party advertising. Affiliate relationships are disclosed on relevant pages, and advertising is kept separate from editorial conclusions. See the <Link href="/disclosure/">advertising disclosure</Link>.</p>

  <h2>What we do not promise</h2>
  <p>We do not promise guaranteed income, guaranteed health outcomes or universal product results. Health and wellness content is general educational information, not individualized medical advice.</p>

  <h2>Corrections and reader feedback</h2>
  <p>Readers can report a factual issue, source problem or editorial concern through the <Link href="/contact/">Contact page</Link>. The current public workflow is a GitHub correction request. Please include the page URL, the specific claim and a reliable source where possible, and do not post private or sensitive information in a public issue.</p>

  <p className="muted">Editorial information reviewed: {EDITORIAL_REVIEW_DATE}. Public source repository: <a href={PUBLIC_REPOSITORY} target="_blank" rel="noopener noreferrer">GitHub / techsignal</a>.</p>

  <h2>Living publication</h2>
  <p>GuideSignal is maintained as a living publication. Pages may be updated when source material, product terms, prices or the underlying reader question changes. Material corrections should be reflected in the page content and updated date.</p>
 </div></div>;
}