import React from "react";
import Link from "next/link";
import { EB_Garamond } from 'next/font/google'
import styles from '../styles/Introduction.module.css'; 
import WritingPage from "../writing/page";

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
})


const NavBar = () => {
    return (
      <>
        <div className={`w-full h-20 bg-sky-950 sticky top-0 ${garamond.className}`}>
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <div>
                <p className="text-white">Yong-Yu Huang</p>
              </div>
              <div>
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
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default NavBar;