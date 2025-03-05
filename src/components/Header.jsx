import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
  const [showUuDaiDropdown, setShowUuDaiDropdown] = useState(false);
  const [showOthers, setShowOthersDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubmenuOpen('');
  };

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menu ? '' : menu);
  };

  return (
    <header className="sticky top-0 relative z-50">
      <div className="bg-fpt-blue text-white py-3 px-4">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className='hidden sm:flex flex-row gap-2'>
            <a href='#'><span>Kênh kinh doanh</span></a> |
            <a href='#'><span>Kênh hỗ trợ khách hàng</span></a>
          </div>
          <div>
            <span className="text-xs sm:text-sm">Hotline hỗ trợ miễn phí : <strong>094.996.9962</strong></span>
          </div>
        </div>
      </div>

      <div className="bg-white py-2 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/fpt-logo.svg" alt="FPT Logo" className="h-8 sm:h-12" />
          </div>

          {/* Mobile menu button */}
          <div className="md:flex lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-fpt-red focus:outline-none"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-12">
              <div className="group relative" onMouseEnter={() => setShowProductsDropdown(true)} onMouseLeave={() => setShowProductsDropdown(false)}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-fpt-red font-medium flex items-center"
                >
                  Sản phẩm dịch vụ
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>

                {showProductsDropdown && (
                  <div className="absolute left-0 mt-2 w-[800px] bg-white shadow-lg rounded-md z-50 p-6 grid grid-cols-4 gap-6">
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
                  </div>
                )}
              </div>

              <div className="group relative" onMouseEnter={() => setShowNewsDropdown(true)} onMouseLeave={() => setShowNewsDropdown(false)}>
                <a href="#" className="text-gray-700 hover:text-fpt-red font-medium flex items-center">
                  Tin tức &amp; Khuyến mãi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                {showNewsDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 p-2">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tin tức</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Khuyến mãi</a>
                  </div>
                )}
              </div>

              <div className="group relative" onMouseEnter={() => setShowUuDaiDropdown(true)} onMouseLeave={() => setShowUuDaiDropdown(false)}>
                <a href="#" className="text-gray-700 hover:text-fpt-red font-medium flex items-center">
                  Ưu đãi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                {showUuDaiDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 p-2">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ưu đãi mới</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Combo tiết kiệm</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Khách hàng thân thiết</a>
                  </div>
                )}
              </div>

              <div className="group relative" onMouseEnter={() => setShowSupportDropdown(true)} onMouseLeave={() => setShowSupportDropdown(false)}>
                <a href="#" className="text-gray-700 hover:text-fpt-red font-medium flex items-center">
                  Hỗ trợ
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>

                {showSupportDropdown && (
                  <div className="absolute left-0 mt-2 w-[800px] bg-white shadow-lg rounded-md z-50 p-6 grid grid-cols-4 gap-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="mr-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">Hỗ trợ thông tin</h3>
                      </div>
                      <ul className="space-y-2 pl-8">
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Câu hỏi thường gặp</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Hướng dẫn sử dụng</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Hướng dẫn thủ tục</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Quản lý chất lượng dịch vụ</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Điều khoản bảo mật</a></li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="mr-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">Hỗ trợ kỹ thuật</h3>
                      </div>
                      <ul className="space-y-2 pl-8">
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Hướng dẫn cài đặt</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Xử lý sự cố</a></li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="mr-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">Phòng giao dịch</h3>
                      </div>
                      <ul className="space-y-2 pl-8">
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Địa điểm</a></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="group relative" onMouseEnter={() => setShowOthersDropdown(true)} onMouseLeave={() => setShowOthersDropdown(false)}>
                <a href="#" className="text-gray-700 hover:text-fpt-red font-medium flex items-center">
                  Khác
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                {showOthers && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 p-2">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Về chúng tôi</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tuyển dụng</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Liên hệ</a>
                  </div>
                )}
              </div>
            </nav>
          </div>

          <div className="hidden md:hidden lg:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="bg-gray-100 rounded-full py-3 px-6 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-fpt-red"
              />
              <FaSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:flex lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <img src="/fpt-logo.svg" alt="FPT Logo" className="h-8" />
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-fpt-red focus:outline-none"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4 border-b">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="w-full bg-gray-100 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-fpt-red"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <nav className="p-4">
              {/* Mobile Menu Items */}
              <div className="space-y-4">
                {/* Sản phẩm dịch vụ */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('products')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-red font-medium py-2"
                  >
                    <span>Sản phẩm dịch vụ</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        mobileSubmenuOpen === 'products' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'products' && (
                    <div className="pl-4 space-y-4 mt-2">
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Internet Cáp Quang</h3>
                        <ul className="space-y-2 pl-4">
                          <li><a href="#" className="text-gray-600">Internet cá nhân</a></li>
                          <li><a href="#" className="text-gray-600">Internet gia đình</a></li>
                          <li><a href="#" className="text-gray-600">Internet game thủ</a></li>
                          <li><a href="#" className="text-gray-600">Internet doanh nghiệp</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Truyền hình & Giải trí</h3>
                        <ul className="space-y-2 pl-4">
                          <li><a href="#" className="text-gray-600">FPT Play</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Giám Sát Thông Minh</h3>
                        <ul className="space-y-2 pl-4">
                          <li><a href="#" className="text-gray-600">FPT Camera</a></li>
                          <li><a href="#" className="text-gray-600">FPT Smart Home</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tin tức & Khuyến mãi */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('news')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-red font-medium py-2"
                  >
                    <span>Tin tức & Khuyến mãi</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        mobileSubmenuOpen === 'news' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'news' && (
                    <div className="pl-4 space-y-2 mt-2">
                      <a href="#" className="block text-gray-600">Tin tức</a>
                      <a href="#" className="block text-gray-600">Khuyến mãi</a>
                    </div>
                  )}
                </div>

                {/* Ưu đãi */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('deals')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-red font-medium py-2"
                  >
                    <span>Ưu đãi</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        mobileSubmenuOpen === 'deals' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'deals' && (
                    <div className="pl-4 space-y-2 mt-2">
                      <a href="#" className="block text-gray-600">Ưu đãi mới</a>
                      <a href="#" className="block text-gray-600">Combo tiết kiệm</a>
                      <a href="#" className="block text-gray-600">Khách hàng thân thiết</a>
                    </div>
                  )}
                </div>

                {/* Hỗ trợ */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('support')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-red font-medium py-2"
                  >
                    <span>Hỗ trợ</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        mobileSubmenuOpen === 'support' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'support' && (
                    <div className="pl-4 space-y-4 mt-2">
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Hỗ trợ thông tin</h3>
                        <ul className="space-y-2 pl-4">
                          <li><a href="#" className="text-gray-600">Câu hỏi thường gặp</a></li>
                          <li><a href="#" className="text-gray-600">Hướng dẫn sử dụng</a></li>
                          <li><a href="#" className="text-gray-600">Hướng dẫn thủ tục</a></li>
                          <li><a href="#" className="text-gray-600">Quản lý chất lượng dịch vụ</a></li>
                          <li><a href="#" className="text-gray-600">Điều khoản bảo mật</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-2">Hỗ trợ kỹ thuật</h3>
                        <ul className="space-y-2 pl-4">
                          <li><a href="#" className="text-gray-600">Hướng dẫn cài đặt</a></li>
                          <li><a href="#" className="text-gray-600">Xử lý sự cố</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Khác */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('other')}
                    className="flex items-center justify-between w-full text -left text-gray-700 hover:text-fpt-red font-medium py-2"
                  >
                    <span>Khác</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        mobileSubmenuOpen === 'other' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'other' && (
                    <div className="pl-4 space-y-2 mt-2">
                      <a href="#" className="block text-gray-600">Về chúng tôi</a>
                      <a href="#" className="block text-gray-600">Tuyển dụng</a>
                      <a href="#" className="block text-gray-600">Liên hệ</a>
                    </div>
                  )}
                </div>
              </div>
            </nav>

            <div className="p-4 border-t">
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-fpt-blue hover:text-fpt-red font-medium">Kênh kinh doanh</a>
                <a href="#" className="text-fpt-blue hover:text-fpt-red font-medium">Kênh hỗ trợ khách hàng</a>
                <div className="mt-2 pt-2 border-t">
                  <p className="text-gray-600">Hotline: <strong>094.996.9962</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;