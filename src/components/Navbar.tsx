// src/components/Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto px-4">
        {/* Navbar content goes here */}
        <div className="text-black">Ajenda</div>
        <ul className="flex space-x-4">
          <li className="text-black">Product</li>
          <li className="text-black">Features</li>
          <li className="text-black">Social</li>
          <li className="text-black">Try Ajenda</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;