import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MoreDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(null); // Track active item
  const navigate = useNavigate();

  // Toggle dropdown visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle navigation and set active state
  const handleNavigation = (path) => {
    navigate(path);
    setIsActive(path); // Set the active path
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative inline-block">
      <p onClick={handleToggle} className="cursor-pointer p-3  text-[#7A869A]">
        More
      </p>

      {isOpen && (
        <ul className="absolute w-[89px] bg-[#f9fbfb] -mt-2">
          <li
            className={`text-[12px] p-1 cursor-pointer ${
              isActive === "/edit" ? "bg-gray-200 font-bold" : ""
            } hover:bg-gray-300 font-medium`} // Added hover effect
            onClick={() => handleNavigation("/edit")}
          >
            Edit
          </li>
          <li
            className={`text-[12px] p-1 cursor-pointer ${
              isActive === "/delete" ? "bg-gray-200 font-bold" : ""
            } hover:bg-gray-300 font-medium`} // Added hover effect
            onClick={() => handleNavigation("/delete")}
          >
            Delete
          </li>
          <li
            className={`text-[12px] p-1 cursor-pointer ${
              isActive === "/view" ? "bg-gray-200 font-bold" : ""
            } hover:bg-gray-300 font-medium`} // Added hover effect
            onClick={() => handleNavigation("/view")}
          >
            View
          </li>
        </ul>
      )}
    </div>
  );
}

export default MoreDropdown;
