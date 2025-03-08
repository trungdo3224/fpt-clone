import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import { FaCheck, FaWifi } from 'react-icons/fa';

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

const ProductCard = ({ product }) => {
  return (
    <div className='bg-gray-200 rounded-lg shadow-md overflow-hidden'>
      <div>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-96 object-cover'
        />
        <div className='flex flex-col p-4'>
          <h3 className='text-lg font-semibold mt-4'>{product.name}</h3>
          <p className='text-gray-600 font-normal mt-2'>
            Chỉ từ:{' '}
            <span className='text-blue-700 font-light mt-2'>
              {product.price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Medicare = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const defaultTabId = pathname.split('/')[1] || 'fptmedicare';
  const [activeTab, setActiveTab] = useState({
    id: defaultTabId,
    banner: 'images/fptmedicare.png',
  });

  const tabs = useMemo(
    () => [
      {
        id: 'fptmedicare',
        label: 'Medicare',
        icon: FaWifi,
        banner: 'images/fptmedicare.png',
      },
    ],
    []
  );

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

  const activeSections = useMemo(() => {
    const sectionObj = initSections.find((sec) => sec[activeTab.id]);
    return sectionObj ? sectionObj[activeTab.id] : [];
  }, [activeTab]);

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {/* Banner Section */}
      <div
        className='bg-no-repeat bg-cover bg-center py-16 h-[28rem]'
        style={{ backgroundImage: `url(${activeTab.banner})` }}
      />

      {/* Tabs */}
      <div className='flex flex-row justify-center bg-white rounded-xl shadow-lg p-2'>
        <div className='grid gap-2'>
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

      <div className='mx-auto px-32 py-12'>
        {activeSections.map((section) => (
          <div key={section.id} className='mb-24'>
            <div className='flex flex-col gap-y-2 text-center mb-12'>
              <h1 className='text-4xl font-bold text-gray-800 mb-4'>
                {section.title}
              </h1>
              <p className='text-4xl font-bold text-gray-800 mb-4'>
                {section.subTitle}
              </p>
              <p className='text-lg text-gray-800'>{section.description}</p>
            </div>

            {section.packages && (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
              <div className='mt-12'>
                <img
                  src={section.image}
                  alt='FPT Medicare App'
                  className={`w-full max-w-4xl mx-auto rounded-lg ${
                    section.id !== 2 && 'shadow-lg'
                  }`}
                />
              </div>
            )}
          </div>
        ))}
        <div className='flex items-center justify-center'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-full'>
            Tải ứng dụng ngay
          </button>
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
