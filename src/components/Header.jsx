import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [showEndow, setShowEndow] = useState(false);
  const [showOthers, setShowOthers] = useState(false);

  return (
    <header>
      <div className="bg-fpt-blue text-white py-3 px-4">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className='flex flex-row gap-2'>
            <a href='#'><span>Kênh kinh doanh</span></a> |
            <a href='#'><span>Kênh hỗ trợ khách hàng</span></a>
          </div>
          <div>
            <span>Hotline hỗ trợ miễn phí : <strong>094.996.9962</strong></span>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-2 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
        <img src="/fpt-logo.svg" alt="FPT Logo" className="h-12" />
          <div className="flex items-center space-x-8">
            
            
            <nav className="hidden md:flex space-x-12">
              <div className="group relative">
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-fpt-red font-medium flex items-center"
                  onMouseEnter={() => setShowProductsDropdown(true)}
                  onMouseLeave={() => setShowProductsDropdown(false)}
                >
                  Sản phẩm dịch vụ
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                
                {/* Dropdown content */}
                {showProductsDropdown && (
                  <div 
                    className="absolute left-0 mt-2 w-[800px] bg-white shadow-lg rounded-md z-50 p-6 grid grid-cols-4 gap-6"
                    onMouseEnter={() => setShowProductsDropdown(true)}
                    onMouseLeave={() => setShowProductsDropdown(false)}
                  >
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
              
              <div className="group relative">
                <a href="#" className="text-gray-700 hover:text-fpt-red font-medium flex items-center">
                  Tin tức & Khuyến mãi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                
              </div>
              
              <div className="group relative">
                <a href="#" className="text-gray-700 hover:text-fpt-red font-medium flex items-center">
                  Ưu đãi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
              
              <div className="group relative">
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-fpt-red font-medium flex items-center"
                  onMouseEnter={() => setShowSupportDropdown(true)}
                  onMouseLeave={() => setShowSupportDropdown(false)}
                >
                  Hỗ trợ
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                
                {/* Support Dropdown content */}
                {showSupportDropdown && (
                  <div 
                    className="absolute left-0 mt-2 w-[800px] bg-white shadow-lg rounded-md z-50 p-6 grid grid-cols-4 gap-6"
                    onMouseEnter={() => setShowSupportDropdown(true)}
                    onMouseLeave={() => setShowSupportDropdown(false)}
                  >
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-gray-800">Nhân viên hỗ trợ</h3>
                      </div>
                      <ul className="space-y-2 pl-8">
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Tổng đài 24/7</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Ứng dụng Hi FPT</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-fpt-red text-sm">Kênh Zalo OA</a></li>
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
              <div className="group relative">
                <a 
                  href="#" 
                  className="text-gray-700 hover:text-fpt-red font-medium flex items-center"
                  onMouseEnter={() => setShowOthers(true)}
                  onMouseLeave={() => setShowOthers(false)}
                >
                  Khác
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
          
          <div className="flex items-center">
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
    </header>
  );
};

export default Header;