// src/Components/RoomMap.jsx
import React from "react";

const RoomMap = ({ mapEmbed }) => {
  if (!mapEmbed) return null;

  return (
    <div className="mt-6">
        <hr className="my-4 border-t border-gray-200" />
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Đường đi</h2>
      <div className="w-full h-[450px] rounded-lg overflow-hidden shadow">
        <iframe
          src={mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default RoomMap;
