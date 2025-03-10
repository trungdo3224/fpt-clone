import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import { FaCheck,FaTv } from 'react-icons/fa';
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";

// Static sections data (unchanged)
const initSections = [
  {
    fptplay: [
      {
        id: 1,
        title: 'Gói Combo Internet kèm Truyền hình FPT Play',
        subTitle:
          'Thỏa sức lướt web, xem phim, tận hưởng mọi hoạt động thể thao và giải trí không giới hạn',
        packages: [
          {
            id: 1,
            name: 'Combo SKY Max',
            price: '235,000đ',
            image: '/images/goiinternetcombosky.webp',
            features: [
              'Trang bị Modem wifi 6 & FPT Play Box',
              'Xen gần 170 kênh truyền hình trong nước và quốc tế',
              'Phù hợp hộ gia đình',
              'Tiếp kiệm tới 590.000đ so với mua lẻ',
            ],
          },
          {
            id: 2,
            name: 'Combo Giga F1',
            price: '245,600đ',
            image: '/images/goicombogigaf1.webp',
            features: [
              'Trang bị Modem wifi 6 & FPT Play Box',
              'Xem gần 170 kênh truyền hình trong nước & quốc tế',
              'Tặng 1 thiết bị Access Point',
              'Tiếp kiệm 1.540.000đ so với mua lẻ',
            ],
          },
          {
            id: 3,
            name: 'Combo Sky F1',
            price: '265,600đ',
            image: '/images/goicomboskyf1.webp',
            features: [
              'Trang bị Modem wifi 6',
              'Tặng 1 thiết bị Acces Point giá trị lên đến 1.000.000đ',
              'Tốc độ Download/Upload 1Gbps',
              'Phù hợp hộ gia đình lớn và game thủ',
            ],
          },
          {
            id: 4,
            name: 'Combo META',
            price: '335,000đ',
            image: '/images/goiinternetcombometa.webp',
            features: [
              'Trang bị Modem Wi-Fi 6 & FPT Play Box',
              'Xem gần 170 kênh truyền hình trong nước & quốc tế',
              'Tốc độ lên đến 1 Gbps',
              'Tiết kiệm tới 590.000đ so với mua lẻ',
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'Chương trình truyền hình, phim ảnh, thể thao, giải trí bất tận',
        subTitle:
          'Trải nghiệm truyền hình trực tuyến với FPT Play giúp bạn và gia đình giải trí không giới hạn',
        packages: [
          {
            id: 1,
            name: 'Gói XMAS',
            price: '17,000đ',
            image: '/images/goixmasgiadacbiet.webp',
            features: [
              'Xem trực tiếp ASEAN Cup 2024 & các giải thể thao độc quyền',
              'Xem gần 140 kênh truyền hình trong nước & quốc tế',
              'Không quảng cáo khi xem video',
              'Đăng nhập và xem cùng lúc trên 3 thiết bị',
            ],
            popular: true,
          },
          {
            id: 2,
            name: 'Gói SVIP',
            price: '98,000đ',
            image: '/images/goisvipfptplay.jpg',
            features: [
              'Bao gồm toàn bộ nội dung Gói SMAX+',
              'Kho phim HBO GO đặc sắc',
              '5 thiết bị đồng thời, HBO GO chỉ xem đồng thời 2 thiết bị',
            ],
          },
          {
            id: 3,
            name: 'Gói K+',
            price: '175,000đ',
            image: '/images/goikplusfptplay.jpg',
            features: [
              'Xem 5 kênh K+SPORT 1, K+SPORT 2, K+CINE, K+LIFE, K+KIDs',
              'Xem trực tiếp Ngoại hạng Anh & các giải thể thao hàng đầu thế giới',
              'Đăng nhập tối đa 3 thiết bị, chỉ xem cùng lúc tối đa 1 thiết bị',
            ],
          },
          {
            id: 4,
            name: 'Combo Giga F1',
            price: '219,600đ',
            image: '/images/goismaxkplusfptplay.jpg',
            features: [
              'Bao gồm toàn bộ nội dung gói SMAX+ và K+',
              'Xem Ngoại hạng Anh, NBA, PGA, MMA, cùng kho phim đa dạng',
              'Hỗ trợ 3 thiết bị xem đồng thời cho nội dung thuộc gói SMAX+',
              'Chỉ 1 thiết bị xem đồng thời cho nội dung thuộc gói K+',
            ],
          },
        ],
      },
    ],
  },
  {
    fptcamera: [
      {
        id: 1,
        title: 'Mua 1 được 3 - Combo Internet & Camera FPT',
        subTitle:
          'Gói Internet tốc độ cao kèm Camera giám sát - Tiết kiệm đến 950K',
        packages: [
          {
            id: 1,
            name: 'Internet SKY',
            price: '212,000đ',
            image: '/images/combointernetcameragigaeyes3.jpg',
            features: [
              'Trang bị Modem wifi 6',
              'Trang bị Camera IQ3S kèm gói lưu trữ Cloud 3 ngày',
              'Tặng 1 thiết bị Access Point',
              'Tiết kiệm đến 950.000đ so với mua lẻ',
            ],
          },
          {
            id: 2,
            name: 'SkyEyes3 - Play3',
            price: '220,000đ',
            image: '/images/combointernetcameraskyeyes3play3.jpg',
            features: [
              'Trang bị Modem wifi 6',
              'Trang bị Camera IQ3S kèm gói lưu trữ Cloud 3 ngày',
              'Tặng 1 thiết bị Access Point',
              'Tiết kiệm đến 950.000đ so với mua lẻ',
            ],
          },
          {
            id: 3,
            name: 'SkyEyes3 - IQ2S',
            price: '239,000đ',
            image: '/images/combointernetcameraskyeyes3iq2s.jpg',
            features: [
              'Trang bị Modem wifi 6',
              'Trang bị Camera IQ3S kèm gói lưu trữ Cloud 3 ngày',
              'Tặng 1 thiết bị Access Point',
              'Tiết kiệm đến 950.000đ so với mua lẻ',
            ],
          },
          {
            id: 4,
            name: 'GigaEyes7 - IQ2S',
            price: '274,000đ',
            image: '/images/combointernetcameragigaeyes7.jpg',
            features: [
              'Trang bị Modem wifi 6',
              'Trang bị Camera IQ3S kèm gói lưu trữ Cloud 7 ngày',
              'Tặng 1 thiết bị Access Point',
              'Tiết kiệm đến 950.000đ so với mua lẻ',
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
// Main FptPlayPackage Component
//
const FptPlayPackage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const defaultTabId = pathname.split('/')[1] || 'fptplay';
  
  // Add isMobile state to track screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Update activeTab state to include smallBanner
  const [activeTab, setActiveTab] = useState({
    id: defaultTabId,
    banner: '',
    smallBanner: ''
  });

  // Add useEffect for screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Memoize tabs to avoid unnecessary re-renders
  const tabs = useMemo(
    () => [
      {
        id: 'fptplay',
        label: 'Truyền hình FPT Play',
        icon: FaTv,
        banner: 'images/bannergoixmashomepage.webp',
        smallBanner: 'images/bannergoixmashomepagem.webp',
      },
      {
        id: 'fptcamera',
        label: 'FPT Camera',
        icon: MdOutlineVideoCameraFront,
        banner: 'images/fptcameramua1duoc3new.jpg',
        smallBanner: 'images/fptcameramua1duoc3newm.jpg' // Fixed: should include "images/" prefix
      },
      {
        id: 'fptsmarthome',
        label: 'FPT Smart Home',
        icon: TbSmartHome,
        banner: 'images/bannersmarthome.png',
        smallBanner: 'images/fptsmarthomem.png',
      },
    ],
    []
  );

  // Update useEffect to set both banner and smallBanner
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

  // Update handleTabClick to include smallBanner
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
  const fptSmarthome = (
    <>
      {/* Banner Section with proper responsive height */}
      <div
        className='bg-no-repeat bg-cover bg-center h-48 xs:h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[32rem]'
        style={{ backgroundImage: `url(${isMobile ? activeTab.smallBanner : activeTab.banner})` }}
      />
      
      {/* Tabs with consistent responsive styling */}
      <div className='flex flex-row justify-center bg-white rounded-xl shadow-lg p-2 mx-4 sm:mx-6 md:mx-8 -mt-4 sm:-mt-6 relative z-10 mb-4'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full'>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`flex items-center justify-center p-3 sm:p-4 rounded-lg transition-all ${
                  activeTab.id === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className='w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3' />
                <span className='font-medium text-xs sm:text-sm md:text-base'>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Smart Home Introduction Section with better responsive layout */}
      <div className='flex flex-col md:flex-row items-start justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-4 sm:py-8 md:py-12 pb-8 sm:pb-12 md:pb-16 lg:pb-24'>
        <div className='flex flex-col w-full md:w-[50%] justify-start items-stretch gap-y-4 sm:gap-y-6 md:gap-y-8 mb-6 sm:mb-8 md:mb-0 md:mr-8'>
          <h2 className='text-lg sm:text-xl text-[#ff6634] font-bold'>GIỚI THIỆU</h2>
          <div className='flex flex-col items-start justify-center gap-y-2 sm:gap-y-4'>
            <h3 className='font-semibold text-gray-700 text-base sm:text-lg md:text-xl'>FPT Smart Home</h3>
            <p className='text-sm sm:text-base text-gray-600'>
              Chúng tôi mong muốn mang đến một không gian sống thông minh và
              hiện đại với chi phí hợp lý nhất cho người dân Việt Nam.
            </p>
          </div>
          <div className='flex flex-col items-start justify-center gap-y-2 sm:gap-y-4'>
            <h3 className='font-semibold text-gray-700 text-base sm:text-lg md:text-xl'>Tầm nhìn</h3>
            <p className='text-sm sm:text-base text-gray-600'>
              FPT Smart Home hướng đến trở thành đơn vị phát triển nhà thông
              minh hàng đầu không chỉ trong nước mà còn trên Thế giới. Chúng tôi
              luôn tiên phong đổi mới, ứng dụng kỹ thuật hiện đại, tích hợp công
              nghệ tiên tiến vào cuộc sống mỗi người dân.
            </p>
          </div>
        </div>
        <div className='w-full md:w-[50%] h-48 sm:h-56 md:h-64 lg:h-auto'>
          <img
            src='images/smarthome-about.png'
            className='object-contain object-center w-full h-full'
            alt="FPT Smart Home"
            loading="lazy"
          />
        </div>
      </div>

      {/* Smart Home Overview Section with consistent responsive padding */}
      <div className='flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-6 sm:py-8 md:py-10 lg:py-12 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 pb-8 sm:pb-12 md:pb-16 lg:pb-24 bg-gray-200'>
        <div className='flex flex-col w-full'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center'>
            Tổng quan giải pháp nhà thông minh FPT Smart Home
          </h1>
        </div>
        <div className='flex flex-row justify-center items-center w-full rounded-md sm:rounded-lg md:rounded-xl overflow-hidden'>
          <img 
            src='images/hi1200.jpg' 
            className='object-cover w-full h-auto' 
            alt="Giải pháp nhà thông minh FPT Smart Home"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
  if (location.pathname === '/fptsmarthome') return fptSmarthome;
  return (
    <>
      {/* Banner Section with responsive image and height */}
      <div
        className='bg-no-repeat bg-cover bg-center h-48 xs:h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[32rem]'
        style={{ 
          backgroundImage: `url(${isMobile ? activeTab.smallBanner : activeTab.banner})` 
        }}
      >
        {/* Optional content overlay if needed */}
      </div>

      {/* Tabs with responsive layout */}
      <div className='flex flex-row justify-center bg-white rounded-xl shadow-lg p-2 mx-4 sm:mx-6 md:mx-8 -mt-4 sm:-mt-6 relative z-10'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full'>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`flex items-center justify-center p-3 sm:p-4 rounded-lg transition-all ${
                  activeTab.id === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className='w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3' />
                <span className='font-medium text-xs sm:text-sm md:text-base'>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Replace the fixed-padding container with this responsive one */}
      <div className='px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-4 sm:py-6 md:py-8'>
        {/* Render sections for the active tab */}
        {activeSections.map((item) => {
          const { id, title, subTitle, packages } = item;
          return (
            <div key={id}>
              <div className='my-4 sm:my-6 md:my-8 lg:my-12 xl:my-16'>
                <div className='text-center'>
                  <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-600'>
                    {title}
                  </h1>
                  <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto'>
                    {subTitle}
                  </p>
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

export default FptPlayPackage;
