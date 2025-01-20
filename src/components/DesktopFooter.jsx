import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logos/white.png';

const DesktopFooter = () => {
    return (
        <footer className="bg-[#23b6cb] text-white py-8">
            <div className="container mx-auto flex flex-row justify-between items-start px-6 pt-4 pb-2 md:px-0">
                {/* Learn More Section */}
                <div className="mb-6 md:mb-0 text-left flex flex-row items-start ml-20">
                    <h3 className="text-lg font-bold mb-2 pr-3 tracking-tight">Learn More</h3>
                    <div className="h-20 border-l-4 border-white"></div> {/* Vertical line */}
                    <ul className="pl-4 text-left">
                        <li><a href="/terms_and_conditions" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/contact_us" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Logo and Social Icons */}
                <div className="mb-6 md:mb-0 text-center">
                    <img src={logo} alt="Sama Sama Jiu Jitsu Academy" className="mx-auto pb-3 border-b-2" width={90} />
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size='lg' />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size='lg' />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size='lg' />
                        </a>
                    </div>
                </div>

                {/* Address Section */}
                <div className="text-left flex flex-row items-start mr-20">
                    <h3 className="text-lg font-bold mb-2 pr-3 tracking-tight">Address</h3>
                    <div className="h-20 border-l-4 border-white"></div> {/* Vertical line */}
                    <ul className="pl-4 text-left">
                        <li>Old Fallings Lane, Wolverhampton,</li>
                        <li>WV10 8BL</li>
                        <li><a href="tel:+447943892321" className="hover:underline">0754 8893221</a></li>
                        <li><a href="mailto:sama@samasamajiujitsu.com" className="hover:underline">contactus@samsamjiujitsu.co.uk</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default DesktopFooter;
