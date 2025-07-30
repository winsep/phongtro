import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaGoogle, FaFacebookF, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-[998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg w-[500px] max-w-full p-6 relative">
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-xl text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={onClose}
              >
                &times;
              </button>

              {/* Heading */}
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Đăng Ký Tài Khoản Mới
              </h2>

              {/* Form */}
              <form>
                <h4 className="text-[15px] text-gray-700 font-medium">Họ và tên</h4>
                <input
                  type="text"
                  placeholder="Nhập vào Họ và Tên"
                  className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md text-[15px] placeholder:text-sm placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <h4 className="text-[15px] text-gray-700 font-medium">Email / Số điện thoại</h4>
                <input
                  type="text"
                  placeholder="Nhập vào Email hoặc Số điện thoại"
                  className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md text-[15px] placeholder:text-sm placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Mật khẩu */}
                <div className="relative mb-4">
                  <h4 className="text-[15px] text-gray-700 font-medium">Mật khẩu</h4>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập vào mật khẩu"
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md text-[15px] placeholder:text-sm placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
                    style={{ appearance: "none" }}
                  />
                  <span
                    className="absolute right-3 top-10 mt-[2px] -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                {/* Xác nhận mật khẩu */}
                <div className="relative mb-4">
                  <h4 className="text-[15px] text-gray-700 font-medium">Xác nhận mật khẩu</h4>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Nhập vào mật khẩu"
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md text-[15px] placeholder:text-sm placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
                    style={{ appearance: "none" }}
                  />
                  <span
                    className="absolute right-3 top-10 mt-[2px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
                >
                  Đăng ký
                </button>
              </form>

              {/* Điều khoản */}
              <p className="text-xs text-center text-gray-500 mt-4">
                Bằng cách tiếp tục, bạn đồng ý với{' '}
                <a href="#" className="text-blue-600 underline">
                  Điều khoản & Cam kết
                </a>{' '}
                của Trọ Mới và xác nhận rằng bạn đã đọc{' '}
                <a href="#" className="text-blue-600 underline">
                  Chính sách bảo mật
                </a>{' '}
                của chúng tôi.
              </p>

              {/* OR divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-200" />
                <span className="mx-3 text-gray-500 text-sm">Hoặc đăng ký bằng</span>
                <div className="flex-grow border-t border-gray-200" />
              </div>

              {/* Social login */}
              <div className="flex justify-center space-x-4">
                <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full">
                  <FaGoogle />
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
                  <FaFacebookF />
                </button>
                <button className="bg-black hover:bg-gray-800 text-white p-2 rounded-full">
                  <FaApple />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
