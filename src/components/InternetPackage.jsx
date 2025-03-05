import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import RegisterModal from './RegisterModal';
import { FaWifi, FaHome, FaGamepad, FaBuilding } from 'react-icons/fa';

const InternetPackage = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const tabs = [
    { id: 'personal', label: 'Internet cá nhân', icon: FaWifi },
    { id: 'family', label: 'Internet gia đình', icon: FaHome },
    { id: 'gaming', label: 'Internet game thủ', icon: FaGamepad },
    { id: 'business', label: 'Internet doanh nghiệp', icon: FaBuilding },
  ];

  const packages = {
    personal: [
      {
        id: 1,
        name: 'Internet GIGA',
        speed: '150 Mbps',
        price: '165,000đ',
        image: '/images/goiinternetgigan.webp',
        features: [
          'Tốc độ Download/Upload 150Mbps',
          'Tốc độ nội địa, tốc độ quốc tế ổn định 24/7',
          'Miễn phí lắp đặt',
          'Trang bị Modem wifi 6',
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
          'Tốc độ Download/Upload 250Mbps',
          'Tốc độ nội địa, tốc độ quốc tế ổn định 24/7',
          'Miễn phí lắp đặt',
          'Trang bị Modem wifi 6',
        ],
      },
      {
        id: 3,
        name: 'Internet SKY',
        speed: '250 Mbps',
        price: '195,000đ',
        image: '/images/internetsky.webp',
        features: [
          'Tốc độ Download/Upload 250Mbps',
          'Tốc độ nội địa, tốc độ quốc tế ổn định 24/7',
          'Miễn phí lắp đặt',
          'Trang bị Modem wifi 6',
        ],
      },
    ],
    family: [
      {
        id: 3,
        name: 'Internet GIGA F1',
        speed: '150 Mbps',
        price: '185,000đ',
        image: '/images/goiinternetgigan.webp',
        features: [
          'Tốc độ Download/Upload 150Mbps',
          'Phù hợp cho gia đình 3-4 người',
          'Miễn phí lắp đặt và thiết bị',
          'Trang bị Modem wifi 6',
        ],
        popular: true,
      },
      {
        id: 4,
        name: 'Internet SKY F1',
        speed: '250 Mbps',
        price: '225,000đ',
        image: '/images/internetsky.webp',
        features: [
          'Tốc độ Download/Upload 250Mbps',
          'Phù hợp cho gia đình 4-6 người',
          'Miễn phí lắp đặt và thiết bị',
          'Trang bị Modem wifi 6',
        ],
      },
    ],
    gaming: [
      {
        id: 5,
        name: 'F-GAME GIGA',
        speed: '400 Mbps',
        price: '200,000đ',
        image: '/images/goifgamen.webp',
        features: [
          'Tích hợp gói Ultra Fast hỗ trợ tốc độ cao',
          'Trang bị Modem wifi 6',
          'IP tĩnh cho game thủ',
          'Độ trễ thấp cho gaming',
        ],
        popular: true,
      },
      {
        id: 6,
        name: 'F-GAME SKY',
        speed: '500 Mbps',
        price: '250,000đ',
        image: '/images/goifgamen.webp',
        features: [
          'Tốc độ Download/Upload 500Mbps',
          'Độ trễ thấp cho gaming',
          'IP tĩnh và Modem wifi 6',
          'Hỗ trợ kỹ thuật 24/7',
        ],
      },
    ],
    business: [
      {
        id: 7,
        name: 'Super250',
        speed: '250 Mbps',
        price: '545,000đ',
        image: '/images/goiinternetmetan.webp',
        features: [
          'Tốc độ Download/Upload 250Mbps',
          'IP tĩnh cho doanh nghiệp',
          'Hỗ trợ kỹ thuật 24/7',
          'Băng thông cam kết CIR',
        ],
        popular: true,
      },
      {
        id: 8,
        name: 'Lux500',
        speed: '500 Mbps',
        price: '800,000đ',
        image: '/images/goiinternetmetan.webp',
        features: [
          'Tốc độ Download/Upload 500Mbps',
          'Multiple IP tĩnh',
          'Hỗ trợ kỹ thuật ưu tiên',
          'Băng thông cam kết CIR',
        ],
      },
    ],
  };

  const handleRegisterClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };
  return (
    <>
      <div className='bg-blue-600 py-16 h-96'></div>

      <div className='container mx-auto px-4 -mt-8'>
        {/* Tabs */}
        <div className='bg-white rounded-xl shadow-lg p-2 mb-12'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center p-4 rounded-lg transition-all ${
                    activeTab === tab.id
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
        <div className='m-16'>
          <div className='container mx-auto px-4'>
            <div className='text-center text-white'>
              <h1 className='text-4xl md:text-5xl font-bold mb-4 text-black'>
                Internet cáp quang tốc độ cao
              </h1>
              <p className='text-xl md:text-2xl text-blue-100 text-blue-500'>
                Trải nghiệm Internet siêu tốc cho mọi nhu cầu
              </p>
            </div>
          </div>
        </div>
        {/* Package Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16'>
          {packages[activeTab].map((pkg) => (
            <div
              key={pkg.id}
              className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 relative'
            >
              {pkg.popular && (
                <div className='absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                  Phổ biến
                </div>
              )}
              <div
                className='h-48 bg-cover bg-center relative'
                style={{ backgroundImage: `url(${pkg.image})` }}
              >
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>
                  <h3 className='text-2xl font-bold'>{pkg.name}</h3>
                  <div className='text-lg'>{pkg.speed}</div>
                </div>
              </div>
              <div className='p-6'>
                <div className='flex items-baseline mb-6'>
                  <span className='text-3xl font-bold text-blue-600'>
                    {pkg.price}
                  </span>
                  <span className='text-gray-500 ml-2'>/tháng</span>
                </div>
                <ul className='space-y-4 mb-8'>
                  {pkg.features.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      <FaCheck className='text-green-500 mt-1 mr-3 flex-shrink-0' />
                      <span className='text-gray-600'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleRegisterClick(pkg)}
                  className='w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'
                >
                  Đăng ký ngay
                </button>
              </div>
            </div>
          ))}
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

export default InternetPackage;
