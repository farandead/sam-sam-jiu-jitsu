import React, { useState } from "react";
import { FAQ_DATA } from "../constants"; // Import the FAQ data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";
import PageLayout from "./PageLayout";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("General Questions");

  const toggleFAQ = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <PageLayout id="faq-page" className="py-3">
      <div className="container mx-auto text-center mb-30 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#23b6cb]">
          Frequently Asked Questions !
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Got questions? We have answers! Find everything you need to know about
          our classes, training, and more.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-col md:flex-row justify-center mb-8 gap-4">
          {Object.keys(FAQ_DATA).map((category) => (
            <button
              key={category}
              className={`w-full md:w-auto px-4 py-2 border-b-2 transition-colors ${
                category === activeCategory
                  ? "border-[#23b6cb] text-[#23b6cb]"
                  : "border-transparent hover:text-[#23b6cb]"
              } font-semibold text-sm md:text-base`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col max-w-3xl mx-auto gap-4">
          {FAQ_DATA[activeCategory].map((faq, index) => (
            <div key={index} className="w-full">
              <div
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-sm md:text-base">
                  {faq.question}
                </h3>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                  className="text-[#23b6cb]"
                />
              </div>
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow text-sm md:text-base">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
