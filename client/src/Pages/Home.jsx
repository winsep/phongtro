import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FaSearch, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import SearchBar from '../Components/Home/SearchBar';
import { rooms } from '../data/rooms';
import Hotroom from '../Components/Home/HotRoom';

const Home = () => {
  return (
    <div className="bg-white">
      <Header />

      {/* Div 1: Banner chính */}
     <div className="bg-[url('https://tromoi.com/frontend/home/images/banner_default.jpg')] bg-cover bg-center min-h-[400px] text-white relative flex items-center mt-19">
  <div className="max-w-full w-full mx-auto p-6 flex justify-start items-center h-full">
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">TÌM NHANH, KIẾM DỄ<br />TRỌ MỚI TOÀN QUỐC</h1>
      <p className="mb-6 text-lg">Trang thông tin và cho thuê phòng trọ nhanh chóng, hiệu quả<br />với hơn 500 tin đăng mới và 30.000 lượt xem mỗi ngày</p>
    </div>
  </div>
</div>
      {/* Thanh tìm kiếm */}
<div className="relative">
  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-5 z-20 w-[95%]">
    <SearchBar />
  </div>
</div>

      {/* Div 2: Banners quảng cáo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 w-[98%] mx-auto mt-20">
        <img src="https://tromoi.com/frontend/home/images/banners/banner_video_review.jpg" alt="Khuyến mãi 1" className="rounded-xl shadow" />
        <img src="https://tromoi.com/frontend/home/images/banners/banner_dang_tro_nhanh.jpg" alt="Quảng cáo 2" className="rounded-xl shadow" />
        <img src="https://tromoi.com/frontend/home/images/banners/banner_nap_tien_vao_app.webp" alt="Nạp tiền 3" className="rounded-xl shadow" />
      </div>

      {/* Div 3: Danh sách chỗ ở hot */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">LỰA CHỌN CHỖ Ở HOT</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        </div>
        <Hotroom rooms={rooms} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;