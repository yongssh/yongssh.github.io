import React from 'react';
import NavBar from '../components/NavBar';
import Publications from '../components/publications';
import Honors from '../components/honors';
import Footer from '../components/footer';

const WritingPage = () => {
  return (
    <div className="wrapper bg-white text-black">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Publications />
          <Honors />      
          <Footer />
        </div>
  
      </main>
    </div>
    
  );
};

export default WritingPage;