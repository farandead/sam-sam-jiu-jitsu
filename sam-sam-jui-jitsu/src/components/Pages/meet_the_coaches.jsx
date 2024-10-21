// components/CoachesList.js
import React from 'react';
import { COACHES } from '../../constants'; // Import coaches data
import PageLayout from '../PageLayout'; // Import the PageLayout component

const CoachesList = () => {
  return (
    <PageLayout className="mt-5">
      <div className="space-y-12 my-8">
        {COACHES.map((coach, index) => {
          // Check if the index is even or odd to switch layout
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-around my-8`}
            >
              {/* Text Section */}
              <div className="text-center md:text-left max-w-md p-4">
                <h1 className="text-4xl font-bold text-[#23b6cb]">{coach.name}</h1>
                <p className="text-gray-600 mt-2 p-1 font-bold">{coach.role}</p>
                <p className="text-gray-700 mt-4">
                  {coach.description.split('\n').map((paragraph, idx) => (
                    <span key={idx} className="block mb-2">
                      {paragraph}
                    </span>
                  ))}
                </p>
              </div>

              {/* Image Section */}
              <div className="mt-6 md:mt-0">
                <img
                  src={coach.image} // Use image from constants
                  alt={coach.name}
                  className="w-80 h-auto rounded-lg "
                />
              </div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default CoachesList;
