import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const navbarRef = useRef(null);
  const [navbarWidth, setNavbarWidth] = useState(0);

  useEffect(() => {
    const updateNavbarWidth = () => {
      if (navbarRef.current) {
        setNavbarWidth(navbarRef.current.offsetWidth);
      }
    };

    updateNavbarWidth();
    window.addEventListener('resize', updateNavbarWidth);

    return () => {
      window.removeEventListener('resize', updateNavbarWidth);
    };
  }, []);
  const productsDropdownItems = [
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
      title: 'Bảo Mật An Toàn',
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
      title: 'Sức khỏe & Y Tế',
      icon: <img src='images/icon-fpt-medicare.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'FPT Medicare',
          href: '/fptmedicare',
        },
      ],
    },
  ];

  const newsDropdownItems = [
    {
      id: 1,
      title: 'Tin Tức',
      href: '/news',
    },
    {
      id: 2,
      title: 'Khuyến Mãi',
      href: '/promotions',
    },
  ];

  const supportDropdownItems = [
    {
      id: 1,
      title: 'Hỗ trợ thông tin',
      icon: <img src='images/icon-ho-tro-thong-tin.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'Câu hỏi thường gặp',
          href: '/support/faq',
        },
        {
          id: 2,
          title: 'Hướng dẫn sử dụng',
          href: '/support/user-guide',
        },
        {
          id: 3,
          title: 'Hướng dẫn thủ tục',
          href: '/support/procedures',
        },
        {
          id: 4,
          title: 'Quản lý chất lượng dịch vụ',
          href: '/support/quality',
        },
        {
          id: 5,
          title: 'Điều khoản bảo mật',
          href: '/support/privacy',
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
          href: '/support/setup',
        },
        {
          id: 2,
          title: 'Xử lý sự cố',
          href: '/support/troubleshoot',
        },
      ],
    },
    {
      id: 3,
      title: 'Nhân viên hỗ trợ',
      icon: <img src='images/icon-lien-he-24-7.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'Tổng đài 24/7',
          href: '/support/hotline',
        },
        {
          id: 2,
          title: 'Ứng dụng Hi FPT',
          href: '/support/hi-fpt',
        },
        {
          id: 3,
          title: 'Kênh Zalo OA',
          href: '/support/zalo',
        },
      ],
    },
    {
      id: 4,
      title: 'Phòng giao dịch',
      icon: <img src='images/device-message.png' className='w-6 h-6' />,
      children: [
        {
          id: 1,
          title: 'Địa điểm',
          href: '/support/locations',
        },
      ],
    },
  ];

  const promoteDropdownItems = [
    {
      id: 1,
      title: 'Khách hàng thân thiết',
      href: '/loyalty',
    },
    {
      id: 2,
      title: 'Giới thiệu bạn bè',
      href: '/referral',
    },
  ];

  const othersDropdownItems = [
    {
      id: 1,
      title: 'Đăng Ký Online',
      href: '/register',
    },
    {
      id: 2,
      title: 'Member FPT',
      href: '/member',
    },
    {
      id: 3,
      title: 'Thanh Toán Online',
      href: '/payment',
    },
  ];

  return (
    <nav ref={navbarRef} className='flex-1 h-full translate-x-[20%]'>
      <ul className='flex flex-row gap-4 h-full'>
        {/* Products */}
        <li className='group relative h-full'>
          <Link
            to='/'
            className='flex items-center h-full px-4 text-gray-800 font-semibold'
          >
            <span>Sản phẩm dịch vụ</span>
            <FaChevronDown className='ml-1 text-xs' />
          </Link>
          <div
            className='invisible group-hover:visible absolute top-full left-0 bg-white shadow-lg rounded-b-lg translate-x-[-20%]'
            style={{
              width: navbarWidth,
            }}
          >
            <div className='grid grid-cols-4 gap-6 p-6'>
              {productsDropdownItems.map((item) => (
                <div key={item.id} className='space-y-4'>
                  <div className='flex items-center gap-2'>
                    {item.icon}
                    <h3 className='font-medium text-gray-900'>{item.title}</h3>
                  </div>
                  <ul className='space-y-2'>
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          to={child.href}
                          className='text-gray-600 hover:text-fpt-orange text-sm'
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
        <li className='group relative h-full'>
          <Link
            to='/news'
            className='flex items-center h-full px-4 text-gray-700 hover:text-fpt-orange'
          >
            <span>Tin tức & Khuyến mãi</span>
            <FaChevronDown className='ml-1 text-xs' />
          </Link>
          <div
            className='invisible group-hover:visible absolute left-0 top-full bg-white shadow-lg rounded-b-lg'
            style={{ width: '250px' }}
          >
            <ul className='py-2'>
              {newsDropdownItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className='block px-4 py-2 text-gray-600 hover:text-fpt-orange hover:bg-gray-50'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Promotions */}
        <li className='group relative h-full'>
          <Link
            to='/promotions'
            className='flex items-center h-full px-4 text-gray-700 hover:text-fpt-orange'
          >
            <span>Ưu đãi</span>
            <FaChevronDown className='ml-1 text-xs' />
          </Link>
          <div
            className='invisible group-hover:visible absolute left-0 top-full bg-white shadow-lg rounded-b-lg'
            style={{ width: '250px' }}
          >
            <ul className='py-2'>
              {promoteDropdownItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className='block px-4 py-2 text-gray-600 hover:text-fpt-orange hover:bg-gray-50'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Support */}
        <li className='group relative h-full'>
          <Link
            to='/support'
            className='flex items-center h-full px-4 text-gray-700 hover:text-fpt-orange'
          >
            <span>Hỗ trợ</span>
            <FaChevronDown className='ml-1 text-xs' />
          </Link>
          <div
            className='invisible group-hover:visible absolute translate-x-[-67%] left-0 top-full bg-white shadow-lg rounded-b-lg'
            style={{ width: navbarWidth }}
          >
            <div className='grid grid-cols-4 gap-6 p-6'>
              {supportDropdownItems.map((item) => (
                <div key={item.id} className='space-y-4'>
                  <div className='flex items-center gap-2'>
                    {item.icon}
                    <h3 className='font-medium text-gray-900'>{item.title}</h3>
                  </div>
                  <ul className='space-y-2'>
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          to={child.href}
                          className='text-gray-600 hover:text-fpt-orange text-sm'
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
        <li className='group relative h-full'>
          <Link
            to='/others'
            className='flex items-center h-full px-4 text-gray-700 hover:text-fpt-orange'
          >
            <span>Khác</span>
            <FaChevronDown className='ml-1 text-xs' />
          </Link>
          <div
            className='invisible group-hover:visible absolute left-0 top-full bg-white shadow-lg rounded-b-lg'
            style={{ width: '250px' }}
          >
            <ul className='py-2'>
              {othersDropdownItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className='block px-4 py-2 text-gray-600 hover:text-fpt-orange hover:bg-gray-50'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
