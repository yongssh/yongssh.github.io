"use client";
import React, { useState } from "react";
import Link from "next/link";
import { EB_Garamond } from 'next/font/google';
import { HiMenu, HiX } from 'react-icons/hi';

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
});

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/writing", label: "Writing" },
    { href: "/photo-gallery", label: "Photography" },
  ];

  if (isOpen) {
    return (
      <div className={`md:hidden bg-sky-950 text-white w-full ${garamond.className}`}>
        <ul className="flex flex-col items-center py-4">
          {menuItems.map(({ href, label }) => (
            <li key={href} className="py-2">
              <Link href={href} onClick={toggleMenu}>
                <p className="hover:underline">{label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={`w-full bg-sky-950 sticky top-0 z-50 ${garamond.className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 md:py-4 mx-auto">
        <p className="text-white text-lg md:text-xl">Yong-Yu Huang</p>
        
        <button onClick={toggleMenu} className="text-white md:hidden">
          <HiMenu size={30} />
        </button>

        <ul className="hidden md:flex gap-x-6 text-white">
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <p className="hover:underline">{label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
