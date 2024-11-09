import React from "react";
import { EB_Garamond } from 'next/font/google';

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
});

const Footer = () => {
    return (
        <footer className={"footer"}>
                <p className="footer-text">Made with ❤ by Yong-Yu Huang</p>
        </footer>
    );
};

export default Footer;
