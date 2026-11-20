import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "./Projects.module.css";
import Image from "next/image";

// Newest first
const projects = [
  {
    title: "Spokane area homeowners could lose insurance, adding insult to injury",
    outlet: "RANGE Media",
    description:
      "Used past wildfire data to show how insurance cancellations rise in fire-affected areas, even for homes that never burned, as a temporary state order offers relief.",
    image:
      "https://storage.ghost.io/c/35/e7/35e7a6d5-1d7d-405c-9ee3-dce92dfd190f/content/images/size/w1200/2026/08/_38A3921.jpg",
    url: "https://www.rangemedia.co/spokane-area-homeowners-could-lose-insurance-adding-insult-to-injury-2/",
    tags: ["Insurance", "Wildfires", "Data Journalism"],
  },
  {
    title: "Here's what the money looks like in the WA-05 race",
    outlet: "RANGE Media",
    description:
      "Tracked campaign finance and late outside spending in Washington's 5th Congressional District race between Rep. Michael Baumgartner and Carmela Conroy.",
    image:
      "https://storage.ghost.io/c/35/e7/35e7a6d5-1d7d-405c-9ee3-dce92dfd190f/content/images/2026/11/General-Election-2026-package---5-.jpg",
    url: "https://www.rangemedia.co/wa-congressional-district-5-money-2026/",
    tags: ["Elections", "Campaign Finance", "Data Journalism"],
  },
      {
    title: "Election turnout dropped in Spokane evacuation zones",
    outlet: "RANGE Media",
    description:
      "Conducted an original analysis of county voting data showing steeper primary turnout declines in wildfire evacuation zones than elsewhere in Spokane County.",
    image:
      "https://storage.ghost.io/c/35/e7/35e7a6d5-1d7d-405c-9ee3-dce92dfd190f/content/images/size/w1200/2026/08/638A4477.jpg",
    url: "https://www.rangemedia.co/election-turnout-dropped-in-spokane-evacuation-zones/",
    tags: ["Elections", "Data Analysis", "Wildfires"],
  },
  {
    title: "How long will it take for WA fire victims to get FEMA relief?",
    outlet: "RANGE Media",
    description:
      "Explained the federal disaster declaration process after Gov. Bob Ferguson asked the White House for aid following the Eastern Washington wildfires.",
    image:
      "https://storage.ghost.io/c/35/e7/35e7a6d5-1d7d-405c-9ee3-dce92dfd190f/content/images/2026/10/Spokane-Wildfires-FEMA-Press-Conference-6.jpg",
    url: "https://www.rangemedia.co/how-long-will-it-take-for-wa-fire-victims-to-get-fema-relief/",
    tags: ["Wildfires", "Federal Policy", "Disaster Recovery"],
  },
  {
    title: "Local educators say lagging test scores don't tell the full story",
    outlet: "RANGE Media",
    description:
      "Analyzed state test data showing Spokane students trailing state averages, and reported on educators who say proficiency rates miss student growth.",
    image:
      "https://storage.ghost.io/c/35/e7/35e7a6d5-1d7d-405c-9ee3-dce92dfd190f/content/images/2026/09/_38A4681.jpg",
    url: "https://www.rangemedia.co/local-educators-say-lagging-test-scores-dont-tell-the-full-story/",
    tags: ["Education", "Data Analysis", "Spokane"],
  },
  {
    title: "'One way out': Spokane fire evacuees fled and faced gridlock",
    outlet: "RANGE Media",
    description:
      "Reported on hours-long evacuation gridlock in neighborhoods with limited road access during the August wildfires, a risk that had been building for years.",
    image:
      "https://storage.ghost.io/c/35/e7/35e7a6d5-1d7d-405c-9ee3-dce92dfd190f/content/images/size/w1200/2026/08/638A4267-1.jpg",
    url: "https://www.rangemedia.co/fire-evacuees-face-gridlock/",
    tags: ["Wildfires", "Infrastructure", "Spokane"],
  },
  {
    title: "Abughazaleh, Biss, Fine lead fundraising as $11 million floods congressional race",
    outlet: "The Daily Northwestern",
    description:
      "Analyzed FEC filings across the 19-candidate field to replace retiring U.S. Rep. Jan Schakowsky in Illinois' 9th Congressional District.",
    image: "https://dailynorthwestern.com/wp-content/uploads/2026/02/fundraising-1.jpeg",
    url: "https://dailynorthwestern.com/2026/02/02/city/abughazaleh-biss-fine-lead-fundraising-as-11-million-floods-congressional-race/",
    tags: ["Elections", "Campaign Finance", "Data Analysis"],
  },
  {
    title: "SNAP benefits to return, but new restrictions may leave families in limbo",
    outlet: "The Daily Northwestern",
    description:
      "Reported on Evanston families who went without SNAP benefits during the federal shutdown and face uncertainty under new federal work requirements.",
    image: "https://dailynorthwestern.com/wp-content/uploads/2025/11/DSC_0024.jpg",
    url: "https://dailynorthwestern.com/2025/11/19/top-stories/snap-benefits-to-return-but-new-restrictions-may-leave-families-in-limbo/",
    tags: ["Food Access", "Federal Policy", "Community"],
  },
  {
    title: "The Immigration Crackdown Hurts More Than Just International Students",
    outlet: "The Nation",
    description:
      "Reported on how falling international enrollment is driving tuition hikes, layoffs and program cuts at Chicago-area universities.",
    image: "https://www.thenation.com/wp-content/uploads/2026/03/SAICProtestHuang.jpg",
    url: "https://www.thenation.com/article/society/trump-immigration-international-students-tuition-illinois-chicago/",
    tags: ["Immigration", "Higher Education", "Chicago"],
  },
  {
    title: "Fall 2025 Poll",
    outlet: "The Daily Northwestern",
    description:
      "Designed and built the website for the Fall 2025 undergraduate poll, and analyzed results for an article on how national politics are shaping students' views and plans.",
    image: "/F25poll.png",
    url: "https://apps.dailynorthwestern.com/f25poll/national-politics/",
    tags: ["Polling", "Data Analysis", "React", "Next.js"],
  },
  
  {
    title: "Chicago Heatwave Project",
    outlet: "The Daily Northwestern",
    description:
      "Reported on a 1995 heatwave memorial event hosted by city officials and researchers, with supporting data visualization.",
    image: "/johnson.jpg",
    url: "https://dailynorthwestern.com/2025/07/16/city/chicago-mayor-brandon-johnson-buffett-researchers-host-screening-and-discussion-on-1995-heat-wave/",
    tags: ["Data Journalism", "Climate", "Chicago", "Datawrapper"],
  },
  {
    title: "'A shift going on': Fulbright scholars at NU and abroad discuss impact, program's future amid political uncertainty",
    outlet: "The Daily Northwestern",
    description:
      "Reported on how federal policy has affected Northwestern-affiliated Fulbright scholars and the program’s future.",
    image: "/Fulbright_Seal_RGB-scaled-1.jpg",
    url: "https://dailynorthwestern.com/2025/07/07/top-stories/a-shift-going-on-fulbright-scholars-at-nu-and-abroad-discuss-impact-programs-future-amid-political-uncertainty/",
    tags: ["Education", "Policy"],
  },
  {
    title: "Grievances in Chicago Emergency Shelters",
    outlet: "Personal Project",
    description:
      "Built a scrollytelling story about emergency migrant shelters in Chicago, using city data from 2024.",
    image: "/migrantshelters.png",
    url: "https://yongssh.github.io/chicago-emergency-shelters",
    tags: ["Scrollytelling", "D3.js", "Open Data", "Public Policy"],
  },
];

export default function ProjectsPage() {
  return (
    <div className={styles.wrapper}>
      <header>
        <NavBar />
      </header>

      <main id="projects" className="container mx-auto px-4 py-16 flex-grow">
        <header className={styles.header}>
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.subtitle}>
            Selected data journalism, reporting, and interactive work.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.url} className={styles.card}>
              <figure className={styles.figure}>
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.image}
                    alt={`Thumbnail for ${project.title}`}
                  />
                </Link>
              </figure>

              <div className={styles.cardBody}>
                <header>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardOutlet}>{project.outlet}</p>
                </header>

                <p className={styles.cardDescription}>{project.description}</p>

                {/* <ul className={styles.tags} aria-label="Tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul> */}

                <footer>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                  >
                    <span>See more</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}