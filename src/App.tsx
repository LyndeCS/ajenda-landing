// src/App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Usp from './components/Usp';
import Features from './components/Features';
import Reviews from './components/Reviews';
import CTA from './components/CTA';

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      <Hero />
      <Usp />
      <Features />
      <Reviews />
      <CTA />
      {/* Other content of your landing page */}
    </div>
  );
};

export default App;
