import React from 'react';
import { motion } from 'framer-motion';

const FloatingChat = () => {
  return (
    <motion.div
      className="fixed right-4 sm:right-6 md:right-8 z-50"
      style={{ 
        bottom: 'calc(var(--safe-bottom, 2px) + var(--button-size, 40px) + var(--button-gap, 16px))' 
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <motion.a
        href="https://zalo.me/096.930.2332"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on Zalo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-fpt-blue text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        style={{
          width: 'var(--button-size, 40px)',
          height: 'var(--button-size, 40px)'
        }}
      >
        <img 
          src="images/zalo.svg" 
          alt="Zalo"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
        />
      </motion.a>
    </motion.div>
  );
};

export default FloatingChat;
