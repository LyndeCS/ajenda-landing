import React from 'react';
import heroImage from '../assets/hero.jpg'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white">
        <div className="absolute inset-0 bg-opacity-[.03] bg-[#FF6700]"></div>
<svg
  className="absolute z-0"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 200"
  fill="none"
>
  {/* Teal Circle */}
  <ellipse
    cx="64"
    cy="8"
    rx="20"
    ry="10"
    z="-1"
    fill="rgba(0, 190, 145, 0.5)" // Teal color with 50% transparency
    filter="blur(10px)" // Apply a blur effect
  />
  {/* Orange Circle */}
  <circle
    cx="40"
    cy="8"
    r="15" // Reduced size to 1/4 of the original
    fill="rgba(255, 103, 0, 0.3)" // Orange color with 50% transparency
    filter="blur(10px)" // Apply a blur effect
  />
</svg>


      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">
        
        {/* Header Text */}
        <h1 className="text-5xl md:text-6xl pt-32 pb-8 font-semibold text-black mb-4 text-center">
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
        <a href="https://ajenda.web.app/" className="inline-block bg-mint text-white px-12 py-4 rounded-lg font-medium text-2xl mb-6 hover:bg-mintdarker transition duration-300">
          Try Ajenda
        </a>

        {/* Image */}
        <img
          src={heroImage} // Placeholder image URL
          alt="App Screenshot"
          className="max-w-full rounded-lg shadow-full"
        />
      </div>
    </section>
  );
};

export default Hero;
