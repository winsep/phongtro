// src/Components/RoomFilter.jsx
import React, { useState } from "react";
import { FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { utilities } from "../../data/utilities";
import { surroundings } from "../../data/surroundings";

const RoomFilter = ({ onFilter, onReset }) => {
  const [selectedAreaRange, setSelectedAreaRange] = useState("");
  const [selectedUtilities, setSelectedUtilities] = useState([]);
  const [selectedSurroundings, setSelectedSurroundings] = useState([]);

  const [openSections, setOpenSections] = useState({
    area: true,
    utilities: true,
    surroundings: true,
  });

  const toggleCheckbox = (value, list, setter) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({
      areaRange: selectedAreaRange,
      selectedUtilities,
      selectedSurroundings,
    });
  };

  const toggleSection = (key) => {
    setOpenSections({ ...openSections, [key]: !openSections[key] });
  };

  const dropAnim = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-xl shadow-md w-full space-y-4 text-sm"
    >
      {/* Tiêu đề */}
      <h2 className="text-base font-semibold text-[#0045A8] flex items-center gap-2 text-lg">
        <FaFilter />
        Lọc tìm kiếm
      </h2>

      {/* === Diện tích phòng === */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("area")}
        >
          <p className="font-semibold text-gray-700 text-[16px]">Diện tích phòng</p>
          {openSections.area ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <AnimatePresence>
          {openSections.area && (
            <motion.div
              variants={dropAnim}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-2 pl-2 overflow-hidden"
            >
              {[
                { label: "Dưới 20m²", value: "under_20" },
                { label: "20–40m²", value: "20_40" },
                { label: "40–60m²", value: "40_60" },
                { label: "60–80m²", value: "60_80" },
                { label: "Trên 80m²", value: "above_80" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 text-sm font-normal text-gray-700"
                >
                  <input
                    type="radio"
                    value={option.value}
                    checked={selectedAreaRange === option.value}
                    onChange={(e) => setSelectedAreaRange(e.target.value)}
                    className="w-5 h-5"
                  />
                  {option.label}
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* === Tiện nghi === */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("utilities")}
        >
          <p className="font-semibold text-gray-700 text-[16px]">Tiện nghi</p>
          {openSections.utilities ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <AnimatePresence>
          {openSections.utilities && (
            <motion.div
              variants={dropAnim}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-2 pl-2 overflow-hidden"
            >
              {utilities.map((util) => (
                <label
                  key={util.id}
                  className="flex items-center gap-3 text-sm font-normal text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={selectedUtilities.includes(util.id)}
                    onChange={() =>
                      toggleCheckbox(util.id, selectedUtilities, setSelectedUtilities)
                    }
                    className="w-5 h-5"
                  />
                  {util.name}
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* === Môi trường xung quanh === */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("surroundings")}
        >
          <p className="font-semibold text-gray-700 text-[16px]">Môi trường xung quanh</p>
          {openSections.surroundings ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <AnimatePresence>
          {openSections.surroundings && (
            <motion.div
              variants={dropAnim}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-2 pl-2 overflow-hidden"
            >
              {surroundings.map((env) => (
                <label
                  key={env.id}
                  className="flex items-center gap-3 text-sm font-normal text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={selectedSurroundings.includes(env.id)}
                    onChange={() =>
                      toggleCheckbox(env.id, selectedSurroundings, setSelectedSurroundings)
                    }
                    className="w-5 h-5"
                  />
                  {env.name}
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nút hành động */}
      <div className="flex justify-between gap-2 pt-2">
        <button
          type="submit"
          className="bg-[#0045A8] hover:bg-blue-800 text-white px-4 py-2 rounded w-full text-base"
        >
          Tìm ngay
        </button>
        <button
          type="button"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded w-full text-base"
          onClick={onReset}
        >
          Xóa bộ lọc
        </button>
      </div>
    </form>
  );
};

export default RoomFilter;
