import React from 'react';
import HowItWorks from '../landingPage/howItWorks';

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <main className="pt-8 lg:pt-20">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100">
          {/* About Us Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Content for lg screens: left side */}
              <div className="lg:w-1/2 text-center lg:text-left hidden md:hidden lg:block">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  🏗️ About Us – Visvas Construction Contracting Company
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Visvas Construction Contracting Company is a trusted name in the construction and infrastructure sector, dedicated to delivering excellence with integrity and innovation. We believe that building a space—whether a home, office, or landmark—should be a seamless and transparent journey.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  At Visvas, we put our clients at the center of every project, ensuring they have complete control through access to skilled professionals, premium-quality materials, and a safe, reliable, and transparent construction process — the Visvas way.
                </p>
              </div>
              {/* Image for lg screens: right side */}
              <div className="lg:w-1/2 hidden md:hidden lg:block">
                <img
                  src="/aboutus_img.png"
                  alt="Visvas Construction"
                  className="w-full h-110 rounded-lg shadow-lg"
                />
              </div>
              {/* For md and sm: single column, image first */}
              <div className="md:w-full lg:hidden">
                <img
                  src="/aboutus_img.png"
                  alt="Visvas Construction"
                  className="w-full h-110 rounded-lg shadow-lg mb-6"
                />
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    🏗️ About Us – Visvas Construction Contracting Company
                  </h2>
                  <p className="text-md text-gray-600 leading-relaxed">
                    Visvas Construction Contracting Company is a trusted name in the construction and infrastructure sector, dedicated to delivering excellence with integrity and innovation. We believe that building a space—whether a home, office, or landmark—should be a seamless and transparent journey.
                  </p>
                  <p className="text-md text-gray-600 leading-relaxed mt-4">
                    At Visvas, we put our clients at the center of every project, ensuring they have complete control through access to skilled professionals, premium-quality materials, and a safe, reliable, and transparent construction process — the Visvas way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-1 lg:gap-2">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-5xl mb-4">🏠</div>
                  <div className="text-3xl font-bold text-gray-800">180+</div>
                  <div className="text-lg text-gray-600">Homes delivered</div>
                </div>
                {/* Vertical line between Stat 1 and Stat 2 */}
                <div className="hidden md:block w-px bg-gray-300 h-24 self-center"></div>
                {/* Stat 2 */}
                <div className="text-center">
                  <div className="text-5xl mb-4">🏗️</div>
                  <div className="text-3xl font-bold text-gray-800">25+</div>
                  <div className="text-lg text-gray-600">Homes under construction</div>
                </div>
                {/* Vertical line between Stat 2 and Stat 3 */}
                <div className="hidden md:block w-px bg-gray-300 h-24 self-center"></div>
                {/* Stat 3 */}
                <div className="text-center">
                  <div className="text-5xl mb-4">🎨</div>
                  <div className="text-3xl font-bold text-gray-800">400+</div>
                  <div className="text-lg text-gray-600">Unique designs delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
          <div className="container mx-auto px-4">
            <HowItWorks />
          </div>

        {/* Contact Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
            <div className="space-y-4">
              <a
                href="mailto:visvascontracting@gmail.com"
                className="block text-lg hover:underline transition-colors"
                style={{ color: 'var(--tertiary-text)' }}
              >
                visvascontracting@gmail.com
              </a>
              <a
                href="tel:+919502956789"
                className="block text-lg hover:underline transition-colors"
                style={{ color: 'var(--tertiary-text)' }}
              >
                +919502956789
              </a>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default AboutUs;
