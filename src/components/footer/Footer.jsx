import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Footer component with responsive layout and animations
const Footer = ({ onBookMeetingClick, isModalOpen, onBookingSuccess }) => {
  const [showButtons, setShowButtons] = useState(false);

  // Form state for the contact form
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    constructionTime: '',
    ownPlot: '',
    agreeToTerms: false,
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    // Only allow numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');
    setFormData({
      ...formData,
      mobileNumber: numericValue,
    });
    // Clear error when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.mobileNumber || !formData.constructionTime || !formData.ownPlot || !formData.agreeToTerms) {
      setSubmitError('Please fill in all required fields and agree to terms.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/booking/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          constructionTimeline: formData.constructionTime,
          ownPlotOfLand: formData.ownPlot,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - call the success callback and reset form
        onBookingSuccess(data.message);

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          mobileNumber: '',
          constructionTime: '',
          ownPlot: '',
          agreeToTerms: false,
        });
      } else {
        // Error from backend
        setSubmitError(data.error || 'Failed to book meeting. Please try again.');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  // Handle scroll to show/hide floating buttons
  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants for fade-in effects
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hover: {
      // scale: 1.05,
      color: 'var(--tertiary-text)', // New color for hover
      // transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.9 },
  };

  // Footer sections data
  const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Book a Meeting', action: 'modal' },
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQs', href: '#faq' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Privacy policy', href: '#privacy' },
  ];

  return (
    <>
      {/* Contact Form Section */}
      <div
        className="relative py-16 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(/contact-bg-img.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay with light orange color and opacity */}
        <div className="absolute inset-0 bg-orange-500 opacity-30"></div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          {/* Heading Section */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary-text)' }}>
              Your Wish. We Fulfill.
            </h2>
            <p className="text-lg font-bold" style={{ color: 'var(--primary-text)' }}>
              Ready to build your dream home? Schedule a free consultation to start your journey today.
            </p>
          </div>

          <motion.div
            className="bg-white rounded-lg shadow-xl p-6 md:p-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Responsive Grid for Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" style={{ color: 'var(--tertiary-text)' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <label className="text-sm font-medium" style={{ color: 'var(--tertiary-text)' }}>
                      Full Name *
                    </label>
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('fullName')}
                    onBlur={handleBlur}
                    placeholder="Enter full name"
                    className="w-full px-3 py-3 border-2 rounded-lg transition-colors focus:outline-none"
                    style={{
                      color: 'rgb(3 7 18 / 1)',
                      '--placeholder-color': 'rgb(107 114 128 / 1)',
                      borderColor: focusedField === 'fullName' ? 'var(--primary-button-bg)' : '#d1d5db',
                    }}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" style={{ color: 'var(--tertiary-text)' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <label className="text-sm font-medium" style={{ color: 'var(--tertiary-text)' }}>
                      Email Address *
                    </label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    placeholder="Enter email address"
                    className="w-full px-3 py-3 border-2 rounded-lg transition-colors focus:outline-none"
                    style={{
                      color: 'rgb(3 7 18 / 1)',
                      borderColor: focusedField === 'email' ? 'var(--primary-button-bg)' : '#d1d5db',
                    }}
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" style={{ color: 'var(--tertiary-text)' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <label className="text-sm font-medium" style={{ color: 'var(--tertiary-text)' }}>
                      Mobile Number *
                    </label>
                  </div>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleMobileNumberChange}
                    onFocus={() => handleFocus('mobileNumber')}
                    onBlur={handleBlur}
                    placeholder="Enter mobile number"
                    className="w-full px-3 py-3 border-2 rounded-lg transition-colors focus:outline-none"
                    style={{
                      color: 'rgb(3 7 18 / 1)',
                      borderColor: focusedField === 'mobileNumber' ? 'var(--primary-button-bg)' : '#d1d5db',
                    }}
                    required
                  />
                </div>

                {/* Construction Time Dropdown */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" style={{ color: 'var(--tertiary-text)' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    <label className="text-sm font-medium" style={{ color: 'var(--tertiary-text)' }}>
                      Construction Timeline *
                    </label>
                  </div>
                  <div className="relative">
                    <select
                      name="constructionTime"
                      value={formData.constructionTime}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('constructionTime')}
                      onBlur={handleBlur}
                      className="w-full px-3 py-3 border-2 rounded-lg transition-colors focus:outline-none appearance-none"
                      style={{
                        color: 'rgb(3 7 18 / 1)',
                        borderColor: focusedField === 'constructionTime' ? 'var(--primary-button-bg)' : '#d1d5db',
                      }}
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="0-3 months">0-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="more than 6 months">more than 6 months</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Own Plot Radio Buttons */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-left" style={{ color: 'rgb(3 7 18 / 1)' }}>
                  Do you own a plot of land?
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center cursor-pointer group" style={{ color: 'rgb(3 7 18 / 1)' }}>
                    <div className="relative">
                      <input
                        type="radio"
                        name="ownPlot"
                        value="Yes"
                        checked={formData.ownPlot === 'Yes'}
                        onChange={handleInputChange}
                        className="sr-only"
                        required
                      />
                      <div className="w-5 h-5 rounded-full border-2 transition-all duration-200" style={{
                        borderColor: formData.ownPlot === 'Yes' ? 'var(--primary-button-bg)' : '#d1d5db',
                        backgroundColor: formData.ownPlot === 'Yes' ? 'var(--primary-button-bg)' : 'transparent'
                      }}>
                        <div className={`w-2 h-2 rounded-full bg-white transition-all duration-200 transform ${
                          formData.ownPlot === 'Yes' ? 'scale-100 translate-x-[3px] translate-y-[3px]' : 'scale-0'
                        }`}></div>
                      </div>
                    </div>
                    <span className="ml-2 transition-colors duration-200" style={{ color: 'var(--primary-button-bg)' }}>Yes</span>
                  </label>
                  <label className="flex items-center cursor-pointer group" style={{ color: 'rgb(3 7 18 / 1)' }}>
                    <div className="relative">
                      <input
                        type="radio"
                        name="ownPlot"
                        value="No"
                        checked={formData.ownPlot === 'No'}
                        onChange={handleInputChange}
                        className="sr-only"
                        required
                      />
                      <div className="w-5 h-5 rounded-full border-2 transition-all duration-200" style={{
                        borderColor: formData.ownPlot === 'No' ? 'var(--primary-button-bg)' : '#d1d5db',
                        backgroundColor: formData.ownPlot === 'No' ? 'var(--primary-button-bg)' : 'transparent'
                      }}>
                        <div className={`w-2 h-2 rounded-full bg-white transition-all duration-200 transform ${
                          formData.ownPlot === 'No' ? 'scale-100 translate-x-[3px] translate-y-[3px]' : 'scale-0'
                        }`}></div>
                      </div>
                    </div>
                    <span className="ml-2 transition-colors duration-200" style={{ color: 'var(--primary-button-bg)' }}>No</span>
                  </label>
                </div>
              </div>

              {/* Agree to Terms Checkbox */}
              <div className="flex items-start">
                <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="sr-only"
                      required
                    />
                    <div className="w-5 h-5 border-2 rounded transition-all duration-200" style={{
                      borderColor: formData.agreeToTerms ? 'var(--primary-button-bg)' : '#d1d5db',
                      backgroundColor: formData.agreeToTerms ? 'var(--primary-button-bg)' : 'transparent'
                    }}>
                      <svg
                        className={`w-3 h-3 text-white transition-all duration-200 transform ${
                          formData.agreeToTerms ? 'scale-100 translate-x-[2px] translate-y-[2px]' : 'scale-0'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-2 text-sm transition-colors duration-200" style={{ color: 'rgb(3 7 18 / 1)' }}>
                    I agree to{' '}
                    <a href="#privacy" className="hover:underline" style={{ color: 'var(--tertiary-text)' }}>
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#terms" className="hover:underline" style={{ color: 'var(--tertiary-text)' }}>
                      Terms & Conditions
                    </a>
                  </span>
                </label>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {submitError}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-full font-medium book-meeting-btn ${
                  isSubmitting ? '' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Booking Meeting...
                  </div>
                ) : (
                  'Book a meeting'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <motion.footer
        className="bg-[rgb(3,7,18)] text-white py-12 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 m-4 justify-items-start md:grid-cols-2 md:gap-16 md:ml-16 lg:grid-cols-4 gap-8 lg:justify-items-center">
          {/* Company Info Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Logo and Description */}
            <div className="flex items-center space-x-2">
              <img
                src="/footer_logo.png"
                alt="Visvas Construction Logo"
                className="h-14 w-auto  transition-all duration-300"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Browse ideas, explore options and book a meeting with our expert consultants to finalise your design.
            </p>
            {/* Contact Info */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--tertiary-text)' }}>Get in touch</h3>
              <a
                href="mailto:visvascontracting@gmail.com"
                className="hover:text-orange-400 transition-colors"
                style={{ color: 'var(--tertiary-text)' }}
              >
                visvascontracting@gmail.com
              </a>
              <br />
              <a
                href="tel:+919502956789"
                className="hover:text-orange-400 transition-colors"
                style={{ color: 'var(--tertiary-text)' }}
              >
                +919502956789
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <motion.a
                href="#"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300 transition-colors social-icon"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300 transition-colors social-icon"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300 transition-colors social-icon"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.action === 'modal' ? (
                    <motion.button
                      className="text-gray-300 hover:text-[var(--tertiary-text)] transition-colors hover:cursor-pointer"
                      variants={linkVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={onBookMeetingClick}
                    >
                      {link.name}
                    </motion.button>
                  ) : (
                    <motion.div
                      // variants={linkVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Link
                        to={link.path}
                        className="text-gray-300 transition-colors hover:text-[var(--tertiary-text)]"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 transition-colors"
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 transition-colors"
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Visvas Construction. All rights reserved.
          </p>
        </motion.div>
        </div>

        {/* Floating Buttons */}
        <AnimatePresence>
          {showButtons && !isModalOpen && (
            <>
              {/* Back to Top Button */}
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="fixed bottom-6 left-6 bg-[var(--tertiary-text)] hover:bg-[var(--tertiary-text)]/80 text-white p-2 md:p-3 lg:p-4 rounded-full shadow-lg transition-colors z-50 hover:cursor-pointer"
                aria-label="Back to Top"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>

              {/* WhatsApp Button */}
              <motion.a
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                href={`https://wa.me/9502956789?text=${encodeURIComponent('Hii! can I get more information about this?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-20 right-6 bg-green-500 hover:bg-green-600 text-white p-2 md:p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 z-50 hover:cursor-pointer hover:scale-110"
                aria-label="Contact via WhatsApp"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </motion.a>

              {/* Custom Button */}
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="fixed bottom-6 right-6 bg-[rgb(245,231,202)] hover:bg-[rgb(240,225,190)] text-gray-800 px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-full shadow-lg border-2 border-[var(--tertiary-text)] font-medium transition-all z-50 flex items-center space-x-2 hover:cursor-pointer"
                aria-label="Book a Meeting"
                onClick={onBookMeetingClick}
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6-6 1.42 1.42L11.5 10H16v8H4z" />
                  <path d="M20 6l-2.5 2.5L19 10l-1 1-3-3-3 3v4h-2v-6l3-3 3 3 1-1z" />
                </svg>
                <span className="text-sm md:text-md lg:text-lg">Book a Meeting</span>
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </motion.footer>
    </>
  );
};

export default Footer;
