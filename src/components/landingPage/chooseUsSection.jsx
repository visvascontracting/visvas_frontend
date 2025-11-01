import React from 'react';

const ChooseUsSection = () => {
  const features = [
    {
      icon: <img src="/landingpagesimg/limg1.png" alt="On-Time Delivery" className="w-12 h-12" />,
      title: '100% ON-TIME DELIVERY',
      bgColor: 'bg-[#FCFCF7]',
    },
    {
      icon: <img src="/landingpagesimg/limg2.png" alt="Transparency" className="w-12 h-12" />,
      title: '100% TRANSPARENCY',
      bgColor: 'bg-[#FCFCF7]',
    },
    {
      icon: <img src="/landingpagesimg/limg3.png" alt="Premium Materials" className="w-12 h-12" />,
      title: 'PREMIUM BUILDING MATERIALS',
      bgColor: 'bg-[#FCFCF7]',
    },
    {
      icon: <img src="/landingpagesimg/limg4.png" alt="Project Manager" className="w-12 h-12" />,
      title: 'DEDICATED PROJECT MANAGER',
      bgColor: 'bg-[#FCFCF7]',
    },
    {
      icon: <img src="/landingpagesimg/limg5.png" alt="Zero Cost Overrun" className="w-12 h-12" />,
      title: 'ZERO COST OVERRUN',
      bgColor: 'bg-[#FCFCF7]',
    },
    {
      icon: <img src="/landingpagesimg/limg6.png" alt="Money Safety" className="w-12 h-12" />,
      title: '100% Money Safety',
      bgColor: 'bg-[#FCFCF7]',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Desktop: Two columns (image left, content right) */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Image */}
          <div className="w-1/2 pr-8">
            <img
              src="/landingpageImg_2.png"
              alt="Why Choose Us"
              className="w-full h-110 md:h-100 lg:h-110 rounded-lg shadow-lg"
            />
          </div>
          {/* Right: Content */}
          <div className="w-1/2 pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us for Home Construction in Hyderabad?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Best Home Construction in Hyderabad
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow-md ${feature.bgColor} flex flex-col items-center justify-center text-center`}
                >
                  <div className="w-4/5 h-4/5 flex items-center justify-center">
                    {React.cloneElement(feature.icon, { className: 'w-full h-full object-contain' })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Single column (image first, then content) */}
        <div className="md:hidden flex flex-col items-center">
          {/* Image */}
          <div className="w-full mb-8">
            <img
              src="/landingpageImg_2.png"
              alt="Why Choose Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Content */}
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Us for Home Construction in Hyderabad?
            </h2>
            <p className="text-md text-gray-600 mb-4">
              Best Home Construction in Hyderabad
            </p>
            <div className="grid grid-cols-1 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow-md ${feature.bgColor} flex flex-col items-center justify-center text-center`}
                >
                  <div className="w-4/5 h-4/5 flex items-center justify-center">
                    {React.cloneElement(feature.icon, { className: 'w-full h-full object-contain' })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
