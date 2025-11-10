import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import Link from "next/link";
import styles from "./Projects.module.css";

const projects = [
  // ===== WEB & DATA PROJECTS =====
  {
    title: "Spring 2025 Poll",
    outlet: "The Daily Northwestern",
    description:
      "Built and designed special issue for the Spring 2025 undergraduate poll.",
    image: "/SpringCampusPoll-2.jpg",
    url: "https://apps.dailynorthwestern.com/s25poll/",
    tags: ["Polling", "Scrollytelling", "React"],
    type: "Web & Data",
  },
  {
    title: "2024 Elections",
    outlet: "The Daily Northwestern",
    description:
      "Built and designed an interactive election results landing page using The Washington Post’s React component library and D3.js.",
    image: "/2024elections.png",
    url: "https://apps.dailynorthwestern.com/election2024/",
    tags: ["Elections", "React", "D3.js", "Design Systems"],
    type: "Web & Data",
  },
    {
    title: "Know Your Rights",
    outlet: "The Daily Northwestern",
    description:
      "Developed special issue for The Daily's coverage of ICE activity in Evanston.",
    image: "/KYR.png",
    url: "https://apps.dailynorthwestern.com/know-your-rights/",
    tags: ["Immigration", "React"],
    type: "Web & Data",
  },
  {
    title: "Evanston Public Library considers split from city",
    outlet: "The Daily Northwestern",
    description:
      "Reported on local politics debate and built an interactive tax calculator and visualizations to communicate proposed funding changes.",
    image: "/epl.jpeg",
    url: "https://dailynorthwestern.com/2025/10/01/top-stories/not-just-a-place-of-books-evanston-public-library-debates-potential-split-from-city/",
    tags: ["Local Politics", "Data Visualization", "D3.js", "Interactive Design"],
    type: "Reporting & Writing",
  },
  {
    title: "Grievances in Chicago Emergency Shelters",
    outlet: "Personal Project",
    description:
      "Built a scrollytelling story about emergency migrant shelters in Chicago, using city data from 2024.",
    image: "/migrantshelters.png",
    url: "https://yongssh.github.io/chicago-emergency-shelters",
    tags: ["Scrollytelling", "D3.js", "Open Data", "Public Policy"],
    type: "Web & Data",
  },
  {
    title: "Whiting Awards Analysis",
    outlet: "Personal Project",
    description:
      "Analyzed more than three decades of Whiting Award winners to identify demographic and literary trends.",
    image: "/whiting.png",
    url: "https://yongssh.github.io/whiting-awards/",
    tags: ["Data Analysis", "Literature", "D3.js", "Data Visualization"],
    type: "Web & Data",
  },

  {
    title: "Nobel Prizes by Country and Category",
    outlet: "Personal Project",
    description:
      "A visual storytelling piece created in Adobe Illustrator, illustrating Nobels won by country and category.",
    image: "/NobelByCountry.pdf",
    url: "/NobelByCountry.pdf",
    tags: ["Design", "Adobe Illustrator", "Data Analysis"],
    type: "Web & Data",
  },
  {
    title: "World Energy Mix Visualizer",
    outlet: "Personal Project",
    description:
      "Built an interactive visualization showing how countries source their energy, using World Bank data and D3.js, following a tutorial from D3: From Start to Finish.",
    image: "/d3.png",
    url: "https://stately-frangollo-b9a02e.netlify.app",
    tags: ["Energy", "D3.js", "Open Data", "Web Development"],
    type: "Web & Data",
  },
  {
    title: "Migration in Mohsin Hamid’s Exit West",
    outlet: "Personal Project",
    description:
      "Created an interactive scrollytelling piece mapping the journeys of Hamid’s characters with Leaflet.js and custom storytelling layout.",
    image: "/lahore-map.png",
    url: "https://yongssh.github.io/exit-west.html",
    tags: ["Scrollytelling", "Leaflet.js", "Literature", "Interactive Design"],
    type: "Web & Data",
  },
  {
    title: "Northwestern Executives in Numbers",
    outlet: "The Daily Northwestern",
    description:
      "Built supporting data visuals with Flourish for executive compensation coverage.",
    image: "/presidentspay.png",
    url: "https://dailynorthwestern.com/2025/09/15/campus/outgoing-university-president-michael-schill-earned-nearly-1-7-million-in-first-full-year-tax-filings-show/",
    tags: ["Higher Education", "Flourish", "Data Visualization"],
    type: "Web & Data",
  },
    // ===== REPORTING & WRITING =====

  {
    title: "Chicago Heatwave Project",
    outlet: "The Daily Northwestern",
    description:
      "Reported on a 1995 heatwave memorial event hosted by city officials and researchers, with supporting data visualization.",
    image: "/johnson.jpg",
    url: "https://dailynorthwestern.com/2025/07/16/city/chicago-mayor-brandon-johnson-buffett-researchers-host-screening-and-discussion-on-1995-heat-wave/",
    tags: ["Data Journalism", "Climate", "Chicago", "D3.js"],
    type: "Reporting & Writing",
  },

  {
    title: "Evanston businesses stand up to ICE amid escalated enforcement",
    outlet: "The Daily Northwestern",
    description:
      "Reported on local businesses' reaction to increased ICE activity.",
    image: "/noice.jpeg",
    url: "https://dailynorthwestern.com/2025/11/05/city/we-cannot-be-silent-evanston-businesses-stand-up-to-ice-amid-escalated-enforcement/",
    tags: ["Immigration", "Community"],
    type: "Reporting & Writing",
  },{
    title: "Evanston creative Junko Yokota",
    outlet: "The Daily Northwestern",
    description:
      "Profile of Junko Yokota, an Evanston-based academic and photographer whose visual storytelling spans continents.",
    image: "/yokota.png",
    url: "https://dailynorthwestern.com/2025/10/28/city/this-rent-is-bananas-quadrel-evanston-tenants-union-protests-rent-hikes-mismanagement/",
    tags: ["Feature Writing", "Higher Education", "Arts"],
    type: "Reporting & Writing",
  },
  {
    title: "Fulbright Funding Impact",
    outlet: "The Daily Northwestern",
    description:
      "Reported on how federal policy has affected Northwestern-affiliated Fulbright scholars and the program’s future.",
    image: "/Fulbright_Seal_RGB-scaled-1.jpg",
    url: "https://dailynorthwestern.com/2025/07/07/top-stories/a-shift-going-on-fulbright-scholars-at-nu-and-abroad-discuss-impact-programs-future-amid-political-uncertainty/",
    tags: ["Education", "Policy"],
    type: "Reporting & Writing",
  },
  {
    title: "H-1B or Bust",
    outlet: "nuAZN",
    description:
      "Led reporting on an enterprise feature exploring how international students navigate visa uncertainty and shifting U.S. immigration policy.",
    image: "/h1b.png",
    url: "https://drive.google.com/file/d/1bd3aXz4QDAbdQL8dBzSYJSPl_kP0usYb/view?usp=sharing",
    tags: ["Immigration", "Higher Education", "Feature Writing"],
    type: "Reporting & Writing",
  },
  {
    title: "Taiwan’s White Terror",
    outlet: "Encyclopaedia Britannica",
    description:
      "Wrote political history article on Taiwan’s White Terror period, covering decades of martial law and suppression of free speech.",
    image: "/whiteterror.png",
    url: "https://www.britannica.com/event/White-Terror-Taiwan",
    tags: ["History", "Research", "Editing"],
    type: "Reporting & Writing",
  },
  {
    title: "Min Jin Lee",
    outlet: "Encyclopaedia Britannica",
    description:
      "Wrote a feature-style biography on novelist Min Jin Lee, exploring her literary career and themes.",
    image: "/minjinlee.png",
    url: "https://www.britannica.com/biography/Min-Jin-Lee",
    tags: ["Profile Writing", "Interviewing", "Research"],
    type: "Reporting & Writing",
  },
  {
    title: "Trouble in Paradise",
    outlet: "nuAZN Magazine",
    description:
      "Reported a longform feature on tensions between tourism and local communities in Hawai'i and Guam.",
    image: "/nuazntourism.png",
    url: "https://drive.google.com/file/d/1vK4wTHjW8tW71FnGgFgAMq6RO7ak7VQg/view?usp=share_link",
    tags: ["Arts", "Tourism", "Feature Writing"],
    type: "Reporting & Writing",
  },
];

const groupedProjects: Record<string, typeof projects[number][]> = {};

for (const project of projects) {
  if (!groupedProjects[project.type]) {
    groupedProjects[project.type] = [];
  }
  groupedProjects[project.type].push(project);
}


export default function ProjectsPage() {
  const typeOrder = ["Web & Data", "Reporting & Writing"];

  return (
    <div className={styles.wrapper}>
      <header>
        <NavBar />
      </header>

      <main id="projects" className="container mx-auto px-4 py-16 flex-grow">
        <header className={styles.header}>
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.subtitle}>
            Selected work featuring data visualization, web development, reporting, and longform writing.
          </p>
        </header>

        {typeOrder.map((type) => (
          <section key={type} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">{type}</h2>
            <div className={styles.grid}>
              {groupedProjects[type]?.map((project, idx) => (
                <article key={idx} className={styles.card}>
                  <figure className={styles.figure}>
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <img
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

                    <ul className={styles.tags} aria-label="Tags">
                      {project.tags.map((tag, tIdx) => (
                        <li key={tIdx} className={styles.tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>

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
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
