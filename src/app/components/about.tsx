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
          I study computer science and English literature at Northwestern University, where I&apos;m a Franke Undergraduate Fellow. 
          I edit <em>Helicon</em>, and I also work on web projects and write for <em>The Daily Northwestern</em>. 
          In the past, I&apos;ve interned for <em>Encyclopædia Britannica</em> and edited features for <em>North By Northwestern</em>. 
          I&apos;ve been a Kaplan Humanities Scholar and a Leopold Fellow, and I&apos;ve won the William Faricy Poetry Award, the Helen G. Scott Essay Prize, and the Kaplan Humanities Scholars Prize. 
        </p>

        <p
          className={`${styles.bioText} ${
            visibleIndex >= 1 ? styles.visible : ""
          }`}
        >
          Outside of school, my work appears in <em>Waxwing</em>, <em>The Adroit Journal</em>, <em>The Offing</em>, <em>Sixth Finch</em>, and elsewhere. 
          I was the recipient of the 2021 Elinor Benedict Poetry Prize and have been recognized by the Poetry Society of the UK, Best Small Fictions, the Hippocrates Society, and the Gregory Djanikian Scholars Program, among others. 
          In my free time, I can be found doing crosswords, listening to Lorde, or going for a walk. 
        </p>

        <p
          className={`${styles.bioText} ${
            visibleIndex >= 2 ? styles.visible : ""
          }`}
        >
          <a href="mailto:yongyu.yy.huang@gmail.com">
            <u>Email</u>
          </a>
          ,{" "}
          <a href="https://www.twitter.com/yong_yuhuang">
            <u>Twitter</u>
          </a>
          , or read more on{" "}
          <a href="https://yongyuhuang.substack.com/">
            <u>Substack</u>
          </a>
          .
        </p>
      </article>
    </section>
  );
}
