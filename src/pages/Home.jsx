import React from 'react';
import SEO from '../components/SEO';
import PackageSection from '../components/PackageSection';
import CategorySection from '../components/CategorySection';
import PromotionBanners from '../components/PromotionBanners';
import NewsSection from '../components/NewsSection';
import Banner from '../components/Banner';
import QuickLinks from '../components/QuickLinks';

const Home = () => {
  // Home page structured data for rich results
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FPT Telecom",
    "url": "https://fpttelecoms.com",
    "logo": "https://fpttelecoms.com/images/fpt-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "19006600",
      "contactType": "customer service",
      "availableLanguage": ["Vietnamese", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/fpttelecom.net",
      "https://twitter.com/fpttelecom",
      "https://www.linkedin.com/company/fpt-telecom"
    ]
  };

  return (
    <>
      <SEO 
        title="Trang chủ"
        description="FPT Telecom - Nhà cung cấp dịch vụ Internet và Giải pháp Công nghệ hàng đầu Việt Nam. Trải nghiệm tốc độ cao, ổn định và dịch vụ chất lượng."
        keywords="FPT Telecom, Lắp mạng FPT, Internet FPT, Cáp quang FPT, Khuyến mãi FPT"
        url="https://fpt.vn"
        structuredData={homeStructuredData}
      />
      <Banner />
      <div className='sm:px-6 md:px-8 lg:px-16 xl:px-32'>
        <QuickLinks />
      </div>
      <div className='flex flex-col px-12 md:px-20 xl:px-32 py-16 box-border'>
        <PackageSection />
        <CategorySection />
        <PromotionBanners />
        <NewsSection />
      </div>
    </>
  );
};

export default Home;
