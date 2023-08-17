import React from 'react';
import janeheadshot from '../assets/jane.jpg';
import alexheadshot from '../assets/alex.jpg';
import davidheadshot from '../assets/david.jpg';
import sarahheadshot from '../assets/sarah.jpg';

const Reviews: React.FC = () => {
  return (
    <section id="reviews-section" className="relative bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-4xl md:text-6xl font-semibold text-center pt-16 pb-10 md:pt-36 md:pb-24">Happy users, <br className="md:hidden"/> Happy life</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-24 md:gap-x-24">
          {/* Review Card 1 */}
          <div className="bg-white bg-opacity-100 p-6 rounded-md shadow-full z-10">
            <blockquote className="md:text-lg font-bold mb-4">
             "Before I started using this app, I was always scrambling to keep track of my to-do list. But now that I have it all in one place, I feel much more organized and in control. Plus, the reminders are a lifesaver!"
            </blockquote>
            <div className="flex items-center space-x-4">
             <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={janeheadshot} alt="Reviewer 1" className="w-full h-full object-cover" />
            </div>
            <div>
            <p className="text-md font-semibold">Jane</p>
            <p className="text-sm text-gray-600">Busy mom and entrepreneur</p>
            </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white bg-opacity-100 p-6 rounded-md shadow-full z-10">
            <blockquote className="md:text-lg font-bold mb-4">
              "As a freelancer, I have to juggle multiple projects at once. This app has made it so much easier to stay on top of everything and make sure I'm not missing any deadlines. It's definitely helped me be more productive and efficient."
            </blockquote>
            <div className="flex items-center space-x-4">
             <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={alexheadshot} alt="Reviewer 1" className="w-full h-full object-cover" />
            </div>
            <div>
            <p className="text-md font-semibold">Alex</p>
            <p className="text-sm text-gray-600">Freelance graphic designer</p>
            </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white bg-opacity-100 p-6 rounded-md shadow-full z-10">
            <blockquote className="md:text-lg font-bold mb-4">
             "I was always the type of person who would write things down on random scraps of paper and then lose them. This app has been a game-changer for me. I love being able to see all my tasks in one place and easily drag-and-drop them into my schedule."
            </blockquote>
            <div className="flex items-center space-x-4">
             <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={davidheadshot} alt="Reviewer 1" className="w-full h-full object-cover" />
            </div>
            <div>
            <p className="text-md font-semibold">David</p>
            <p className="text-sm text-gray-600">College student</p>
            </div>
            </div>
          </div>

          {/* Review Card 4 */}
          <div className="bg-white bg-opacity-100 p-6 rounded-md shadow-full z-10">
            <blockquote className="md:text-lg font-bold mb-4">
            "I work in a fast-paced environment where things are constantly changing. This app has been a godsend. It helps me stay organized and adapt to shifting priorities without feeling overwhelmed. I highly recommend it to anyone who needs to stay on top of their game."
            </blockquote>
            <div className="flex items-center space-x-4">
             <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={sarahheadshot} alt="Reviewer 1" className="w-full h-full object-cover" />
            </div>
            <div>
            <p className="text-md font-semibold">Sarah</p>
            <p className="text-sm text-gray-600">Marketing manager</p>
            </div>
            </div>
          </div>
        </div>
      </div>
            <svg
  className="absolute z-0 top-0 left-0 w-full h-full"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 200"
  fill="none"
>
  {/* Teal Circle */}
  <ellipse
    cx="250"
    cy="70"
    rx="30"
    ry="15"
    z="-1"
    fill="rgba(0, 190, 145, 0.5)"
    filter="blur(15px)"
  />
  {/* Orange Circle */}
  <circle
    cx="200"
    cy="60"
    r="22"
    z="-1"
    fill="rgba(255, 103, 0, 0.3)"
    filter="blur(12px)"
  />
</svg>
    </section>
  );
};

export default Reviews;
