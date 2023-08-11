import React from 'react';
import { FiCheckCircle, FiClipboard, FiSmartphone, FiClock } from 'react-icons/fi';

const Usp: React.FC = () => {
  return (
    <section className="bg-gray-100 pt-12 pb-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-8">
          Take charge of your day
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="text-center pb-8">
            <FiCheckCircle className="mx-auto mb-2 text-green-500 text-2xl" />
            <h3 className="text-xl font-semibold mb-2">All-in-one</h3>
            <p>Manage your to-do list and schedule all in one app.</p>
          </div>
          {/* Feature 2 */}
          <div className="text-center pb-8">
            <FiClipboard className="mx-auto mb-2 text-blue-500 text-2xl" />
            <h3 className="text-xl font-semibold mb-2">Organize</h3>
            <p>Stay focused with task prioritization and status-based filtering.</p>
          </div>
          {/* Feature 3 */}
          <div className="text-center">
            <FiSmartphone className="mx-auto mb-2 text-purple-500 text-2xl" />
            <h3 className="text-xl font-semibold mb-2">Easy to use</h3>
            <p>Effortlessly manage your tasks with intuitive drag-and-drop and on-click scheduling.</p>
          </div>
          {/* Feature 4 */}
          <div className="text-center">
            <FiClock className="mx-auto mb-2 text-orange-500 text-2xl" />
            <h3 className="text-xl font-semibold mb-2">Never miss a deadline</h3>
            <p>Past-due tasks are filtered to the top to keep you on track with your goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usp;
