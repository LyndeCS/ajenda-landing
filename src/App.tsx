import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Usp from './components/Usp';
import Features from './components/Features';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Usp />
      <Features />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
