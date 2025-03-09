import React from 'react';
import { motion } from 'framer-motion';

const FloatingPhone = () => {
  return (
    <motion.div 
      className="fixed right-4 sm:right-6 md:right-8 z-50"
      style={{ 
        bottom: 'calc(var(--safe-bottom, 32px) + calc(var(--button-size, 40px) * 1) + var(--button-gap, 16px) * 2)' 
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-full right-0 mb-2 bg-blue-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-lg whitespace-nowrap text-xs sm:text-sm text-white"
        >
          096.930.2332
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-blue-700 transform rotate-45"></div>
        </motion.div>
        
        {/* Phone button */}
        <motion.a
          href="tel:0969302332"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-fpt-blue text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
          style={{
            width: 'var(--button-size, 40px)',
            height: 'var(--button-size, 40px)'
          }}
        >
          <img 
            src="images/icon-call-new.png" 
            alt="Call us" 
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
          />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default FloatingPhone;