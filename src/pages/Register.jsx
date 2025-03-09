import React, { useState } from 'react';
import {
  FaShieldAlt,
  FaCreditCard,
  FaGift,
  FaHeadset,
  FaExclamationCircle,
  FaCheck,
} from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Switch } from '@headlessui/react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    trigger,
    reset,
  } = useForm({
    mode: 'onChange',
  });
  const [currentStep] = useState(1);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const templateParams = {
      name: data.name,
      phone: data.phone,
      email: data.email || 'Not provided',
      service: data.service,
      address: data.address,
      notes: data.notes || 'No notes',
    };

    try {
      await emailjs.send(
        emailJsServiceId, // Replace with your EmailJS service ID
        emailJsTemplateId, // Replace with your EmailJS template ID
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

  const steps = [
    { number: 1, title: 'Thông tin đăng ký', active: currentStep === 1 },
    { number: 2, title: 'Tiếp nhận yêu cầu', active: currentStep === 2 },
    { number: 3, title: 'Hoàn tất', active: currentStep === 3 },
  ];

  const FloatingLabel = ({ children, label, error }) => (
    <div className='relative'>
      <label
        className={`absolute left-3 transition-all duration-200 ${
          watch(children.props.name) ? '-top-2.5 text-xs' : 'top-3 text-base'
        } ${
          isDarkMode ? 'text-gray-300 bg-gray-700' : 'text-gray-500 bg-white'
        } px-1`}
      >
        {label}
      </label>
      {children}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex items-center mt-1 text-red-500 text-sm'
        >
          <FaExclamationCircle className='mr-1' />
          <span>{error.message}</span>
        </motion.div>
      )}
    </div>
  );

  return (
    <div
      className={`min-h-screen py-12 transition-colors duration-200 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <Toaster position='top-center' />
      <div className='container mx-auto px-4'>
        {/* Dark Mode Toggle */}
        <div className='absolute top-4 right-4 flex items-center space-x-2'>
          <span
            className={`text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Dark Mode
          </span>
          <Switch
            checked={isDarkMode}
            onChange={setIsDarkMode}
            className={`${isDarkMode ? 'bg-blue-600' : 'bg-gray-200'} 
              relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
          >
            <span className='sr-only'>Enable dark mode</span>
            <span
              className={`${isDarkMode ? 'translate-x-6' : 'translate-x-1'} 
                inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex justify-center items-center mb-16'
        >
          <div className='flex items-center'>
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <motion.div
                  className={`flex flex-col items-center relative ${
                    step.active
                      ? 'text-blue-600'
                      : isDarkMode
                      ? 'text-gray-500'
                      : 'text-gray-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`rounded-full h-12 w-12 flex items-center justify-center ${
                      step.active
                        ? 'bg-blue-600 ring-4 ring-blue-100'
                        : isDarkMode
                        ? 'bg-gray-700'
                        : 'bg-gray-200'
                    }`}
                  >
                    {step.active ? (
                      <FaCheck className='text-white text-lg' />
                    ) : (
                      <span className='text-white font-medium'>
                        {step.number}
                      </span>
                    )}
                  </div>
                  <span
                    className={`absolute -bottom-8 text-sm font-medium whitespace-nowrap ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {step.title}
                  </span>
                </motion.div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-24 h-1 mx-4 rounded ${
                      step.active
                        ? 'bg-blue-600'
                        : isDarkMode
                        ? 'bg-gray-700'
                        : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } p-8 rounded-2xl shadow-lg`}
            >
              <h2
                className={`text-2xl font-bold mb-8 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}
              >
                Thông tin đăng ký
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div className='space-y-6'>
                  <FloatingLabel label='Họ tên *' error={errors.name}>
                    <input
                      {...register('name', {
                        required: 'Họ tên là bắt buộc',
                        minLength: {
                          value: 2,
                          message: 'Họ tên phải có ít nhất 2 ký tự',
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name
                          ? 'border-red-500'
                          : isDarkMode
                          ? 'border-gray-600'
                          : 'border-gray-300'
                      } ${
                        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'
                      } focus:ring-2 focus:ring-blue-500 transition-colors`}
                      onBlur={() => trigger('name')}
                    />
                  </FloatingLabel>

                  <FloatingLabel label='Số điện thoại *' error={errors.phone}>
                    <input
                      {...register('phone', {
                        required: 'Số điện thoại là bắt buộc',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Số điện thoại không hợp lệ',
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.phone
                          ? 'border-red-500'
                          : isDarkMode
                          ? 'border-gray-600'
                          : 'border-gray-300'
                      } ${
                        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'
                      } focus:ring-2 focus:ring-blue-500 transition-colors`}
                      onBlur={() => trigger('phone')}
                    />
                  </FloatingLabel>

                  <FloatingLabel label='Email' error={errors.email}>
                    <input
                      {...register('email', {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email không hợp lệ',
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? 'border-red-500'
                          : isDarkMode
                          ? 'border-gray-600'
                          : 'border-gray-300'
                      } ${
                        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'
                      } focus:ring-2 focus:ring-blue-500 transition-colors`}
                      onBlur={() => trigger('email')}
                    />
                  </FloatingLabel>

                  <div className='relative'>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Lựa chọn dịch vụ <span className='text-red-500'>*</span>
                    </label>
                    <select
                      {...register('service', {
                        required: 'Vui lòng chọn dịch vụ',
                      })}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.service
                          ? 'border-red-500'
                          : isDarkMode
                          ? 'border-gray-600'
                          : 'border-gray-300'
                      } ${
                        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'
                      } focus:ring-2 focus:ring-blue-500 transition-colors`}
                    >
                      <option value=''>-- Chọn sản phẩm dịch vụ --</option>
                      <option value='internet'>Internet Cáp Quang</option>
                      <option value='tv'>Truyền hình FPT</option>
                      <option value='camera'>Camera FPT</option>
                    </select>
                    {errors.service && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='flex items-center mt-1 text-red-500 text-sm'
                      >
                        <FaExclamationCircle className='mr-1' />
                        <span>{errors.service.message}</span>
                      </motion.div>
                    )}
                  </div>

                  <FloatingLabel
                    label='Địa chỉ lắp đặt *'
                    error={errors.address}
                  >
                    <textarea
                      {...register('address', {
                        required: 'Địa chỉ là bắt buộc',
                      })}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.address
                          ? 'border-red-500'
                          : isDarkMode
                          ? 'border-gray-600'
                          : 'border-gray-300'
                      } ${
                        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'
                      } focus:ring-2 focus:ring-blue-500 transition-colors`}
                      rows='2'
                      onBlur={() => trigger('address')}
                    />
                  </FloatingLabel>

                  <FloatingLabel label='Ghi chú' error={errors.notes}>
                    <textarea
                      {...register('notes')}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isDarkMode
                          ? 'border-gray-600 bg-gray-700 text-white'
                          : 'border-gray-300 bg-white'
                      } focus:ring-2 focus:ring-blue-500 transition-colors`}
                      rows='3'
                    />
                  </FloatingLabel>
                </div>

                <div className='flex gap-4 pt-6'>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type='button'
                    disabled={isSubmitting}
                    className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                      isDarkMode
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } disabled:opacity-50`}
                  >
                    Quay lại
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type='submit'
                    disabled={!isValid || isSubmitting}
                    className={`flex-1 px-6 py-3 ${
                      isValid && !isSubmitting
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-400 cursor-not-allowed'
                    } text-white rounded-lg font-medium transition-colors disabled:opacity-50`}
                  >
                    {isSubmitting ? 'Đang xử lý...' : 'Đăng ký'}
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className='space-y-6'
            >
              <div
                className={`${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } p-8 rounded-2xl shadow-lg`}
              >
                <h3
                  className={`text-xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  Thông tin đơn hàng
                </h3>
                <div
                  className={`p-6 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                  }`}
                >
                  <div className='flex items-center justify-center'>
                    <img
                      src='/images/goiinternetgigan.webp'
                      alt='Internet Package'
                      className='w-full h-auto max-w-md rounded-lg shadow-md'
                    />
                  </div>
                </div>
              </div>

              <div
                className={`${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } p-8 rounded-2xl shadow-lg`}
              >
                <div className='grid grid-cols-2 gap-6'>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                    }`}
                  >
                    <FaShieldAlt className='text-blue-600 text-2xl' />
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      An toàn & bảo mật
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                    }`}
                  >
                    <FaCreditCard className='text-blue-600 text-2xl' />
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      Thanh toán dễ dàng
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                    }`}
                  >
                    <FaGift className='text-blue-600 text-2xl' />
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      Nhiều ưu đãi hấp dẫn
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                    }`}
                  >
                    <FaHeadset className='text-blue-600 text-2xl' />
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      Hỗ trợ 24/7
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
