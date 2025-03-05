import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-100 pt-12 pb-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/4 mb-8'>
            <a href='/'>
              <img src='/fpt-logo.svg' alt='FPT Logo' className='h-12 mb-4' />
            </a>
            <p className='text-sm text-gray-600 mb-4'>
              CÔNG TY TNHH MTV VIỄN THÔNG QUỐC TẾ FPT
            </p>
            <p className='text-sm text-gray-600'>
              Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm Văn Bạch, quận
              Cầu Giấy, TP. Hà Nội
            </p>
          </div>

          <div className='w-full md:w-1/4 mb-8'>
            <h3 className='text-lg font-bold mb-4'>Về FPT Telecom</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Giới thiệu chung
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Lịch sử - Thành tựu
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Thông cáo báo chí
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Liên hệ
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Góp ý dịch vụ
                </a>
              </li>
            </ul>
          </div>

          <div className='w-full md:w-1/4 mb-8'>
            <h3 className='text-lg font-bold mb-4'>Hỗ trợ khách hàng</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Chăm sóc khách hàng
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Thanh toán Online
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Quy định bảo mật
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Thông tin bảo hành
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Tra cứu hóa đơn
                </a>
              </li>
            </ul>
          </div>

          <div className='w-full md:w-1/4 mb-8'>
            <h3 className='text-lg font-bold mb-4'>Chính sách bán hàng</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Chính sách chung
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Chính sách giao nhận
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Chính sách bảo hành
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Chính sách thanh toán
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-600 hover:text-fpt-red'
                >
                  Chính sách kiểm hàng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-300 pt-6 mt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <div className='flex space-x-4'>
                <a href='#' className='text-gray-600 hover:text-fpt-red'>
                  <FaFacebookF />
                </a>
                <a href='#' className='text-gray-600 hover:text-fpt-red'>
                  <FaYoutube />
                </a>
                <a href='#' className='text-gray-600 hover:text-fpt-red'>
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className='text-sm text-gray-600'>
              © 2025 FPT Telecom. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
