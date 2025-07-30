import React, { useState } from "react"; // Đừng quên dòng này!
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const LoginModal = ({ isOpen, onClose, openRegisterFromLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

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
            <div className="bg-white rounded-xl shadow-lg w-[410px] max-w-full p-6 relative">
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-xl text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={onClose}
              >
                &times;
              </button>

              {/* Logo */}
              <div className="flex justify-center mb-4">
                <img src="/logo.png" alt="Logo" className="w-14 h-14" />
              </div>

              {/* Heading */}
              <h2 className="text-center text-lg text-gray-800 mb-6">
                Chào Mừng Bạn Đến Với Trọ Mới
              </h2>

              {/* Form */}
              <form>
                <input
                  type="text"
                  placeholder="Email hoặc Số điện thoại"
                  className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md text-[15px] placeholder:text-sm placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-[15px] placeholder:text-sm placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-blue-500 mb-4">
                  <a href="#" className="hover:underline">
                    Quên mật khẩu?
                  </a>
                  <a
                    onClick={openRegisterFromLogin}
                    className="hover:underline cursor-pointer"
                  >
                    Đăng ký
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
                >
                  Đăng nhập
                </button>
              </form>

              {/* OR divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-200" />
                <span className="mx-3 text-gray-500 text-sm">
                  Hoặc đăng nhập bằng
                </span>
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

export default LoginModal;
