import React from "react";
import { EB_Garamond } from 'next/font/google';
import styles from '../styles/Introduction.module.css';
import Image from "next/image";


import { Zen_Old_Mincho } from "next/font/google";

const zenMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-mincho",
});


const IntroSection = () => {
    return (
        <section className={`bg-white text-black font-micho} ${styles.IntroSection}`}>
            <p className="bio">
                I study English literature and computer science at Northwestern University. In my free time, you can find me doing a crossword or going for a walk.
            </p>
            <div className="col-span-5">
                <Image 
                    src="/hike.png"
                    alt="hike image"
                    width={200}
                    height={150}
                />
            </div>
        </section>
    );
};

export default IntroSection;
