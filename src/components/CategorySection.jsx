import React from 'react';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      image: 'images/product-link1.png',
    },
    {
      id: 2,
      image: 'images/product-link2.png',
    },
    {
      id: 3,
      image: 'images/product-link3.png',
    },
    {
      id: 4,
      image: 'images/product-link4.png',
    },
    {
      id: 5,
      image: 'images/product-link5.png',
    },
    {
      id: 6,
      image: 'images/product-link6.png',
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
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
