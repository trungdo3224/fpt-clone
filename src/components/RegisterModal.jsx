import React, { useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const RegisterModal = ({ isOpen, onClose, selectedPackage }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        emailJsServiceId,
        emailJsTemplateId,
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
    <AnimatePresence>
      <Toaster position="top-center" />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <Toaster position="top-center" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl w-full max-w-2xl shadow-xl relative overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-white hover:text-gray-200 transition-colors"
                disabled={isSubmitting}
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold">Đăng ký dịch vụ</h2>
              <p className="text-blue-100 mt-1">Điền thông tin để được tư vấn</p>
            </div>

            {/* Selected Package Info */}
            {selectedPackage && (
              <div className="bg-blue-50 p-4 border-b border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
                    <img
                      src='images/internetpackage.png'
                      alt={selectedPackage.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{selectedPackage.name}</h3>
                    <p className="text-blue-600 font-medium">{selectedPackage.price}/tháng</p>
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Họ tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Nhập họ và tên"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Nhập địa chỉ email (không bắt buộc)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Địa chỉ lắp đặt <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Nhập địa chỉ lắp đặt"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ghi chú
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Thêm ghi chú nếu cần"
                />
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaCheck className="text-green-500" />
                  <span>Tư vấn miễn phí</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaCheck className="text-green-500" />
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-colors disabled:opacity-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Đang xử lý...
                    </>
                  ) : (
                    'Đăng ký ngay'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;