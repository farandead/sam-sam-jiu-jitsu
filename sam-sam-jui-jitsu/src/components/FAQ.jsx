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
      <div className="container mx-auto text-center mb-30">
        <h2 className="text-5xl font-bold text-center mb-6  text-[#23b6cb]">Frequently Asked Questions</h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Got questions? We have answers! Find everything you need to know about our classes, training, and more.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          {Object.keys(FAQ_DATA).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 border-b-2 transition-colors ${
                category === activeCategory ? "border-[#23b6cb] text-[#23b6cb]" : "border-transparent hover:text-[#23b6cb]"
              } font-semibold`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {FAQ_DATA[activeCategory].map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                  className="text-[#23b6cb]"
                />
              </div>
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow">
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
