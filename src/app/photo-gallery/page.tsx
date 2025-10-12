import React from "react";
import NavBar from "../components/NavBar";
import PhotoGallery from "../components/Gallery";
import Footer from "../components/footer";
import styles from "./photo-gallery-page.module.css";


export default function GalleryPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <NavBar />
      </header>

      <main role="main" className={styles.main}>
        <section
          aria-labelledby="gallery-heading"
          className={styles.section}
        >
          <h1
            id="gallery-heading"
            className={`${styles.subtext} font-zen-old-micho`}
          >
            Click to expand.          
          </h1>
        

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
