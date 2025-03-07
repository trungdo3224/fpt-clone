import React from 'react';

const FloatingPhone = () => {
  return (
    <div className='fixed bottom-44 right-6 z-50'>
      <div className="relative">
        {/* Permanent tooltip positioned above the button */}
        <div className="absolute bottom-14 right-0 bg-blue-700 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm text-white">
        096.930.2332
          {/* Arrow pointing to the button */}
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-blue-700 transform rotate-45"></div>
        </div>
        
        <button className='bg-fpt-blue text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition'>
          <img src='images/icon-call-new.png' alt='Zalo' className='w-8 h-8' />
        </button>
      </div>
    </div>
  );
};

export default FloatingPhone;