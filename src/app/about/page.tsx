import React from 'react';
import NavBar from '../components/NavBar';
import AboutSection from '../components/about';
import Footer from '../components/footer';

const WritingPage = () => {
  return (
    
    <div className="wrapper bg-white text-black">
            <main className="flex-grow">

      <NavBar />
      <AboutSection />
      </main>
      <Footer />

    </div>
    
  );
};

export default WritingPage;
