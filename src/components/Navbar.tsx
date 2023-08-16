import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute w-full z-50 bg-white bg-opacity-70 py-4 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 flex justify-between items-center">
        {/* Left-justified App Name */}
        <div>
          <a href="#" className="text-2xl font-medium text-black">
            Ajenda
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#product-section" className="text-black font-medium hover:text-mint">
            Product
          </a>
          <a href="#features-section" className="text-black font-medium hover:text-mint">
            Features
          </a>
          <a href="#reviews-section" className="text-black font-medium hover:text-mint">
            Reviews
          </a>
          <a href="https://ajenda.web.app/" className="bg-gradient-to-br from-aqua via-mint to-mintlighter text-white font-medium px-4 py-2 border-[1px] border-mint hover:bg-gradient-to-br hover:from-mint hover:via-mintdarker hover:to-mintlighter hover:shadow rounded-lg">
            Try Ajenda
            </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute z-10 top-12 right-0 bg-white bg-opacity-100 p-2 shadow-md text-center">
            <a href="#product-section" className="block text-black font-medium hover:text-mint mb-2">
              Product
            </a>
            <a href="#features-section" className="block text-black font-medium hover:text-mint mb-2">
              Features
            </a>
            <a href="#reviews-section" className="block text-black font-medium hover:text-mint mb-2">
              Reviews
            </a>
            <a
              href="https://ajenda.web.app/"
              className="block bg-gradient-to-br from-aqua via-mint to-mintlighter text-white font-medium px-2 py-1 border-[1px] border-mint hover:bg-gradient-to-br hover:from-mint hover:via-mintdarker hover:to-mintlighter hover:shadow rounded-lg mb-2"
            >
              Try Ajenda
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
