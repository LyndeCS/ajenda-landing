import React from 'react';
import featuresPic1 from '../assets/features1.jpg';
import featuresPic2 from '../assets/features2.jpg';
import featuresPic3 from '../assets/features3.jpg';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-black text-2xl mb-12 text-center">We believe in building easy...</h2>
        <div className="bg-gray-100 rounded relative grid grid-cols-3">
          <div className="md:relative">
            <img
              src={featuresPic1}
              alt="Feature 1"
              className="w-[9.75rem] h-[14rem] md:w-[19.5rem] md:h-[28rem] rounded-xl shadow-full transform -translate-x-8 -translate-y-8 absolute top-0 left-0"
            />
            <img
              src={featuresPic2}
              alt="Feature 2"
              className="w-[9.75rem] h-[14rem] md:w-[19.5rem] md:h-[28rem] rounded-xl shadow-full transform translate-x-8 translate-y-8 absolute top-0 left-0"
            />
            <img
              src={featuresPic3}
              alt="Feature 3"
              className="w-[9.75rem] h-[14rem] md:w-[19.5rem] md:h-[28rem] rounded-xl shadow-full transform translate-x-24 translate-y-24 absolute top-0 left-0"
            />
          </div>
          <div className="pt-8 mt-4 md:mt-0 relative z-10 col-span-2 text-center">
            <div className="space-y-24">
              <div>
                <h3 className="text-lg font-semibold pb-2">Streamlined Workflow</h3>
                <p className="pb-8">Simplify your tasks and stay organized with our intuitive workflow.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-2">Collaboration Made Easy</h3>
                <p className="pb-8">Effortlessly collaborate with team members and stay on the same page.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-2">Real-time Updates</h3>
                <p className="pb-8">Stay informed with instant updates and notifications on task progress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
