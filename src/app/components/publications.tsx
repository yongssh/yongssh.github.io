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
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          {/* Publications Section */}
          <div className="p-4">
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
              {/* Add more publications here using the same format */}
            </div>
          </div>

          {/* Honors Section */}
          <div className="p-4">
            <p className="text-xl font-bold mb-4">Selected Honors</p>
            <p className="bio mb-4">
              <p className={'p-1'}> <span>Helen G. Scott Prize for Best First-Year Paper, Northwestern University Department of English </span><span className="text-xs">(2023)</span></p>   
              <p className={'p-1'}> <span>William Faricy Poetry Award, Northwestern University Department of English </span><span className="text-xs">(2023)</span></p>   
              <p className={'p-1'}> <span>Semifinalist, Gregory Djanikian Scholars </span><span className="text-xs">(2023)</span></p>
              <p className={'p-1'}> <span>Semifinalist, The Adroit Prizes </span> <span className="text-xs">(2023)</span></p>
              <p className={'p-1'}> <span>Finalist, <em>Narrative Magazine</em> “Tell Me a Story” High School Contest, judged by Jericho Brown  </span><span className="text-xs">(2022)</span></p>
              <p className={'p-1'}> <span>Finalist, Hippocrates Young Poets Prize for Poetry and Medicine </span><span className="text-xs">(2022)</span></p>
              <p className={'p-1'}> <span>Finalist, Arthur Flowers Short Fiction Prize </span><span className="text-xs">(2021)</span></p>
              <p className={'p-1'}> <span>Commended Poet, Foyle Young Poets  </span><span className="text-xs">(2021)</span></p>
              <p className={'p-1'}> <span>Elinor Benedict Poetry Prize,<em> Passages North</em> </span><span className="text-xs">(2021)</span></p>
              <p className={'p-1'}> <span>Winner in Prose, Counterclock Awards </span><span className="text-xs">(2021)</span></p>
              <p className={'p-1'}> <span>Finalist in Fiction, Columbia College Chicago&apos;s Young Authors Writing Competition </span><span className="text-xs">(2021)</span></p>
              <p className={'p-1'}> <span>Honorable Mention, Princeton University Leonard L. Milberg Poetry Prize </span><span className="text-xs">(2021)</span></p>
              <p className={'p-1'}> <span>Honorable Mention, <em>The Kenyon Review</em>&apos;s Patricia Grodd Poetry Prize </span><span className="text-xs">(2021)</span></p>
              <p className={'p-1'}> <span>Shortlist, <em>Sine Theta</em> Summer Writing Contest, judged by RF Kuang </span><span className="text-xs">(2021)</span></p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
