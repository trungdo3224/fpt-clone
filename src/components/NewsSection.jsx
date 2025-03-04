import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Vui hội Halloween cùng Hi-FPT: 1 chạm đến đích, nhận ngay quà',
      image: 'https://i.ibb.co/Qp9VKBM/halloween.jpg',
      date: 'Ngày 30/10'
    },
    {
      id: 2,
      title: 'Những bộ phim không bỏ lỡ trên FPT Play trong tháng 10/2024',
      image: 'https://i.ibb.co/Qp9VKBM/movies.jpg',
      date: 'Ngày 15/10'
    },
    {
      id: 3,
      title: 'Cúp Quốc gia 2024/25 LMS trạnh vào mùa, bắt ngay tin vui',
      image: 'https://i.ibb.co/Qp9VKBM/sports.jpg',
      date: 'Ngày 20/10'
    },
    {
      id: 4,
      title: 'FPT và SolarWinds hợp tác cung cấp giải pháp giám sát toàn diện cho doanh nghiệp',
      image: 'https://i.ibb.co/Qp9VKBM/business-news.jpg',
      date: 'Ngày 25/10'
    }
  ];

  return (
    <div className="my-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Tin tức</h2>
      <p className="text-center text-xl text-gray-600 mb-8">Thông cáo báo chí</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsItems.map((item) => (
          <div key={item.id} className="news-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 hover:text-fpt-red transition line-clamp-2 h-12">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{item.date}</p>
              <a href="#" className="text-sm text-fpt-blue hover:underline mt-2 inline-block">
                Xem thêm
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Duplicate news for the second row as shown in the image */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {newsItems.map((item) => (
          <div key={`duplicate-${item.id}`} className="news-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 hover:text-fpt-red transition line-clamp-2 h-12">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{item.date}</p>
              <a href="#" className="text-sm text-fpt-blue hover:underline mt-2 inline-block">
                Xem thêm
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
