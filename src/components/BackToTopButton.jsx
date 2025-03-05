import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

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
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="bg-white border-2 border-fpt-blue text-fpt-blue rounded-full p-4 shadow-lg hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 transition-colors duration-200"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;