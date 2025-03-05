import PackageSection from '../components/PackageSection';
import CategorySection from '../components/CategorySection';
import PromotionBanners from '../components/PromotionBanners';
import NewsSection from '../components/NewsSection';

const Home = () => {
  return (
    <div className='container mx-auto px-16 py-12'>
      <PackageSection />
      <CategorySection />
      <PromotionBanners />
      <NewsSection />
    </div>
  );
};

export default Home;

//
