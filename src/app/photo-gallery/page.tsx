import React from "react";
import NavBar from "../components/NavBar";
import PhotoGallery from "../components/Gallery";
import Footer from "../components/Footer";
import styles from "./photo-gallery-page.module.css";

export const metadata = {
  title: "Photography | Yong-Yu Huang",
  description: "Photography by Yong-Yu Huang.",
};

export default function GalleryPage() {
  return (
    <div className={styles.wrapper}>
      <NavBar />

      <main className={styles.main}>
        <section
          aria-labelledby="gallery-heading"
          className={styles.section}
        >
          <header className={styles.pageHeader}>
            <h1 id="gallery-heading" className={styles.heading}>
              Photography
            </h1>

            <p className={styles.subtext}>
              Click an image to expand.
            </p>
          </header>

          <PhotoGallery />
        </section>
      </main>

      <Footer />
    </div>
  );
}