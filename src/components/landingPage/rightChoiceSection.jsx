import React from 'react';

const RightChoiceSection = () => {
  const stats = [
    {
      number: '125+',
      label: 'Total Projects',
    },
    {
      number: '310+',
      label: 'Floor Plans',
    },
    {
      number: '100+',
      label: 'Construction Workers',
    },
    {
      number: '15K+',
      label: 'sqft Total Build-up area',
    },
  ];

  return (
    <section className="py-16 bg-[#FCFCF7]">
      <div className="container mx-auto px-4">
        {/* Desktop: Two columns (content left, image right) */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Content */}
          <div className="w-1/2 pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              You Made the Right Choice
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Because we don't just build homes, we build trust. Every brick we lay is backed by technology, transparency, and a promise to put your family first.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Image */}
          <div className="w-1/2 pl-8">
            <img
              src="/landingpageImg_3.png"
              alt="Right Choice"
              className="w-full h-100 md:h-120 lg:h-110 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mobile: Single column (image first, then content) */}
        <div className="md:hidden flex flex-col items-center">
          {/* Image */}
          <div className="w-full mb-8">
            <img
              src="/landingpageImg_3.png"
              alt="Right Choice"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Content */}
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              You Made the Right Choice
            </h2>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Because we don't just build homes, we build trust. Every brick we lay is backed by technology, transparency, and a promise to put your family first.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightChoiceSection;
