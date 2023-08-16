import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Ajenda</h3>
            <ul className="text-gray-600 md:space-y-2">
              <li><a href="#" className="hover:text-mint">About Us</a></li>
              <li><a href="#" className="hover:text-mint">Features</a></li>
              <li><a href="#" className="hover:text-mint">Future Updates</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="text-gray-600 md:space-y-2">
              <li><a href="#" className="hover:text-mint">FAQ</a></li>
              <li><a href="#" className="hover:text-mint">Contact Us</a></li>
              <li><a href="#" className="hover:text-mint">Help Center</a></li>
              <li><a href="#" className="hover:text-mint">Feedback</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <ul className="text-gray-600 md:space-y-2">
              <li><a href="#" className="hover:text-mint">Twitter</a></li>
              <li><a href="#" className="hover:text-mint">Facebook</a></li>
              <li><a href="#" className="hover:text-mint">Instagram</a></li>
              <li><a href="#" className="hover:text-mint">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Download</h3>
            <ul className="text-gray-600 md:space-y-2">
              <li><a href="#" className="hover:text-mint">Windows</a></li>
              <li><a href="#" className="hover:text-mint">Mac</a></li>
              <li><a href="#" className="hover:text-mint">Android</a></li>
              <li><a href="#" className="hover:text-mint">iPhone</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="text-gray-600 md:space-y-2">
              <li><a href="#" className="hover:text-mint">Terms of Service</a></li>
              <li><a href="#" className="hover:text-mint">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-mint">Security Policy</a></li>
              <li><a href="#" className="hover:text-mint">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-16 mb-4">
          <p className="text-gray-600">&copy; 2023 Christopher Lynde</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
