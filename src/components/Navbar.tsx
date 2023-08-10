// src/components/Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-md py-4">
      <div className="mx-auto max-w-7xl px-4 flex justify-between items-center">
        {/* Left-justified App Name */}
        <div>
          <span className="text-lg font-semibold text-black">Ajenda</span>
        </div>

        {/* Right-justified Links */}
        <div className="space-x-4">
          <a href="#" className="text-black hover:text-mint">Product</a>
          <a href="#" className="text-black hover:text-mint">Features</a>
          <a href="#" className="text-black hover:text-mint">Social</a>
          <button className="rounded bg-mint text-white px-4 py-2 hover:bg-mintdarker">
            Try Ajenda
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

