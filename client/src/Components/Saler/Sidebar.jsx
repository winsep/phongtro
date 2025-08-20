import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleEditProfile = () => {
    alert("Chuyển đến trang cá nhân");
  };

  const handleLogout = () => {
    alert("Đăng xuất");
  };

  const handleOther = () => {
    alert("Tùy chọn khác");
  };

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
     

      {/* Sidebar cho PC */}
      <aside
        className={`bg-white border-r h-screen flex-col transition-all duration-300 
        fixed md:static top-0 left-0 z-50 hidden md:flex
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ width: 200 }}
      >
        {/* Header PC */}
        <div className="hidden md:flex items-center justify-between p-4">
          <span className="font-bold text-lg">Saler</span>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-2 space-y-1">
          <Link to="/saler/" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
            <span><i className="fa-solid fa-house"></i></span>
            <span>Tổng Quan</span>
          </Link>
          <Link to="/saler/rooms" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
            <span><i className="fa-solid fa-people-roof"></i></span>
            <span>Phòng</span>
          </Link>
          <Link to="/saler/bookings" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
            <span><i className="fa-solid fa-calendar-check"></i></span>
            <span>Khách Đặt</span>
          </Link>
          
          <Link to="/saler/chat" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
            <span><i className="fa-solid fa-comments"></i></span>
            <span>Trò Truyện</span>
          </Link>
        </nav>

        {/* Footer PC */}
<div className="p-4 border-t flex items-center gap-2 relative">
  <div
    className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 cursor-pointer"
    onClick={() => setShowMenu((prev) => !prev)}
  >
    <img
      src="https://static.vecteezy.com/system/resources/previews/019/194/935/non_2x/global-admin-icon-color-outline-vector.jpg"
      alt="Admin avatar"
      className="w-full h-full object-cover"
    />
  </div>
  <div
  className="cursor-pointer flex items-center justify-between w-full"
  onClick={() => setShowMenu((prev) => !prev)}
>
  <span>Saler</span>
  <i className="fa-solid fa-arrows-up-down fa-2xs"></i>
</div>


  {showMenu && (
    <div className="absolute left-0 bottom-full mb-2 ml-2 w-45 bg-white rounded-lg shadow-lg border z-50 ">
      {/* Menu items */}
      <div className="py-2">
        <button
          className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
          onClick={handleEditProfile}
        >
          <i className="fa-solid fa-user mr-2"></i>
          My Profile
        </button>
        <button
          className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
          onClick={handleLogout}
        >
          <i className="fa-solid fa-right-from-bracket mr-2"></i>
          Logout
        </button>
      </div>
    </div>
  )}
</div>

      </aside>
{/* Navbar mobile (thay cho sidebar) */}
<div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t flex justify-between items-center py-2 z-50">
  <Link to="/saler/" className="flex flex-col items-center text-sm flex-1">
    <i className="fa-solid fa-house text-lg"></i>
    <span>Tổng Quan</span>
  </Link>
  <Link to="/saler/rooms" className="flex flex-col items-center text-sm flex-1">
    <i className="fa-solid fa-people-roof text-lg"></i>
    <span>Phòng</span>
  </Link>
  <Link to="/saler/bookings" className="flex flex-col items-center text-sm flex-1">
    <i className="fa-solid fa-calendar-check text-lg"></i>
    <span>Khách Đặt</span>
  </Link>

  {/* Icon Saler có popup */}
  <div className="relative flex-1">
    <div
      className="flex flex-col items-center text-sm cursor-pointer"
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <i className="fa-solid fa-user-circle text-lg"></i>
      <span>Saler</span>
    </div>

    {/* Menu popup mobile */}
    {showMenu && (
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg w-48 z-50 p-2">
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
          onClick={handleEditProfile}
        >
          Chỉnh sửa trang cá nhân
        </button>
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
          onClick={handleLogout}
        >
          Đăng xuất
        </button>
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
          onClick={handleOther}
        >
          Khác
        </button>
      </div>
    )}
  </div>
</div>


    </>
  );
}

export default Sidebar;
