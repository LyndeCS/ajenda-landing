import React from 'react';
import { FiCheckCircle, FiClipboard, FiSmartphone, FiClock } from 'react-icons/fi';

const Usp: React.FC = () => {
  return (
    <section className="mt-36 mb-36">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mt-32 mb-24">
          Take charge of your day
        </h2>
        <div className="grid grid-cols-2 gap-16">
          {/* Feature 1 */}
          <div className="text-center pb-8">
            <FiCheckCircle className="mx-auto mb-2 text-green-500 text-4xl" />
            <h3 className="text-4xl font-extrabold mb-6">All-in-one</h3>
            <p className="font-medium text-xl">Manage your to-do list and schedule <br /> all in one app.</p>
          </div>
          {/* Feature 2 */}
          <div className="text-center pb-8">
            <FiClipboard className="mx-auto mb-2 text-blue-500 text-4xl" />
            <h3 className="text-4xl font-extrabold mb-6">Organize</h3>
            <p className="font-medium text-xl">Stay focused with task prioritization <br /> and status-based filtering.</p>
          </div>
          {/* Feature 3 */}
          <div className="text-center">
            <FiSmartphone className="mx-auto mb-2 text-purple-500 text-4xl" />
            <h3 className="text-4xl font-extrabold mb-6">Easy to use</h3>
            <p className="font-medium text-xl">Effortlessly manage your tasks with <br /> intuitive drag-and-drop and on-click scheduling.</p>
          </div>
          {/* Feature 4 */}
          <div className="text-center">
            <FiClock className="mx-auto mb-2 text-orange-500 text-4xl" />
            <h3 className="text-4xl font-extrabold mb-6">Never miss a deadline</h3>
            <p className="font-medium text-xl">Past-due tasks are filtered to the top to <br /> keep you on track with your goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usp;
