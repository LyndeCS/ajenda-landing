import React from 'react';
import featuresPic1 from '../assets/features1.jpg';
import featuresPic2 from '../assets/features2.jpg';
import featuresPic3 from '../assets/features3.jpg';

const Features: React.FC = () => {
  return (
    <section id="features-section" className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-24 text-center">Stay organized across devices</h2>
        <div className="bg-white border rounded-xl relative grid grid-cols-3">
          <div className="md:relative">
            <img
              src={featuresPic1}
              alt="Feature 1"
              className="w-[9.75rem] h-[14rem] md:w-[19.5rem] md:h-[28rem] border-2 border-gray-600 overflow-hidden rounded-xl shadow-full transform -translate-x-8 -translate-y-8 absolute top-0 left-0"
            />
            <img
              src={featuresPic2}
              alt="Feature 2"
              className="w-[9.75rem] h-[14rem] md:w-[19.5rem] md:h-[28rem] border-2 border-gray-600 overflow-hidden rounded-xl shadow-full transform translate-x-8 translate-y-8 absolute top-0 left-0"
            />
            <img
              src={featuresPic3}
              alt="Feature 3"
              className="w-[9.75rem] h-[14rem] md:w-[19.5rem] md:h-[28rem] border-2 border-gray-600 overflow-hidden rounded-xl shadow-full transform translate-x-24 translate-y-24 absolute top-0 left-0"
            />
          </div>
          <div className="my-4 md:my-12 relative z-10 col-span-2 text-center">
            <div className="space-y-24">
              <div>
                <h3 className="text-3xl font-semibold pb-2">Flexibility, Unleashed</h3>
                <p className="text-xl font-normal">Enjoy the full power of desktop features and the freedom of mobile convenience.</p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold pb-2">Touch & Go</h3>
                <p className="text-xl font-normal">Effortlessly manage tasks with intuitive touch interactions, designed for mobile ease.</p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold pb-2">Stay Updated</h3>
                <p className="text-xl font-normal">Sync tasks and updates in real time across all devices, keeping you in the loop.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
