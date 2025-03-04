import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import QuickLinks from './components/QuickLinks';
import PackageSection from './components/PackageSection';
import CategorySection from './components/CategorySection';
import PromotionBanners from './components/PromotionBanners';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <QuickLinks />
      <div className="container mx-auto px-4 py-8">
        <PackageSection />
        <CategorySection />
        <PromotionBanners />
        <NewsSection />
      </div>
      <Footer />
      <FloatingChat />
    </div>
  );
}

export default App;