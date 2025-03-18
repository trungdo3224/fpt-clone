import React from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      image: 'images/product-link1.png',
      url: 'personal'
    },
    {
      id: 2,
      image: 'images/product-link2.png',
      url: 'family'
    },
    {
      id: 3,
      image: 'images/product-link3.png',
      url: 'business'
    },
    {
      id: 4,
      image: 'images/product-link4.png',
      url: 'gaming'
    },
    {
      id: 5,
      image: 'images/product-link5.png',
      url: 'fptplay'
    },
    {
      id: 6,
      image: 'images/product-link6.png',
      url: 'fsafe'
    },
  ];

  return (
    <div className='my-12'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        {categories.map((category) => (
          <div
            key={category.id}
            className='category-card relative rounded-lg overflow-hidden'
          >
            <div className='aspect-w-1 aspect-h-1 cursor-pointer'>
              <Link to={`${category.url}`}>
                <img
                  src={category.image}
                  className='w-full h-full object-cover'
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
