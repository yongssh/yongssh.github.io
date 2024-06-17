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
        <h2 className={`bg-white text-black ${garamond.className} p-8`}>I&apos;m also interested in documenting stories through photography.</h2>
        <PhotoGallery />
        <Footer />
      </div>
    );
  };
  
  export default GalleryPage;
