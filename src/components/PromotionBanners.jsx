import React from 'react';

const PromotionBanners = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12 lg:mb-0 h-auto lg:h-96'>
      <div className='h-48 md:h-64 lg:h-full rounded-lg bg-[url(images/fpt-wifi-6-ket-noi-sieu-vuot-troi.jpg)] bg-cover bg-center bg-no-repeat'></div>

      <div className='grid grid-rows-2 gap-4 h-auto lg:h-full'>
        <div className='h-48 md:h-64 lg:h-full rounded-lg bg-[url(images/tiktok-fpt-live-qua-bay-ve-nha.jpg)] bg-cover bg-center bg-no-repeat'>
        </div>

        <div className='h-48 md:h-64 lg:h-full rounded-lg'>
          <a href='/register' className='block h-full'>
            <img
              src='images/dangkylapdatinternet.webp'
              alt='Đăng ký lắp đặt internet'
              className='w-full h-full object-cover rounded-lg'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanners;