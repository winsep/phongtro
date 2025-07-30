import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProfileSidebar from "../Components/ProfileSidebar";
import ProfileContent from "../Components/ProfileContent";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("profile");
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row gap-4 p-6 mt-20 mx-15 bg-gray-50">
        <ProfileSidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <ProfileContent selectedTab={selectedTab} />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
