// src/App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Usp from './components/Usp';
import Features from './components/Features';

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      <Hero />
      <Usp />
      <Features />
      {/* Other content of your landing page */}
    </div>
  );
};

export default App;
