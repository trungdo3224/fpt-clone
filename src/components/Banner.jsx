import React from 'react';

const Banner = () => {
  return (
    <div className='banner-bg py-8 relative h-60 md:h-[500px] lg:h-[600px] w-full overflow-hidden md:bg-center md:bg-no-repeat'>
      <img src='images/atti.webp' alt='banner' className='object-cover' />
    </div>
  );
};

export default Banner;
