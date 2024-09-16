import React from "react";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function MoreDropdown() {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  const handleNavigation = (path) => {
    navigate(path)
    setIsOpen(false)
  }
  return (
    <div className="relative inline-block">
      <p onClick={handleToggle} className="cursor-pointer p-3 ">
        More
      </p>

      {isOpen && (
        <ul className="absolute w-[90px] bg-[#f9fbfb] -mt-3">
          <li className="text-[12px] p-1 cursor-pointer" onClick={() => handleNavigation("/edit")}>Edit</li>
          <li className="text-[12px] p-1 cursor-pointer" onClick={() => handleNavigation("/delete")}>Delete</li>
          <li className="text-[12px] p-1 cursor-pointer" onClick={() => handleNavigation("/view")}>View</li>
        </ul>
      )}
    </div>
  );
}

export default MoreDropdown;
