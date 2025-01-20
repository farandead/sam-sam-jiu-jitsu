import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logos/white.png';

const MobileFooter = () => {
    return (
        <footer className="bg-[#23b6cb] text-white py-8">
            <div className="container mx-auto flex flex-col items-center text-center space-y-8 px-6 pt-4 pb-2">
                {/* Logo and Social Icons */}
                <div className="w-full flex flex-col items-center space-y-4">
                    <img src={logo} alt="Sama Sama Jiu Jitsu Academy" className="mx-auto" width={90} />
                    <hr className="border-white w-1/5 mb-4" />

                    <div className="flex justify-center space-x-4">
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

                {/* Learn More Section */}
                <div className="w-full flex flex-col items-center space-y-2">
                    <h3 className="text-lg font-bold tracking-tight pb-2">
                        Learn More
                    </h3>
                    <hr className="border-white w-1/4 mb-4" />
                    <ul className="space-y-1">
                        <li><a href="/terms_and_conditions" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/contact_us" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                

                {/* Address Section */}
                <div className="w-full flex flex-col items-center space-y-2">
                    <h3 className="text-lg font-bold tracking-tight pb-2">
                        Address
                    </h3>
                    <hr className="border-white w-1/4 mb-4" />
                    <ul className="space-y-1">
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

export default MobileFooter;
