import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import { FaCheck, FaWifi, FaHome, FaGamepad, FaBuilding } from 'react-icons/fa';

// Static sections data (unchanged)
const initSections = [
  {
    personal: [
      {
        id: 1,
        title: 'Internet cáp quang tốc độ cao',
        subTitle: 'Trải nghiệm Internet siêu tốc cho mọi nhu cầu',
        packages: [
          {
            id: 1,
            name: 'Internet GIGA',
            speed: '150 Mbps',
            price: '165,000đ',
            image: '/images/goiinternetgigan.webp',
            features: [
              'Trang bị Modem wifi 6',
              'Tốc độ Download/Upload 150Mbps',
              'Phù hợp cá nhân, hộ gia đình có từ 3 thiết bị kết nối trở lên',
            ],
            popular: true,
          },
          {
            id: 2,
            name: 'Internet SKY',
            speed: '250 Mbps',
            price: '195,000đ',
            image: '/images/internetsky.webp',
            features: [
              'Trang bị Modem wifi 6',
              'Tốc độ Download/Upload 1Gbps',
              'Phù hợp cá nhân, hộ gia đình có từ 8 thiết bị kết nối trở lên',
            ],
          },
          {
            id: 3,
            name: 'Internet GIGA F1',
            speed: '250 Mbps',
            price: '185,000đ',
            image: '/images/internetgigaf1.webp',
            features: [
              'Trang bị Modem wifi 6',
              'Tặng 1 thiết bị Acces Point giá trị lên đến 1.000.000đ',
              'Tốc độ Download/Upload 150Mbps',
              'Phù hợp cá nhân, hộ gia đình',
            ],
          },
          {
            id: 4,
            name: 'Internet SKY F1',
            speed: '250 Mbps',
            price: '225,000đ',
            image: '/images/internetskyf1.webp',
            features: [
              'Trang bị Modem wifi 6',
              'Tặng 1 thiết bị Acces Point giá trị lên đến 1.000.000đ',
              'Tốc độ Download/Upload 1Gbps',
              'Phù hợp cá nhân, hộ gia đình có từ 8 thiết bị kết nối trở lên',
            ],
          },
          {
            id: 5,
            name: 'Internet META F1',
            speed: '250 Mbps',
            price: '315,000đ',
            image: '/images/internetmetaf1.webp',
            features: [
              'Trang bị Modem wifi 6',
              'Tặng 1 thiết bị Acces Point giá trị lên đến 1.000.000đ',
              'Tốc độ Download/Upload 1Gbps',
              'Phù hợp hộ gia đình lớn và game thủ',
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'Combo Internet siêu tiết kiệm',
        subTitle:
          'Tận hưởng internet tốc độ cao tại nhà, giữ cho toàn bộ ngôi nhà được phủ sóng Internet & Wi-Fi',
        packages: [
          {
            id: 1,
            name: 'Combo Truyền Hình',
            price: '215,000đ',
            image: '/images/goiinternetcombotruyenhinh.webp',
            features: [
              'Trang bị Modem wifi 6',
              'Phù hợp cá nhân, hộ gia đình',
              'Xem gần 170 kênh truyền hình và quốc tế',
              'Tiết kiệm 950.000đ so với mua lẻ',
            ],
            popular: true,
          },
          {
            id: 2,
            name: 'Combo SKY',
            price: '235,000đ',
            image: '/images/combosky.jpg',
            features: [
              'Trang bị Modem wifi 6 & FPT Play Box',
              'Xem gần 130 kênh truyền hình trong nước & quốc tế',
              'Phù hợp hộ gia đình',
            ],
          },
          {
            id: 3,
            name: 'Combo Camera',
            price: '192,000đ',
            image: '/images/combointernetcameran.jpg',
            features: [
              'Trang bị Modem wifi 6',
              'Trang bị Camera IQ3S kèm gói lưu trữ Cloud 3 ngày',
              'Tặng 1 thiết bị Access Point',
              'Tiếp kiệm 950.000đ so với mua lẻ',
            ],
          },
          {
            id: 4,
            name: 'Combo Giga F1',
            price: '245,600đ',
            image: '/images/goicombogigaf1.webp',
            features: [
              'Trang bị Modem wifi 6 & FPT Play Box',
              'Xem gần 170 kênh truyền hình trong nước & quốc tế',
              'Tặng 1 thiết bị Access Point',
              'Tiếp kiệm 1.540.000đ so với mua lẻ',
            ],
          },
          {
            id: 5,
            name: 'Combo Sky F1',
            price: '265,600đ',
            image: '/images/goicomboskyf1.webp',
            features: [
              'Trang bị Modem wifi 6',
              'Tặng 1 thiết bị Acces Point giá trị lên đến 1.000.000đ',
              'Tốc độ Download/Upload 1Gbps',
              'Phù hợp hộ gia đình lớn và game thủ',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Internet FPT - Kết nối vượt trội cho Doanh nghiệp',
        subTitle:
          'Giải pháp Internet tốc độ cao từ FPT Telecom giúp duy trì kết nối liền mạch, phủ sóng Wi-Fi cho toàn bộ doanh nghiệp',
        packages: [
          {
            id: 1,
            name: 'Super250',
            price: '545,000đ',
            image: '/images/goidnsuper250.webp',
            features: [
              'Trang bị Modem Wi-Fi 6 Trang bị Modem Mikrotik RB760iGS/ EdgeRouter X SFP',
              'Phù hợp cá nhân, doanh nghiệp nhỏ (<50 thiết bị)',
            ],
            popular: true,
          },
          {
            id: 2,
            name: 'Lux500',
            price: '800,000đ',
            image: '/images/goidnlux500.webp',
            features: [
              'Trang bị Modem Wi-Fi 6 & 1 thiết bị Access Point',
              'Tích hợp Ultra Fast tối ưu tốc độ',
              'Phù hợp cá nhân, doanh nghiệp (<125 thiết bị)',
            ],
          },
          {
            id: 3,
            name: 'Lux800',
            price: '1,000,000đ',
            image: '/images/goidnlux800.webp',
            features: [
              'Trang bị Modem Wi-Fi 6 & 1 thiết bị Access Point',
              'Tích hợp Ultra Fast tối ưu tốc độ',
              'Phù hợp cá nhân, doanh nghiệp (<160 thiết bị)',
            ],
          },
          {
            id: 4,
            name: 'Combo Lux500',
            price: '875,600đ',
            image: '/images/combolux500.jpg',
            features: [
              'Trang bị Modem Wi-Fi 6 & 1 thiết bị Access Point',
              'Tích hợp Ultra Fast tối ưu tốc độ',
              'Xem gần 130 kênh truyền hình trong nước & quốc tế',
              'Phù hợp cá nhân, doanh nghiệp (<125 thiết bị)',
              'Tiết kiệm tới 1.200.000đ so với mua lẻ',
            ],
          },
          {
            id: 5,
            name: 'Combo Lux800',
            price: '1,075,600đ',
            image: '/images/combolux800.jpg',
            features: [
              'Trang bị Modem Wi-Fi 6 & 1 thiết bị Access Point',
              'Tích hợp Ultra Fast tối ưu tốc độ',
              'Xem gần 130 kênh truyền hình trong nước & quốc tế',
              'Phù hợp cá nhân, doanh nghiệp (<165 thiết bị)',
              'Tiết kiệm tới 1.200.000đ so với mua lẻ',
            ],
          },
        ],
      },
    ],
  },
  {
    family: [
      {
        id: 1,
        title: 'Kết nối Internet cho mọi phòng, mọi tầng, mọi nhà',
        subTitle:
          'Tận hưởng internet tốc độ cao tại nhà, giữ cho toàn bộ ngôi nhà được phủ sóng Internet & Wi-Fi',
        packages: [
          {
            id: 1,
            name: 'Internet SKY',
            price: '195,000đ',
            image: '/images/internetsky.webp',
            features: [
              'Trang bị Modem wifi 6',
              'Tốc độ Download/Upload 1Gbps',
              'Phù hợp cá nhân, hộ gia đình có từ 8 thiết bị kết nối trở lên',
            ],
          },
          {
            id: 2,
            name: 'Combo SKY Max',
            price: '235,000đ',
            image: '/images/goiinternetcombosky.webp',
            features: [
              'Trang bị Modem wifi 6 & FPT Play Box',
              'Xen gần 170 kênh truyền hình trong nước và quốc tế',
              'Phù hợp hộ gia đình',
              'Tiếp kiệm tới 590.000đ so với mua lẻ',
            ],
          },
          {
            id: 3,
            name: 'Combo Camera',
            price: '192,000đ',
            image: '/images/combointernetcameran.jpg',
            features: [
              'Trang bị Modem wifi 6',
              'Tích hợp F-Safe bảo mật chống virus, mã độc, tấn công mạng',
              'Tặng 1 thiết bị Access Point',
              'Áp dụng tại HN & TP.HCM',
            ],
          },
          {
            id: 4,
            name: 'F-Safe Home 1',
            price: '235,000đ',
            image: '/images/combointernetcameran.jpg',
            features: [
              'Trang bị Modem wifi 6',
              'Trang bị Camera IQ3S kèm gói lưu trữ Cloud 3 ngày',
              'Tặng 1 thiết bị Access Point',
              'Tiếp kiệm 950.000đ so với mua lẻ',
            ],
          },
        ],
      },
    ],
  },
  {
    gaming: [
      {
        id: 1,
        title: 'Internet tốc độ cao cấu hình riêng cho game thủ',
        subTitle:
          'Mang đến trải nghiệm game mượt mà, ổn định, giảm thiểu ping trong mọi thể loại game',
        packages: [
          {
            id: 1,
            name: 'Gói F-Game',
            price: '260,000đ',
            image: '/images/goifgamen.webp',
            features: [
              'Trang bị Modem wifi 6',
              'Tích hợp gói Ultra Fast hỗ trợ hơn 50+ tựa game',
              'Giảm độ trễ tới 16ms',
            ],
            popular: true,
          },
          {
            id: 2,
            name: 'Combo F-Game',
            price: '330,000đ',
            image: '/images/goicombofgamen.webp',
            features: [
              'Trang bị Modem Wi-Fi 6 & FPT Play Box',
              'Tích hợp gói Ultra Fast hỗ trợ hơn 50+ tựa game',
              'Xem gần 170 kênh truyền hình trong nước & quốc tế',
              'Tiết kiệm tới 630.000đ so với mua lẻ',
            ],
          },
          {
            id: 3,
            name: 'Internet META',
            price: '315,000đ',
            image: '/images/goiinternetmetan.webp',
            features: [
              'Trang bị Modem Wi-Fi 6 & FPT Play Box',
              'Tốc độ Download/Upload 1 Gbps',
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
    ],
  },
  {
    business: [
      {
        id: 1,
        title: 'Internet FPT - Kết nối vượt trội cho Doanh nghiệp',
        subTitle:
          'Giải pháp Internet tốc độ cao từ FPT Telecom giúp duy trì kết nối liền mạch, phủ sóng Wi-Fi cho toàn bộ doanh nghiệp',
        packages: [
          {
            id: 1,
            name: 'Super250',
            price: '545,000đ',
            image: '/images/goiinternetmetan.webp',
            features: [
              'Trang bị Modem Wi-Fi 6 Trang bị Modem Mikrotik RB760iGS/ EdgeRouter X SFP',
              'Phù hợp cá nhân, doanh nghiệp nhỏ (<50 thiết bị)',
            ],
          },
          {
            id: 2,
            name: 'Lux500',
            price: '800,000đ',
            image: '/images/goidnlux500.webp',
            features: [
              'Trang bị Modem Wi-Fi 6 & 1 thiết bị Access Point',
              'Tích hợp Ultra Fast tối ưu tốc độ',
              'Phù hợp cá nhân, doanh nghiệp (<125 thiết bị)',
            ],
          },
          {
            id: 3,
            name: 'Lux800',
            price: '1,000,000đ',
            image: '/images/goidnlux800.webp',
            features: [
              'Trang bị Modem Wi-Fi 6 & 1 thiết bị Access Point',
              'Tích hợp Ultra Fast tối ưu tốc độ',
              'Phù hợp cá nhân, doanh nghiệp (<160 thiết bị)',
            ],
          },
          {
            id: 4,
            name: 'Combo Lux500',
            price: '875,600đ',
            image: '/images/combolux500.jpg',
            features: [
              'Trang bị Modem Wi-Fi 6 & 1 thiết bị Access Point',
              'Tích hợp Ultra Fast tối ưu tốc độ',
              'Xem gần 130 kênh truyền hình trong nước & quốc tế',
              'Phù hợp cá nhân, doanh nghiệp (<125 thiết bị)',
              'Tiết kiệm tới 1.200.000đ so với mua lẻ',
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
                <h3 className='text-2xl font-bold text-gray-800'>{pkg.name}</h3>
                <span className='text-sm font-bold text-gray-500 mt-4'>
                  Chỉ từ
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
// Main InternetPackage Component
//
const InternetPackage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const defaultTabId = pathname.split('/')[1] || 'personal';
  const [activeTab, setActiveTab] = useState({
    id: defaultTabId,
    banner: 'images/internetcanhann.webp',
  });

  // Memoize tabs to avoid unnecessary re-renders.
  const tabs = useMemo(
    () => [
      {
        id: 'personal',
        label: 'Internet cá nhân',
        icon: FaWifi,
        banner: 'images/internetcanhann.webp',
      },
      {
        id: 'family',
        label: 'Internet gia đình',
        icon: FaHome,
        banner: 'images/bannerinternetgiadinhn.png',
      },
      {
        id: 'gaming',
        label: 'Internet game thủ',
        icon: FaGamepad,
        banner: 'images/bannerinternetgame.png',
      },
      {
        id: 'business',
        label: 'Internet doanh nghiệp',
        icon: FaBuilding,
        banner: 'images/internetdoanhnghiepn.webp',
      },
    ],
    []
  );

  useEffect(() => {
    setActiveTab({
      id: defaultTabId,
      banner: tabs.find((tab) => tab.id === defaultTabId).banner,
    })
  },[location.pathname])

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

  return (
    <>
      {/* Banner Section */}
      <div
        className='bg-no-repeat bg-cover bg-center py-16 h-[28rem]'
        style={{ backgroundImage: `url(${activeTab.banner})` }}
      />
      {/* Tabs */}
      <div className='flex flex-row justify-center bg-white rounded-xl shadow-lg p-2'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
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
            <div key={id} className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-4">
              <div className=''>
                <div className='mx-auto'>
                  <div className='text-center'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-600'>
                      {title}
                    </h1>
                    <p className='text-base sm:text-lg md:text-xl text-gray-400 px-2 md:px-8 lg:px-24'>
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

export default InternetPackage;
