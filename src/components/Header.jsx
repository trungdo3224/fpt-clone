import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = () => {
  const [showProductsDropdownItems, setShowProductsDropdownItems] = useState([
    {
      id: 1,
      title: 'Internet Cáp Quang',
      icon: <img src='images/icon-internet-fpt.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'Internet cá nhân',
          href: '/personal',
        },
        {
          id: 2,
          title: 'Internet gia đình',
          href: '/family',
        },
        {
          id: 3,
          title: 'Internet game thủ',
          href: '/gaming',
        },
        {
          id: 4,
          title: 'Internet doanh nghiệp',
          href: '/business',
        },
      ],
    },
    {
      id: 2,
      title: 'Truyền hình & Giải trí',
      icon: <img src='images/icon-fptplay.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'FPT Play',
          href: '/fptplay',
        },
      ],
    },
    {
      id: 3,
      title: 'Giám Sát Thông Minh',
      icon: <img src='images/icon-smarthome.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'FPT Camera',
          href: '/fptcamera',
        },
        {
          id: 2,
          title: 'FPT Smart Home',
          href: '/fptsmarthome',
        },
      ],
    },
    {
      id: 4,
      title: 'Bảo Mật An Toàn',
      icon: <img src='images/icon-safe.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'F-Safe',
          href: '/fsafe',
        },
        {
          id: 2,
          title: 'F-Safe Go',
          href: '/fsafego',
        },
      ],
    },
    {
      id: 5,
      title: 'Sức khỏe & Y Tế',
      icon: <img src='images/icon-fpt-medicare.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'FPT Medicare',
          href: '/fptmedicare',
        },
      ],
    },
  ]);
  const [showNewsDropdownItems, setShowNewsDropdownItems] = useState([
    {
      id: 1,
      title: 'Tin Tức',
    },
    {
      id: 2,
      title: 'Khuyến Mãi',
    },
  ]);
  const [showSupportDropdownItems, setShowSupportDropdownItems] = useState([
    {
      id: 1,
      title: 'Hỗ trợ thông tin',
      icon: <img src='images/icon-ho-tro-thong-tin.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'Câu hỏi thường gặp',
        },
        {
          id: 2,
          title: 'Hướng dẫn sử dụng',
        },
        {
          id: 3,
          title: 'Hướng dẫn thủ tục',
        },
        {
          id: 4,
          title: 'Quản lý chất lượng dịch vụ',
        },
        {
          id: 5,
          title: 'Điều khoản bảo mật',
        },
      ],
    },
    {
      id: 2,
      title: 'Hỗ trợ kỹ thuật',
      icon: <img src='images/icon-ho-tro-ky-thuat.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'Hướng dẫn cài đặt',
        },
        {
          id: 2,
          title: 'Xử lý sự cố',
        },
      ],
    },
    {
      id: 3,
      title: 'Nhân viên hỗ trợ',
      icon: <img src='images/icon-lien-he-24-7.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'Tổng đài 24/7',
        },
        {
          id: 2,
          title: 'Ứng dụng Hi FPT',
        },
        {
          id: 3,
          title: 'Kênh Zalo OA',
        },
      ],
    },
    {
      id: 4,
      title: 'Phòng giao dịch',
      icon: <img src='images/device-message.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'Địa điểm',
        },
      ],
    },
  ]);
  const [showPromoteDropdownItems, setShowPromoteDropdownItems] = useState([
    {
      id: 1,
      title: 'Khách hàng thân thiết',
    },
    {
      id: 2,
      title: 'Giới thiệu bạn bè',
    },
  ]);
  const [showOthersDropdownItems, setShowOthersDropdownItems] = useState([
    {
      id: 1,
      title: 'Đăng Ký Online',
      href: '/register',
    },
    {
      id: 2,
      title: 'Member FPT',
    },
    {
      id: 3,
      title: 'Thanh Toán Online',
    },
  ]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState('');
  const customTitleStyle = {
    fontWeight: '500',
    fontSize: '18px',
    padding: '5px',
    cursor: 'pointer',
    opacity: '0.7',
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubmenuOpen('');
  };

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menu ? '' : menu);
  };

  return (
    <header className='sticky top-0 z-50'>
      <div className='bg-fpt-blue text-white py-3 px-4'>
        <div className='container mx-auto flex justify-between items-center text-xs'>
          <div className='hidden sm:flex flex-row gap-2'>
            <a href='/personal' className='hover:text-fpt-orange'>
              <span>Khách hàng cá nhân</span>
            </a>
            |
            <a href='/business' className='hover:text-fpt-orange'>
              <span>Khách hàng doanh nghiệp</span>
            </a>
          </div>
          <div>
            <span className='text-xs sm:text-sm'>
              Hotline hỗ trợ miễn phí : <strong>096.930.2332</strong>
            </span>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center shadow-sm h-16 gap-x-16'>
          <div>
            <a href='/'>
              <img src='/fpt-logo.svg' alt='FPT Logo' className='h-8 sm:h-12' />
            </a>
          </div>
          <Navbar />

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:flex lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40'>
          <div className='fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 overflow-y-auto'>
            <div className='p-4 border-b flex justify-between items-center'>
              <a href='/'>
                <img src='/fpt-logo.svg' alt='FPT Logo' className='h-8' />
              </a>
              <button
                onClick={toggleMobileMenu}
                className='text-gray-700 hover:text-fpt-red focus:outline-none'
              >
                <FaTimes className='h-6 w-6' />
              </button>
            </div>

            <div className='p-4 border-b'>
              <div className='relative mb-4'>
                <input
                  type='text'
                  placeholder='Tìm kiếm'
                  className='w-full bg-gray-100 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-fpt-red'
                />
                <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
              </div>
            </div>

            <nav className='p-4'>
              {/* Mobile Menu Items */}
              <div className='space-y-4'>
                {/* Sản phẩm dịch vụ */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('products')}
                    className='flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-red font-medium py-2'
                  >
                    <span>Sản phẩm dịch vụ</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        mobileSubmenuOpen === 'products' ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'products' && (
                    <div className='pl-4 space-y-4 mt-2'>
                      <div>
                        <h3 className='font-medium text-gray-800 mb-2'>
                          Internet Cáp Quang
                        </h3>
                        <ul className='space-y-2 pl-4'>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Internet cá nhân
                            </a>
                          </li>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Internet gia đình
                            </a>
                          </li>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Internet game thủ
                            </a>
                          </li>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Internet doanh nghiệp
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className='font-medium text-gray-800 mb-2'>
                          Truyền hình & Giải trí
                        </h3>
                        <ul className='space-y-2 pl-4'>
                          <li>
                            <a href='#' className='text-gray-600'>
                              FPT Play
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className='font-medium text-gray-800 mb-2'>
                          Giám Sát Thông Minh
                        </h3>
                        <ul className='space-y-2 pl-4'>
                          <li>
                            <a href='#' className='text-gray-600'>
                              FPT Camera
                            </a>
                          </li>
                          <li>
                            <a href='#' className='text-gray-600'>
                              FPT Smart Home
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tin tức & Khuyến mãi */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('news')}
                    className='flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-red font-medium py-2'
                  >
                    <span>Tin tức & Khuyến mãi</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        mobileSubmenuOpen === 'news' ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'news' && (
                    <div className='pl-4 space-y-2 mt-2'>
                      <a href='#' className='block text-gray-600'>
                        Tin tức
                      </a>
                      <a href='#' className='block text-gray-600'>
                        Khuyến mãi
                      </a>
                    </div>
                  )}
                </div>

                {/* Ưu đãi */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('deals')}
                    className='flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-red font-medium py-2'
                  >
                    <span>Ưu đãi</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        mobileSubmenuOpen === 'deals' ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'deals' && (
                    <div className='pl-4 space-y-2 mt-2'>
                      <a href='#' className='block text-gray-600'>
                        Ưu đãi mới
                      </a>
                      <a href='#' className='block text-gray-600'>
                        Combo tiết kiệm
                      </a>
                      <a href='#' className='block text-gray-600'>
                        Khách hàng thân thiết
                      </a>
                    </div>
                  )}
                </div>

                {/* Hỗ trợ */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('support')}
                    className='flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-red font-medium py-2'
                  >
                    <span>Hỗ trợ</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        mobileSubmenuOpen === 'support' ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'support' && (
                    <div className='pl-4 space-y-4 mt-2'>
                      <div>
                        <h3 className='font-medium text-gray-800 mb-2'>
                          Hỗ trợ thông tin
                        </h3>
                        <ul className='space-y-2 pl-4'>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Câu hỏi thường gặp
                            </a>
                          </li>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Hướng dẫn sử dụng
                            </a>
                          </li>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Hướng dẫn thủ tục
                            </a>
                          </li>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Quản lý chất lượng dịch vụ
                            </a>
                          </li>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Điều khoản bảo mật
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className='font-medium text-gray-800 mb-2'>
                          Hỗ trợ kỹ thuật
                        </h3>
                        <ul className='space-y-2 pl-4'>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Hướng dẫn cài đặt
                            </a>
                          </li>
                          <li>
                            <a href='#' className='text-gray-600'>
                              Xử lý sự cố
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Khác */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('other')}
                    className='flex items-center justify-between w-full text -left text-gray-700 hover:text-fpt-red font-medium py-2'
                  >
                    <span>Khác</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        mobileSubmenuOpen === 'other' ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'other' && (
                    <div className='pl-4 space-y-2 mt-2'>
                      <a href='#' className='block text-gray-600'>
                        Về chúng tôi
                      </a>
                      <a href='#' className='block text-gray-600'>
                        Tuyển dụng
                      </a>
                      <a href='#' className='block text-gray-600'>
                        Liên hệ
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </nav>

            <div className='p-4 border-t'>
              <div className='flex flex-col space-y-2'>
                <a
                  href='#'
                  className='text-fpt-blue hover:text-fpt-red font-medium'
                >
                  Kênh kinh doanh
                </a>
                <a
                  href='#'
                  className='text-fpt-blue hover:text-fpt-red font-medium'
                >
                  Kênh hỗ trợ khách hàng
                </a>
                <div className='mt-2 pt-2 border-t'>
                  <p className='text-gray-600'>
                    Hotline: <strong>094.996.9962</strong>
                  </p>
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
