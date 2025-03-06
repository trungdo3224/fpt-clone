import React from 'react';

const PromotionBanners = () => {
  return (
    <div className='xl: grid sm: grid-cols-1 md: grid-cols-2 gap-4 h-96'>
      <div className='p-6 rounded-lg bg-[url(images/fpt-wifi-6-ket-noi-sieu-vuot-troi.jpg)] bg-cover bg-center bg-no-repeat'></div>

      <div className='grid grid-rows-2 gap-4'>
        <div className='p-4 flex items-center rounded-lg bg-[url(images/tiktok-fpt-live-qua-bay-ve-nha.jpg)] bg-cover bg-center bg-no-repeat'>
        </div>

        <div className=' flex items-center rounded-lg'>
          <a href='/register'>
            <img
              src='images/dangkylapdatinternet.webp'
              className='object-cover rounded-lg'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanners;
