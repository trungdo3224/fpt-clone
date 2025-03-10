import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  // Check screen size and update the state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768); // 768px is the standard md breakpoint
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className='relative w-full overflow-hidden bg-center bg-no-repeat'>
      {/* Use picture element for better responsive image handling */}
      <picture>
        {/* Mobile image (under 768px) */}
        <source 
          media="(max-width: 767px)" 
          srcSet="images/attysangloiketnoifptm.png" 
        />
        {/* Desktop image (768px and above) */}
        <source 
          media="(min-width: 768px)" 
          srcSet="images/atti.webp" 
        />
        {/* Fallback image */}
        <img 
          src={isMobileView ? 'images/attysangloiketnoifptm.png' : 'images/atti.webp'} 
          alt='FPT Telecom Banner' 
          className='w-full object-cover h-auto md:h-auto' 
        />
      </picture>
    </div>
  );
};

export default Banner;
