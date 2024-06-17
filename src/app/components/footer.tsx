import React from "react";
import { EB_Garamond } from 'next/font/google'
import styles from '../styles/Introduction.module.css';  // Import CSS module

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
})

const Footer =() => {
    return(
        <footer className="footer">
        <div className="text-center footer-text">Made with ❤ by Yong-Yu Huang</div></footer>
    );
};

export default Footer;