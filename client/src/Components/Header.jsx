import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from '../Pages/LoginModal';
import RegisterModal from '../Pages/RegisterModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    console.log("Selected location:", location);
  };

  return (
    <>
      <nav className="fixed w-full top-0 py-2 z-100 bg-white
         text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo bên trái */}
          <div className="text-2xl font-bold flex-1">
            <a href="/" className="text-blue-500">phongtro.com</a>
          </div>

          {/* Menu giữa */}
          <ul className="hidden md:flex space-x-6 justify-center flex-2 items-center relative">
            <li><a href="/" className="hover:text-blue-700 text-blue-500">Trang chủ</a></li>

            {/* Loại phòng dropdown */}
            <li className="relative group">
              <a href="/products" className="hover:text-blue-700 text-blue-500">Loại phòng</a>
              <ul className="absolute hidden group-hover:block bg-white text-blue-500 shadow-lg rounded-md mt-1 p-4 space-y-2 ">
                <li><a href="/products/room" className="hover:text-blue-700">Phòng trọ</a></li>
                <li><a href="/products/apartment" className="hover:text-blue-700">Căn hộ</a></li>
                <li><a href="/products/house" className="hover:text-blue-700">Nhà nguyên căn</a></li> 
              </ul>
            </li>

            <li><a href="/login" className="hover:text-blue-700 text-blue-500">Giới thiệu</a></li>
            <li><a href="/login" className="hover:text-blue-700 text-blue-500">Blog</a></li>

            {/* Tìm theo khu vực dropdown */}
            <li className="relative group">
              <div className="cursor-pointer hover:text-blue-700 text-blue-500">Tìm theo khu vực</div>
              <ul className="absolute hidden group-hover:block bg-white text-blue-500 shadow-lg rounded-md mt-1 p-4 space-y-2 min-w-[150px]">
                <li><a href="/search?khuvuc=hcm" className="hover:text-blue-700">TP. HCM</a></li>
                <li><a href="/search?khuvuc=hanoi" className="hover:text-blue-700">Hà Nội</a></li>
                <li><a href="/search?khuvuc=danang" className="hover:text-blue-700">Đà Nẵng</a></li>
                <li><a href="/search?khuvuc=cantho" className="hover:text-blue-700">Cần Thơ</a></li>
              </ul>
            </li>
          </ul>

          {/* Bên phải */}
          <div className="flex-1 flex space-x-6 justify-end">
            <span
              onClick={() => setShowRegister(true)}
              className="hover:text-blue-700 text-blue-500 hidden md:flex cursor-pointer"
            >
              Đăng ký
            </span>
            <span
              onClick={() => setIsLoginOpen(true)}
              className="hover:text-blue-700 text-blue-500 hidden md:flex cursor-pointer"
            >
              Đăng nhập
            </span>

            {/* Mobile menu toggle */}
            <div className="md:hidden ml-4 flex items-center">
              <button onClick={toggleMenu} className="text-blue-500 focus:outline-none">
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="text-blue-500 space-y-3 text-lg">
              <li><a href="/" className="block hover:text-blue-700">Trang chủ</a></li>
              <li><a href="/products" className="block hover:text-blue-700">Loại phòng</a></li>
              <li><a href="/login" className="block hover:text-blue-700">Giới thiệu</a></li>
              <li><a href="/login" className="block hover:text-blue-700">Blog</a></li>
              <li>
                <select
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  className="bg-white text-blue-500 rounded-md px-2 py-1 w-full"
                >
                  <option value="">Tìm theo khu vực</option>
                  <option value="hcm">TP. HCM</option>
                  <option value="hanoi">Hà Nội</option>
                  <option value="danang">Đà Nẵng</option>
                  <option value="cantho">Cần Thơ</option>
                </select>
              </li>
              <li>
                <span
                  onClick={() => setIsLoginOpen(true)}
                  className="block hover:text-blue-700 cursor-pointer"
                >
                  Đăng nhập
                </span>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Popup đăng nhập */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        openRegisterFromLogin={() => {
          setIsLoginOpen(false);
          setShowRegister(true);
        }}
      />
      <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </>
  );
};

export default Header;
