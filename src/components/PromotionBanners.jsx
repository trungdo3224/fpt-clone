import React from 'react';

const PromotionBanners = () => {
  return (
    <div class='grid grid-cols-2 gap-4 h-96'>
      <div class='bg-green-500 p-6 rounded-lg bg-[url(images/fpt-wifi-6-ket-noi-sieu-vuot-troi.jpg)] bg-cover bg-center bg-no-repeat'></div>

      <div class='grid grid-rows-2 gap-4'>
        <div class='bg-orange-200 p-4 flex items-center rounded-lg bg-[url(images/tiktok-fpt-live-qua-bay-ve-nha.jpg)] bg-cover bg-center bg-no-repeat'></div>

        <div class='bg-yellow-200 p-4 flex items-center rounded-lg bg-[url(images/dangkylapdatinternet.webp)] bg-cover bg-center bg-no-repeat'></div>
      </div>
    </div>
  );
};

export default PromotionBanners;
