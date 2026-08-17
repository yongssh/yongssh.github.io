"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../styles/About.module.css";

export default function About() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prev) => (prev < 2 ? prev + 1 : prev));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.aboutSection} aria-labelledby="about-heading">
      <header className={styles.header}>
        <h1 id="about-heading" className={styles.name}>
          Yong-Yu Huang
        </h1>

        <div className={styles.iconRow}>
          <a
            href="https://www.linkedin.com/in/yong-yuhuang/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yongssh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </header>

      <article className={styles.bioContainer}>
        <p
          className={`${styles.bioText} ${
            visibleIndex >= 0 ? styles.visible : ""
          }`}
        >
          Yong-Yu Huang studied English literature and computer science at Northwestern University. Currently, she is a data and reporting fellow at <i><a href="https://www.rangemedia.co/author/yong-yuhuang/">RANGE Media</a></i> in Spokane, Washington. 
          Her work can be found in <i>The Nation</i>, <i>Britannica</i>, <i>Penang Monthly</i>, and <i>The Daily Northwestern</i>.

        </p>
         <p
          className={`${styles.bioText} ${
            visibleIndex >= 0 ? styles.visible : ""
          }`}
        >
        Her poetry is featured in <i>Narrative Magazine</i>, <i>Poet Lore</i>, and <i>The Adroit Journal</i>, among others, and has been recognized by The Poetry Society of the UK. <u><a href="https://www.printedmatter.org/catalog/71152">Here&apos;s</a></u> a zine of her poetry and photography, made in collaboration with Kimberly Jao.
        </p>
        <p
          className={`${styles.bioText} ${
            visibleIndex >= 2 ? styles.visible : ""
          }`}
        >
          <a href="mailto:yongyu.yy.huang@gmail.com">
            <u>Email</u>
          </a>
          {" "}or{" "}
          <a href="https://www.twitter.com/yong_yuhuang">
            <u>Twitter</u>
          </a>.
        </p>
      </article>
    </section>
  );
}
