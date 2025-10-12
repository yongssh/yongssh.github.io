"use client";
import React from "react";
import Link from "next/link";



const CATEGORIES = [
  { key: "about", label: "About", href: "/about" },
  { key: "writing", label: "Writing", href: "/writing" },
  { key: "photo-gallery", label: "Photography", href: "/photo-gallery" },
];

export default function NavBar() {
  return (
    <nav
      className={`nav fixed top-0 w-full z-50 bg-white border-b border-gray-200 font-zen-old-micho`}
    >
      <ul className="navList flex justify-center flex-wrap gap-3 md:gap-4 px-6 py-3 m-0 list-none">
        {CATEGORIES.map((c) => (
          <li key={c.key} className="navItem flex-none">
            <Link href={c.href}>
              <p className="navButton text-[15px] font-medium tracking-wide text-[#c47a88] hover:text-[#a25e6b] transition-colors duration-200">
                {c.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
