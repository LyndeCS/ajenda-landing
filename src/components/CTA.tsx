import React from 'react';
import AppStore from '../assets/app-store.svg'; // Provide the correct image
import GooglePlay from '../assets/google-play.svg'; // Provide the correct image

const CTA: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-8">Get started today <br /> and simplify your life</h2>
        <a href="https://ajenda.web.app/" className="inline-block bg-gradient-to-br from-aqua via-mint to-mintlighter text-white px-12 py-4 rounded-lg font-medium text-2xl mb-6 hover:bg-gradient-to-br hover:from-mint hover:via-mintdarker  hover:to-mintlighter shadow-lg border-[1px] border-mint z-10">
            Try Ajenda
          </a>
        <p className="text-sm text-gray-600 mb-4">Access Ajenda anytime, anywhere on desktop or mobile app.</p>
        <div className="flex justify-center">
          <a href="#" className="mr-4">
            <img src={AppStore} alt="Download on the App Store" className="w-auto h-14" />
          </a>
          <a href="#">
            <img src={GooglePlay} alt="Get it on Google Play" className="w-auto h-14" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
