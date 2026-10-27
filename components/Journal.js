import { articles } from "@/data/site";
import { images } from "@/data/images";
import Picture from "./Picture";
import { ArrowIcon } from "./Icons";
import styles from "./Journal.module.css";

// Magazine layout: one featured story on a full photo, two stories beside it.
export default function Journal() {
  const [feature, ...rest] = articles;

  return (
    <section id="journal" className={`panel ${styles.journal}`} aria-labelledby="journal-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <h2 id="journal-title" data-reveal>Before your first class</h2>
          <a
            className={styles.all}
            href="https://puppyyogabalirizki.com/category/blog/"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
          >
            All articles <ArrowIcon width={16} height={16} />
            <span className="visually-hidden"> (opens the blog in a new tab)</span>
          </a>
        </div>

        <div className={styles.grid}>
          <a href={feature.href} target="_blank" rel="noopener noreferrer" className={styles.feature} data-reveal-item>
            <Picture image={images[feature.image]} sizes="(min-width: 900px) 58vw, 100vw" className={styles.featureImg} />
            <span className={styles.featureBody}>
              <span className={styles.featureTitle}>{feature.title}</span>
              <span className={styles.featureText}>{feature.excerpt}</span>
              <span className={styles.read}>
                Read the article <ArrowIcon width={16} height={16} />
              </span>
            </span>
            <span className="visually-hidden"> (opens the blog in a new tab)</span>
          </a>

          {rest.map((post) => (
            <a key={post.href} href={post.href} target="_blank" rel="noopener noreferrer" className={styles.card} data-reveal-item>
              <span className={styles.cardMedia}>
                <Picture image={images[post.image]} sizes="(min-width: 900px) 18vw, 40vw" className={styles.cardImg} />
              </span>
              <span className={styles.cardBody}>
                <span className={styles.cardTitle}>{post.title}</span>
                <span className={styles.cardText}>{post.excerpt}</span>
                <span className={styles.go} aria-hidden="true">
                  <ArrowIcon width={18} height={18} />
                </span>
              </span>
              <span className="visually-hidden"> (opens the blog in a new tab)</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
