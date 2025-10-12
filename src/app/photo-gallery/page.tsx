import React from "react";
import NavBar from "../components/NavBar";
import PhotoGallery from "../components/Gallery";
import Footer from "../components/footer";
import styles from "./photo-gallery-page.module.css";

import {Zen_Old_Mincho } from "next/font/google";

const zenMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-mincho",
});
export default function GalleryPage() {
  return (
    <div className={styles.wrapper}>
      {/* --- Site Header --- */}
      <header className={styles.header}>
        <NavBar />
      </header>

      {/* --- Main Content --- */}
      <main role="main" className={styles.main}>
        <section
          aria-labelledby="gallery-heading"
          className={styles.section}
        >
          <h1
            id="gallery-heading"
            className={`${styles.heading} ${zenMincho.className}`}
          >
            I tell stories — sometimes with words, sometimes with light.
          </h1>
          <p className={styles.subtext}>
            A small selection of my photography work. Click to expand.
          </p>

          <div className={styles.galleryContainer}>
            <PhotoGallery />
          </div>
        </section>
      </main>

      {/* --- Site Footer --- */}
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
