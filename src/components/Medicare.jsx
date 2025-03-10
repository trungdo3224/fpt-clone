import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import { FaHandHoldingMedical } from "react-icons/fa6";

const initSections = [
  {
    fptmedicare: [
      {
        id: 1,
        title: 'FPT MediCare',
        subTitle: 'Làm chủ đường huyết - Làm chủ cuộc sống',
        description: 'Máy đo đường huyết FPT Nipro Premier Alpha',
        packages: [
          {
            id: 1,
            name: 'Combo Máy đo đường huyết và Que thử đường huyết NIPRO Premier Alpha',
            price: '990,000đ',
            image: '/images/f-medicare1.png',
            features: [
              'Máy đo đường huyết chính xác',
              'Que thử đường huyết kèm theo',
              'Bảo hành chính hãng',
            ],
          },
          {
            id: 2,
            name: 'Que thử đường huyết NIPRO Premier (25T)',
            price: '250,000đ',
            image: '/images/f-medicare2.png',
            features: [
              'Que thử chính hãng',
              'Đóng gói 25 que/hộp',
              'Độ chính xác cao',
            ],
          },
          {
            id: 3,
            name: 'Máy đo đường huyết NIPRO Premier Alpha',
            price: '990,000đ',
            image: '/images/maydoduonghuyetnipropremieralpha.png',
            features: [
              'Thiết kế nhỏ gọn',
              'Đo nhanh trong 5 giây',
              'Lưu trữ 500 kết quả',
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'Ứng dụng theo dõi và quản lý đường huyết FPT Medicare',
        subTitle: '',
        description:
          'Giải pháp quản lý đường huyết thông minh cho người bệnh tiểu đường',
        image: '/images/fmediacare-img.png',
      },
    ],
  },
];

const ProductCard = ({ product, onRegisterClick }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform hover:shadow-lg hover:-translate-y-1'>
      <div className='relative pt-[75%]'>
        <img
          src={product.image}
          alt={product.name}
          className='absolute inset-0 w-full h-full object-contain p-4'
          loading="lazy"
        />
      </div>
      <div className='flex flex-col p-4 flex-grow'>
        <h3 className='text-base sm:text-lg font-semibold mb-2'>{product.name}</h3>
        <p className='text-gray-600 text-sm sm:text-base mb-4'>
          Chỉ từ:{' '}
          <span className='text-blue-700 font-medium'>
            {product.price}
          </span>
        </p>
        <ul className='space-y-2 mb-4 flex-grow'>
          {product.features?.map((feature, index) => (
            <li key={index} className='flex items-start text-xs sm:text-sm text-gray-600'>
              <span className='text-green-500 mr-2'>✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onRegisterClick(product)}
          className='mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors'
        >
          Đặt mua ngay
        </button>
      </div>
    </div>
  );
};

const Medicare = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const defaultTabId = pathname.split('/')[1] || 'fptmedicare';
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const [activeTab, setActiveTab] = useState({
    id: defaultTabId,
    banner: '',
    smallBanner: ''
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tabs = useMemo(
    () => [
      {
        id: 'fptmedicare',
        label: 'Medicare',
        icon: FaHandHoldingMedical,
        banner: 'images/fptmedicare.png',
        smallBanner: 'images/fptmedicaremobile.png'
      },
    ],
    []
  );

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.id === defaultTabId) || tabs[0];
    setActiveTab({
      id: defaultTabId,
      banner: currentTab.banner,
      smallBanner: currentTab.smallBanner
    });
  }, [defaultTabId, tabs]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleRegisterClick = useCallback((pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  }, []);

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

  const activeSections = useMemo(() => {
    const sectionObj = initSections.find((sec) => sec[activeTab.id]);
    return sectionObj ? sectionObj[activeTab.id] : [];
  }, [activeTab]);

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {/* Banner Section with responsive image handling */}
      <div
        className='relative bg-no-repeat bg-cover bg-center py-16 h-48 xs:h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[32rem]'
        style={{ 
          backgroundImage: `url(${isMobile ? activeTab.smallBanner : activeTab.banner})` 
        }}
      >
        {/* Optional overlay for better text visibility if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-end pb-8">
            {/* Optional banner content can go here */}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className='flex flex-row justify-center bg-white rounded-xl shadow-lg p-2'>
        <div className='grid gap-2'>
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
                <span className='font-medium'>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className='mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-8 sm:py-12'>
        {activeSections.map((section) => (
          <div key={section.id} className='mb-12 sm:mb-16 md:mb-24'>
            <div className='flex flex-col gap-y-2 text-center mb-8 sm:mb-12'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4'>
                {section.title}
              </h1>
              {section.subTitle && (
                <p className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4'>
                  {section.subTitle}
                </p>
              )}
              {section.description && (
                <p className='text-sm sm:text-base md:text-lg text-gray-800'>
                  {section.description}
                </p>
              )}
            </div>

            {section.packages && (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
                {section.packages.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onRegisterClick={handleRegisterClick}
                  />
                ))}
              </div>
            )}

            {section.image && (
              <div className='mt-8 sm:mt-12'>
                <img
                  src={section.image}
                  alt='FPT Medicare App'
                  className={`w-full max-w-4xl mx-auto rounded-lg ${
                    section.id !== 2 && 'shadow-lg'
                  }`}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
        
        <div className='flex items-center justify-center py-4 sm:py-6'>
          <a 
            href="https://apps.apple.com/vn/app/fpt-medicare/id1590765695" 
            target="_blank" 
            rel="noopener noreferrer"
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-full transition-colors text-sm sm:text-base'
          >
            Tải ứng dụng ngay
          </a>
        </div>
      </div>

      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </div>
  );
};

export default Medicare;
