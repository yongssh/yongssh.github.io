import React from "react";
import { EB_Garamond } from 'next/font/google';
//import globals from '../styles/globals.css';
import Image from "next/image";

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
});

const AboutSection = () => {
  return (
    <div className="about-section-container">
        <div className="grid-container">
          <div className="portrait-container">
            <Image 
              src="/portrait.JPG" 
              alt="portrait image"
              width={300}
              height={400}
              className="w-full h-auto max-w-xs md:max-w-full"
            />
          </div>
          <p className="bio-text">
            <span>
              Yong-Yu Huang studies English literature and computer science at Northwestern University. She has been a Kaplan Humanities Scholar and a Leopold Fellow, and she has won the William Faricy Poetry Award, the Helen G. Scott Essay Prize, and the Kaplan Humanities Scholars Prize. She is the Managing Editor for <em>Helicon</em> and Features Editor for <em>North By Northwestern</em>.
              Outside of school, her work appears in <em>Waxwing</em>, <em>The Adroit Journal</em>, <em>The Offing</em>, <em>Sixth Finch</em>, and elsewhere. She is the recipient of the 2021 Elinor Benedict Poetry Prize and has been recognized by the Poetry Society of the UK, Best Small Fictions, the Hippocrates Society, and the Gregory Djanikian Scholars Program, among others.
              In her free time, she can be found doing crosswords, listening to Lorde, or going for a walk.
            </span>
            <br></br>
            <br></br>
            <span>
              <a href="mailto:yongyu.yy.huang@gmail.com">Email</a>,
              <a href="https://www.twitter.com/yong_yuhuang"> Twitter</a>, or read more on 
              <a href="https://yongyuhuang.substack.com/"> Substack</a>.
            </span>
          </p>
        </div>
    </div>
  );
};

export default AboutSection;
