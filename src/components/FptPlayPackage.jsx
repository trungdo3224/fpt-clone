import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import { FaCheck, FaWifi, FaHome, FaGamepad, FaBuilding } from 'react-icons/fa';

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
              'Tiết kiệm đến 950.000đ so với mua lẻ'
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
              'Tiết kiệm đến 950.000đ so với mua lẻ'
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
              'Tiết kiệm đến 950.000đ so với mua lẻ'
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
              'Tiết kiệm đến 950.000đ so với mua lẻ'
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
  const [activeTab, setActiveTab] = useState({
    id: defaultTabId,
    banner: 'images/internetcanhann.webp',
  });

  // Memoize tabs to avoid unnecessary re-renders.
  const tabs = useMemo(
    () => [
      {
        id: 'fptplay',
        label: 'Truyền hình FPT Play',
        icon: FaWifi,
        banner: 'images/bannergoixmashomepage.webp',
      },
      {
        id: 'fptcamera',
        label: 'FPT Camera',
        icon: FaHome,
        banner: 'images/fptcameramua1duoc3new.jpg',
      },
      {
        id: 'fptsmarthome',
        label: 'FPT Smart Home',
        icon: FaGamepad,
        banner: 'images/bannersmarthome.png',
      },
    ],
    []
  );

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

  const handleTabClick = useCallback(
    (tab) => {
      navigate(`/${tab.id}`, { replace: true });
      setActiveTab({ id: tab.id, banner: tab.banner });
    },
    [navigate]
  );
  const fptSmarthome = (
    <>
      <div
        className='bg-no-repeat bg-cover bg-center py-16 h-[32rem]'
        style={{ backgroundImage: `url(${activeTab.banner})` }}
      />
      {/* Tabs */}
      <div className='flex flex-row justify-center bg-white rounded-xl shadow-lg p-2 mb-4'>
        <div className='grid grid-cols-3 md:grid-cols-3 gap-2'>
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
      {/* Smart Home Introduction Section */}
      <div className='flex flex-col md:flex-row items-end justify-center px-4 md:px-8 2xl:px-32 lg:px-32 py-8 pb-24'>
        <div className='flex flex-col w-full md:w-[50%] justify-start items-stretch gap-y-8 mb-8 md:mb-0 md:mr-8'>
          <h2 className='text-xl text-[#ff6634] font-bold'>GIỚI THIỆU</h2>
          <div className='flex flex-col items-start justify-center gap-y-4'>
            <h3 className='font-semibold text-gray-700'>FPT Smart Home</h3>
            <p className='text-gray-600'>
              Chúng tôi mong muốn mang đến một không gian sống thông minh và
              hiện đại với chi phí hợp lý nhất cho người dân Việt Nam.
            </p>
          </div>
          <div className='flex flex-col items-start justify-center gap-y-4'>
            <h3 className='font-semibold text-gray-700'>Tầm nhìn</h3>
            <p className='text-gray-600'>
              FPT Smart Home hướng đến trở thành đơn vị phát triển nhà thông
              minh hàng đầu không chỉ trong nước mà còn trên Thế giới. Chúng tôi
              luôn tiên phong đổi mới, ứng dụng kỹ thuật hiện đại, tích hợp công
              nghệ tiên tiến vào cuộc sống mỗi người dân.
            </p>
          </div>
        </div>
        <div className='w-full md:w-[50%] h-64 md:h-auto'>
          <img
            src='images/smarthome-about.png'
            className='object-contain object-center w-full h-full'
          />
        </div>
      </div>

      {/* Smart Home Overview Section */}
      <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-36 py-12 gap-y-12 pb-24 bg-gray-200'>
        <div className='flex flex-col w-full'>
          <h1 className='text-xl md:text-2xl font-bold text-gray-800 text-center'>
            Tổng quan giải pháp nhà thông minh FPT Smart Home
          </h1>
        </div>
        <div className='flex flex-row justify-center items-center w-full rounded-xl'>
          <img src='images/hi1200.jpg' className='object-cover rounded-xl' />
        </div>
      </div>
    </>
  );
  if (location.pathname === '/fptsmarthome') return fptSmarthome;
  return (
    <>
      {/* Banner Section */}
      <div
        className='bg-no-repeat bg-cover bg-center py-16 h-[32rem] '
        style={{ backgroundImage: `url(${activeTab.banner})` }}
      />
      {/* Tabs */}
      <div className='flex flex-row justify-center bg-white rounded-xl shadow-lg p-2 mb-4'>
        <div className='grid grid-cols-3 md:grid-cols-3 gap-2'>
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
      <div className='px-32 py-4'>
        {/* Render sections for the active tab */}
        {activeSections.map((item) => {
          const { id, title, subTitle, packages } = item;
          return (
            <div key={id}>
              <div className='m-8 md:m-16'>
                <div className=''>
                  <div className='text-center text-white'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4 text-gray-600'>
                      {title}
                    </h1>
                    <p className='text-lg md:text-xl text-gray-400'>
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

export default FptPlayPackage;
