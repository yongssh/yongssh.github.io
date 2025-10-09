import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Link from "next/link";

const projects = [
  {
    title: "EPL Story with Tax Calculator",
    description: "Reported and built a tax calculator widget with interactive data visualizations with D3.js for the Evanston Public Library debate.",
    image: "/epl.jpeg",
    url: "https://dailynorthwestern.com/2025/10/01/top-stories/not-just-a-place-of-books-evanston-public-library-debates-potential-split-from-city/"
  },
  {
    title: "Migration in Mohsin Hamid's Exit West",
    description: "Created interactive scrolly-telling page to track Hamid's characters as they travel across the world, using Leaflet.js",
    image:"/lahore-map.png",
    url:"https://yongssh.github.io/exit-west.html"
  },
  {
    title: "Daily Northwestern Elections Page",
    description: "Designed and developed interactive election map with D3.js for election coverage, using WaPo's React component library.",
    image: "/elections2024.png", 
    url: "https://apps.dailynorthwestern.com/election2024/" 
  },
  {
    title: "Whiting Awards Analysis",
    description: "Exploratory data analysis and visualization of Whiting Award winners, built with D3.js.",
    image: "/whiting.png", 
    url: "https://yongssh.github.io/whiting-awards/"
  },
   {
    title: "World Energy Mix Visualizer ",
    description: "Built an interactive tool with D3.js to visualize how each country sources energy, drawing on World Bank data and following the book D3.js: Start to Finish as a learning guide. ",
    image: "/d3.png", 
    url: "https://stately-frangollo-b9a02e.netlify.app"
  },
  {
    title: "Chicago Heatwave Project",
    description: "Created data visualizations and reported during the 1995 heatwave event screening with D3.js.",
    image: "/johnson.jpg", 
    url: "https://dailynorthwestern.com/2025/07/16/city/chicago-mayor-brandon-johnson-buffett-researchers-host-screening-and-discussion-on-1995-heat-wave/"
  },
  {
    title: "Northwestern University Executives in Numbers",
    description: "Developed interactive data visualizations to support reporting on university executive compensation with Flourish.",
    image: "/presidentspay.png",
    url: "https://dailynorthwestern.com/2025/09/15/campus/outgoing-university-president-michael-schill-earned-nearly-1-7-million-in-first-full-year-tax-filings-show/"
  },
  {
    title: "Fulbright Funding Impact",
    description: "Investigated potential federal cuts to the Fulbright Scholarship program by interviewing Northwestern scholars who studied abroad and foreign students studying in the U.S.",
    image: "/Fulbright_Seal_RGB-scaled-1.jpg",
    url: "https://dailynorthwestern.com/2025/07/07/top-stories/a-shift-going-on-fulbright-scholars-at-nu-and-abroad-discuss-impact-programs-future-amid-political-uncertainty/",

  },
  {
    title: "Trouble in Paradise",
    description:"Reported and wrote a longform feature on tensions between tourism and local communities in Hawai‘i and Guam for nuAZN.",
    image: "/nuazntourism.png",
    url:"https://drive.google.com/file/d/1vK4wTHjW8tW71FnGgFgAMq6RO7ak7VQg/view?usp=share_link"
},
{
    title: "Taiwan’s White Terror",
    description:"Pitched, researched, and wrote an article on Taiwan’s White Terror period, when martial law was used to suppress dissent for decades, for Encyclopaedia Britannica.",
    image: "/whiteterror.png",
    url:"https://www.britannica.com/event/White-Terror-Taiwan"
},
{
    title: "Min Jin Lee",
    description:"Pitched, interviewed, and researched for a Encylopaedia Britannica's entry on novelist Min Jin Lee.",
    image: "/minjinlee.png",
    url:"https://www.britannica.com/biography/Min-Jin-Lee"
}
  ];

const ProjectsPage: React.FC = () => {
  return (
    <div className="wrapper bg-white text-black min-h-screen flex flex-col font-righteous">
      <NavBar />
      <main className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-4xl font-bold mb-12 text-center font-righteous tracking-tight">
          My Projects
        </h1>

        {/* Grid: 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <Link href={project.url} target="_blank" className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
                <p className="text-sm text-gray-600 flex-grow leading-relaxed">
                  {project.description}
                </p>
            <Link
              href={project.url}
              target="_blank"
              className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md 
                        text-white bg-[rgb(8,47,73)] shadow-sm transition-colors duration-200
                        hover:bg-blue-200 hover:text-[rgb(8,47,73)]"
            >
              <span>View Project</span>
              <span aria-hidden="true">→</span>
            </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
