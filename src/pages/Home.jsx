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
