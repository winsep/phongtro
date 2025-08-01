import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  return (
    <Link to={`/phong-tro/${room.slug}`} className="flex p-4 rounded-lg bg-white font-sans">
      <div className="relative w-48 h-32 mr-4 flex-shrink-0">
        <img
          src={room.images?.[0]}
          alt={room.title}
          className="w-full h-full object-cover rounded-md"
        />
        {room.isHot && (
          <span className="absolute top-1 left-1 bg-red-600 text-white text-xs px-2 py-1 rounded">
            HOT
          </span>
        )}
        <span className="absolute bottom-1 left-1 bg-white text-xs px-2 py-0.5 rounded shadow">
          Review
        </span>
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            {room.title}
          </h2>
          <p className="mt-1">
            <span className="text-xs text-gray-500 font-light mr-1">Từ</span>
            <span className="text-orange-600 font-bold text-lg">{room.price.toLocaleString()} đ/tháng</span>
          </p>
          <p className="inline-block bg-gray-100 text-sm text-gray-600 px-2 py-1 rounded mt-2">
            {room.type}
          </p>
        </div>
        <div className="text-gray-500 text-sm mt-2 flex items-center gap-1">
          <FaMapMarkerAlt />
          <span>{room.address}</span>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
