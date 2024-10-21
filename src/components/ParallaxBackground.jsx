import React, { useState, useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { parallaxImages } from '../constants'; // Import the images array
import Button from './Button'; // Import the Button component

const ParallaxBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Automatically switch images every 7 seconds with fade transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % parallaxImages.length); // Move to the next image
        setFade(true); // Fade in new image
      }, 600); // The time for the fade-out before changing the image
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative h-screen">
      {/* Parallax Slideshow */}
      <ParallaxBanner
        layers={[
          {
            image: parallaxImages[currentImageIndex], // Use the current image from the array
            amount: 0.5, // Adjust the parallax speed
          },
        ]}
        className={`h-screen transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Heading and buttons */}
      <div className="bg-black/20 absolute inset-0 flex flex-col items-center justify-center text-center z-10 ">
        <h1 className="text-6xl font-bold text-white mb-6 ">SAM SAM JIU JITSU</h1>
        <div className="flex space-x-10">
          <Button text="BOOK A FREE TRIAL" />
          <Button text="CONTACT US" />
        </div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
