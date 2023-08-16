import React from 'react';
import { FiCheckCircle, FiClipboard, FiSmartphone, FiClock } from 'react-icons/fi';

const Usp: React.FC = () => {
  return (
    <section className="md:my-36">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center my-16 md:mt-32 md:mb-24">
          Take charge of<br className="md:hidden" /> your day
        </h2>
        <div className="grid grid-cols-2 gap-4 md:gap-16">
          {/* Feature 1 */}
          <div className="text-center pb-8">
            <FiCheckCircle className="mx-auto mb-2 text-green-500 text-3xl md:text-4xl" />
            <h3 className="text-2xl md:text-4xl font-extrabold mb-6">All-in-one</h3>
            <p className="font-medium md:text-xl">Manage your to-do list and schedule <br /> all in one app.</p>
          </div>
          {/* Feature 2 */}
          <div className="text-center pb-8">
            <FiClipboard className="mx-auto mb-2 text-blue-500 text-3xl md:text-4xl" />
            <h3 className="text-2xl md:text-4xl font-extrabold mb-6">Organize</h3>
            <p className="font-medium md:text-xl">Stay focused with task prioritization <br /> and status-based filtering.</p>
          </div>
          {/* Feature 3 */}
          <div className="text-center">
            <FiSmartphone className="mx-auto mb-2 text-purple-500 text-3xl md:text-4xl" />
            <h3 className="text-2xl md:text-4xl font-extrabold mb-6">Easy to use</h3>
            <p className="font-medium md:text-xl">Effortlessly manage your tasks with <br /> intuitive drag-and-drop and on-click scheduling.</p>
          </div>
          {/* Feature 4 */}
          <div className="text-center">
            <FiClock className="mx-auto mb-2 text-orange-500 text-3xl md:text-4xl" />
            <h3 className="hidden md:block text-2xl md:text-4xl font-extrabold mb-6">Never miss a deadline</h3>
            <h3 className="md:hidden text-2xl md:text-4xl font-extrabold mb-6">Deadlines</h3>
            <p className="font-medium md:text-xl">Past-due tasks are filtered to the top to <br /> keep you on track with your goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usp;
