import React from 'react';

const IntroSection = ({ onBookMeetingClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-10 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Your Wish.
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              We Fulfill.
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8">
              Build your dream home hassle-free with Visvas Construction Contracting Company.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mb-8">
              <div className="text-center relative flex-1">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">+81</div>
                <div className="text-sm text-gray-600">NPS Score</div>
                <div className="hidden sm:block absolute top-0 right-0 h-full w-px bg-gray-300 transform translate-x-3"></div>
              </div>
              <div className="text-center relative flex-1">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">180+</div>
                <div className="text-sm text-gray-600">Homes Delivered</div>
                <div className="hidden sm:block absolute top-0 right-0 h-full w-px bg-gray-300 transform translate-x-3"></div>
              </div>
              <div className="text-center flex-1">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Homes Under Construction</div>
              </div>
            </div>

            {/* Book a Meeting Button */}
            <button
              onClick={onBookMeetingClick}
              className="book-meeting-btn px-8 py-3 rounded-full font-medium shadow-lg transform hover:-translate-y-0.5 hover:cursor-pointer"
            >
              Book a meeting
            </button>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <img
              src="/landingpageImg_1.png"
              alt="Modern house design"
              className="w-full h-110 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
