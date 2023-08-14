// src/components/Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute w-full z-50 bg-white bg-opacity-70 py-4 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 flex justify-between items-center">
        {/* Left-justified App Name */}
        <div>
          <span className="text-xl font-semibold text-black">Ajenda</span>
        </div>

        {/* Right-justified Links */}
        <div className="space-x-4">
          <a href="#" className="text-black font-medium hover:text-mint">Product</a>
          <a href="#" className="text-black font-medium hover:text-mint">Features</a>
          <a href="#" className="text-black font-medium hover:text-mint">Social</a>
          <a href="https://ajenda.web.app/" className="bg-gradient-to-br from-mint to-mintdarker text-white font-medium px-4 py-2 hover:bg-gradient-to-br hover:from-mintdarker hover:to-mintdarkest rounded-lg">
            Try Ajenda
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

