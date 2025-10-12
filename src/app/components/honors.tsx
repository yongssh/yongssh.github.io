import React from "react";
import { EB_Garamond } from 'next/font/google'
import styles from '../styles/Introduction.module.css';  // Import CSS module
import Footer from "./footer";
import { Inter, Zen_Old_Mincho } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const zenMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-mincho",
});
const Honors =() => {
    return(
        <section className={`background-color: var(--page-bg, #f3f3f3);
 text-black font-micho ${styles.WritingSection}}`}>

      <p className="text-xl p-4 mt-5 ml-5 font-bold">
        Selected Honors </p>
      <br></br>
      <div className={`ml-8`}>
        <p className={'p-1'}> <span> <a href="https://poetrysociety.org.uk/competitions/national-poetry-competition/" target="_blank" rel="noopener noreferrer">
      Commended Poet, National Poetry Competition </a> </span><span className="text-xs">(2024)</span></p>   
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

        </div>

    </section>
    );
};

export default Honors;