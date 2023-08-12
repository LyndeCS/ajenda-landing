import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-teal-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">Happy users, Happy life</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Review Card 1 */}
          <div className="bg-white bg-opacity-75 p-6 rounded-md shadow-md">
            <blockquote className="text-lg mb-4">
              "Before I started using this app, I was always scrambling to keep track of my to-do list. But now that I have it all in one place, I feel much more organized and in control. Plus, the reminders are a lifesaver!"
            </blockquote>
            <p className="text-sm font-semibold">Jane</p>
            <p className="text-xs text-gray-600">Busy mom and entrepreneur</p>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white bg-opacity-75 p-6 rounded-md shadow-md">
            <blockquote className="text-lg mb-4">
              "As a freelancer, I have to juggle multiple projects at once. This app has made it so much easier to stay on top of everything and make sure I'm not missing any deadlines. It's definitely helped me be more productive and efficient."
            </blockquote>
            <p className="text-sm font-semibold">Alex</p>
            <p className="text-xs text-gray-600">Freelance graphic designer</p>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white bg-opacity-50 p-6 rounded-md shadow-md">
            <blockquote className="text-lg mb-4">
              "I was always the type of person who would write things down on random scraps of paper and then lose them. This app has been a game-changer for me. I love being able to see all my tasks in one place and easily drag-and-drop them into my schedule."
            </blockquote>
            <p className="text-sm font-semibold">David</p>
            <p className="text-xs text-gray-600">College student</p>
          </div>

          {/* Review Card 4 */}
          <div className="bg-white bg-opacity-50 p-6 rounded-md shadow-md">
            <blockquote className="text-lg mb-4">
              "I work in a fast-paced environment where things are constantly changing. This app has been a godsend. It helps me stay organized and adapt to shifting priorities without feeling overwhelmed. I highly recommend it to anyone who needs to stay on top of their game."
            </blockquote>
            <p className="text-sm font-semibold">Sarah</p>
            <p className="text-xs text-gray-600">Marketing manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
