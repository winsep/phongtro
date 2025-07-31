import { FaSearch, FaHome, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="bg-blue-800 py-6 mt-25 px-4 flex justify-center items-center w-full">
      {/* Icon search lớn bên trái */}
      <div className="bg-cyan-400 text-white rounded-full p-4 shadow-lg mr-2">
        <FaSearch size={24} />
      </div>

      {/* Ô input: bạn muốn tìm ở đâu */}
      <input
        type="text"
        placeholder="Bạn muốn tìm trọ ở đâu?"
        className="rounded-md px-4 py-2 w-60 mr-2 focus:outline-none"
      />

      {/* Dropdown: Loại phòng */}
      <div className="relative mr-2">
        <select className="appearance-none border-none bg-white rounded-md px-4 py-2 pl-8 w-60 text-gray-800 focus:outline-none">
          <option>Nhà trọ, phòng trọ</option>
          <option>Chung cư mini</option>
          <option>Phòng ở ghép</option>
        </select>
        <FaHome className="absolute top-1/2 left-2 transform -translate-y-1/2 text-blue-500" />
      </div>

      {/* Dropdown: Địa điểm */}
      <div className="relative mr-2">
        <select className="appearance-none border-none bg-white rounded-md px-4 py-2 pl-8 w-60 text-gray-800 focus:outline-none">
          <option>Địa điểm</option>
          <option>Hà Nội</option>
          <option>TP. HCM</option>
          <option>Đà Nẵng</option>
        </select>
        <FaMapMarkerAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-blue-500" />
      </div>

      {/* Dropdown: Mức giá */}
      <div className="relative mr-2">
        <select className="appearance-none border-none bg-white rounded-md px-4 py-2 pl-8 w-60 text-gray-800 focus:outline-none">
          <option>Mức giá</option>
          <option>Dưới 1 triệu</option>
          <option>1 - 3 triệu</option>
          <option>Trên 3 triệu</option>
        </select>
        <FaDollarSign className="absolute top-1/2 left-2 transform -translate-y-1/2 text-blue-500" />
      </div>

      {/* Nút tìm kiếm */}
      <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300 flex items-center">
        Tìm kiếm <FaSearch className="ml-2" />
      </button>
    </div>
  );
};

export default SearchBar;
