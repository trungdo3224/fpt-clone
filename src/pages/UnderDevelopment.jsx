import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaArrowLeft } from 'react-icons/fa';

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 animate-bounce">
          <FaTools className="text-6xl text-blue-600 mx-auto" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Trang đang phát triển
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Chúng tôi đang nỗ lực hoàn thiện trang web này. Vui lòng quay lại sau!
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default UnderDevelopment;