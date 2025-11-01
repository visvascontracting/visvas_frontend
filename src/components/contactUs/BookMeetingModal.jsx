import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BookMeetingModal = ({ isOpen, onClose, onBookingSuccess }) => {
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
        // Success - call the success callback and close modal
        onBookingSuccess(data.message);
        onClose();

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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 md:p-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* WhatsApp Button for Modal */}
        <motion.a
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          href={`https://wa.me/9502956789?text=${encodeURIComponent('Hii! can I get more information about this?')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-6 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 z-[60] hover:cursor-pointer hover:scale-110"
          aria-label="Contact via WhatsApp"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </motion.a>
        <motion.div
          className="book-meeting-modal bg-white rounded-lg shadow-xl w-[90%] h-[90%] md:w-[60%] md:h-auto md:max-w-4xl mx-4 p-6 relative overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold hover:cursor-pointer"
          >
            &times;
          </button>

          {/* Form */}
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
              <label className="block text-sm font-medium" style={{ color: 'rgb(3 7 18 / 1)' }}>
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
      </motion.div>
    </AnimatePresence>
  );
};

export default BookMeetingModal;
