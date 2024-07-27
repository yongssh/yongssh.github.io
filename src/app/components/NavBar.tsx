"use client"; // Add this directive at the top

import React from "react";
import Link from "next/link";
import { EB_Garamond } from 'next/font/google'
import styles from '../styles/Introduction.module.css'; 
import WritingPage from "../writing/page";
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from "react";

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
})


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`w-full h-20 bg-sky-950 sticky top-0 z-50 ${garamond.className}`}>
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div>
          <p className="text-white m-0 text-lg font-bold">Yong-Yu Huang</p>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        <div className={`md:flex gap-x-6 text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row">
            <li>
              <Link href="/about">
                <p className="py-2 md:py-0">About</p>
              </Link>
            </li>
            <li>
              <Link href="/writing">
                <p className="py-2 md:py-0">Writing</p>
              </Link>
            </li>
            <li>
              <Link href="/photo-gallery">
                <p className="py-2 md:py-0">Photography</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;