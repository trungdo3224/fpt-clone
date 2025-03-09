import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const RegisterModal = ({ isOpen, onClose, selectedPackage }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log(emailJsPublicKey, emailJsServiceId, emailJsTemplateId);
    try {
      const templateParams = {
        package_name: selectedPackage?.name || 'Not specified',
        package_price: selectedPackage?.price || 'Not specified',
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        address: e.target.address.value,
        notes: e.target.notes.value,
      };

      await emailjs.send(
        emailJsServiceId, // Replace with your EmailJS service ID
        emailJsTemplateId, // Replace with your EmailJS template ID
        templateParams,
        emailJsPublicKey
      );

      toast.success('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
      onClose();
    } catch (error) {
      toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4'>
      <Toaster position='top-center' />
      <div className='bg-white rounded-lg w-full max-w-2xl shadow-lg relative'>
        <button
          onClick={onClose}
          className='absolute right-4 top-4 text-gray-400 hover:text-gray-600'
          disabled={isSubmitting}
        >
          <FaTimes className='w-5 h-5' />
        </button>

        <div className='p-6'>
          <h2 className='text-2xl font-bold mb-6'>Thông tin đăng ký</h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='bg-gray-50 p-4 space-y-4 rounded-lg mb-6 text-center'>
              <h3 className='font-medium text-gray-700'>Đăng ký gói</h3>
              <p className='text-blue-600 font-bold text-2xl'>
                {selectedPackage?.name}
              </p>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Họ tên <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                name='name'
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Nhập họ và tên'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Số điện thoại <span className='text-red-500'>*</span>
              </label>
              <input
                type='tel'
                name='phone'
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Nhập số điện thoại'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Email (nếu có)
              </label>
              <input
                type='email'
                name='email'
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Nhập địa chỉ email nếu có'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Địa chỉ lắp đặt <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                name='address'
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Nhập địa chỉ tên đường, số nhà'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Ghi chú
              </label>
              <textarea
                name='notes'
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                rows='3'
                placeholder='Ví dụ: Gọi trước 30 phút'
              />
            </div>

            <div className='mt-6 flex gap-3'>
              <button
                type='button'
                onClick={onClose}
                disabled={isSubmitting}
                className='flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium disabled:opacity-50'
              >
                Quay lại
              </button>
              <button
                type='submit'
                disabled={isSubmitting}
                className='flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50'
              >
                {isSubmitting ? 'Đang xử lý...' : 'Đăng ký'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
