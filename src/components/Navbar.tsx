// src/components/Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute w-full z-50 bg-white bg-opacity-70 py-4 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 flex justify-between items-center">
        {/* Left-justified App Name */}
        <div>
          <a href="#" className="text-2xl font-medium text-black">Ajenda</a>
        </div>

        {/* Right-justified Links */}
        <div className="space-x-8">
          <a href="#" className="text-black font-medium hover:text-mint">Product</a>
          <a href="#" className="text-black font-medium hover:text-mint">Features</a>
          <a href="#" className="text-black font-medium hover:text-mint">Reviews</a>
          <a href="https://ajenda.web.app/" className="bg-gradient-to-br from-aqua via-mint to-mintlighter text-white font-medium px-4 py-2 border-[1px] border-mint hover:bg-gradient-to-br hover:from-mint hover:via-mintdarker hover:to-mintlighter hover:shadow rounded-lg">
            Try Ajenda
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

