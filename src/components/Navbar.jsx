import React, { useRef, useState, useEffect } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import '../index.css'; // Import the custom CSS

const Navbar = () => {
  const navbarRef = useRef(null);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const [navbarLeft, setNavbarLeft] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState('');
  const [isIpadMiniPortrait, setIsIpadMiniPortrait] = useState(false);
  const [isIpadMiniLandscape, setIsIpadMiniLandscape] = useState(false);

  // Detect iPad Mini
  useEffect(() => {
    const checkIpadMini = () => {
      const width = window.innerWidth;
      const pixelRatio = window.devicePixelRatio || 1;
      const isApproximately163DPI = Math.abs(pixelRatio - 2) < 0.1;

      setIsIpadMiniPortrait(width === 768 && isApproximately163DPI);
      setIsIpadMiniLandscape(width === 1024 && isApproximately163DPI);
    };

    checkIpadMini();
    window.addEventListener('resize', checkIpadMini);
    return () => window.removeEventListener('resize', checkIpadMini);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const updateNavbarDimensions = () => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        setNavbarWidth(rect.width);
        setNavbarLeft(rect.left);
      }
    };
    updateNavbarDimensions();
    window.addEventListener('resize', updateNavbarDimensions);
    window.addEventListener('scroll', updateNavbarDimensions);

    return () => {
      window.removeEventListener('resize', updateNavbarDimensions);
      window.removeEventListener('scroll', updateNavbarDimensions);
    };
  }, []);

  const productsDropdownItems = [
    {
      id: 1,
      title: 'Internet Cáp Quang',
      icon: <img src='images/icon-internet-fpt.png' className='w-6 h-6' />,
      children: [
        { id: 1, title: 'Internet cá nhân', href: '/personal' },
        { id: 2, title: 'Internet gia đình', href: '/family' },
        { id: 3, title: 'Internet game thủ', href: '/gaming' },
        { id: 4, title: 'Internet doanh nghiệp', href: '/business' },
      ],
    },
    {
      id: 2,
      title: 'Truyền hình & Giải trí',
      icon: <img src='images/icon-fptplay.png' className='w-6 h-6' />,
      children: [{ id: 1, title: 'FPT Play', href: '/fptplay' }],
    },
    {
      id: 3,
      title: 'Giám Sát Thông Minh',
      icon: <img src='images/icon-smarthome.png' className='w-6 h-6' />,
      children: [
        { id: 1, title: 'FPT Camera', href: '/fptcamera' },
        { id: 2, title: 'FPT Smart Home', href: '/fptsmarthome' },
      ],
    },
    {
      id: 4,
      title: 'Bảo Mật An Toàn',
      icon: <img src='images/icon-safe.png' className='w-6 h-6' />,
      children: [
        { id: 1, title: 'F-Safe', href: '/fsafe' },
        { id: 2, title: 'F-Safe Go', href: '/fsafe-go' },
      ],
    },
    {
      id: 5,
      title: 'Sức khỏe & Y Tế',
      icon: <img src='images/icon-fpt-medicare.png' className='w-6 h-6' />,
      children: [{ id: 1, title: 'FPT Medicare', href: '/fptmedicare' }],
    },
  ];

  const newsDropdownItems = [
    { id: 1, title: 'Tin Tức', href: '/news' },
    { id: 2, title: 'Khuyến Mãi', href: '/promotions' },
  ];

  const supportDropdownItems = [
    {
      id: 1,
      title: 'Hỗ trợ thông tin',
      icon: <img src='images/icon-ho-tro-thong-tin.png' className='w-6 h-6' />,
      children: [
        { id: 1, title: 'Câu hỏi thường gặp', href: '/support/faq' },
        { id: 2, title: 'Hướng dẫn sử dụng', href: '/support/user-guide' },
        { id: 3, title: 'Hướng dẫn thủ tục', href: '/support/procedures' },
        { id: 4, title: 'Quản lý chất lượng dịch vụ', href: '/support/quality' },
        { id: 5, title: 'Điều khoản bảo mật', href: '/support/privacy' },
      ],
    },
    {
      id: 2,
      title: 'Hỗ trợ kỹ thuật',
      icon: <img src='images/icon-ho-tro-ky-thuat.png' className='w-6 h-6' />,
      children: [
        { id: 1, title: 'Hướng dẫn cài đặt', href: '/support/setup' },
        { id: 2, title: 'Xử lý sự cố', href: '/support/troubleshoot' },
      ],
    },
    {
      id: 3,
      title: 'Nhân viên hỗ trợ',
      icon: <img src='images/icon-lien-he-24-7.png' className='w-6 h-6' />,
      children: [
        { id: 1, title: 'Tổng đài 24/7', href: '/support/hotline' },
        { id: 2, title: 'Ứng dụng Hi FPT', href: '/support/hi-fpt' },
        { id: 3, title: 'Kênh Zalo OA', href: '/support/zalo' },
      ],
    },
    {
      id: 4,
      title: 'Phòng giao dịch',
      icon: <img src='images/device-message.png' className='w-6 h-6' />,
      children: [{ id: 1, title: 'Địa điểm', href: '/support/locations' }],
    },
  ];

  const promoteDropdownItems = [
    { id: 1, title: 'Khách hàng thân thiết', href: '/loyalty' },
    { id: 2, title: 'Giới thiệu bạn bè', href: '/referral' },
  ];

  const othersDropdownItems = [
    { id: 1, title: 'Đăng Ký Online', href: '/register' },
    { id: 2, title: 'Member FPT', href: '/member' },
    { id: 3, title: 'Thanh Toán Online', href: '/payment' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubmenuOpen('');
  };

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menu ? '' : menu);
  };

  const deviceSpecificClass = isIpadMiniPortrait
    ? 'navbar-ipad-mini-portrait'
    : isIpadMiniLandscape
    ? 'navbar-ipad-mini-landscape'
    : '';

  return (
    <nav
      ref={navbarRef}
      className={`w-full h-full flex flex-row justify-between items-center ${deviceSpecificClass}`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/">
          <img src="/fpt-logo.svg" alt="FPT Logo" className="h-8 sm:h-10 md:h-12 lg:h-14" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:hidden lg:flex flex-row gap-1 lg:gap-4 h-full">
        {/* Products */}
        <li className="group relative h-full">
          <Link
            to="/"
            className="nav-link flex items-center h-full px-2 lg:px-4 text-gray-800 font-semibold text-base lg:text-lg"
          >
            <span>Sản phẩm dịch vụ</span>
            <FaChevronDown className="dropdown-icon ml-1 text-xs" />
          </Link>
          <div
            className="invisible group-hover:visible fixed bg-white shadow-lg rounded-b-xl z-50"
            style={{
              width: navbarWidth,
              left: navbarLeft,
              top: navbarRef.current ? navbarRef.current.getBoundingClientRect().bottom : 'auto',
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 p-4 lg:pb-16 lg:px-24 lg:pt-8">
              {productsDropdownItems.map((item) => (
                <div key={item.id} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6">
                      {item.icon.type === 'img' ? (
                        <img src={item.icon.props.src} className="w-full h-full" />
                      ) : (
                        React.cloneElement(item.icon, { className: 'w-full h-full' })
                      )}
                    </div>
                    <h3 className="font-medium text-gray-900 text-base lg:text-lg">{item.title}</h3>
                  </div>
                  <ul className="space-y-2 ml-8 md:ml-9 font-semibold text-gray-600">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          to={child.href}
                          className="text-gray-600 hover:text-fpt-orange text-sm md:text-base lg:text-lg"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>

        {/* News */}
        <li className="group relative h-full">
          <Link
            to=""
            className="flex items-center h-full px-2 lg:px-4 text-gray-700 font-semibold text-base lg:text-lg whitespace-nowrap"
          >
            <span>Tin tức</span>
            <FaChevronDown className="ml-1 text-xs" />
          </Link>
          <div
            className="invisible group-hover:visible absolute left-0 top-full bg-white shadow-lg rounded-b-xl z-50"
            style={{ width: '250px' }}
          >
            <ul className="py-2">
              {newsDropdownItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 lg:py-4 text-gray-700 font-medium text-base lg:text-lg hover:text-fpt-orange hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Promotions */}
        <li className="group relative h-full">
          <Link
            to="/"
            className="flex items-center h-full px-2 lg:px-4 text-gray-700 font-semibold text-base lg:text-lg"
          >
            <span>Ưu đãi</span>
            <FaChevronDown className="ml-1 text-xs" />
          </Link>
          <div
            className="invisible group-hover:visible absolute left-0 top-full bg-white shadow-lg rounded-b-xl z-50"
            style={{ width: '250px' }}
          >
            <ul className="py-2">
              {promoteDropdownItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 lg:py-4 text-gray-700 font-medium text-base lg:text-lg hover:text-fpt-orange hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Support */}
        <li className="group relative h-full">
          <Link
            to="/"
            className="flex items-center h-full px-2 lg:px-4 text-gray-700 font-semibold text-base lg:text-lg"
          >
            <span>Hỗ trợ</span>
            <FaChevronDown className="ml-1 text-xs" />
          </Link>
          <div
            className="invisible group-hover:visible fixed bg-white shadow-lg rounded-b-xl z-50"
            style={{
              width: navbarWidth,
              left: navbarLeft,
              top: navbarRef.current ? navbarRef.current.getBoundingClientRect().bottom : 'auto',
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 p-4 lg:p-6 lg:pb-16 lg:px-24 lg:pt-8">
              {supportDropdownItems.map((item) => (
                <div key={item.id} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6">
                      {item.icon.type === 'img' ? (
                        <img src={item.icon.props.src} className="w-full h-full" />
                      ) : (
                        React.cloneElement(item.icon, { className: 'w-full h-full' })
                      )}
                    </div>
                    <h3 className="font-medium text-gray-900 text-base lg:text-lg">{item.title}</h3>
                  </div>
                  <ul className="space-y-2 ml-9 md:ml-9">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          to={child.href}
                          className="text-gray-600 hover:text-fpt-orange text-sm md:text-base lg:text-lg font-semibold"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>

        {/* Others */}
        <li className="group relative h-full">
          <Link
            to="/"
            className="flex items-center h-full px-2 lg:px-4 text-gray-700 font-semibold text-base lg:text-lg"
          >
            <span>Khác</span>
            <FaChevronDown className="ml-1 text-xs" />
          </Link>
          <div
            className="invisible group-hover:visible absolute left-0 top-full bg-white shadow-lg rounded-b-lg z-50"
            style={{ width: '250px' }}
          >
            <ul className="py-2">
              {othersDropdownItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 lg:py-4 text-gray-700 font-medium text-base lg:text-lg hover:text-fpt-orange hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>

      {/* Search & Sidebar */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Desktop Search Box */}
        <div className="hidden lg:flex items-center relative">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-[100px] sm:w-[120px] lg:w-[150px] h-[40px] sm:h-[48px] bg-gray-100 rounded-full px-4 text-sm focus:outline-none focus:ring-2"
          />
          <button className="absolute right-3 hover:opacity-40 opacity-60">
            <FaSearch className="search-icon w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>

        {/* Tablet Search Icon */}
        <button className="hidden md:hidden lg:hidden hover:text-fpt-orange">
          <FaSearch className="search-icon w-5 h-5" />
        </button>

        {/* Mobile menu button */}
        <button
          className="md:flex lg:hidden hover:text-fpt-orange p-2"
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          <FaBars className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 md:flex lg:hidden">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 overflow-y-auto transition-transform duration-300">
            <div className="p-4 border-b flex justify-between items-center">
              <a href="/">
                <img src="/fpt-logo.svg" alt="FPT Logo" className="h-8" />
              </a>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-fpt-red focus:outline-none"
                aria-label="Close menu"
              >
                <FaTimes className="h-8 w-8" />
              </button>
            </div>

            {/* Mobile search */}
            <div className="p-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="w-full bg-gray-100 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-fpt-red"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Mobile navigation menu */}
            <nav className="p-4">
              <div className="space-y-3">
                {/* Mobile Products Menu */}
                <div className="border-b border-gray-100 pb-3">
                  <button
                    onClick={() => toggleMobileSubmenu('products')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-orange font-medium py-2 text-lg"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'products' && (
                    <div className="pl-4 space-y-3 mt-2">
                      {productsDropdownItems.map((item) => (
                        <div key={item.id}>
                          <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                            <div className="w-5 h-5 mr-2">
                              {item.icon.type === 'img' ? (
                                <img src={item.icon.props.src} className="w-full h-full" />
                              ) : (
                                React.cloneElement(item.icon, { className: 'w-full h-full' })
                              )}
                            </div>
                            {item.title}
                          </h3>
                          <ul className="space-y-2 pl-7">
                            {item.children.map((child) => (
                              <li key={child.id}>
                                <Link to={child.href} className="text-gray-600 hover:text-fpt-orange">
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile News Menu */}
                <div className="border-b border-gray-100 pb-3">
                  <button
                    onClick={() => toggleMobileSubmenu('news')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-orange font-medium py-2 text-lg"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'news' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {newsDropdownItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.href}
                          className="block text-gray-600 hover:text-fpt-orange py-1"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Promotions Menu */}
                <div className="border-b border-gray-100 pb-3">
                  <button
                    onClick={() => toggleMobileSubmenu('deals')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-orange font-medium py-2 text-lg"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'deals' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {promoteDropdownItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.href}
                          className="block text-gray-600 hover:text-fpt-orange py-1"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Support Menu */}
                <div className="border-b border-gray-100 pb-3">
                  <button
                    onClick={() => toggleMobileSubmenu('support')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-orange font-medium py-2 text-lg"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'support' && (
                    <div className="pl-4 space-y-3 mt-2">
                      {supportDropdownItems.map((item) => (
                        <div key={item.id}>
                          <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                            <div className="w-5 h-5 mr-2">
                              {item.icon.type === 'img' ? (
                                <img src={item.icon.props.src} className="w-full h-full" />
                              ) : (
                                React.cloneElement(item.icon, { className: 'w-full h-full' })
                              )}
                            </div>
                            {item.title}
                          </h3>
                          <ul className="space-y-2 pl-7">
                            {item.children.map((child) => (
                              <li key={child.id}>
                                <Link to={child.href} className="text-gray-600 hover:text-fpt-orange">
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Others Menu */}
                <div className="border-b border-gray-100 pb-3">
                  <button
                    onClick={() => toggleMobileSubmenu('other')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-fpt-orange font-medium py-2 text-lg"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === 'other' && (
                    <div className="pl-4 space-y-2 mt-2">
                      {othersDropdownItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.href}
                          className="block text-gray-600 hover:text-fpt-orange py-1"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </nav>

            {/* Mobile Footer Links */}
            <div className="p-4 border-t">
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-fpt-blue hover:text-fpt-orange font-medium">
                  Kênh kinh doanh
                </a>
                <a href="#" className="text-fpt-blue hover:text-fpt-orange font-medium">
                  Kênh hỗ trợ khách hàng
                </a>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-gray-600">
                    Hotline: <strong>094.996.9962</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;