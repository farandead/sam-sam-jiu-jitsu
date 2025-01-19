import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import samsam from "../assets/logos/main.png"; // Replace with the correct path to the logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the hamburger and close icons
import { navigation } from "../constants"; // Navigation links
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-white border-b shadow-md">
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-0 py-4">
        {/* Logo */}
        <a className="block w-[7rem] xl:ml-20" href="/">
          <img src={samsam} width={190} height={40} alt="samsamjiujitsu" />
        </a>

        {/* Hamburger Button */}
        <button
          className={`lg:hidden px-3 z-50 ${
            openNavigation ? "fixed top-4 right-4" : "ml-auto"
          }`}
          onClick={toggleNavigation}
        >
          <FontAwesomeIcon icon={openNavigation ? faTimes : faBars} size="2x" />
        </button>

        {/* Navigation with transition */}
        <nav
          className={`fixed top-0 left-0 right-0 bottom-0 bg-white transform transition-transform duration-300 ease-in-out flex ${
            openNavigation
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } lg:static lg:translate-x-0 lg:opacity-100 lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            className={`relative z-2 flex flex-col items-center justify-center w-full h-screen lg:h-auto lg:flex-row ${
              openNavigation ? "lg:justify-center" : ""
            }`}
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl capitalize text-black transition-colors hover:text-[#23b6cb] ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-3 py-3 md:py-8 lg:-mr-0.5 lg:text-lg lg:font-normal ${
                  item.url === location.hash
                    ? "z-2 lg:text-black"
                    : "lg:text-black"
                } lg:leading-2 lg:hover:text-[#23b6cb] xl:px-12`}
              >
                {item.title}
              </a>
            ))}

            {/* Social Icons inside the menu for mobile */}
            <div className="socials flex space-x-4 mt-4 lg:hidden">
              <a
                href="https://www.instagram.com/samsamjiujitsu/"
                className="text-black hover:text-[#23b6cb] transition-colors duration-300 text-xl"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </nav>

        {/* Social Icons visible on larger screens */}
        <div className="socials hidden lg:flex space-x-4 mr-20">
          <a
            href="https://www.instagram.com/samsamjiujitsu/"
            className="text-black hover:text-[#23b6cb] transition-colors duration-300 text-xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
