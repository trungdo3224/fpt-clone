import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { useLocation } from 'react-router-dom';
import InternetPackage from '../components/InternetPackage';

const InternetPackages = () => {
  const location = useLocation();
  const [packageType, setPackageType] = useState('');
  const [seoData, setSeoData] = useState({
    title: '',
    description: '',
    keywords: '',
  });

  // Set SEO data based on current route
  useEffect(() => {
    switch (location.pathname) {
      case '/personal':
        setPackageType('personal');
        setSeoData({
          title: 'Gói cước Internet Cá nhân',
          description: 'Gói cước Internet Cáp quang FPT dành cho cá nhân và hộ gia đình với tốc độ cao, ổn định và giá cả hợp lý.',
          keywords: 'Internet FPT, Cáp quang FPT, Gói cước cá nhân, Internet tốc độ cao, Lắp mạng FPT',
        });
        break;
      case '/family':
        setPackageType('family');
        setSeoData({
          title: 'Gói cước Internet Gia đình',
          description: 'Gói cước Internet Cáp quang FPT dành cho gia đình với nhiều thiết bị kết nối, tốc độ cao và ổn định.',
          keywords: 'Internet gia đình, FPT, Cáp quang gia đình, Wifi cho nhiều thiết bị, Internet FPT cho gia đình',
        });
        break;
      case '/gaming':
        setPackageType('gaming');
        setSeoData({
          title: 'Gói cước Internet Gaming',
          description: 'Gói cước Internet Gaming FPT với độ trễ thấp, tốc độ siêu cao dành cho game thủ và streamer.',
          keywords: 'Internet Gaming, FPT Gaming, Internet độ trễ thấp, Mạng cho game thủ, Cáp quang chơi game',
        });
        break;
      case '/business':
        setPackageType('business');
        setSeoData({
          title: 'Gói cước Internet Doanh nghiệp',
          description: 'Giải pháp Internet Cáp quang FPT dành cho doanh nghiệp với đường truyền riêng, ổn định và dịch vụ hỗ trợ 24/7.',
          keywords: 'Internet doanh nghiệp, FPT Telecom, Cáp quang doanh nghiệp, Đường truyền riêng, Internet công ty',
        });
        break;
      default:
        setPackageType('all');
        setSeoData({
          title: 'Các gói cước Internet FPT',
          description: 'Tìm hiểu các gói cước Internet Cáp quang FPT với nhiều lựa chọn phù hợp cho mọi nhu cầu sử dụng.',
          keywords: 'Internet FPT, Gói cước Internet, Cáp quang FPT, Băng thông rộng, Lắp đặt Internet',
        });
    }
  }, [location.pathname]);

  // Create structured data for products
  const getStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Gói Super100",
          "description": "Internet tốc độ 100Mbps phù hợp cho người dùng cá nhân",
          "offers": {
            "@type": "Offer",
            "price": "220000",
            "priceCurrency": "VND"
          }
        },
        {
          "@type": "Product",
          "name": "Gói Super200",
          "description": "Internet tốc độ 200Mbps phù hợp cho gia đình 2-4 người",
          "offers": {
            "@type": "Offer",
            "price": "290000",
            "priceCurrency": "VND"
          }
        }
      ]
    };
  };

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={`https://fpttelecoms.com${location.pathname}`}
        structuredData={getStructuredData()}
      />
      <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white mb-12'>
        <InternetPackage />
      </div>
    </>
  );
};

export default InternetPackages;
