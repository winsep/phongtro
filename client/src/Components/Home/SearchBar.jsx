import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="bg-blue-600 p-2 rounded-xl shadow-lg flex flex-col md:flex-row gap-2 items-center max-w-full mx-auto  px-2 md:px-3 py-3 md:py-3">
      <div className="flex items-center gap-2 border px-3 py-2 rounded bg-white w-full md:w-1/4">
        <FaSearch className="text-blue-600" />
        <input type="text" placeholder="Bạn muốn tìm ở đâu?" className="text-black w-full outline-none" />
      </div>
      <div className="flex items-center gap-2 border px-3 py-2 rounded bg-white w-full md:w-1/4">
        <FaMapMarkerAlt className="text-blue-600" />
        <select className="text-black w-full outline-none">
            <option>Địa điểm</option>
            <option>Hà Nội</option>
            <option>TP. HCM</option>
            <option>Đà Nẵng</option>
        </select>
      </div>
      <div className="flex items-center gap-2 border px-3 py-2 rounded bg-white w-full md:w-1/4">
        <FaDollarSign className="text-blue-600" />
        <select className="text-black w-full outline-none">
          <option>Mức giá</option>
          <option>Dưới 1 triệu</option>
          <option>1 - 3 triệu</option>
          <option>Trên 3 triệu</option>
        </select>
      </div>
      <div className="flex items-center gap-2 border px-3 py-2 rounded bg-white w-full md:w-1/4">
        <span className="text-blue-600 font-bold">m²</span>
        <select className="text-black w-full outline-none">
          <option>Diện tích</option>
            <option>Dưới 20m²</option>
            <option>20 - 40m²</option>
            <option>40 - 60m²</option>
            <option>60 - 80m²</option>
            <option>Trên 80m²</option>

        </select>
      </div>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded w-full md:w-1/4">Tìm kiếm</button>
    </div>
  )
}
export default SearchBar;