import React from "react";
import {
  FaPhoneAlt,
  FaClock,
  FaUser,
  FaHome,
  FaRulerCombined,
  FaDollarSign,
} from "react-icons/fa";

const RoomInfo = ({ room }) => {
  return (
    <div className="bg-white p-6 mt-6">
      {/* Giá và nút liên hệ */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <p className="text-sm text-gray-500">Giá chỉ từ</p>
          <p className="text-2xl font-bold text-orange-600">
            {room.price.toLocaleString()} đ/tháng
          </p>
        </div>

        <div className="flex gap-2 mt-4 md:mt-0">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center gap-2 text-sm">
            <FaPhoneAlt className="text-white" />
            Liên hệ chủ trọ
          </button>
          <a
            href={`https://zalo.me/${room.phone || ""}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 px-3 py-2 rounded-lg text-white text-sm hover:bg-blue-600"
          >
            Zalo
          </a>
        </div>
      </div>

      {/* Dòng chia ngang */}
      <hr className="my-4 border-t border-gray-200" />

      {/* Hàng đầu: 4 mục */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-800 mb-4">
        <div className="flex items-center gap-2">
          <FaHome className="text-[#0045A8] text-base md:text-lg" />
          <span className="text-[15px] md:text-base font-medium">
            {room.type}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaDollarSign className="text-[#0045A8] text-base md:text-lg" />
          <span className="text-[15px] md:text-base font-medium">
            Giá từ {room.price.toLocaleString()} đ/tháng
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaRulerCombined className="text-[#0045A8] text-base md:text-lg" />
          <span className="text-[15px] md:text-base font-medium">
            Khoảng {room.area}m²
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="text-[#0045A8] text-base md:text-lg" />
          <span className="text-[15px] md:text-base font-medium">
            Chủ trọ: {room.owner || "Ẩn danh"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-[#0045A8] text-base md:text-lg" />
          <span className="text-[15px] md:text-base font-medium">
            {room.phone || "Chưa có số điện thoại"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-[#0045A8] text-base md:text-lg" />
          <span className="text-[15px] md:text-base font-medium">
            Ngày đăng: {room.date || "Chưa rõ"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
