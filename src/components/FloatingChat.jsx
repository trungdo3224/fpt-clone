import React from 'react';
import { MdPhone } from 'react-icons/md';

const FloatingChat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition">
        <MdPhone className="text-2xl" />
      </button>
    </div>
  );
};

export default FloatingChat;