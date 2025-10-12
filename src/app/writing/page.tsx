import React from "react";
import NavBar from "../components/NavBar";
import Publications from "../components/publications";
import Honors from "../components/honors";
import Footer from "../components/footer";
import styles from "./writing-page.module.css";

export const metadata = {
  title: "Writing | Yong-Yu Huang",
  description:
    "Selected writing, reporting, and published works by Yong-Yu Huang, featuring journalism, essays, and creative pieces.",
};

export default function WritingPage() {
  return (
    <div className={`${styles.wrapper} font-zen-old-micho`}>
      <header className={styles.header}>
        <NavBar />
      </header>

      <main id="main-content" role="main" className={styles.main}>
        <section aria-labelledby="writing-heading" className={styles.section}>
          <header className={styles.sectionHeader}>
            <h1 id="writing-heading" className={styles.heading}>
              Writing & Reporting
            </h1>
            <p className={styles.subtext}>
              Selected published work, reporting projects, and honors.
            </p>
          </header>

          <div className={styles.grid}>
            <section aria-labelledby="publications-heading" className={styles.column}>
              <h2 id="publications-heading" className="sr-only">
                Publications
              </h2>
              <Publications />
            </section>

            <aside aria-labelledby="honors-heading" className={styles.column}>
              <h2 id="honors-heading" className="sr-only">
                Honors and Awards
              </h2>
              <Honors />
            </aside>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
