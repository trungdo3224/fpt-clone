import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineSafety } from "react-icons/ai";
import { SiSecurityscorecard } from "react-icons/si";

// Static sections data (unchanged)
const initSections = [
  {
    fsafe: [
      {
        id: 1,
        title: 'F-Safe bảo vệ mạng Internet an toàn cho cả gia đình',
        subTitle:
          'F-Safe là giải pháp bảo mật tiên tiến tích hợp trên Router Wi-Fi FPT, tự động bảo vệ toàn bộ thiết bị kết nối trong nhà. Có F-Safe, giúp bạn an toàn và an tâm hơn mỗi ngày khi truy cập Internet',
        packages: [
          {
            id: 1,
            name: 'F-Safe Home 1',
            price: '235,000đ',
            image: '/images/goifsafehome1n.webp',
            features: [
              'Trang bị Modem wifi 6 & FPT Play Box',
              'Tích hợp F-Safe bảo mật chống virus, mã độc, tấn công mạng',
              'Tặng 1 thiết bị Access Point',
              'Áp dụng tại HN & TP.HCM',
            ],
          },
        ],
      },
    ],
  },
  {
    'fsafe-go': [
      {
        id: 1,
        title: 'Luôn an toàn và yên tâm trong thế giới số cùng F-Safe Go',
        subTitle:
          'Có F-Safe Go giúp bạn yên tâm hơn trong mọi hoạt động kết nối internet',
        packages: [
          {
            id: 1,
            name: 'F-Safe Go - 3',
            price: '35,000đ',
            image: '/images/goibaomatfsafego3.jpg',
            features: [
              'Bảo vệ 3 thiết bị trên PC, Mac, Android, iOS',
              'Chặn lừa đảo, lọc nội dung, bảo vệ trẻ online an toàn',
              'Bảo vệ quyền riêng tư và dữ liệu cá nhân',
            ],
          },
          {
            id: 2,
            name: 'F-Safe Go - 3',
            price: '40,000đ',
            image: '/images/goibaomatfsafego5.jpg',
            features: [
              'Bảo vệ 5 thiết bị trên PC, Mac, Android, iOS',
              'Chặn lừa đảo, lọc nội dung, bảo vệ trẻ online an toàn',
              'Bảo vệ quyền riêng tư và dữ liệu cá nhân',
            ],
          },
          {
            id: 3,
            name: 'F-Safe Go - 10',
            price: '45,000đ',
            image: '/images/goibaomatfsafego10.jpg',
            features: [
              'Bảo vệ 10 thiết bị trên PC, Mac, Android, iOS',
              'Chặn lừa đảo, lọc nội dung, bảo vệ trẻ online an toàn',
              'Bảo vệ quyền riêng tư và dữ liệu cá nhân',
            ],
          },
          {
            id: 4,
            name: 'F-Safe Go - 15',
            price: '50,000đ',
            image: '/images/goibaomatfsafego15.jpg',
            features: [
              'Bảo vệ 15 thiết bị trên PC, Mac, Android, iOS',
              'Chặn lừa đảo, lọc nội dung, bảo vệ trẻ online an toàn',
              'Bảo vệ quyền riêng tư và dữ liệu cá nhân',
            ],
          },
        ],
      },
    ],
  },
];

//
// Custom hook to determine visible cards based on screen width
//
function useVisibleCards() {
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return visibleCards;
}

//
// Carousel Component for packages
//
const Carousel = ({ packages, visibleCards, onRegisterClick }) => {
  const [startIndex, setStartIndex] = useState(0);
  const translatePercentage = startIndex * (100 / visibleCards);

  const handlePrevious = useCallback(() => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setStartIndex((prev) => Math.min(packages.length - visibleCards, prev + 1));
  }, [packages.length, visibleCards]);

  return (
    <div className='relative'>
      <div className='overflow-hidden py-8'>
        <div
          className='flex gap-4 transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${translatePercentage}%)` }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className='package-card bg-gray-50 rounded-lg shadow-md overflow-hidden'
              style={{ flex: `0 0 calc(${100 / visibleCards}% - 0.8rem)` }}
            >
              <div className='items-center w-full h-72 md:mb-2 sm:mb-52'>
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='py-4 w-full flex flex-col items-center'>
                <h2 className='text-2xl font-bold text-gray-800'>{pkg.name}</h2>
                <span className='text-sm font-bold text-gray-500 mt-4'>
                  Chỉ từ
                </span>
                <div className='flex items-baseline mt-2'>
                  <span className='text-xl font-bold text-gray-800'>
                    {pkg.price}
                  </span>
                  <span className='text-gray-600 ml-1'>/tháng</span>
                </div>
              </div>
              <div className='p-6 flex flex-col h-72'>
                <ul className='space-y-4 flex-grow whitespace-normal break-words line-clamp-3 h-full'>
                  {pkg.features.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      <FaCheck className='text-green-500 mt-1 mr-2 flex-shrink-0' />
                      <p className='text-sm text-gray-600'>{feature}</p>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onRegisterClick(pkg)}
                  className='w-full mt-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'
                >
                  Đăng ký ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {packages.length > visibleCards && (
        <>
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
        </>
      )}
    </div>
  );
};

//
// Main Fsafe Component
//
const Fsafe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const defaultTabId = pathname.split('/')[1] || 'fsafe';
  
  // Add isMobile state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Update activeTab state to include smallBanner
  const [activeTab, setActiveTab] = useState({
    id: defaultTabId,
    banner: '',
    smallBanner: ''
  });

  // Handle screen resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Memoize tabs to avoid unnecessary re-renders.
  const tabs = useMemo(
    () => [
      {
        id: 'fsafe',
        label: 'F-Safe',
        icon: AiOutlineSafety,
        banner: 'images/fsafeinternetantoanketnoi.jpg',
        smallBanner: 'images/fsafeinternetantoanketnoin.jpg'
      },
      {
        id: 'fsafe-go',
        label: 'F-Safe Go',
        icon: SiSecurityscorecard,
        banner: 'images/fptcameramua1duoc3new.jpg',
        smallBanner: 'images/fptcameramua1duoc3newm.jpg'
      },
    ],
    []
  );

  // Update the effect to also set smallBanner
  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.id === defaultTabId) || tabs[0];
    setActiveTab({
      id: defaultTabId,
      banner: currentTab.banner,
      smallBanner: currentTab.smallBanner
    });
  }, [defaultTabId, location.pathname, tabs]);

  // Compute active sections from initSections based on activeTab
  const activeSections = useMemo(() => {
    const sectionObj = initSections.find((sec) => sec[activeTab.id]);
    return sectionObj ? sectionObj[activeTab.id] : [];
  }, [activeTab]);

  const visibleCards = useVisibleCards();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleRegisterClick = useCallback((pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  }, []);

  // Update tab click handler to also set smallBanner
  const handleTabClick = useCallback(
    (tab) => {
      navigate(`/${tab.id}`, { replace: true });
      setActiveTab({ 
        id: tab.id, 
        banner: tab.banner,
        smallBanner: tab.smallBanner
      });
    },
    [navigate]
  );

  return (
    <>
      {/* Banner Section with responsive image handling */}
      <div
        className='relative bg-no-repeat bg-cover bg-center py-16'
        style={{
          height: isMobile ? '300px' : '400px',
          backgroundImage: `url(${isMobile ? activeTab.smallBanner : activeTab.banner})`
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-shadow">
                {activeTab.id === 'fsafe' && "F-Safe Bảo Vệ Gia Đình"}
                {activeTab.id === 'fsafe-go' && "F-Safe Go Bảo Mật Di Động"}
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-white text-shadow">
                An toàn - Bảo mật - Kết nối không lo ngại
              </p>
              
              <button 
                onClick={() => navigate('/register')}
                className="mt-4 sm:mt-6 bg-fpt-orange text-white px-5 py-2.5 rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className='flex flex-row justify-center bg-white rounded-xl shadow-lg p-2'>
        <div className='grid grid-cols-2 gap-2'>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`flex items-center justify-center p-4 rounded-lg transition-all ${
                  activeTab.id === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className='w-6 h-6 mr-3' />
                <span className='font-medium'>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className='mx-auto mt-6'>
        {/* Render sections for the active tab */}
        {activeSections.map((item) => {
          const { id, title, subTitle, packages } = item;
          return (
            <div
              key={id}
              className='px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-4'
            >
              <div className='m-16'>
                <div className='container mx-auto px-4'>
                  <div className='text-center text-white'>
                    <h1 className='text-4xl md:text-4xl font-bold mb-4 text-gray-600'>
                      {title}
                    </h1>
                    <p className='text-xl md:text-xl text-gray-400'>
                      {subTitle}
                    </p>
                  </div>
                </div>
              </div>
              <Carousel
                packages={packages}
                visibleCards={visibleCards}
                onRegisterClick={handleRegisterClick}
              />
            </div>
          );
        })}
      </div>
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </>
  );
};

export default Fsafe;
