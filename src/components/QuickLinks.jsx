import React from 'react';
import { FaBox, FaRegCreditCard, FaHeadset, FaGift, FaChevronRight } from 'react-icons/fa';

const QuickLinks = () => {
  const features = [
    {
      icon: <FaBox />,
      title: "1.000+",
      description: "Cửa hàng trên toàn quốc"
    },
    {
      icon: <FaRegCreditCard />,
      title: "Tích điểm",
      description: "Siêu tiện lợi & dễ dàng"
    },
    {
      icon: <FaHeadset />,
      title: "Thanh toán online",
      description: "Nhanh chóng & an toàn"
    },
    {
      icon: <FaGift />,
      title: "Khuyến mãi",
      description: "Ưu đãi hấp dẫn"
    }
  ];

  return (
    <div className="bg-white py-3 sm:py-4 md:py-6 border-b-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-center py-3 ${
                index < features.length - 1 ? 'sm:border-r-0 lg:border-r lg:border-gray-200' : ''
              }`}
            >
              <div className="bg-gray-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                <div className="text-fpt-blue text-lg sm:text-xl">
                  {feature.icon}
                </div>
              </div>
              
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 truncate">
                  {feature.description}
                </p>
              </div>
              
              {index < features.length - 1 && (
                <div className="hidden lg:flex items-center justify-center mx-1 flex-shrink-0">
                  <FaChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
