// src/components/RelatedRooms.jsx
import React from "react";
import { rooms } from "../../data/rooms";

const RelatedRooms = ({ currentRoom }) => {
  // Lấy city từ address (giả sử format "Quận..., Thành phố Hà Nội")
  const currentCity = currentRoom.address.split(",").pop().trim();

  const relatedRooms = rooms
    .filter(
      (room) =>
        room.id !== currentRoom.id &&
        room.address.includes(currentCity)
    )
    .slice(0, 6); // Giới hạn 6 phòng

  if (relatedRooms.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold text-white bg-[#0045A8] px-4 py-2 rounded-t-lg">
        CHO THUÊ NHÀ TRỌ, PHÒNG TRỌ KHU VỰC {currentCity.toUpperCase()}
      </h2>
      <div className="bg-[#0045A8] p-4 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {relatedRooms.map((room) => (
          <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={room.images[0]}
              alt={room.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              {room.isHot && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">HOT</span>
              )}
              <h3 className="font-semibold text-sm mt-1 line-clamp-2">{room.title}</h3>
              <p className="text-orange-600 font-bold text-sm">
                Từ {room.price.toLocaleString()}đ/tháng
              </p>
              <div className="text-xs text-gray-500">{room.type} • {room.area}m²</div>
              <div className="text-xs text-gray-500 mt-1">{room.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedRooms;
