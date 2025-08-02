// src/pages/Rooms.jsx
import React, { useState, useMemo } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SearchBar from "../Components/RoomsPage/SearchBar";
import Breadcrumb from "../Components/Breadcrumb";
import RoomList from "../Components/RoomsPage/RoomList";
import RoomFilter from "../Components/RoomsPage/RoomFilter";
import { rooms } from "../data/rooms";
import { FaFilter } from "react-icons/fa";

const Rooms = () => {
  const [filters, setFilters] = useState(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleFilter = (filterData) => {
    setFilters(filterData);
    setIsFilterModalOpen(false); // đóng popup sau khi tìm
  };
  const handleReset = () => setFilters(null);

  const filteredRooms = useMemo(() => {
    let result = [...rooms];

    if (filters) {
      if (filters.areaRange) {
        const rangeMap = {
          under_20: [0, 20],
          "20_40": [20, 40],
          "40_60": [40, 60],
          "60_80": [60, 80],
          above_80: [80, Infinity],
        };
        const [min, max] = rangeMap[filters.areaRange];
        result = result.filter((room) => room.area >= min && room.area <= max);
      }

      if (filters.selectedUtilities?.length) {
        result = result.filter((room) =>
          filters.selectedUtilities.every((u) => room.utilities.includes(u))
        );
      }
      if (filters.selectedSurroundings?.length) {
        result = result.filter((room) =>
          filters.selectedSurroundings.every((s) =>
            room.surroundings.includes(s)
          )
        );
      }
    }

    return result;
  }, [filters]);

  return (
    <div className="bg-[#F9F9F9]">
      <Header />
      <SearchBar />
      <Breadcrumb />
      <h1 className="text-xl font-semibold text-gray-800 mx-20 mb-1">
        CHO THUÊ PHÒNG TRỌ, PHÒNG TRỌ GIÁ RẺ, MỚI NHẤT
      </h1>

      {/* Nút lọc trên mobile/tablet */}
      <div className="md:hidden flex items-center justify-between px-5 mb-3">
        <span className="text-base font-medium text-gray-800">
          Lọc tìm kiếm
        </span>
        <button
          onClick={() => setIsFilterModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-black rounded-md text-sm"
        >
          <FaFilter /> Lọc tìm kiếm
        </button>
      </div>

      <div className="flex px-5 gap-4">
        <div className="w-full md:w-[70%]">
          <RoomList rooms={filteredRooms} />
        </div>

        {/* Bộ lọc desktop */}
        <div className="hidden md:block w-[30%]">
          <RoomFilter onFilter={handleFilter} onReset={handleReset} />
        </div>
      </div>

      {/* Modal bộ lọc mobile */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-h-[90%] rounded-xl shadow-lg overflow-y-auto p-4 relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black"
              onClick={() => setIsFilterModalOpen(false)}
            >
              ✕
            </button>
            <RoomFilter onFilter={handleFilter} onReset={handleReset} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Rooms;
