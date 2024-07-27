"use client"; // Add this directive at the top
import React, { useState } from "react";
import Link from "next/link";
import { EB_Garamond } from 'next/font/google';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from '../styles/Introduction.module.css';

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
});

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`w-full h-20 bg-sky-950 sticky top-0 ${garamond.className}`}>
      <div className="flex justify-between items-center h-full px-4">
          <p className="text-white m-0">Yong-Yu Huang</p>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="/writing">
                <p>Writing</p>
              </Link>
            </li>
            <li>
              <Link href="/photo-gallery">
                <p>Photography</p>
              </Link>
            </li>
          </ul>
        </div>
        {isOpen && (
          <div className="md:hidden bg-sky-950 text-white">
            <ul className="flex flex-col items-center">
              <li className="py-2">
                <Link href="/about" onClick={toggleMenu}>
                  <p>About</p>
                </Link>
              </li>
              <li className="py-2">
                <Link href="/writing" onClick={toggleMenu}>
                  <p>Writing</p>
                </Link>
              </li>
              <li className="py-2">
                <Link href="/photo-gallery" onClick={toggleMenu}>
                  <p>Photography</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
