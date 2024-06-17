import React from "react";
import { EB_Garamond } from 'next/font/google';
import styles from '../styles/Introduction.module.css'; // Import CSS module
import Image from "next/image";


const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
});

/*<div>There is language that has transformed the way I look at <a className="text-decoration: underline" href="https://www.poetryfoundation.org/poems/44399/pied-beauty">light as it falls on swimming trout</a>,&thinsp;
<a className="text-decoration: underline"  href="https://www.poetryfoundation.org/poems/56657/touch-gallery-joan-of-arc">whole months</a>,&thinsp;<a className="text-decoration: underline" href="http://www.phys.unm.edu/~tw/fas/yits/archive/oliver_wildgeese.html">the geese stalking around campus.</a>  
Language has the capacity to help an ordinary thing  take on new dimensions, catch the light differently. </div>*/
const AboutSection = () => {
    return (
      <section className={`bg-white text-black ${garamond.className} ${styles.IntroSection}`}>
        <div className="flex flex-row items-center">
          <div className="mr-8 ml-12 mt-12"> {/* Adjust width and padding as needed */}
            <Image 
              src="/portrait.JPG" // Adjust path to your image
              alt="portrait image"
              width={300}
              height={400}
            />
          </div>
          <p className={`about-bio mt-8 mr-8 flex-1`}> {/* Adjust margin-left (ml-4) as needed */}
            <span>Yong-Yu Huang studies English literature and computer science at Northwestern University. She has been a Kaplan Scholar and a Leopold Fellow, and she has won the William Faricy Poetry Award, the Helen G. Scott Essay Prize, and the Kaplan Humanities Scholars Prize. 
              Her work appears in <em>Waxwing</em>, <em>The Adroit Journal</em>, <em>The Offing</em>, <em>The Penn Review</em>, and elsewhere. She is the recipient of the 2021 Elinor Benedict Poetry Prize and has been recognized by the Poetry Society of the UK, Best Small Fictions, the Hippocrates Society, and the Gregory Djanikian Scholars Program, among others.
              In her free time, she can be found doing crosswords, listening to Lorde, or going for a walk.
            </span>
            <br></br>
            <br></br>
           <span> <a className='text-decoration: underline' href="mailto:yongyu.yy.huang@gmail.com">Email</a><span>, </span><a className='text-decoration: underline' href="https://www.twitter.com/yong_yuhuang">Twitter</a><span>, or read more on </span><a className='text-decoration: underline' href="https://yongyuhuang.substack.com/">Substack</a>.
           </span>
          </p>
        </div>

        <footer>
          
     
</footer>
      </section>
    );
  };
  
  export default AboutSection;