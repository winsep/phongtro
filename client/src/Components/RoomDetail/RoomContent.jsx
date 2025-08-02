import React from "react";

const RoomContent = ({ room }) => {
  return (
    <div className="bg-white p-6 leading-relaxed">
        {/* Dòng chia ngang */}
      <hr className="mb-5 border-t border-gray-200" />
      <h2 className="text-xl font-bold mb-4">Giới thiệu</h2>

      <p className="font-semibold mb-2">
        Cho thuê căn hộ tại {room.address} - Giá chỉ {room.price.toLocaleString()} triệu/tháng.
      </p>

      <p className="mb-2">
        <strong>Diện tích:</strong> {room.area}m²
      </p>

      <p className="mb-1">
        <strong>Kết cấu:</strong> 1 phòng ngủ, 1 phòng khách, đầy đủ nội thất cao cấp.
      </p>
      <ul className="list-disc list-inside mb-2 text-gray-700">
        <li>Trang bị sẵn tủ lạnh, bếp, giường tủ, máy hút mùi.</li>
        <li>Phòng tắm sạch sẽ, hiện đại, thiết kế tiện nghi.</li>
      </ul>

      <p className="mb-1">
        <strong>Tiện ích:</strong>
      </p>
      <ul className="list-disc list-inside mb-2 text-gray-700">
        <li>Giờ giấc tự do, cửa sổ thoáng mát đón ánh sáng tự nhiên.</li>
        <li>Đảm bảo an toàn với hệ thống PCCC đạt chuẩn.</li>
      </ul>

      <p className="mb-1">
        <strong>Vị trí thuận tiện:</strong> Gần trường học, chợ, siêu thị, kết nối dễ dàng đến các khu vực lân cận.
      </p>

      <p className="mt-2 text-gray-700">
        Liên hệ ngay để xem phòng và nhận ưu đãi sớm nhất!
      </p>
    </div>
  );
};

export default RoomContent;
