import React from 'react';

const FloatingChat = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50">
      <button className="bg-fpt-blue text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition">
        <a href='https://zalo.me/096.930.2332'><img src="images/zalo.svg" alt='Zalo' className='w-8 h-8' /></a>
      </button>
    </div>
  );
};

export default FloatingChat;