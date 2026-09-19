import Link from "next/link";
import type {Article} from "@/lib/articles";
import {ArticleVisual} from "@/components/article-visual";
import styles from "./editor-picks.module.css";

export function EditorialPicks({articles}:{articles:Article[]}){
 if(!articles.length)return null;
 return <section className={styles.section} id="editors-picks">
  <div className="container">
   <div className="section-header">
    <div>
     <span className="eyebrow">Editor’s desk</span>
     <h2>Editor’s Picks</h2>
     <p className="section-intro">A second set of useful guides for readers who want a practical next step after the homepage highlights.</p>
    </div>
   </div>
   <div className={styles.grid}>
    {articles.map(article=><article className={styles.card} key={article.slug}>
     <ArticleVisual slug={article.slug} category={article.category} title={article.title} variant="card"/>
     <div className={styles.content}>
      <div className={styles.kicker}>{article.categoryName}</div>
      <h3 className={styles.title}><Link prefetch={false} href={"/articles/"+article.slug+"/"}>{article.title}</Link></h3>
      <p className={styles.description}>{article.description}</p>
      <Link className={styles.link} prefetch={false} href={"/articles/"+article.slug+"/"}>Read guide →</Link>
     </div>
    </article>)}
   </div>
  </div>
 </section>;
}