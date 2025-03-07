import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-50 text-gray-900 border-gray-700'>
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 pt-16 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-6'>
            <a href='/' className='block'>
              <img src='/fpt-logo.svg' alt='FPT Logo' className='h-12 mb-4' />
            </a>
            <div className='space-y-4'>
              <h3 className='text-lg font-bold text-gray-900'>
                CÔNG TY TNHH MTV VIỄN THÔNG QUỐC TẾ FPT
              </h3>
              <div className='space-y-3'>
                <div className='flex items-start'>
                  <FaMapMarkerAlt className='text-fpt-orange mt-1 mr-3' />
                  <p className='text-sm'>
                    Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm Văn Bạch,
                    quận Cầu Giấy, TP. Hà Nội
                  </p>
                </div>
                <div className='flex items-center'>
                  <FaPhone className='text-fpt-orange mr-3' />
                  <p className='text-sm'>096.930.2332</p>
                </div>
                <div className='flex items-center'>
                  <FaEnvelope className='text-fpt-orange mr-3' />
                  <p className='text-sm'>hotro@fpt.com.vn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-bold text-gray-900 mb-6'>Về FPT Telecom</h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Giới thiệu chung
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Lịch sử - Thành tựu
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Thông cáo báo chí
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Liên hệ
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Góp ý dịch vụ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-lg font-bold text-gray-900 mb-6'>Hỗ trợ khách hàng</h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chăm sóc khách hàng
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Thanh toán Online
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Quy định bảo mật
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Thông tin bảo hành
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Tra cứu hóa đơn
                </a>
              </li>
            </ul>
          </div>

          {/* Sales Policy */}
          <div>
            <h3 className='text-lg font-bold text-gray-900 mb-6'>Chính sách bán hàng</h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách chung
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách giao nhận
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách bảo hành
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách thanh toán
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách kiểm hàng
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='mt-12 pt-8 border-t border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='flex space-x-6'>
              <a 
                href='https://hi.fpt.vn/' 
                className='text-gray-400 hover:text-fpt-orange transition-colors duration-200'
                aria-label="Facebook"
              >
                <img src='images/hifpt.png' className='w-12 h-12'/>
              </a>
              <a 
                href='#' 
                className='text-gray-400 hover:text-fpt-orange transition-colors duration-200'
                aria-label="YouTube"
              >
                <img src='images/foot-youtube.png' className='w-12 h-12'/>
              </a>
              <a 
                href='#' 
                className='text-gray-400 hover:text-fpt-orange transition-colors duration-200'
                aria-label="Instagram"
              >
                <img src='images/foot-instagram.png' className='w-12 h-12'/>
              </a>
              <a 
                href='#' 
                className='text-gray-400 hover:text-fpt-orange transition-colors duration-200'
                aria-label="Instagram"
              >
                <img src='images/foot-facebook.png' className='w-12 h-12'/>
              </a>
            </div>

            <div className='text-sm text-gray-400'>
              © {new Date().getFullYear()} FPT Telecom. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;