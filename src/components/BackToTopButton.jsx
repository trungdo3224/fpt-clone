import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-4 sm:right-6 md:right-8 z-40"
          style={{ bottom: 'calc(var(--safe-bottom, 16px))' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="bg-white border-2 border-fpt-blue text-fpt-blue rounded-full shadow-lg hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 transition-colors duration-200 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            style={{
              width: 'calc(var(--button-size, 40px) * 0.9)',
              height: 'calc(var(--button-size, 40px) * 0.9)'
            }}
          >
            <FaArrowUp className="text-base sm:text-lg md:text-xl" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;