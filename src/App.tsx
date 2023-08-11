// src/App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Usp from './components/Usp';

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      <Hero />
      <Usp />
      {/* Other content of your landing page */}
    </div>
  );
};

export default App;
