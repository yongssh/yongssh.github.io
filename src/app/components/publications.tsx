import React from "react";
import { EB_Garamond } from 'next/font/google'
import styles from '../styles/Introduction.module.css';  // Import CSS module

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
})

const Publications =() => {
    return(
        <section className={`bg-white text-black ${garamond.className} ${styles.WritingSection}}`}>

      <p className="text-xl p-4 ml-5 mt-5 font-bold"> Selected Publications</p>
      <p className="bio ml-4">
        <span className="hover hover-poetry">Poetry</span>, <span className="hover hover-prose">fiction</span>, and  <span className="hover hover-journ">journalism</span> can be found below.</p>
      <br></br>
      <div className={`ml-8`}> 
            <p className={'p-1'}><a className="poetry">Sweeter</a> <span className="text-xs p-2">in <em>Narrative Magazine</em> </span> <span className="text-xs">(Forthcoming)</span></p>
            <p className={'p-1'}><a className="poetry">Clark Street Beach in April</a> <span className="text-xs p-2">in <em>The Shore</em> </span> <span className="text-xs">(Forthcoming)</span></p>
            <p className={'p-1'}><a className="poetry" href="https://www.muzzlemagazine.com/yong-yu-huang.html">Notes on Beachgrass</a> <span className="text-xs p-2">in <em>Muzzle Magazine</em> </span> <span className="text-xs">(April 2025)</span></p>
            <p className={'p-1'}><a className="poetry" href="https://poetrysociety.org.uk/poems/living-as-my-mother/">Living as My Mother</a> <span className="text-xs p-2">in <em>The Poetry Society</em> </span> <span className="text-xs">(March 2025)</span></p>
            <p className={'p-1'}><a className="journ" href="https://www.britannica.com/biography/Min-Jin-Lee">Min Jin Lee</a> <span className="text-xs p-2">in <em>Encyclopædia Britannica</em> </span> <span className="text-xs">(November 2024)</span></p>
            <p className={'p-1'}><a className="journ" href="https://www.britannica.com/event/White-Terror-Taiwan">White Terror</a> <span className="text-xs p-2">in <em>Encyclopædia Britannica</em> </span> <span className="text-xs">(September 2024)</span></p>
            <p className={'p-1'}><a className="poetry" href="https://sixthfinch.com/huang1.html">Hard Work</a> <span className="text-xs p-2">in <em>Sixth Finch</em> </span> <span className="text-xs">(July 2024)</span></p>
            <p className={'p-1'}><a className="journ" href="https://northbynorthwestern.com/a-just-look-at-jennifer-lackey/"> A Just Look at Jennifer Lackey</a> <span className="text-xs p-2">in <em>North By Northwestern</em> </span> <span className="text-xs">(May 2024)</span></p>
            <p className={'p-1'}><a className="journ" href="https://dailynorthwestern.com/2024/05/16/campus/center-for-native-american-and-indigenous-research-hosts-6th-annual-symposium-on-indigenous-futures/"> Indigenous Futures Research Symposium </a> <span className="text-xs p-2">in <em>The Daily Northwestern</em> </span> <span className="text-xs">(May 2024)</span></p>
            <p className={'p-1'}> <a className="journ" href="https://dailynorthwestern.com/2024/05/06/campus/kirstin-valdez-quade-talks-debut-novel-the-five-wounds-at-annual-writers-festival/">Kirstin Valdez Quade at NU Writers Festival</a> <span className="text-xs p-2"> in <em>The Daily Northwestern </em> </span><span className="text-xs">(May 2024)</span></p>
            <p className={'p-1'}> <a className="journ" href="https://dailynorthwestern.com/2024/05/22/city/connections-for-the-homeless-honors-staff-volunteers-participants-at-milestone-celebration/">Connections for the Homeless Milestone Celebration</a><span className="text-xs p-2"> in <em>The Daily Northwestern </em> </span> <span className="text-xs">(May 2024)</span></p>
            <p className={'p-1'}><a className="journ" href="https://northbynorthwestern.com/writing-lust-in-luster-a-raven-leilani-reading/"> Raven Leilani talks writing lust in <em>Luster</em></a> <span className="text-xs p-2">in <em>North By Northwestern</em> </span> <span className="text-xs">(March 2024)</span></p>
            <p className={'p-1'}> <a className="poetry" href="https://theadroitjournal.org/issue-forty-six/issue-forty-six-yong-yu-huang/">Dear Vincent</a> <span className="text-xs p-2"> in <em>The Adroit Journal </em></span><span className="text-xs">(August 2023)</span></p>
            <p className={'p-1'}> <a className="journ" href="https://www.penangmonthly.com/facing-abstract-creatures-makes-them-relatable-in-penang/"> The Abstract Creatures of Syrian Sculptor Aboud Fares</a> <span className="text-xs p-2">  in <em>Penang Monthly</em> </span> <span className="text-xs">(May 2023)</span></p>
            <p className={'p-1'}> <a className="poetry" href="https://www.pennreview.org/i-have-abandoned-all-my-old-haunts">I have abandoned my old haunts</a> <span className="text-xs p-2"> in <em>The Penn Review </em> </span><span className="text-xs">(February 2023)</span></p>
            <p className={'p-1'}> <a className="poetry" href="https://superstitionreview.asu.edu/issue30/poetry/youngyuhuang">Wasteland</a> <span className="text-xs p-2"> in <em>Superstition Review</em> </span><span className="text-xs">(December 2022)</span></p>
            <p className={'p-1'}> <a className="journ" href="https://penangmonthly.com/dropping-poetry-art-on-unsuspecting-readers"> Trina Teoh Drops Poetry Art on Unsuspecting Readers</a> <span className="text-xs p-2">  in <em>Penang Monthly</em> </span> <span className="text-xs">(Sept 2022)</span></p>
            <p className={'p-1'}> <a className="poetry" href="https://www.passagesnorth.com/issue-43/aviary-by-yongyu-huang">Aviary</a> <span className="text-xs p-2"> in <em>Passages North</em> </span> <span className="text-xs">(March 2022)</span></p>
            <p className={'p-1'}> <a className="poetry" href="https://theoffingmag.com/backoftheenvelope/greenery/">Greenery</a> <span className="text-xs p-2"> in <em>The Offing</em> </span> <span className="text-xs">(March 2022)</span></p>
            <p className={'p-1'}> <a className="journ" href="https://www.penangmonthly.com/addressing-cultural-taboos-and-alleviating-period-poverty/"> Addressing Cultural Taboos and Alleviating Period Poverty</a> <span className="text-xs p-2">  in <em>Penang Monthly</em> </span> <span className="text-xs">(March 2022)</span></p>
            <p className={'p-1'}> <a className="journ" href="https://penangmonthly.com/claiming-right-of-place-in-malaysian-cinema-for-indigenous-stories"> Indigenous Malaysian Filmmaker Nadira Ilana</a> <span className="text-xs p-2">  in <em>Penang Monthly</em> </span> <span className="text-xs">(December 2021)</span>
              <a href="https://drive.google.com/file/d/1c0GUWoRuWofTZLzGnwjNJXNv_yeV5F6D/view?usp=share_link"> (PDF)</a></p>
            <p className={'p-1'}> <a className="journ" href="https://www.penangmonthly.com/malaysian-cinema-an-intricate-tale-of-pride-and-prejudice/"> Malaysian Cinema: An Intricate Tale of Pride and Prejudice</a> <span className="text-xs p-2">  in <em>Penang Monthly</em> </span> <span className="text-xs">(December 2021)</span> 
              <a href="https://drive.google.com/file/d/1R-s4Vsc215cALwlMYbMduFLu7tSLXN8Z/view?usp=share_link"> (PDF)</a></p>
            <p className={'p-1'}> <a className="poetry" href="https://waxwingmag.org/items/issue25/30_Huang-Dali-and-the-Finer-Points-of-Memory.php">Dali & the Finer Points of Memory</a> <span className="text-xs p-2"> in <em>Waxwing</em> </span> <span className="text-xs">(October 2021)</span></p>
            <p className={'p-1'}> <a className="prose" href="http://www.cheappoplit.com/home/yong-yu-huang">Reflecting Pool</a> <span className="text-xs p-2"> in <em>Cheap Pop Lit</em>, reprinted in <em>Best Small Fictions</em> </span> <span className="text-xs">(September 2021)</span></p>
            <p className={'p-1'}> <a className="prose" href=" https://sinetheta.net/20.html">Aperture </a> <span className="text-xs p-2"> in <em>Sine Theta Magazine</em> </span><span className="text-xs">(August 2021)</span></p>
            <p className={'p-1'}> <a className="prose" href="https://counterclock.org/yong-yu-huang">Butterfly Kingdom</a>, <a className="poetry" href="https://counterclock.org/roadside-memorabilia">Roadside Memorabilia</a> <span className="text-xs p-2"> in <em>Counterclock Journal</em></span><span className="text-xs">(June 2021)</span></p>
            <p className={'p-1'}><a className="prose" href="http://www.interlochenreview.org/vestigial-structures"> Vestigial Structures</a>, <a className="poetry" href="https://www.interlochenreview.org/radiumgirls"> Radium Girls</a> <span className="text-xs p-2"> in <em>The Interlochen Review</em></span><span className="text-xs">(May 2021)</span></p>
                </div>
                <br></br>
    </section>
    );
};

export default Publications;