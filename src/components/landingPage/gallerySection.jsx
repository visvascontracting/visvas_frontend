import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const GallerySection = () => {
  const images = [
    '1fl-img1.png',
    '2fl-img1.png',
    '2fl-img2.png',
    '2fl-img3.png',
    '2fl-img4.png',
    '2fl-img5.png',
    '2fl-img6.png',
    '3fl-img1.png',
    '3fl-img2.png',
    '3fl-img3.png',
    '3fl-img4.png',
    '3fl-img5.png',
    '3fl-img6.png',
    '3fl-img7.png',
    '3fl-img8.png',
    '3fl-img9.png',
    '3fl-img10.png',
    '3fl-img11.png',
    '3fl-img12.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Auto-scroll every 3 seconds
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="py-12 px-6" style={{ backgroundColor: 'var(--primary-page-bg)' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-text)' }}>
          Our project gallery
        </h2>
        <p className="text-lg mb-8" style={{ color: 'var(--secondary-text)' }}>
          Discover homes built with care, quality, and attention to detail.
        </p>

        <div className="flex items-center justify-center">
          <div
          className="relative overflow-hidden rounded-lg shadow-lg w-full md:w-[90%] lg:w-[80%]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={`/projectGallery/${image}`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 "
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute -left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundColor: 'var(--primary-button-bg)' }}
          >
            <svg className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute -right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundColor: 'var(--primary-button-bg)' }}
          >
            <svg className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        </div>

        {/* Explore More Button */}
        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300 hover:opacity-90"
            style={{ backgroundColor: 'var(--primary-button-bg)' }}
          >
            Explore more projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
