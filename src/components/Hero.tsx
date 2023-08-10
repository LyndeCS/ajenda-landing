import React from 'react';
import heroImage from '../assets/hero.jpg'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white py-16">
        {/* Background Splotch 
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-yellow-400 via-transparent to-transparent backdrop-blur-md opacity-50 z-0"></div>
      */}
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">
        
        {/* Header Text */}
        <h1 className="text-4xl md:text-5xl py-4 font-semibold text-black mb-4 text-center">
          Easy Schedule,
          <br />
          Easy Life
        </h1>

        {/* Description Text */}
        <p className="text-lg md:text-xl text-gray-600 text-center mb-8">
          Simplify your life with Ajenda,
          <br /> {/* Hide on small screens */}
          the key to stress-free task and schedule management
        </p>

        {/* Big Button */}
        <button className="rounded bg-mint text-white px-6 py-3 md:py-4 hover:bg-mintdarker mb-8">
          Try Ajenda
        </button>

        {/* Image */}
        <img
          src={heroImage} // Placeholder image URL
          alt="App Screenshot"
          className="max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
