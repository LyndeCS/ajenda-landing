import React from 'react';
import heroImage from '../assets/hero.jpg'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-teal-50 to-white z-10">
      <svg
        className="absolute z-0 max-w-7xl max-h-7xl"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        fill="none"
      >
        {/* Teal Circle */}
        <ellipse
          cx="64"
          cy="10"
          rx="20"
          ry="10"
          z="-1"
          fill="rgba(0, 190, 145, 0.5)"
          filter="blur(10px)"
        />
        {/* Orange Circle */}
        <circle
          cx="40"
          cy="10"
          r="15"
          z="-1"
          fill="rgba(255, 103, 0, 0.3)"
          filter="blur(10px)"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center z-10">
        
        {/* Header Text */}
        <h1 className="text-4xl md:text-7xl pt-32 md:pt-60 pb-8 md:pb-12 font-extrabold text-black text-center z-10">
          Easy Schedule,
          <br />
          Easy Life
        </h1>

        {/* Description Text */}
        <p className="text-md md:text-2xl text-gray-600 text-center mb-10 md:mb-20 z-10">
          Simplify your life with Ajenda,
          <br />
          the key to stress-free task and schedule management
        </p>

        {/* Big Button */}
        <a href="https://ajenda.web.app/" id="product-section" className="bg-gradient-to-br from-aqua via-mint to-mintlighter text-white px-6 py-2 md:px-12 md:py-4 rounded-lg font-medium text-xl md:text-2xl mb-10 md:mb-20 shadow-lg border-[1px] border-mint hover:bg-gradient-to-br hover:from-mint hover:via-mintdarker hover:to-mintlighter hover:shadow-xl z-10">
            Try Ajenda
          </a>

        {/* Image */}
        <img
          src={heroImage}
          alt="App Screenshot"
          className="max-w-full rounded-lg shadow-full md:shadow-fuller"
        />
      </div>
    </section>
  );
};

export default Hero;
