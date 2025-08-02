// src/components/RoomUtilities.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { utilitiesList } from "../../data/utilities";

const RoomUtilities = ({ utilityIds = [] }) => {
  const matchedUtilities = utilitiesList.filter((u) =>
    utilityIds.includes(u.id)
  );

  return (
    <div className="mt-6">
      <div className="border-t border-gray-300 mb-4 pt-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Tiện nghi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {matchedUtilities.map(({ id, name, icon }) => (
            <div key={id} className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={icon} className="text-base text-black" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomUtilities;
