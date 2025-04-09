import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import RegisterModal from './RegisterModal';

const PackageSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const handleRegisterClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };
  const packages = [
    {
      id: 1,
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
      name: 'Internet GIGA',
      speed: '150',
      price: '210,000đ',
      backgroundImage: '/images/goiinternetgigan.webp',
      features: [
        'Tốc độ Download/Upload 150Mbps',
        'Tốc độ nội địa, tốc độ quốc tế ổn định 24/7',
        'Miễn phí lắp đặt',
      ],
    },
    {
      id: 3,
      name: 'Internet SKY',
      speed: '1',
      price: '220,000đ',
      backgroundImage: 'images/internetsky.webp',
      features: [
        'Tốc độ Download/Upload 1Gbps',
        'Tốc độ nội địa, tốc độ quốc tế ổn định 24/7',
        'Miễn phí lắp đặt',
      ],
    },
    {
      id: 4,
      name: 'Gói F-Game',
      speed: '1',
      price: '250,000đ',
      backgroundImage: 'images/goifgamen.webp',
      features: [
        'Tích hợp gói Ultra Fast hỗ trợ tốc độc cao',
        'Trang bị Modem wifi 6',
        'Cước chỉ từ 200k',
      ],
    },
    {
      id: 5,
      name: 'Internet META',
      speed: '1',
      price: '310,000đ',
      backgroundImage: 'images/goiinternetmetan.webp',
      features: [
        'Trang bị Modem Wi-Fi 6',
        'Tốc độ Download/Upload 1 Gbps',
        'Phù hợp hộ gia đình lớn và game thủ',
      ],
    },
  ];

  // Determine how many cards are visible based on screen width
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 4; // large screens
    if (window.innerWidth >= 768) return 2; // medium screens
    return 1; // small screens
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation functions
  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(packages.length - visibleCards, prev + 1));
  };

  // Each card takes up an equal fraction of the container width
  // And the container will be translated by startIndex * (100 / visibleCards)%
  const translatePercentage = startIndex * (100 / visibleCards);

  return (
    <>
      <div className='my-8'>
        <h2 className='text-4xl md:text-3xl font-bold text-center text-gray-800 mb-2'>
          Gói đề xuất
        </h2>
        <p className='text-center text-xl text-gray-600 mb-8'>
          Bao gồm gói giá Khuyến mãi - Đáp ứng mọi nhu cầu cuộc sống cá nhân,
          gia đình
        </p>

        <div className='relative'>
          {/* Carousel container with overflow-hidden */}
          <div className='overflow-hidden py-8'>
            {/* Slide container with custom slide effect */}
            <div
              className='flex gap-4 transition-transform duration-700 ease-in-out'
              style={{ transform: `translateX(-${translatePercentage}%)` }}
            >
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className='package-card flex flex-col gap-y-4 justify-between bg-gray-50 rounded-lg shadow-md overflow-hidden'
                  style={{ flex: `0 0 calc(${100 / visibleCards}% - 0.8rem)` }}
                >
                  <div className='items-center w-full'>
                    <img
                      src={`${pkg.backgroundImage}`}
                      className='object-cover'
                    />
                  </div>
                  <div className='w-full flex flex-col items-center'>
                    <h3 className='text-xl font-bold text-gray-800'>
                      {pkg.name}
                    </h3>
                    <span className='text-sm font-bold text-gray-500 mt-4'>
                      Chỉ từ
                    </span>
                    <div className='flex items-baseline mt-2'>
                      <span className='text-2xl font-bold text-gray-800'>
                        {pkg.price}
                      </span>
                      <span className='text-gray-600 ml-1'>/tháng</span>
                    </div>
                  </div>
                  <div className='flex flex-col gap-y-4 p-6 h-60'>
                    <ul className='space-y-3 flex-grow overflow-hidden whitespace-normal break-words line-clamp-3'>
                      {pkg.features.map((feature, index) => (
                        <li key={index} className='flex items-start'>
                          <FaCheck className='text-green-500 mt-1 mr-2 flex-shrink-0' />
                          <p className='text-sm text-gray-600'>{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleRegisterClick(pkg)}
                      className='w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'
                    >
                      Đăng ký ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            className={`absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 ${
              startIndex === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-100'
            }`}
            onClick={handlePrevious}
            disabled={startIndex === 0}
          >
            <svg
              className='w-6 h-6 text-gray-800'
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
            className={`absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 ${
              startIndex >= packages.length - visibleCards
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-100'
            }`}
            onClick={handleNext}
            disabled={startIndex >= packages.length - visibleCards}
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
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </>
  );
};

export default PackageSection;
