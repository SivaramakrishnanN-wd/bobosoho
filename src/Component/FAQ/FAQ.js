import React from 'react';
import FaqAccordion from './FAQAccorind.js';

const App = () => {
  const faqItems = [
    {
      question: 'What hosting plans do you offer?',
      answer: 'We offer various hosting plans to meet different needs. Check our Hosting Plans page for more details.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team through the Contact Us page. We are available 24/7 to assist you.',
    },
    {
      question: 'Do you provide domain registration services?',
      answer: 'Yes, we offer domain registration services as part of our hosting packages. You can register a new domain or transfer an existing one.',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div>
      {/* Your other components or content here */}
      <FaqAccordion faqItems={faqItems} />
      {/* Your other components or content here */}
    </div>
  );
};

export default App;
