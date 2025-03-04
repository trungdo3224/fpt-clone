import React, { useState } from 'react';
import {
  FaWifi,
  FaGamepad,
  FaVideo,
  FaCheck,
  FaVrCardboard,
} from 'react-icons/fa';

const PackageSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const packages = [
    {
      id: 1,
      type: 'COMBO CAMERA',
      name: 'Combo Camera',
      speed: '150',
      price: '192,000đ',
      backgroundImage: 'images/combointernetcameran.jpg',
      features: [
        'Trang bị Modem wifi 6',
        'Trang bị Camera 2MP kèm gói lưu trữ Cloud 7 ngày',
        'Tốc độ Download/Upload 150Mbps',
        'Lắp đặt 150,000đ và miễn phí',
      ],
    },
    {
      id: 2,
      type: 'INTERNET GIGA',
      name: 'Internet GIGA',
      speed: '150',
      price: '165,000đ',
      backgroundImage: 'images/goiinternetgigan.webp',
      features: [
        'Tốc độ Download/Upload 150Mbps',
        'Tốc độ nội địa, tốc độ quốc tế ổn định 24/7',
        'Miễn phí lắp đặt',
      ],
    },
    {
      id: 3,
      type: 'INTERNET SKY',
      name: 'Internet SKY',
      speed: '1',
      price: '195,000đ',
      backgroundImage: 'images/internetsky.webp',
      features: [
        'Tốc độ Download/Upload 1Gbps',
        'Tốc độ nội địa, tốc độ quốc tế ổn định 24/7',
        'Miễn phí lắp đặt',
      ],
    },
    {
      id: 4,
      type: 'GÓI F-GAME',
      name: 'Gói F-Game',
      speed: '1',
      price: '200,000đ',
      backgroundImage: 'images/goifgamen.webp',
      features: [
        'Tích hợp gói Ultra Fast hỗ trợ tốc độc cao',
        'Trang bị Modem wifi 6',
        'Cước chỉ từ 200k',
      ],
    },
    {
      id: 5,
      type: 'INTERNET META',
      name: 'Internet META',
      speed: '1',
      price: '315,000đ',
      backgroundImage: 'images/goiinternetmetan.webp',
      features: [
        'Trang bị Modem Wi-Fi 6',
        'Tốc độ Download/Upload 1 Gbps',
        'Phù hợp hộ gia đình lớn và game thủ',
      ],
    },
  ];

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(packages.length - 4, prev + 1));
  };

  // Get the 4 packages to display based on the current startIndex
  const visiblePackages = packages.slice(startIndex, startIndex + 4);
  const packageImages = [, '', '', '', ''];

  return (
    <div className='my-8'>
      <h2 className='text-4xl md:text-5xl font-bold text-center text-gray-800 mb-2'>
        Gói đề xuất
      </h2>
      <p className='text-center text-xl text-gray-600 mb-8'>
        Bao gồm gói giá Khuyến mãi - Đáp ứng mọi nhu cầu cuộc sống cá nhân, gia
        đình
      </p>

      <div className='relative'>
        <div className='flex flex-row justify-center gap-4 overflow-x-auto md:overflow-x-hidden pb-4 md:pb-0'> {/* Added overflow-x-auto for mobile scroll */}
          {visiblePackages.map((pkg) => (
            <div
              key={pkg.id}
              className='package-card bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[calc(50%-8px)] md:w-[380px] min-w-[280px]' // Adjusted width for responsiveness
            >
              <div
                className={`bg-opacity-20 p-6 flex flex-col items-center w-full h-72 bg-[url(${pkg.backgroundImage})] bg-center bg-cover bg-no-repeat`}
              ></div>

              <div className='py-4 w-full flex flex-col content-center items-center'>
                <div>
                  <h3 className='text-xl font-bold text-gray-800'>
                    {pkg.name}
                  </h3>
                </div>
                <div className='flex items-baseline mt-2'>
                  <span className='text-2xl font-bold text-gray-800'>
                    {pkg.price}
                  </span>
                  <span className='text-gray-600 ml-1'>/tháng</span>
                </div>
              </div>

              <div className='p-6 flex flex-col h-64'>
                <ul className='space-y-3 flex-grow overflow-hidden whitespace-normal break-words line-clamp-3'>
                  {pkg.features.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      <FaCheck className='text-green-500 mt-1 mr-2 flex-shrink-0' />
                      <p className='text-sm text-gray-600'>{feature}</p>
                    </li>
                  ))}
                </ul>
                <button className='w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'>
                  Đăng ký ngay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          className={`absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hidden md:block ${
            startIndex === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-100'
          }`}
          onClick={handlePrevious}
          disabled={startIndex === 0}
        >
          <svg
            className='w-6 h-6 text-gray-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7'
            ></path>
          </svg>
        </button>
        <button
          className={`absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hidden md:block ${
            startIndex >= packages.length - 4
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-100'
          }`}
          onClick={handleNext}
          disabled={startIndex >= packages.length - 4}
        >
          <svg
            className='w-6 h-6 text-gray-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PackageSection;
