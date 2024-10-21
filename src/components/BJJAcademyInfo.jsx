import React, { useEffect, useState } from 'react';
import Section from './Section'; // Assuming you're using the Section component for padding and layout
import { Parallax } from 'react-scroll-parallax'; // Import Parallax for scroll effect
import bjjimage from '../assets/images/2.png'; // Import the image

const BJJAcademyInfo = () => {
  const [speed, setSpeed] = useState(-10); // Default speed for desktop

  // Use useEffect to monitor window size and change the speed based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // If the screen width is smaller than 768px (mobile devices)
        setSpeed(-5); // Set a different parallax speed for mobile
      } else {
        setSpeed(-10); // Default parallax speed for desktop
      }
    };

    // Set the initial speed when the component mounts
    handleResize();

    // Add event listener for window resizing
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <Section
      className="py-16 bg-white" // Adjust padding and background color as needed
      id="bjj-academy-info"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left side: Title and Description */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4  text-cyan-500">WELCOME TO SAM SAM JIU JITSU</h2>
          <p className="text-lg mb-6">
            At our academy, we focus on building strong fundamentals and techniques in Brazilian Jiu-Jitsu, offering classes for beginners and advanced practitioners. Whether you're looking to compete or just improve your fitness, we have programs to suit your needs.
          </p>
        </div>

        {/* Right side: Image with Parallax effect */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Parallax speed={speed}> {/* Dynamically set parallax speed */}
            <img
              src={bjjimage} // Replace with your actual image path
              alt="BJJ Academy"
              className="max-w-full h-auto"
            />
          </Parallax>
        </div>
      </div>
    </Section>
  );
};

export default BJJAcademyInfo;
