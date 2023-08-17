import React from 'react';
import featuresPic1 from '../assets/features1.jpg';
import featuresPic2 from '../assets/features2.jpg';
import featuresPic3 from '../assets/features3.jpg';

const Features: React.FC = () => {
  return (
    <section id="features-section" className="bg-gradient-to-b from-white to-orange-50">
      <div className="mx-auto max-w-7xl md:max-w-7xl px-4 md:px-0">
        <h2 className="text-4xl md:text-6xl font-extrabold mt-16 mb-10 md:my-8 text-center">Stay organized across devices</h2>
        <div className="text-center relative grid grid-rows-3 md:grid-rows-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center gap-y-4 md:mx-8">
            <img
              src={featuresPic1}
              alt="Feature 1"
              className="m-auto md:ml-4 md:col-start-1 row-start-1 md:row-start-1 w-[8rem] h-[12rem] md:w-[19.5rem] md:h-[28rem] border-2 border-gray-600 overflow-hidden rounded-xl shadow-full md:-translate-x-8 md:-translate-y-8 "
            />
            <img
              src={featuresPic2}
              alt="Feature 2"
              className="m-auto md:ml-4 md:col-start-1 row-start-2 md:row-start-1 w-[8rem] h-[12rem] md:w-[19.5rem] md:h-[28rem] border-2 border-gray-600 overflow-hidden rounded-xl shadow-full md:translate-x-8 md:translate-y-8 "
            />
            <img
              src={featuresPic3}
              alt="Feature 3"
              className="m-auto md:ml-4 md:col-start-1 row-start-3 md:row-start-1 w-[8rem] h-[12rem] md:w-[19.5rem] md:h-[28rem] border-2 border-gray-600 overflow-hidden rounded-xl shadow-full md:translate-x-24 md:translate-y-24 "
            />
              <div className="md:col-start-2 md:row-start-1 md:col-span-2 md:pb-[30rem] md:pt-[8rem] md:px-12 lg:pl-24">
                <h3 className="text-2xl md:text-3xl font-semibold pb-2">Flexibility, Unleashed</h3>
                <p className="text-md md:text-xl font-normal">Enjoy the full power of desktop features and the freedom of mobile convenience.</p>
              </div>
              <div className="col-start-1 md:col-start-2 md:col-span-2 row-start-2 md:row-start-1 md:px-12 lg:pl-24">
                <h3 className="text-2xl md:text-3xl font-semibold pb-2">Touch & Go</h3>
                <p className="text-md md:text-xl font-normal">Effortlessly manage tasks with intuitive touch interactions, designed for mobile ease.</p>
              </div>
              <div className="md:col-start-2 md:row-start-1 md:col-span-2 md:pt-[30rem] md:pb-[8rem] md:px-12 lg:pl-24">
                <h3 className="text-2xl md:text-3xl font-semibold pb-2">Stay Updated</h3>
                <p className="text-md md:text-xl font-normal">Sync tasks and updates in real time across all devices, keeping you in the loop.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
