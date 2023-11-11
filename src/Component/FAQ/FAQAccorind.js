import React, { useState } from 'react';
import "./FAQ.css"
const FaqAccordion = ({ faqItems }) => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (itemId) => {
    setActiveItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse" className='main_faq'>
     <div className='all_faq'>
     {faqItems.map((item, index) => (
        <div key={index} className="accordion-item">
          <h2
            id={`accordion-collapse-heading-${index}`}
          >
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border ${
                activeItem === index ? 'border-b-0' : 'border-b'
              } border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
              data-accordion-target={`#accordion-collapse-body-${index}`}
              aria-expanded={activeItem === index ? 'true' : 'false'}
              aria-controls={`accordion-collapse-body-${index}`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 rotate-180 shrink-0 ${
                  activeItem === index ? 'rotate-0' : ''
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${
              activeItem === index ? 'block' : 'hidden'
            } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div>
              <p className="mb-2 text-gray-500 dark:text-gray-400">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default FaqAccordion;
