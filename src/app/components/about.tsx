"use client";

import React, { useEffect, useState } from "react";
import { EB_Garamond } from 'next/font/google';
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Footer from "./footer";

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
});

const fields: string[] = ["Computer Science", "English Literature"];

const AboutSection = () => {
  const [currentField, setCurrentField] = useState(fields[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentField((prevField) => {
        const nextIndex = (fields.indexOf(prevField) + 1) % fields.length;
        return fields[nextIndex];
      });
    }, 4000);

    return () => clearInterval(intervalId);  
  }, []);

  return (
    <section className={`${garamond.variable} about-section`}>
      <div className="about-container">
        <div className="portrait-container">
          <Image 
            src="/portrait.JPG" 
            width={300} 
            height={400} 
            alt="portrait image" 
            className="intro-picture" 
            style={{ borderRadius: '100px', padding: '2rem'}} 
          />
        </div>
        <div>
          <div className="header">
            <span>Hello! I&apos;m Yong-Yu, <br></br>and I study </span><br></br>
            <span className="typed-text">{currentField}</span>
          
          {/* <Divider className="divider" variant="middle" /> */}
          </div>
        </div>
        <p className="bio-text">
          I study computer science and English literature at Northwestern University. I&apos;ve been a Kaplan Humanities Scholar and a Leopold Fellow, and I&apos;ve won the William Faricy Poetry Award, the Helen G. Scott Essay Prize, and the Kaplan Humanities Scholars Prize. Currently, I am the Managing Editor for <em>Helicon</em> and the Features Editor for <em>North By Northwestern</em>.
          Outside of school, my work appears in <em>Waxwing</em>, <em>The Adroit Journal</em>, <em>The Offing</em>, <em>Sixth Finch</em>, and elsewhere. I am the recipient of the 2021 Elinor Benedict Poetry Prize and have been recognized by the Poetry Society of the UK, Best Small Fictions, the Hippocrates Society, and the Gregory Djanikian Scholars Program, among others.
          In my free time, I can be found doing crosswords, listening to Lorde, or going for a walk.
          <br /><br />
          <span>
            <a href="mailto:yongyu.yy.huang@gmail.com"><u>Email</u></a>, 
            <a href="https://www.twitter.com/yong_yuhuang"> <u>Twitter</u></a>, or read more on 
            <a href="https://yongyuhuang.substack.com/"> <u>Substack</u></a>.
          </span>
          <br /><br />
        </p>
      </div>

    </section>
  );
};

export default AboutSection;
