import React from "react";
import styles from "../styles/Publications.module.css";

const Publications = () => {
  return (
    <section className={styles.publicationsSection}>
      <header className={styles.header}>
        <h2 className={styles.title}>Selected Publications</h2>

      </header>

      {/* ---------- NONFICTION ---------- */}
      <div className={styles.list}>
        <h3 className={`${styles.category}`}>Journalism & Nonfiction</h3>
        <p>
          <a
            className={styles.pubTitle}
            href="https://dailynorthwestern.com/2025/11/19/top-stories/snap-benefits-to-return-but-new-restrictions-may-leave-families-in-limbo/"
          >
           SNAP benefits to return, but new restrictions may leave families in limbo
          </a>
          <span className={styles.pubMeta}>
            in <em>The Daily Northwestern</em> (Nov 2025)
          </span>
        </p>
           <p>
          <a
            className={styles.pubTitle}
            href="https://dailynorthwestern.com/2025/11/17/city/across-party-lines-prison-gift-bag-confrontation-disrupts-quiet-candidate-forum/"
          >
          Across party lines, prison gift bag confrontation disrupts quiet candidate forum
          </a>
          <span className={styles.pubMeta}>
            in <em>The Daily Northwestern</em> (Nov 2025)
          </span>
        </p>
         <p>
          <a
            className={styles.pubTitle}
            href="https://dailynorthwestern.com/2025/11/05/city/we-cannot-be-silent-evanston-businesses-stand-up-to-ice-amid-escalated-enforcement/"
          >
           ‘We cannot be silent’: Evanston businesses stand up to ICE amid escalated enforcement
          </a>
          <span className={styles.pubMeta}>
            in <em>The Daily Northwestern</em> (Nov 2025)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://dailynorthwestern.com/2025/10/21/campus/fueled-by-curiosity-nobel-laureate-joel-mokyr-fashions-a-life-long-case-for-human-progress/"
          >
           Fueled by curiosity, Nobel laureate Joel Mokyr fashions a life-long case for human progress
          </a>
          <span className={styles.pubMeta}>
            in <em>The Daily Northwestern</em> (Oct 2025)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://dailynorthwestern.com/2025/10/01/top-stories/not-just-a-place-of-books-evanston-public-library-debates-potential-split-from-city/"
          >
            &apos;Not just a place of books&apos;: Evanston Public Library debates potential split from city
          </a>
          <span className={styles.pubMeta}>
            in <em>The Daily Northwestern</em> (Oct 2025)
          </span>
        </p>

        <p>
          <a
            className={styles.pubTitle}
            href="https://dailynorthwestern.com/2025/07/07/top-stories/a-shift-going-on-fulbright-scholars-at-nu-and-abroad-discuss-impact-programs-future-amid-political-uncertainty/"
          >
            &apos;A shift going on&apos;: Fulbright scholars at NU and abroad discuss impact, program’s future amid political uncertainty
          </a>
          <span className={styles.pubMeta}>
            in <em>The Daily Northwestern</em> (Jul 2025)
          </span>
        </p>

        <p>
          <a
            className={styles.pubTitle}
            href="https://dailynorthwestern.com/2025/02/13/features/evanston-photographer-and-academic-junko-yokota-wanders-near-and-far/"
          >
            Evanston photographer and academic Junko Yokota wanders near and far
          </a>
          <span className={styles.pubMeta}>
            in <em>The Daily Northwestern</em> (Feb 2025)
          </span>
        </p>

        <p>
          <a
            className={styles.pubTitle}
            href="https://drive.google.com/file/d/1vK4wTHjW8tW71FnGgFgAMq6RO7ak7VQg/view?usp=share_link"
          >
            Trouble in Paradise
          </a>
          <span className={styles.pubMeta}>
            in <em>nuAZN</em>
          </span>
        </p>

        <p>
          <a
            className={styles.pubTitle}
            href="https://issuu.com/nuazn/docs/nuazn_34._ricochet"
          >
            H-1B or Bust
          </a>
          <span className={styles.pubMeta}>
            in <em>nuAZN</em> 
          </span>
           <a href="https://drive.google.com/file/d/1bd3aXz4QDAbdQL8dBzSYJSPl_kP0usYb/view?usp=sharing"> (PDF)</a>
        </p>

        <p>
          <a
            className={styles.pubTitle}
            href="https://northbynorthwestern.com/sense-track-understand-northwestern-professor-karan-ahuja-and-the-spice-lab/"
          >
            Sense, Track, Understand: Northwestern Professor Karan Ahuja and the SPICE Lab
          </a>
          <span className={styles.pubMeta}>
            in <em>North By Northwestern</em> (Nov 2024)
          </span>
        </p>
        <p>
          <a className={styles.pubTitle} href="https://www.britannica.com/biography/Min-Jin-Lee">
            Min Jin Lee
          </a>
          <span className={styles.pubMeta}>
            in <em>Encyclopædia Britannica</em> (Nov 2024)
          </span>
        </p>
        <p>
          <a className={styles.pubTitle} href="https://www.britannica.com/event/White-Terror-Taiwan">
            White Terror
          </a>
          <span className={styles.pubMeta}>
            in <em>Encyclopædia Britannica</em> (Sept 2024)
          </span>
        </p>
        <p>
          <a className={styles.pubTitle} href="https://northbynorthwestern.com/a-just-look-at-jennifer-lackey/">
            A Just Look at Jennifer Lackey
          </a>
          <span className={styles.pubMeta}>
            in <em>North By Northwestern</em> (May 2024)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://dailynorthwestern.com/2024/05/16/campus/center-for-native-american-and-indigenous-research-hosts-6th-annual-symposium-on-indigenous-futures/"
          >
            Indigenous Futures Research Symposium
          </a>
          <span className={styles.pubMeta}>
            in <em>The Daily Northwestern</em> (May 2024)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://dailynorthwestern.com/2024/05/06/campus/kirstin-valdez-quade-talks-debut-novel-the-five-wounds-at-annual-writers-festival/"
          >
            Kirstin Valdez Quade at NU Writers Festival
          </a>
          <span className={styles.pubMeta}>
            in <em>The Daily Northwestern</em> (May 2024)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://dailynorthwestern.com/2024/05/22/city/connections-for-the-homeless-honors-staff-volunteers-participants-at-milestone-celebration/"
          >
            Connections for the Homeless Milestone Celebration
          </a>
          <span className={styles.pubMeta}>
            in <em>The Daily Northwestern</em> (May 2024)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://northbynorthwestern.com/writing-lust-in-luster-a-raven-leilani-reading/"
          >
            Raven Leilani Talks Writing Lust in <em>Luster</em>
          </a>
          <span className={styles.pubMeta}>
            in <em>North By Northwestern</em> (Mar 2024)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://www.penangmonthly.com/facing-abstract-creatures-makes-them-relatable-in-penang/"
          >
            The Abstract Creatures of Syrian Sculptor Aboud Fares
          </a>
          <span className={styles.pubMeta}>
            in <em>Penang Monthly</em> (May 2023)
          </span>
        </p>
        <p>
          <a className={styles.pubTitle} href="https://penangmonthly.com/dropping-poetry-art-on-unsuspecting-readers">
            Trina Teoh Drops Poetry Art on Unsuspecting Readers
          </a>
          <span className={styles.pubMeta}>
            in <em>Penang Monthly</em> (Sept 2022)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://www.penangmonthly.com/addressing-cultural-taboos-and-alleviating-period-poverty/"
          >
            Addressing Cultural Taboos and Alleviating Period Poverty
          </a>
          <span className={styles.pubMeta}>
            in <em>Penang Monthly</em> (Mar 2022)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://penangmonthly.com/claiming-right-of-place-in-malaysian-cinema-for-indigenous-stories"
          >
            Indigenous Malaysian Filmmaker Nadira Ilana
          </a>
          <span className={styles.pubMeta}>
            in <em>Penang Monthly</em> (Dec 2021)
          </span>
          <a href="https://drive.google.com/file/d/1c0GUWoRuWofTZLzGnwjNJXNv_yeV5F6D/view?usp=share_link"> (PDF)</a>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://www.penangmonthly.com/malaysian-cinema-an-intricate-tale-of-pride-and-prejudice/"
          >
            Malaysian Cinema: An Intricate Tale of Pride and Prejudice
          </a>
          <span className={styles.pubMeta}>
            in <em>Penang Monthly</em> (Dec 2021)
          </span>
          <a href="https://drive.google.com/file/d/1R-s4Vsc215cALwlMYbMduFLu7tSLXN8Z/view?usp=share_link"> (PDF)</a>
        </p>
      </div>

      {/* ---------- POETRY ---------- */}
      <div className={styles.list}>
        <h3 className={`${styles.category} ${styles.pinkCategory}`}>Poetry</h3>

        <p>
          <a className={styles.pubTitle}>Sweeter</a>
          <span className={styles.pubMeta}>
            in <em>Narrative Magazine</em> (Forthcoming)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://www.slowdownshow.org/episode/2025/09/30/1363-notes-on-beachgrass-by-yongyu-huang"
          >
            Notes on Beachgrass
          </a>
          <span className={styles.pubMeta}>
            on <em>The Slowdown</em> (Oct 2025)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://www.theshorepoetry.org/yongyu-huang-clark-street-beach-in-april"
          >
            Clark Street Beach in April
          </a>
          <span className={styles.pubMeta}>
            in <em>The Shore</em> (Sept 2025)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://www.muzzlemagazine.com/yong-yu-huang.html"
          >
            Notes on Beachgrass
          </a>
          <span className={styles.pubMeta}>
            in <em>Muzzle Magazine</em> (Apr 2025)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://poetrysociety.org.uk/poems/living-as-my-mother/"
          >
            Living as My Mother
          </a>
          <span className={styles.pubMeta}>
            in <em>The Poetry Society</em> (Mar 2025)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://sixthfinch.com/huang1.html"
          >
            Hard Work
          </a>
          <span className={styles.pubMeta}>
            in <em>Sixth Finch</em> (July 2024)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://theadroitjournal.org/issue-forty-six/issue-forty-six-yong-yu-huang/"
          >
            Dear Vincent
          </a>
          <span className={styles.pubMeta}>
            in <em>The Adroit Journal</em> (Aug 2023)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://www.pennreview.org/i-have-abandoned-all-my-old-haunts"
          >
            I Have Abandoned My Old Haunts
          </a>
          <span className={styles.pubMeta}>
            in <em>The Penn Review</em> (Feb 2023)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://superstitionreview.asu.edu/issue30/poetry/youngyuhuang"
          >
            Wasteland
          </a>
          <span className={styles.pubMeta}>
            in <em>Superstition Review</em> (Dec 2022)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://www.passagesnorth.com/issue-43/aviary-by-yongyu-huang"
          >
            Aviary
          </a>
          <span className={styles.pubMeta}>
            in <em>Passages North</em> (Mar 2022)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://theoffingmag.com/backoftheenvelope/greenery/"
          >
            Greenery
          </a>
          <span className={styles.pubMeta}>
            in <em>The Offing</em> (Mar 2022)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://waxwingmag.org/items/issue25/30_Huang-Dali-and-the-Finer-Points-of-Memory.php"
          >
            Dali & the Finer Points of Memory
          </a>
          <span className={styles.pubMeta}>
            in <em>Waxwing</em> (Oct 2021)
          </span>
        </p>
      </div>


      {/* ---------- FICTION ---------- */}
      {/* ---------- FICTION ---------- */}
      <div className={styles.list}>
        <h3 className={`${styles.category} ${styles.pinkCategory}`}>Fiction</h3>

        <p>
          <a
            className={styles.pubTitle}
            href="http://www.cheappoplit.com/home/yong-yu-huang"
          >
            Reflecting Pool
          </a>
          <span className={styles.pubMeta}>
            in <em>Cheap Pop Lit</em>, reprinted in <em>Best Small Fictions</em> (Sept 2021)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://sinetheta.net/20.html"
          >
            Aperture
          </a>
          <span className={styles.pubMeta}>
            in <em>Sine Theta Magazine</em> (Aug 2021)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="https://counterclock.org/yong-yu-huang"
          >
            Butterfly Kingdom
          </a>
          <span className={styles.pubMeta}>
            in <em>Counterclock Journal</em> (June 2021)
          </span>
        </p>
        <p>
          <a
            className={styles.pubTitle}
            href="http://www.interlochenreview.org/vestigial-structures"
          >
            Vestigial Structures
          </a>
          <span className={styles.pubMeta}>
            in <em>The Interlochen Review</em> (May 2021)
          </span>
        </p>
      </div>

    </section>
  );
};

export default Publications;
