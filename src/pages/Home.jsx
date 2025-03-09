import PackageSection from '../components/PackageSection';
import CategorySection from '../components/CategorySection';
import PromotionBanners from '../components/PromotionBanners';
import NewsSection from '../components/NewsSection';
import Banner from '../components/Banner';
import QuickLinks from '../components/QuickLinks';

const Home = () => {
  return (
    <>
      <Banner />
      <QuickLinks />
      <div className='flex flex-col px-12 md:px-20 xl:px-32 py-16 box-border space-y-24'>
        <PackageSection />
        <CategorySection />
        <PromotionBanners />
        <NewsSection />
      </div>
    </>
  );
};

export default Home;