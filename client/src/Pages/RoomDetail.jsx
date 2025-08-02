import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Breadcrumb from "../Components/Breadcrumb";
import { rooms } from "../data/rooms";
import RoomCard from "../Components/RoomDetail/RoomCard";

const RoomDetail = () => {
  const { slug } = useParams();
  const room = rooms.find((r) => r.slug === slug);

  
  return (
    <div className="bg-[#F9F9F9]">
      <Header />
      <div className="mt-30 mx-30">
        <Breadcrumb />
      </div>
        < RoomCard room={room} />
      <Footer />
    </div>
  );
};

export default RoomDetail;
