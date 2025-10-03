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
    url: "#" 
  },
  {
    title: "Whiting Awards Analysis",
    description: "Exploratory data analysis and visualization of Whiting Award winners, built with D3.js.",
    image: "/whiting.png", 
    url: "https://yongssh.github.io/whiting-awards/"
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
];

const ProjectsPage = () => {
  return (
    <div className="wrapper bg-white text-black min-h-screen flex flex-col font-family: garamond" >
      <NavBar />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center font-family: garamond">My Projects</h1>
        
        {/* Grid: 1 col on mobile, 2 on tablets, 3 on desktops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <Link href={project.url} target="_blank">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-600 flex-grow">{project.description}</p>
                <Link 
                  href={project.url} 
                  target="_blank"
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline "
                >
                  View Project →
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
