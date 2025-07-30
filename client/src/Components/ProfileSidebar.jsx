// src/Components/ProfileSidebar.jsx
import React from "react";
import { Contact, User, Home, Star, Heart, Bell, LogOut } from "lucide-react";
import user from "../data/user";

const ProfileSidebar = ({ selectedTab, setSelectedTab }) => {
  const menuItems = [
    { key: "profile", label: "Thông tin cá nhân", icon: <Contact size={18} /> },
    { key: "account", label: "Thông tin tài khoản", icon: <User size={18} /> },
    { key: "residence", label: "Thông tin lưu trú", icon: <Home size={18} /> },
    { key: "reviews", label: "Quản lý đánh giá", icon: <Star size={18} /> },
    { key: "archive", label: "Lưu trữ", icon: <Heart size={18} /> },
    { key: "notification", label: "Thông báo", icon: <Bell size={18} /> },
  ];

  return (
    <aside className="hidden md:block md:w-1/3 bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <img
            src={user[0].avatar}
            alt={user[0].name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-gray-800 font-semibold leading-tight">
              {user[0].name}
            </h3>
            <p className="text-sm text-gray-500">ID: #{user[0].id}</p>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setSelectedTab(item.key)}
            className={`w-full text-left px-3 py-2 rounded-md font-medium flex items-center gap-2 ${
              selectedTab === item.key
                ? "bg-[#0045A8] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}

        <button className="w-full text-left px-3 py-2 rounded-md font-medium text-red-500 hover:bg-gray-100">
          <LogOut size={18} className="inline" /> Đăng xuất
        </button>
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
