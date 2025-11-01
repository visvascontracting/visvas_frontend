import React from 'react';
import FaqSection from '../landingPage/faqSection.jsx';

const ContactUs = ({ onBookMeetingClick }) => {

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ContactUs">
      <main className="pt-8 lg:pt-10">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 py-16">
            {/* Responsive Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
                <img
                  src="/contactus_img.png"
                  alt="Contact Us"
                  className="w-full  lg:max-w-lg h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  🧱 Contact Us
                </h1>
                <h2 className="text-2xl lg:text-4xl font-semibold text-gray-700 mb-6">
                  Get in Touch With Us
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  At Visvas Construction Contracting Company, we value every connection.
                  Whether you have a question, need expert guidance, or are ready to start your next construction project — we’re here to help.
                  <br /><br />
                  Our team of professionals is committed to providing prompt, reliable, and transparent assistance for all your construction and contracting needs.
                  Reach out to us today, and let’s build something extraordinary together — the Visvas way.
                </p>

                {/* Buttons */}
                <div className="space-y-4 mb-8">
                  <button
                    onClick={onBookMeetingClick}
                    className="w-full lg:w-auto book-meeting-btn py-3 px-6 rounded-lg font-medium shadow-lg hover:cursor-pointer mr-4"
                  >
                    Book a meeting →
                  </button>
                  <button
                    onClick={scrollToFAQ}
                    className="w-full lg:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:cursor-pointer"
                  >
                    Read frequently asked questions →
                  </button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="text-center lg:text-left">
                    <h3 className="text-lg font-semibold text-gray-800">Email us</h3>
                    <a
                      href="mailto:visvascontracting@gmail.com"
                      className="hover:none transition-colors hover:cursor-pointer"
                      style={{ color: 'var(--tertiary-text)' }}
                    >
                      visvascontracting@gmail.com
                    </a>
                  </div>
                  <div className="hidden sm:block w-px bg-gray-300 h-12 self-center"></div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-lg font-semibold text-gray-800">Call us</h3>
                    <a
                      href="tel:+919502956789"
                      className="hover:none transition-colors hover:cursor-pointer"
                      style={{ color: 'var(--tertiary-text)' }}
                    >
                      +9195029 56789 Mon-Sat, 10 AM to 6 PM
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq-section" className="mt-10">
              <FaqSection />  
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
