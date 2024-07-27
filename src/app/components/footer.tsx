import React from "react";
import { EB_Garamond } from 'next/font/google';
import styles from '../styles/Introduction.module.css';

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
});

const Footer = () => {
    return (
        <footer className={`bg-gray-800 text-white py-4 text-center ${garamond.className}`}>
            <div className="container mx-auto px-4">
                <p className="text-sm">Made with ❤ by Yong-Yu Huang</p>
            </div>
        </footer>
    );
};

export default Footer;
