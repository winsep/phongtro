import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import RoomGallery from "./RoomGallery"; // ✅ Import Gallery
import RoomInfo from "./RoomInfo";
import RoomContent from "./RoomContent";
import RoomTarget from "./RoomTarget";
import RoomUtilities from "./RoomUtilities";
import RoomSurroundings from "./RoomSurroundings";
import RoomMap from "./RoomMap";
import RelatedRooms from "./RelatedRooms";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg md:mx-auto mx-2 max-w-5xl font-sans">
      {/* Badge tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {room.isHot && (
          <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
            Hot
          </span>
        )}
        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
          {room.type}
        </span>
        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
          {room.city || "Hà Nội"}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {room.title}
      </h1>

      {/* Address */}
      <div className="text-gray-600 text-sm flex items-center gap-1 mb-4">
        <FaMapMarkerAlt className="text-gray-500" />
        <span>{room.address}</span>
      </div>

      {/* Gallery */}
      <div className="mb-4">
        <RoomGallery images={room.images} /> {/* ✅ Gọi component Gallery */}
      </div>

      {/* Room Info */}
      <div className="mt-10">
        <RoomInfo room={room} />
        <RoomContent room={room} />
        <RoomTarget targetIds={room.targets} />
        <RoomUtilities utilityIds={room.utilities} />
        <RoomSurroundings surroundingsIds={room.surroundings} />
        <RoomMap mapEmbed={room.mapEmbed} />
        <RelatedRooms currentRoom={room} />
      </div>
    </div>
  );
};

export default RoomCard;
