// app/WritingPage.js

import React from 'react';
import NavBar from '../components/NavBar';
import Publications from '../components/publications';
import Honors from '../components/honors';

const WritingPage = () => {
  return (
    <div className="bg-white text-black">
      <NavBar />
      <div className="flex">
      <Publications />
      <Honors />
      </div>
    </div>
  );
};

export default WritingPage;
