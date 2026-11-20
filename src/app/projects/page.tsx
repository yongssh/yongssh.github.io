import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../writing/writing-page.module.css";

export const metadata = {
  title: "Portfolio",
  description: "Selected data journalism and reporting",
};

type Clip = {
  title: string;
  publication: string;
  href: string;
  date?: string;
  preposition?: string;
};

const clips: Clip[] = [
  {
    title: "Spokane area homeowners could lose insurance, adding insult to injury",
    publication: "RANGE Media",
    href: "https://www.rangemedia.co/spokane-area-homeowners-could-lose-insurance-adding-insult-to-injury-2/",
    date: "August 2026",
  },
  {
    title: "Here's what the money looks like in the WA-05 race",
    publication: "RANGE Media",
    href: "https://www.rangemedia.co/wa-congressional-district-5-money-2026/",
    date: "November 2026",
  },
  {
    title: "Election turnout dropped in Spokane evacuation zones",
    publication: "RANGE Media",
    href: "https://www.rangemedia.co/election-turnout-dropped-in-spokane-evacuation-zones/",
    date: "August 2026",
  },
  {
    title: "How long will it take for WA fire victims to get FEMA relief?",
    publication: "RANGE Media",
    href: "https://www.rangemedia.co/how-long-will-it-take-for-wa-fire-victims-to-get-fema-relief/",
    date: "October 2026",
  },
  {
    title: "Local educators say lagging test scores don't tell the full story",
    publication: "RANGE Media",
    href: "https://www.rangemedia.co/local-educators-say-lagging-test-scores-dont-tell-the-full-story/",
    date: "September 2026",
  },
  {
    title: "'One way out': Spokane fire evacuees fled and faced gridlock",
    publication: "RANGE Media",
    href: "https://www.rangemedia.co/fire-evacuees-face-gridlock/",
    date: "September 2026",
  },
  {
    title: "Abughazaleh, Biss, Fine lead fundraising as $11 million floods congressional race",
    publication: "The Daily Northwestern",
    href: "https://dailynorthwestern.com/2026/02/02/city/abughazaleh-biss-fine-lead-fundraising-as-11-million-floods-congressional-race/",
    date: "February 2026",
  },
  {
    title: "SNAP benefits to return, but new restrictions may leave families in limbo",
    publication: "The Daily Northwestern",
    href: "https://dailynorthwestern.com/2025/11/19/top-stories/snap-benefits-to-return-but-new-restrictions-may-leave-families-in-limbo/",
    date: "November 2025",
  },
  {
    title: "The Immigration Crackdown Hurts More Than Just International Students",
    publication: "The Nation",
    href: "https://www.thenation.com/article/society/trump-immigration-international-students-tuition-illinois-chicago/",
    date: "March 2026",
  },
  {
    title: "Fall 2025 Poll",
    publication: "The Daily Northwestern",
    href: "https://apps.dailynorthwestern.com/f25poll/national-politics/",
    date: "Fall 2025",
  },
  {
    title: "Former Spokane Zephyr players say club ‘cut corners,’ undercounted hours",
    publication: "RANGE Media",
    href: "https://www.rangemedia.co/former-spokane-zephyr-players-say-club-cut-corners-undercounted-hours/",
    date: "August 2026"
  },
  {
    title:
      "'A shift going on': Fulbright scholars at NU and abroad discuss impact, program's future amid political uncertainty",
    publication: "The Daily Northwestern",
    href: "https://dailynorthwestern.com/2025/07/07/top-stories/a-shift-going-on-fulbright-scholars-at-nu-and-abroad-discuss-impact-programs-future-amid-political-uncertainty/",
    date: "July 2025",
  },
  {
    title: "Grievances in Chicago Emergency Shelters",
    publication: "Personal Project",
    href: "https://yongssh.github.io/chicago-emergency-shelters",
  },
  {
    title: "Chicago Heatwave Project",
    publication: "The Daily Northwestern",
    href: "https://dailynorthwestern.com/2025/07/16/city/chicago-mayor-brandon-johnson-buffett-researchers-host-screening-and-discussion-on-1995-heat-wave/",
    date: "July 2025",
  },

];

export default function ProjectsPage() {
  return (
    <div className={styles.wrapper}>
      <NavBar />

      <main id="main-content" className={styles.main}>
        <header className={styles.pageHeader}>
          <h1 className={styles.heading}>Data journalism portfolio</h1>
        </header>

        <div className={styles.content}>
          <div className={styles.list}>
            {clips.map((clip) => (
              <article key={clip.href} className={styles.publication}>
                <div className={styles.publicationText}>
                  <a
                    href={clip.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pubTitle}
                  >
                    {clip.title}
                  </a>

                  <div className={styles.pubMeta}>
                    {clip.preposition || "in"}{" "}
                    <span className={styles.publicationName}>
                      {clip.publication}
                    </span>
                    {clip.date && <> | {clip.date}</>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}