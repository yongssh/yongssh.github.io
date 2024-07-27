import React from "react";
import { EB_Garamond } from 'next/font/google';
import styles from '../styles/Introduction.module.css'; // Import CSS module

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
});

const Publications = () => {
  return (
    <section className={`bg-white text-black ${garamond.className} ${styles.WritingSection}`}>
      <div className="flex flex-col md:flex-row">
        {/* Publications Column */}
        <div className="md:w-2/3 p-4">
          <p className="text-xl font-bold mb-4">Selected Publications</p>
          <p className="bio mb-4">
            <span className="hover hover-poetry">Poetry</span>, 
            <span className="hover hover-prose">fiction</span>, and  
            <span className="hover hover-journ">journalism</span> can be found below.
          </p>
          <div className="space-y-2">
            <p className='p-1'>
              <a className="poetry" href="https://sixthfinch.com/huang1.html">Hard Work</a> 
              <span className="text-xs p-2">in <em>Sixth Finch</em></span>
              <span className="text-xs">(July 2024)</span>
            </p>
            <p className='p-1'>
              <a className="journ" href="https://northbynorthwestern.com/a-just-look-at-jennifer-lackey/">A Just Look at Jennifer Lackey</a> 
              <span className="text-xs p-2">in <em>North By Northwestern</em></span>
              <span className="text-xs">(May 2024)</span>
            </p>
            {/* Additional Publications Here */}
            {/* Ensure you continue this pattern for all the other publications */}
          </div>
        </div>
        
        {/* Honors Column */}
        <div className="md:w-1/3 p-4 md:border-l border-gray-300 md:pl-4">
          <p className="text-xl font-bold mb-4">Honors & Awards</p>
          <p className="bio mb-4">
            {/* List of honors here */}
            <span className="text-sm">- Kaplan Scholar</span><br />
            <span className="text-sm">- Leopold Fellow</span><br />
            <span className="text-sm">- William Faricy Poetry Award</span><br />
            {/* Add additional honors as needed */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;
