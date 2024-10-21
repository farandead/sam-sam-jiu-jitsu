import React, { useState, useEffect } from 'react';
import MobileFooter from './MobileFooter';
import DesktopFooter from './DesktopFooter';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 768);  // Set to true if the screen width is <= 768px
    };

    useEffect(() => {
        checkScreenSize(); // Check the screen size on initial render
        window.addEventListener('resize', checkScreenSize); // Add event listener to check on resize

        return () => {
            window.removeEventListener('resize', checkScreenSize); // Cleanup event listener on unmount
        };
    }, []);

    return (
        <>
            {isMobile ? <MobileFooter /> : <DesktopFooter />}
        </>
    );
};

export default Footer;
