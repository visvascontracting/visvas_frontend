import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type = 'success', isVisible, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  const getToastStyles = () => {
    switch (type) {
      case 'error':
        return {
          bg: 'bg-red-900',
          border: 'border-red-700',
          icon: 'text-red-400',
          title: 'text-red-200',
          message: 'text-red-300',
          button: 'text-red-400 hover:text-red-300',
          buttonBg: 'bg-red-900',
          buttonRing: 'focus:ring-red-500',
          buttonRingOffset: 'focus:ring-offset-red-900'
        };
      case 'warning':
        return {
          bg: 'bg-yellow-900',
          border: 'border-yellow-700',
          icon: 'text-yellow-400',
          title: 'text-yellow-200',
          message: 'text-yellow-300',
          button: 'text-yellow-400 hover:text-yellow-300',
          buttonBg: 'bg-yellow-900',
          buttonRing: 'focus:ring-yellow-500',
          buttonRingOffset: 'focus:ring-offset-yellow-900'
        };
      default: // success
        return {
          bg: 'bg-green-900',
          border: 'border-green-700',
          icon: 'text-green-400',
          title: 'text-green-200',
          message: 'text-green-300',
          button: 'text-green-400 hover:text-green-300',
          buttonBg: 'bg-green-900',
          buttonRing: 'focus:ring-green-500',
          buttonRingOffset: 'focus:ring-offset-green-900'
        };
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'error':
        return (
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        );
      case 'warning':
        return (
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        );
      default: // success
        return (
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        );
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'error':
        return 'Error!';
      case 'warning':
        return 'Warning!';
      default:
        return 'Success!';
    }
  };

  const styles = getToastStyles();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 300, y: -50 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.3
          }}
          className="fixed top-4 h-auto w-[90] md:top-6 md:right-6 lg:top-6 lg:right-6 z-[100] max-w-sm w-full"
        >
          <div className={`${styles.bg} ${styles.border} rounded-lg p-4 shadow-lg`}>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className={`w-6 h-6 ${styles.icon}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {getIcon()}
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className={`text-sm font-medium ${styles.title}`}>
                  {getTitle()}
                </p>
                <p className={`mt-1 text-sm ${styles.message}`}>
                  {message}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className={`${styles.buttonBg} rounded-md inline-flex ${styles.button} ${styles.buttonRing} ${styles.buttonRingOffset} focus:outline-none focus:ring-2 focus:ring-offset-2`}
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
