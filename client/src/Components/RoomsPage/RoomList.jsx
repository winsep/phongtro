// src/Components/RoomsPage/RoomList.jsx
import React, { useState } from 'react';
import RoomCard from './RoomCard';
import Pagination from './Pagination';

const RoomList = ({ rooms }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(rooms.length / pageSize);
  const currentRooms = rooms.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 bg-white rounded-xl shadow-lg">
      <h1 className="text-xl font-bold mb-4">
        Tổng {rooms.length.toLocaleString()} kết quả
      </h1>

      <div className="space-y-4">
        {currentRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default RoomList;
