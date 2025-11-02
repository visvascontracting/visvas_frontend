import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { number: 1, title: "Raise a Request", description: "Submit your project details and requirements to get started.", image: "/howItWorks/img1.png" },
  { number: 2, title: "Meet Our Expert", description: "Connect with our specialists to discuss your vision.", image: "/howItWorks/img2.png" },
  { number: 3, title: "Book with Us", description: "Schedule a consultation and confirm your project timeline.", image: "/howItWorks/img3.png" },
  { number: 4, title: "Receive Designs", description: "Get customized designs tailored to your needs.", image: "/howItWorks/img4.png" },
  { number: 5, title: "Track & Transact", description: "Monitor progress and handle payments seamlessly.", image: "/howItWorks/img5.png" },
  { number: 6, title: "Settle In", description: "Complete your project and enjoy the results.", image: "/howItWorks/img6.png" },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const stepStartTime = useRef(Date.now());

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        stepStartTime.current = Date.now();
        return (prev + 1) % steps.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    stepStartTime.current = Date.now();
  }, [activeStep]);

  const handleStepClick = (i) => setActiveStep(i);
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const currentStepProgress = Math.min(
    ((Date.now() - stepStartTime.current) / 3000) * 100,
    100
  );

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        {/* Progress Bar */}
        <div
          className="relative mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-base sm:text-lg font-semibold cursor-pointer transition-all duration-300 ${
                    index <= activeStep
                      ? "text-white shadow-lg"
                      : "bg-white border-2 border-gray-300 text-gray-500"
                  }`}
                  style={{
                    backgroundColor:
                      index <= activeStep ? "var(--primary-button-bg)" : "white",
                  }}
                  onClick={() => handleStepClick(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {step.number}
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gray-300 relative mx-2 sm:mx-4 overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: "var(--primary-button-bg)" }}
                      initial={{ width: 0 }}
                      animate={{
                        width:
                          index < activeStep
                            ? "100%"
                            : index === activeStep
                            ? `${currentStepProgress}%`
                            : "0%",
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center text-center space-y-6 lg:flex-row lg:items-start lg:text-left lg:space-y-0 lg:space-x-8">
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={steps[activeStep].title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl">
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Transition */}
          <div className="w-full max-w-md lg:max-w-lg relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={steps[activeStep].image}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
