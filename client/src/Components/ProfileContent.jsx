import React from "react";
import PersonalInfo from "./ProfileTab/PersonalInfo";
import AccountInfo from "./ProfileTab/AccountInfo";
import AccommodationInfo from "./ProfileTab/AccommodationInfo";
import Notification from "./ProfileTab/Notification";
import ManagReviews from "./ProfileTab/ManagReviews";
import Storage from "./ProfileTab/Storage";

const ProfileContent = ({ selectedTab }) => {
  const renderContent = () => {
    switch (selectedTab) {
      case "profile":
        return <PersonalInfo />;
      case "account":
        return <AccountInfo />;
      case "residence":
        return <AccommodationInfo />;
      case "reviews":
        return <ManagReviews />;
      case "archive":
        return <Storage />;
      case "notification":
        return <Notification />;
      default:
        return <p className="text-gray-700">Vui lòng chọn mục trong menu.</p>;
    }
  };

  return (
    <main className="w-full md:w-3/4 bg-white rounded-lg shadow p-6">
      {renderContent()}
    </main>
  );
};

export default ProfileContent;
