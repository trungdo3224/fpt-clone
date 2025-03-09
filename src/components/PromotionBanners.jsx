import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PromotionBanners = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 mb-8 md:mb-12 lg:mb-16'>
      {/* Main large banner - takes full width on mobile, 2/3 on tablet, half on desktop */}
      <div className='md:col-span-2 lg:col-span-1 aspect-[16/9] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-lg shadow-md'>
        <motion.div 
          className='h-full w-full relative group'
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src='images/fpt-wifi-6-ket-noi-sieu-vuot-troi.jpg'
            alt='FPT Wifi 6 - Kết nối siêu vượt trội'
            className='w-full h-full object-cover'
            loading="lazy"
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
            <div className='p-4 text-white'>
              <h3 className='font-bold text-lg md:text-xl'>FPT Wifi 6 - Kết nối siêu vượt trội</h3>
              <p className='text-sm md:text-base'>Trải nghiệm tốc độ kết nối không dây vượt trội</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right column with two stacked banners */}
      <div className='md:col-span-1 lg:col-span-1 grid grid-rows-2 gap-4'>
        {/* Top small banner */}
        <div className='aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-lg shadow-md'>
          <motion.div 
            className='h-full relative group'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src='images/tiktok-fpt-live-qua-bay-ve-nha.jpg'
              alt='TikTok FPT - Live quà bay về nhà'
              className='w-full h-full object-cover'
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
              <div className='p-4 text-white'>
                <h3 className='font-bold text-sm md:text-base'>TikTok FPT - Live quà bay về nhà</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom small banner with link */}
        <div className='aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-lg shadow-md'>
          <Link to='/register' className='block h-full'>
            <motion.div 
              className='h-full relative group'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src='images/dangkylapdatinternet.webp'
                alt='Đăng ký lắp đặt internet'
                className='w-full h-full object-cover'
                loading="lazy"
              />
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 flex items-end justify-center'>
                <div className='p-3 md:p-4 w-full'>
                  <motion.div 
                    className='bg-fpt-orange text-white text-center py-2 md:py-3 rounded-lg font-medium text-sm md:text-base'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Đăng ký ngay
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanners;
