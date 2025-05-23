import React, { useState, useRef } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const navbarRef = useRef(null);
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

  return (
    <header className='sticky top-0 z-50'>
      <div className='bg-fpt-blue text-white py-3 px-12 md:px-20 xl:px-32 sm:hidden lg:block'>
        <div className='flex justify-between items-center text-xs'>
          <div className='hidden sm:flex flex-row gap-2'>
            <a href='/personal' className='hover:text-gray-300'>
              <span>Khách hàng cá nhân</span>
            </a>
            |
            <a href='/business' className='hover:text-gray-300'>
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

      <div
        ref={navbarRef}
        className='flex flex-row items-center h-16 px-12 md:px-20 xl:px-32  bg-white shadow-md'
      >
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
