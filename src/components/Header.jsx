import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showNewsPromotionsDropdown, setShowNewsPromotionsDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [showOthersDropdown, setShowOthersDropdown] = useState(false);
  const [showUuDaiDropdown, setShowUuDaiDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const newsPromotionsDropdownRef = useRef(null);
  const supportDropdownRef = useRef(null);
  const othersDropdownRef = useRef(null);
  const uuDaiDropdownRef = useRef(null);
  const [dropdownWidth, setDropdownWidth] = useState('max-w-full');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const updateDropdownWidth = () => {
      if (navRef.current) {
        setDropdownWidth(`${navRef.current.offsetWidth}px`);
      } else {
        setDropdownWidth('max-w-full');
      }
    };

    updateDropdownWidth();

    window.addEventListener('resize', updateDropdownWidth);

    return () => {
      window.removeEventListener('resize', updateDropdownWidth);
    };
  }, []);


  return (
    <header>
      <div className="bg-fpt-blue text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className='flex flex-row gap-2'>
            <a href='#' className="hover:text-gray-200"><span>Kênh kinh doanh</span></a> |
            <a href='#' className="hover:text-gray-200"><span>Kênh hỗ trợ khách hàng</span></a>
          </div>
          <div>
            <span>Hotline hỗ trợ miễn phí : <strong>094.996.9962</strong></span>
          </div>
        </div>
      </div>

      <div className="bg-white py-2 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/fpt-logo.svg" alt="FPT Logo" className="h-10 md:h-12 mr-2 md:mr-0" />
          </div>

          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-fpt-red focus:outline-none">
                <GiHamburgerMenu className="h-6 w-6" />
              </button>
            </div>

            <nav className="hidden md:flex space-x-8 lg:space-x-12" ref={navRef}>
              <div className="group relative" onMouseLeave={() => setTimeout(() => {
                if (!productsDropdownRef.current?.matches(':hover')) {
                  setShowProductsDropdown(false);
                }
              }, 100)}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-fpt-red font-medium flex items-center"
                  onMouseEnter={() => setShowProductsDropdown(true)}
                >
                  Sản phẩm dịch vụ
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>

                {showProductsDropdown && (
                  <div
                    ref={productsDropdownRef}
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-50 p-6 grid grid-cols-4 gap-6"
                    style={{ width: '800px' }} // SET fixed width here
                    onMouseEnter={() => setShowProductsDropdown(true)}
                    onMouseLeave={() => setShowProductsDropdown(false)}
                  >
                    {/* ... Product dropdown content ... */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="mr-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">Internet Cáp Quang</h3>
                      </div>
                      <ul className="space-y-2 pl-8">
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Internet cá nhân</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Internet gia đình</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Internet game thủ</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Internet doanh nghiệp</a></li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="mr-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">Truyền hình & Giải trí</h3>
                      </div>
                      <ul className="space-y-2 pl-8">
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">FPT Play</a></li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="mr-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">Giám Sát Thông Minh</h3>
                      </div>
                      <ul className="space-y-2 pl-8">
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">FPT Camera</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">FPT Smart Home</a></li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="mr-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">Bảo Mật An Toàn</h3>
                      </div>
                      <ul className="space-y-2 pl-8">
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">F-Safe</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">F-Safe Go</a></li>
                      </ul>
                    </div>

                    <div className="col-span-4">
                      <div className="flex items-center mb-4">
                        <div className="mr-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">Sức khỏe & Y Tế</h3>
                      </div>
                      <ul className="space-y-2 pl-8">
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">FPT MediCare</a></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="group relative"  onMouseLeave={() => setTimeout(() => {
                if (!newsPromotionsDropdownRef.current?.matches(':hover')) {
                  setShowNewsPromotionsDropdown(false);
                }
              }, 100)}>
                <a href="#"
                   className="text-gray-700 hover:text-fpt-red font-medium flex items-center"
                   onMouseEnter={() => setShowNewsPromotionsDropdown(true)}
                >
                  Tin tức & Khuyến mãi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                {showNewsPromotionsDropdown && (
                  <div
                    ref={newsPromotionsDropdownRef}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 p-2"
                    onMouseEnter={() => setShowNewsPromotionsDropdown(true)}
                    onMouseLeave={() => setShowNewsPromotionsDropdown(false)}
                  >
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:text-fpt-red font-medium">Tin tức</a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:text-fpt-red font-medium">Khuyến mãi</a>
                  </div>
                )}
              </div>

              <div className="group relative" onMouseLeave={() => setTimeout(() => {
                if (!uuDaiDropdownRef.current?.matches(':hover')) {
                  setShowUuDaiDropdown(false);
                }
              }, 100)}>
                <a href="#" className="text-gray-700 hover:text-fpt-red font-medium flex items-center"
                   onMouseEnter={() => setShowUuDaiDropdown(true)}
                >
                  Ưu đãi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                {showUuDaiDropdown && (
                  <div
                    ref={uuDaiDropdownRef}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 p-2"
                    onMouseEnter={() => setShowUuDaiDropdown(true)}
                    onMouseLeave={() => setShowUuDaiDropdown(false)}
                  >
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:text-fpt-red font-medium">Khách hàng thân thiết</a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:text-fpt-red font-medium">Giới thiệu bạn bè</a>
                  </div>
                )}
              </div>


              <div className="group relative" onMouseLeave={() => setTimeout(() => {
                if (!othersDropdownRef.current?.matches(':hover')) {
                  setShowOthersDropdown(false);
                }
              }, 100)}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-fpt-red font-medium flex items-center"
                  onMouseEnter={() => setShowOthersDropdown(true)}
                >
                  Khác
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                 {showOthersDropdown && (
                  <div
                    ref={othersDropdownRef}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 p-2"
                    onMouseEnter={() => setShowOthersDropdown(true)}
                    onMouseLeave={() => setShowOthersDropdown(false)}
                  >
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:text-fpt-red font-medium">Đăng ký Online</a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:text-fpt-red font-medium">Member FPT</a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:text-fpt-red font-medium">Thanh toán Online</a>
                  </div>
                )}
              </div>
            </nav>
          </div>

          <div className="flex items-center">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="bg-gray-100 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-fpt-red"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-2">
          <nav className="flex flex-col px-4">
            <a href="#" className="block py-2 text-gray-700 hover:text-fpt-red font-medium">Sản phẩm dịch vụ</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-fpt-red font-medium">Tin tức & Khuyến mãi</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-fpt-red font-medium">Ưu đãi</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-fpt-red font-medium">Hỗ trợ</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-fpt-red font-medium">Khác</a>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="bg-gray-100 rounded-full py-2 px-4 pr-10 text-sm w-full focus:outline-none focus:ring-2 focus:ring-fpt-red"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;