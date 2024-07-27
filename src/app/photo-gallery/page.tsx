import React from 'react';
import NavBar from '../components/NavBar';
import PhotoGallery from "../components/Gallery";
import { EB_Garamond  } from 'next/font/google';
import Footer from '../components/footer';

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-garamond'
});

const GalleryPage = () => {
    return (
      <div className="wrapper bg-white text-black">
        <NavBar />
        <main className="flex-grow">
        <h2 className={`bg-white text-black ${garamond.className} p-8`}>I&apos;m also interested in documenting stories through photography. Click to expand.</h2>
        <div className="m-2">
        <PhotoGallery />
        </div>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default GalleryPage;
