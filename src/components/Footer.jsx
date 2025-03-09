import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-50 text-gray-900 border-gray-700 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32'>
      {/* Main Footer Content */}
      <div className='container mx-auto pt-10 md:pt-16 pb-6 md:pb-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8'>
          {/* Company Info */}
          <div className='space-y-4 md:space-y-6'>
            <Link to='/' className='inline-block'>
              <img src='/fpt-logo.svg' alt='FPT Logo' className='h-8 sm:h-10 md:h-12 mb-2 md:mb-4' />
            </Link>
            <div className='space-y-3 md:space-y-4'>
              <h3 className='text-base md:text-lg font-bold text-gray-900'>
                CÔNG TY TNHH MTV VIỄN THÔNG QUỐC TẾ FPT
              </h3>
              <div className='space-y-2 md:space-y-3'>
                <div className='flex items-start'>
                  <FaMapMarkerAlt className='text-fpt-orange mt-1 mr-2 md:mr-3 flex-shrink-0 text-base' />
                  <p className='text-xs sm:text-sm'>
                    Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm Văn Bạch,
                    quận Cầu Giấy, TP. Hà Nội
                  </p>
                </div>
                <div className='flex items-center'>
                  <FaPhone className='text-fpt-orange mr-2 md:mr-3 flex-shrink-0 text-base' />
                  <p className='text-xs sm:text-sm'>096.930.2332</p>
                </div>
                <div className='flex items-center'>
                  <FaEnvelope className='text-fpt-orange mr-2 md:mr-3 flex-shrink-0 text-base' />
                  <p className='text-xs sm:text-sm'>hotro@fpt.com.vn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-6'>Về FPT Telecom</h3>
            <ul className='space-y-2 md:space-y-3'>
              <li>
                <Link to='/about' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Giới thiệu chung
                </Link>
              </li>
              <li>
                <Link to='/history' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Lịch sử - Thành tựu
                </Link>
              </li>
              <li>
                <Link to='/press' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Thông cáo báo chí
                </Link>
              </li>
              <li>
                <Link to='/careers' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link to='/contact' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to='/feedback' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Góp ý dịch vụ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className='mt-6 sm:mt-0'>
            <h3 className='text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-6'>Hỗ trợ khách hàng</h3>
            <ul className='space-y-2 md:space-y-3'>
              <li>
                <Link to='/support' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chăm sóc khách hàng
                </Link>
              </li>
              <li>
                <Link to='/payment' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Thanh toán Online
                </Link>
              </li>
              <li>
                <Link to='/terms' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link to='/privacy' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Quy định bảo mật
                </Link>
              </li>
              <li>
                <Link to='/warranty' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Thông tin bảo hành
                </Link>
              </li>
              <li>
                <Link to='/invoice' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Tra cứu hóa đơn
                </Link>
              </li>
            </ul>
          </div>

          {/* Sales Policy */}
          <div className='mt-6 lg:mt-0'>
            <h3 className='text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-6'>Chính sách bán hàng</h3>
            <ul className='space-y-2 md:space-y-3'>
              <li>
                <Link to='/policies' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách chung
                </Link>
              </li>
              <li>
                <Link to='/delivery' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách giao nhận
                </Link>
              </li>
              <li>
                <Link to='/warranty-policy' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link to='/returns' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link to='/payment-policy' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách thanh toán
                </Link>
              </li>
              <li>
                <Link to='/inspection' className='text-xs sm:text-sm hover:text-fpt-orange transition-colors duration-200'>
                  Chính sách kiểm hàng
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
            <div className='flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6'>
              <a 
                href='https://hi.fpt.vn/' 
                className='text-gray-400 hover:text-fpt-orange transition-colors duration-200'
                aria-label="Hi FPT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src='/images/hifpt.png' className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' alt="Hi FPT" />
              </a>
              <a 
                href='https://youtube.com/' 
                className='text-gray-400 hover:text-fpt-orange transition-colors duration-200'
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src='/images/foot-youtube.png' className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' alt="YouTube" />
              </a>
              <a 
                href='https://instagram.com/' 
                className='text-gray-400 hover:text-fpt-orange transition-colors duration-200'
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src='/images/foot-instagram.png' className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' alt="Instagram" />
              </a>
              <a 
                href='https://facebook.com/' 
                className='text-gray-400 hover:text-fpt-orange transition-colors duration-200'
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src='/images/foot-facebook.png' className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' alt="Facebook" />
              </a>
            </div>

            <div className='text-xs sm:text-sm text-gray-500 text-center md:text-right'>
              © {new Date().getFullYear()} FPT Telecom. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;