import React from 'react';
import FaqQuestions from './faqQuestions';

const FAQs = () => {
  return (
    <div className="FAQs">
      <main className="pt-8 lg:pt-10">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 text-center">
              Frequently asked questions
            </h1>
            <p className="text-lg text-gray-600 text-center mt-4">
              Welcome to our FAQ section! Here, we address the most common questions about our construction services, processes, and how we can help bring your vision to life. Whether you're curious about project timelines, materials, or getting started, we've got you covered with clear and concise answers.
            </p>
            <div className="mt-8 flex justify-center">
              <img
                src="/faq_img.png"
                alt="FAQ Illustration"
                className="w-auto lg:w-200 h-100 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      {/* FAQ Questions Component */
      <FaqQuestions />}
      </main>
    </div>
  );
};

export default FAQs;
