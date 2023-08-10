// src/App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      <Hero />
      {/* Other content of your landing page */}
    </div>
  );
};

export default App;
