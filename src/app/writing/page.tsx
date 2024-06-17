// app/WritingPage.js

import React from 'react';
import NavBar from '../components/NavBar';
import Publications from '../components/publications';
import Honors from '../components/honors';
import Footer from '../components/footer';
const WritingPage = () => {
  return (
    <div className="wrapper bg-white text-black">
      <NavBar />
      <div className="flex">
      <Publications />
      <Honors />
      </div>
      <Footer />
    
 
   
    </div>
  );
};

export default WritingPage;
