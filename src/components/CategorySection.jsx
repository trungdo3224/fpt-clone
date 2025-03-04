import React from 'react';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: 'Internet Cá Nhân',
      image: 'https://i.ibb.co/Qp9VKBM/person1.jpg',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 2,
      title: 'Internet Gia Đình',
      image: 'https://i.ibb.co/Qp9VKBM/family.jpg',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 3,
      title: 'Internet Doanh Nghiệp',
      image: 'https://i.ibb.co/Qp9VKBM/business.jpg',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      id: 4,
      title: 'Internet Game Thủ',
      image: 'https://i.ibb.co/Qp9VKBM/gamer.jpg',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 5,
      title: 'Truyền Hình Giải Trí',
      image: 'https://i.ibb.co/Qp9VKBM/entertainment.jpg',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 6,
      title: 'Gói Kết Hợp Đa Dịch Vụ',
      image: 'https://i.ibb.co/Qp9VKBM/combo.jpg',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <div className="my-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="category-card relative rounded-lg overflow-hidden cursor-pointer">
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70`}></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <h3 className="font-bold text-center">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;