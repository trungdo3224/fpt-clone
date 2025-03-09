import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  FaCheck,
  FaExclamationCircle,
  FaShieldAlt,
  FaCreditCard,
  FaGift,
  FaHeadset,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const templateParams = {
        name: data.name,
        phone: data.phone,
        email: data.email || 'Not provided',
        service: data.service,
        address: data.address,
        notes: data.notes || 'No notes',
      };

      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        templateParams,
        emailJsPublicKey
      );

      toast.success('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
      reset();
    } catch (error) {
      toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white py-12'>
      <Toaster position='top-center' />
      <div className='container mx-auto px-4 max-w-6xl'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>
            Đăng ký dịch vụ FPT Telecom
          </h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Điền thông tin bên dưới, chúng tôi sẽ liên hệ với bạn trong thời
            gian sớm nhất
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='bg-white p-8 rounded-2xl shadow-lg'
          >
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div className='space-y-6'>
                {/* Name Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Họ tên <span className='text-red-500'>*</span>
                  </label>
                  <input
                    {...register('name', {
                      required: 'Họ tên là bắt buộc',
                      minLength: {
                        value: 2,
                        message: 'Họ tên phải có ít nhất 2 ký tự',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    placeholder='Nhập họ và tên'
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-red-500 text-sm flex items-center'
                    >
                      <FaExclamationCircle className='mr-1' />
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Số điện thoại <span className='text-red-500'>*</span>
                  </label>
                  <input
                    {...register('phone', {
                      required: 'Số điện thoại là bắt buộc',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Số điện thoại không hợp lệ',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    placeholder='Nhập số điện thoại'
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-red-500 text-sm flex items-center'
                    >
                      <FaExclamationCircle className='mr-1' />
                      {errors.phone.message}
                    </motion.p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Email
                  </label>
                  <input
                    {...register('email', {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email không hợp lệ',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    placeholder='Nhập địa chỉ email (không bắt buộc)'
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-red-500 text-sm flex items-center'
                    >
                      <FaExclamationCircle className='mr-1' />
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Dịch vụ quan tâm <span className='text-red-500'>*</span>
                  </label>
                  <select
                    {...register('service', {
                      required: 'Vui lòng chọn dịch vụ',
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                  >
                    <option value=''>-- Chọn dịch vụ --</option>
                    <option value='internet'>Internet Cáp Quang</option>
                    <option value='tv'>Truyền hình FPT</option>
                    <option value='camera'>Camera FPT</option>
                    <option value='combo'>Combo Internet + Truyền hình</option>
                  </select>
                  {errors.service && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-red-500 text-sm flex items-center'
                    >
                      <FaExclamationCircle className='mr-1' />
                      {errors.service.message}
                    </motion.p>
                  )}
                </div>

                {/* Address Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Địa chỉ lắp đặt <span className='text-red-500'>*</span>
                  </label>
                  <textarea
                    {...register('address', {
                      required: 'Địa chỉ là bắt buộc',
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    rows='2'
                    placeholder='Nhập địa chỉ lắp đặt'
                  />
                  {errors.address && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-red-500 text-sm flex items-center'
                    >
                      <FaExclamationCircle className='mr-1' />
                      {errors.address.message}
                    </motion.p>
                  )}
                </div>

                {/* Notes Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Ghi chú
                  </label>
                  <textarea
                    {...register('notes')}
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                    rows='3'
                    placeholder='Thêm ghi chú nếu cần'
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type='submit'
                disabled={isSubmitting}
                className='w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center'
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Đang xử lý...
                  </>
                ) : (
                  'Đăng ký ngay'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className='space-y-6'
          >
            {/* Package Preview */}
            <div className='bg-white p-8 rounded-2xl shadow-lg'>
              <h3 className='text-xl font-bold text-gray-800 mb-6'>
                Thông tin đơn hàng
              </h3>
              <div className='relative rounded-xl overflow-hidden'>
                <img
                  src='/images/internetpackage.png'
                  alt='Internet Package'
                  className='w-full h-auto rounded-xl'
                />
              </div>
            </div>

            {/* Features */}
            <div className='bg-white p-8 rounded-2xl shadow-lg'>
              <div className='grid grid-cols-2 gap-6'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='flex items-center gap-4 p-4 rounded-lg bg-blue-50'
                >
                  <FaShieldAlt className='text-blue-600 text-2xl' />
                  <span className='text-sm font-medium text-gray-700'>
                    An toàn & bảo mật
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='flex items-center gap-4 p-4 rounded-lg bg-blue-50'
                >
                  <FaCreditCard className='text-blue-600 text-2xl' />
                  <span className='text-sm font-medium text-gray-700'>
                    Thanh toán dễ dàng
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='flex items-center gap-4 p-4 rounded-lg bg-blue-50'
                >
                  <FaGift className='text-blue-600 text-2xl' />
                  <span className='text-sm font-medium text-gray-700'>
                    Nhiều ưu đãi hấp dẫn
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='flex items-center gap-4 p-4 rounded-lg bg-blue-50'
                >
                  <FaHeadset className='text-blue-600 text-2xl' />
                  <span className='text-sm font-medium text-gray-700'>
                    Hỗ trợ 24/7
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Contact Info */}
            <div className='bg-white p-8 rounded-2xl shadow-lg'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>
                Thông tin liên hệ
              </h3>
              <div className='space-y-3 text-gray-600'>
                <p>
                  Hotline: <span className='font-semibold'>096.930.2332</span>
                </p>
                <p>
                  Email: <span className='font-semibold'>hoangduong256198@gmail.com</span>
                </p>
                <p>
                  Thời gian làm việc:{' '}
                  <span className='font-semibold'>24/7</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
