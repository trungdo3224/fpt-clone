import React from 'react';
import { FaBox, FaRegCreditCard, FaHeadset, FaGift } from 'react-icons/fa';

const QuickLinks = () => {
  return (
    <div className="bg-white py-4 border-b-2">
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <FaBox className="text-fpt-blue text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">1.000+</h3>
              <p className="text-sm text-gray-500">Cửa hàng trên toàn quốc</p>
            </div>
            <div className="flex items-center p-4 ml-24 md:hidden sm:hidden lg:flex xs:hidden">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <FaRegCreditCard className="text-fpt-blue text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Tích điểm</h3>
              <p className="text-sm text-gray-500">Siêu tiện lợi & dễ dàng</p>
            </div>
            <div className="flex items-center p-4 ml-24 md:hidden sm:hidden lg:flex xs:hidden">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <FaHeadset className="text-fpt-blue text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Thanh toán online</h3>
              <p className="text-sm text-gray-500">Nhanh chóng & an toàn</p>
            </div>
            <div className="flex items-center p-4 ml-24 md:hidden sm:hidden lg:flex xs:hidden">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <FaGift className="text-fpt-blue text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Khuyến mãi</h3>
              <p className="text-sm text-gray-500">Ưu đãi hấp dẫn</p>
            </div>
            <div className="flex items-center p-4 ml-24 md:hidden sm:hidden lg:flex xs:hidden">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
