import React from 'react';
import { classSchedule } from '../../constants'; // Adjust the path based on your folder structure
import PageLayout from '../PageLayout'; // Ensure the correct path to your PageLayout component
const ClassSchedule = () => {
    return (
      <PageLayout className='pt-10'>
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#23b6cb]">Class Timetable</h1>
            <p className="text-gray-600 mb-8 text-center"> These are the classes we are offering at the moment</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classSchedule.map((schedule, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold mb-4">{schedule.day}</h2>
                <p className="text-lg font-medium mb-2">{schedule.className}</p>
                {schedule.times.map((time, i) => (
                  <span
                    key={i}
                    className="inline-block bg-[#23b6cb] text-white px-4 py-2 rounded-full text-sm font-semibold mr-2 mb-2"
                  >
                    {time}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    );
  };
  
  export default ClassSchedule;