import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "./writing-page.module.css";
import {
  journalism,
  poetry,
  fiction,
  honors,
  type Publication,
} from "../data/writing";

export const metadata = {
  title: "Writing | Yong-Yu Huang",
  description:
    "Selected journalism, nonfiction, poetry, and fiction",
};

function PublicationList({ items }: { items: Publication[] }) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <article
          key={`${item.title}-${item.publication}-${index}`}
          className={styles.publication}
        >
          <div className={styles.publicationText}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pubTitle}
              >
                {item.title}
              </a>
            ) : (
              <span className={styles.pubTitle}>{item.title}</span>
            )}

            <div className={styles.pubMeta}>
              {item.preposition || "in"}{" "}
              <span className={styles.publicationName}>
                {item.publication}
              </span>

              {item.note && (
                <>
                  , reprinted in{" "}
                  <span className={styles.publicationName}>
                    Best Small Fictions
                  </span>
                </>
              )}

              {item.date && <> | {item.date}</>}

              {item.extraHref && (
                <>
                  {" "}
                  ·{" "}
                  <a
                    href={item.extraHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pdfLink}
                  >
                    PDF
                  </a>
                </>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function WritingPage() {
  return (
    <div className={styles.wrapper}>
      <NavBar />

      <main id="main-content" className={styles.main}>
        <header className={styles.pageHeader}>
          <h1 className={styles.heading}>Select Writing</h1>
      
        </header>

        <div className={styles.layout}>
          <aside className={styles.contents}>
            <div className={styles.contentsInner}>
              <span className={styles.contentsLabel}>Writing</span>

              <nav aria-label="Writing categories">
                <a href="#journalism">Journalism & Nonfiction</a>
                <a href="#poetry">Poetry</a>
                <a href="#fiction">Fiction</a>
                <a href="#honors">Honors</a>
              </nav>
            </div>
          </aside>

          <div className={styles.content}>
            <section id="journalism" className={styles.writingSection}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  Journalism & Nonfiction
                </h2>
              </header>

              <PublicationList items={journalism} />
            </section>

            <section id="poetry" className={styles.writingSection}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  Poetry
                </h2>
              </header>

              <PublicationList items={poetry} />
            </section>

            <section id="fiction" className={styles.writingSection}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  Fiction  </h2>
              </header>

              <PublicationList items={fiction} />
            </section>

            <section id="honors" className={styles.writingSection}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Honors</h2>
              </header>
<div className={styles.honorsList}>
  {honors.map((honor, index) => (
    <div key={index} className={styles.honor}>
      <div className={styles.honorText}>
        <span className={styles.honorResult}>{honor.result},</span>{" "}
        <span className={styles.honorPrize}>{honor.prize}</span>

        {honor.organization && (
          <>
            , <em>{honor.organization}</em>
          </>
        )}

        {honor.note && <> — {honor.note}</>}
      </div>

      <span className={styles.honorYear}>{honor.year}</span>
    </div>
  ))}
</div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}