import React from "react";
import { EB_Garamond } from 'next/font/google';
import styles from '../styles/Introduction.module.css';
import Image from "next/image";

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
});

const AboutSection = () => {
  return (
    <section className={`bg-white text-black p-4 ${garamond.className} ${styles.IntroSection}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <Image 
            src="/portrait.JPG" 
            alt="portrait image"
            width={300}
            height={400}
            className="w-full h-auto max-w-xs md:max-w-full"
          />
        </div>
        <p className="md:col-span-2 text-center md:text-left mt-4 md:mt-0">
          <span>
            Yong-Yu Huang studies English literature and computer science at Northwestern University. She has been a Kaplan Scholar and a Leopold Fellow, and she has won the William Faricy Poetry Award, the Helen G. Scott Essay Prize, and the Kaplan Humanities Scholars Prize. 
            Her work appears in <em>Waxwing</em>, <em>The Adroit Journal</em>, <em>The Offing</em>, <em>The Penn Review</em>, and elsewhere. She is the recipient of the 2021 Elinor Benedict Poetry Prize and has been recognized by the Poetry Society of the UK, Best Small Fictions, the Hippocrates Society, and the Gregory Djanikian Scholars Program, among others.
            In her free time, she can be found doing crosswords, listening to Lorde, or going for a walk.
          </span>
          <br></br>
          <br></br>
          <span>
            <a className='underline' href="mailto:yongyu.yy.huang@gmail.com">Email</a>
            <span>, </span>
            <a className='underline' href="https://www.twitter.com/yong_yuhuang">Twitter</a>
            <span>, or read more on </span>
            <a className='underline' href="https://yongyuhuang.substack.com/">Substack</a>.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
