import React, { useState } from "react";
import shortDownArrowIcon from "../assets/icons/shortDownArrowIcon.svg";

const BtnWithDownArrow = ({ text, handleSectionFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSectionClick = (section) => {
    handleSectionFilter(section);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className={`px-[12px] py-[6px] bg-[#5243AA] text-[#EAE6FF] rounded text-[13px] flex gap-1 justify-between h-[28px] w-[130px] items-center`}
      >
        {text}

        <img
          src={shortDownArrowIcon}
          alt="down arrow"
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-[160px] bg-white text-[#202020] shadow-lg rounded-md py-2 z-10">
          <div
            className="px-4 py-1 hover:bg-gray-100 cursor-pointer text-[13px]"
            onClick={() => handleSectionClick("All Students")}
          >
            All Students
          </div>

          <div
            className="px-4 py-1 hover:bg-gray-100 cursor-pointer text-[13px]"
            onClick={() => handleSectionClick("Primary")}
          >
            Primary Section
          </div>

          <div
            className="px-4 py-1 hover:bg-gray-100 cursor-pointer text-[13px]"
            onClick={() => handleSectionClick("Secondary")}
          >
            Secondary Section
          </div>
        </div>
      )}
    </div>
  );
};

export default BtnWithDownArrow;
