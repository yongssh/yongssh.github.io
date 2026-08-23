"use client";

import React from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const NAV_ITEMS = [
  { key: "about", label: "About", href: "/" },
  { key: "writing", label: "Writing", href: "/writing" },
  { key: "photo-gallery", label: "Photography", href: "/photo-gallery" },
];

export default function NavBar() {
  return (
    <header className={styles.navHeader}>
      <nav aria-label="Main navigation" className={styles.nav}>
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.key} className={styles.navItem}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}