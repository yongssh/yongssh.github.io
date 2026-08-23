"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../styles/About.module.css";

export default function About() {
const [visibleIndex, setVisibleIndex] = useState(-1);

useEffect(() => {
  const timers = [
    setTimeout(() => setVisibleIndex(0), 0),
    setTimeout(() => setVisibleIndex(1), 500),
    setTimeout(() => setVisibleIndex(2), 750),
    setTimeout(() => setVisibleIndex(3), 1250),
  ];

  return () => timers.forEach(clearTimeout);
}, []);

  return (
    <section className={styles.aboutSection} aria-labelledby="about-heading">
      <header className={styles.header}>
        <h1 id="about-heading" className={styles.name}>
          Hi, I’m Yong-Yu. 
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
          Currently, I’m a <span className={styles.highlight}>data and reporting fellow</span> at <i><a href="https://www.rangemedia.co/author/yong-yuhuang/">RANGE Media</a></i> in Spokane, WA.
          My work can be found in <i>The Nation</i>, <i>Britannica</i>, <i>Penang Monthly</i>, and <i>The Daily Northwestern</i>.

        </p>
         <p
          className={`${styles.bioText} ${
            visibleIndex >= 1 ? styles.visible : ""
          }`}
        >
          I’m a recent graduate of Northwestern University, where I studied English literature and computer science and received a Franke Fellowship.

        </p>
         <p
          className={`${styles.bioText} ${
            visibleIndex >= 2 ? styles.visible : ""
          }`}
        >
        Once, I got to read at The Poetry Society of the UK’s awards ceremony. My poetry has also been featured in <i>Narrative Magazine</i>, <i>Poet Lore</i>, and <i>The Adroit Journal</i>, among others. <a href="https://www.printedmatter.org/catalog/71152">Here’s</a> a zine of my writing and photography, made in collaboration with Kimberly Jao.
        </p>

        <p
          className={`${styles.bioText} ${
            visibleIndex >= 3 ? styles.visible : ""
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
