import React from 'react';

const PromotionBanners = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
          <img 
            src="https://i.ibb.co/Qp9VKBM/fpt-wifi.jpg" 
            alt="FPT WiFi & Kết nối siêu vượt trội" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
          <img 
            src="https://i.ibb.co/Qp9VKBM/fpt-live.jpg" 
            alt="FPT Live - Quà bạn về nhà" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      <div className="mt-6">
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
          <img 
            src="https://i.ibb.co/Qp9VKBM/fpt-internet.jpg" 
            alt="Tư vấn ngay Internet FPT" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionBanners;