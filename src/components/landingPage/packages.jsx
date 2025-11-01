import React, { useState } from 'react';

const Packages = () => {
  // State for tracking open sections for Standard and Custom packages separately
  const [openSectionStandard, setOpenSectionStandard] = useState(null);
  const [openSectionCustom, setOpenSectionCustom] = useState(null);

  // Data for packages
  const packagesData = {
    standard: {
      name: 'Standard',
      icon: '🏠',
      features: [
        {
          title: 'Design',
          items: [
            'Digital plot and contour survey',
            '2D floor plan & 3D Elevation',
            'GFC - Good for construction drawings (Section Elevation, architectural drawings, cross section, details etc.)',
            'RCC drawings',
            'Electrical & Plumbing drawings'
          ]
        },
        {
          title: 'Structure',
          items: [
            'Foundation design and detailing',
            'Column and beam specifications',
            'Structural integrity checks'
          ]
        },
        {
          title: 'Flooring and dado',
          items: [
            'Tile selection and layout',
            'Dado height and material recommendations'
          ]
        },
        {
          title: 'Door and windows',
          items: [
            'Standard door and window designs',
            'Hardware specifications'
          ]
        },
        {
          title: 'Plumbing accessories',
          items: [
            'Basic plumbing fixtures',
            'Pipe layout and fittings'
          ]
        },
        {
          title: 'Painting',
          items: [
            'Interior and exterior paint options',
            'Surface preparation guidelines'
          ]
        },
        {
          title: 'Electrical',
          items: [
            'Basic electrical layout',
            'Switch and socket placements'
          ]
        },
        {
          title: 'Plumbing',
          items: [
            'Water supply system design',
            'Drainage and waste management'
          ]
        },
        {
          title: 'Railing and handrails',
          items: [
            'Standard railing designs',
            'Safety compliance features'
          ]
        }
      ]
    },
    custom: {
      name: 'Custom',
      icon: '✨',
      features: [
        {
          title: 'Design',
          items: [
            'Digital plot and contour survey',
            '2D floor plan & 3D Elevation',
            'GFC - Good for construction drawings (Section Elevation, architectural drawings, cross section, details etc.)',
            'RCC drawings',
            'Electrical & Plumbing drawings'
          ]
        },
        {
          title: 'Structure',
          items: [
            'Custom foundation and structural elements',
            'Advanced material recommendations',
            'Detailed structural analysis'
          ]
        },
        {
          title: 'Flooring and dado',
          items: [
            'Premium tile and flooring options',
            'Custom dado designs and materials'
          ]
        },
        {
          title: 'Door and windows',
          items: [
            'Custom door and window specifications',
            'High-quality hardware and finishes'
          ]
        },
        {
          title: 'Plumbing accessories',
          items: [
            'Premium plumbing fixtures and accessories',
            'Advanced pipe and fitting systems'
          ]
        },
        {
          title: 'Painting',
          items: [
            'Custom color schemes and finishes',
            'Specialized surface treatments'
          ]
        },
        {
          title: 'Electrical',
          items: [
            'Comprehensive electrical planning',
            'Smart home integration options'
          ]
        },
        {
          title: 'Plumbing',
          items: [
            'Advanced water and drainage systems',
            'Eco-friendly plumbing solutions'
          ]
        },
        {
          title: 'Railing and handrails',
          items: [
            'Custom railing and handrail designs',
            'Enhanced safety and aesthetic features'
          ]
        }
      ]
    }
  };

  // Toggle function for sections
  const toggleSection = (packageType, index) => {
    if (packageType === 'standard') {
      setOpenSectionStandard(prev => prev === index ? null : index);
    } else {
      setOpenSectionCustom(prev => prev === index ? null : index);
    }
  };

  // Render features for a package
  const renderFeatures = (packageType, features, openSection) => {
    return features.map((feature, index) => (
      <div key={index} className="mb-4">
        <div
          className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg cursor-pointer hover:from-orange-100 hover:to-orange-200 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
          onClick={() => toggleSection(packageType, index)}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-800">{feature.title}</span>
            <span className="text-2xl font-bold transition-transform duration-300" style={{ color: 'var(--tertiary-text)' }}>
              {openSection === index ? '-' : '+'}
            </span>
          </div>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <ul className="list-disc pl-5 text-gray-700">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-1 transition-opacity duration-300">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="py-12 px-6" style={{ backgroundColor: 'var(--primary-page-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: 'var(--primary-text)' }}>Packages</h2>
        <p className="text-lg text-center mb-8" style={{ color: 'var(--secondary-text)' }}>
          Discover the package that fits your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Standard Package */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2" style={{ color: 'var(--primary-text)' }}>
              <span className="text-3xl">{packagesData.standard.icon}</span>
              {packagesData.standard.name}
            </h3>
            {renderFeatures('standard', packagesData.standard.features, openSectionStandard)}
          </div>
          {/* Custom Package */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2" style={{ color: 'var(--primary-text)' }}>
              <span className="text-3xl">{packagesData.custom.icon}</span>
              {packagesData.custom.name}
            </h3>
            {renderFeatures('custom', packagesData.custom.features, openSectionCustom)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
