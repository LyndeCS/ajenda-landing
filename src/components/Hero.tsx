import React from 'react';
import heroImage from '../assets/hero.jpg'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-teal-50 to-white">
        
<svg
  className="absolute z-0"
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


      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center pt-28">
        
        {/* Header Text */}
        <h1 className="text-5xl md:text-7xl pt-32 pb-8 font-extrabold text-black mb-4 text-center">
          Easy Schedule,
          <br />
          Easy Life
        </h1>

        {/* Description Text */}
        <p className="text-xl md:text-2xl text-gray-600 text-center mb-20">
          Simplify your life with Ajenda,
          <br />
          the key to stress-free task and schedule management
        </p>

        {/* Big Button */}
        <a href="https://ajenda.web.app/" id="product-section" className="bg-gradient-to-br from-aqua via-mint to-mintlighter text-white px-12 py-4 rounded-lg font-medium text-2xl mb-20 shadow-lg border-[1px] border-mint hover:bg-gradient-to-br hover:from-mint hover:via-mintdarker hover:to-mintlighter hover:shadow-xl z-10">
            Try Ajenda
          </a>

        {/* Image */}
        <img
          src={heroImage}
          alt="App Screenshot"
          className="max-w-full rounded-lg shadow-fuller"
        />
      </div>
    </section>
  );
};

export default Hero;
