import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false); // To handle smooth fade transitions

  // Automatic transition every few seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, interval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentIndex, interval]);

  const handleNextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 500); // Transition delay matches the fade animation
  };

  const handlePrevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-auto">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={`w-full h-auto rounded-lg shadow-lg transition-opacity duration-500 ease-in-out transform ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {/* Left Arrow */}
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl font-bold transition-opacity duration-300 ease-in-out hover:opacity-75"
        style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer' }}
      >
        &#8592;
      </button>
      {/* Right Arrow */}
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl font-bold transition-opacity duration-300 ease-in-out hover:opacity-75"
        style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer' }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
