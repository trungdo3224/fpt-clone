import React, { useState } from 'react';
import { FaShieldAlt, FaCreditCard, FaGift, FaHeadset, FaExclamationCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Switch } from '@headlessui/react';

const Register = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    notes: ''
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const steps = [
    { number: 1, title: 'Thông tin đăng ký', active: true },
    { number: 2, title: 'Tiếp nhận yêu cầu', active: false },
    { number: 3, title: 'Hoàn tất', active: false }
  ];

  return (
    <div className={`min-h-screen py-12 transition-colors duration-200 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Dark Mode
          </span>
          <Switch
            checked={isDarkMode}
            onChange={setIsDarkMode}
            className={`${isDarkMode ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable dark mode</span>
            <span
              className={`${isDarkMode ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>

        {/* Progress Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center mb-16"
        >
          <div className="flex items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className={`flex items-center relative ${step.active ? 'text-blue-600' : isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`rounded-full h-10 w-10 flex items-center justify-center ${
                      step.active ? 'bg-blue-600' : isDarkMode ? 'bg-gray-700' : 'bg-gray-400'
                    }`}
                  >
                    <span className="text-white font-medium">{step.number}</span>
                  </motion.div>
                  <span className={`absolute -bottom-8 text-sm w-max font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    step.active ? 'bg-blue-600' : isDarkMode ? 'bg-gray-700' : 'bg-gray-400'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg`}
            >
              <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Thông tin đăng ký
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="relative">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Họ tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('name', { required: 'Họ tên là bắt buộc' })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : isDarkMode ? 'border-gray-600' : 'border-gray-300'
                    } ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'} focus:ring-2 focus:ring-blue-500 transition-colors`}
                    placeholder="Nhập họ và tên"
                  />
                  {errors.name && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <FaExclamationCircle className="mr-1" />
                      <span>{errors.name.message}</span>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phone', { 
                      required: 'Số điện thoại là bắt buộc',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Số điện thoại không hợp lệ'
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : isDarkMode ? 'border-gray-600' : 'border-gray-300'
                    } ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'} focus:ring-2 focus:ring-blue-500 transition-colors`}
                    placeholder="Nhập số điện thoại"
                  />
                  {errors.phone && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <FaExclamationCircle className="mr-1" />
                      <span>{errors.phone.message}</span>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    {...register('email', {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email không hợp lệ'
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : isDarkMode ? 'border-gray-600' : 'border-gray-300'
                    } ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'} focus:ring-2 focus:ring-blue-500 transition-colors`}
                    placeholder="Nhập địa chỉ email"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <FaExclamationCircle className="mr-1" />
                      <span>{errors.email.message}</span>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Lựa chọn dịch vụ <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('service', { required: 'Vui lòng chọn dịch vụ' })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.service ? 'border-red-500' : isDarkMode ? 'border-gray-600' : 'border-gray-300'
                    } ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'} focus:ring-2 focus:ring-blue-500 transition-colors`}
                  >
                    <option value="">-- Chọn sản phẩm dịch vụ --</option>
                    <option value="internet">Internet Cáp Quang</option>
                    <option value="tv">Truyền hình FPT</option>
                    <option value="camera">Camera FPT</option>
                  </select>
                  {errors.service && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <FaExclamationCircle className="mr-1" />
                      <span>{errors.service.message}</span>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Địa chỉ lắp đặt <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('address', { required: 'Địa chỉ là bắt buộc' })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.address ? 'border-red-500' : isDarkMode ? 'border-gray-600' : 'border-gray-300'
                    } ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'} focus:ring-2 focus:ring-blue-500 transition-colors`}
                    rows="2"
                    placeholder="Nhập địa chỉ tên đường, số nhà"
                  />
                  {errors.address && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <FaExclamationCircle className="mr-1" />
                      <span>{errors.address.message}</span>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Ghi chú
                  </label>
                  <textarea
                    {...register('notes')}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'
                    } focus:ring-2 focus:ring-blue-500 transition-colors`}
                    rows="3"
                    placeholder="Ví dụ: Gọi trước 30 phút"
                  />
                </div>

                <div className="flex gap-4 pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 text-white hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Quay lại
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Đăng ký
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg`}>
                <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Thông tin đơn hàng
                </h3>
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <div className="flex items-center justify-center">
                    <img 
                      src="/images/order-info.png" 
                      alt="Order Information"
                      className="w-full h-auto max-w-md rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg`}>
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                    }`}
                  >
                    <FaShieldAlt className="text-blue-600 text-2xl" />
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                      An toàn & bảo mật
                    </span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                    }`}
                  >
                    <FaCreditCard className="text-blue-600 text-2xl" />
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                      Thanh toán dễ dàng
                    </span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                    }`}
                  >
                    <FaGift className="text-blue-600 text-2xl" />
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                      Nhiều ưu đãi hấp dẫn
                    </span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
                    }`}
                  >
                    <FaHeadset className="text-blue-600 text-2xl" />
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
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