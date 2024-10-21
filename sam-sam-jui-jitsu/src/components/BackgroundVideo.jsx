import React, { useState } from 'react';
import ParallaxBackground from './ParallaxBackground'; // Import your existing parallax background component
import video from '../assets/videos/2.mp4'; // Import your video file
import Button from './Button';
import logo from '../assets/logos/main.png'; // Import your logo
const BackgroundVideo = () => {
    const [videoError, setVideoError] = useState(false);

    // Handle video error
    const handleVideoError = () => {
        setVideoError(true); // Set the error state to true when the video fails to load
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {videoError ? (
                // Render ParallaxBackground component if the video fails
                <ParallaxBackground />
            ) : (
                // Render the video if no error
                <video
                    className="absolute top-4 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={handleVideoError} // Call the error handler if video fails
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            {/* Content overlay */}
            <div className="relative z-10 flex items-center justify-center h-screen bg-black bg-opacity-50">
                <div className="text-center text-white p-4">
                    {/* Logo at the top */}
                    <img
                        src={logo}
                        alt="Logo"
                        className="mx-auto mb-4 w-44 md:w-32"
                    />

                    {/* Main Heading */}
                    <h1 className="text-5xl font-bold text-white mb-6">#SAMSAMJIUJITSU</h1>

                    {/* Buttons */}
                    <div className="flex justify-center space-x-10">
                        <Button text="BOOK A FREE TRIAL" />
                        <Button text="CONTACT US" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BackgroundVideo;
