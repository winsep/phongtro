// src/components/RoomTarget.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { targetAudiences } from "../../data/targetAudiences";

const RoomTarget = ({ targetIds = [] }) => {
  const matchedTargets = targetAudiences.filter((target) =>
    targetIds.includes(target.id)
  );

  return (
    <div className="mt-6">
      {/* Dấu gạch ngang + tiêu đề */}
      <div className="border-t border-gray-300 mb-4 pt-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Đối tượng</h2>

        {/* Danh sách đối tượng */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {matchedTargets.map(({ id, name, icon }) => (
            <div key={id} className="flex items-center gap-2 text-sm text-gray-700">
              <FontAwesomeIcon icon={icon} className="text-lg text-black" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomTarget;
