import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProprietorCard({ id, name, qualification, rank, imageUser, staffID }) {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  // Toggle dropdown visibility for a specific card
  const handleToggle = (userId) => {
    setOpenDropdownId(openDropdownId === userId ? null : userId);
  };

  // Handle navigation and set active state
  const handleNavigation = (path, userId) => {
    navigate(path);
    setActiveItem({ path, userId });
    setOpenDropdownId(null); // Close the dropdown
  };

  return (
    <div className="flex flex-col w-full rounded-md shadow-sm bg-white px-3 pt-3 border-slate-500 mb-8">
      <Link to={`/userss/${name}`}>
        <div className="flex">
          <div className="">
            <img src={imageUser} alt="user" />
          </div>
          <div className="ml-4 mt-5">
            <h4 className="text-[#172B4D] text-[14px] font-bold mb-2">
              {name}
            </h4>
            <p className="text-[#5243aa] bg-[#faf5f7] p-1 text-sm mb-2">
              {qualification}
            </p>
            <p className="text-[#5E6C84] text-sm">Rank: {rank}</p>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-end">
        {/* MORE DROPDOWN CARD */}
        <div className="relative inline-block">
          <p
            onClick={() => handleToggle(id)}
            className="cursor-pointer p-3 text-[#7A869A] flex items-center gap-1"
          >
            More
            <img
              src="src/assets/icons/shortDownArrowIcon2.svg"
              alt="arrow down"
              className="mt-[5px]"
            />
          </p>

          {openDropdownId === id && (
            <ul className="absolute w-[89px] bg-[#f9fbfb] -mt-2">
              {["View", "Edit", "Delete"].map((action) => (
                <li
                  key={action}
                  className={`text-[12px] p-1 cursor-pointer ${
                    activeItem?.path === `/userss/${name}` &&
                    activeItem?.userId === id
                      ? "bg-gray-200 font-bold"
                      : ""
                  } hover:bg-gray-300 font-medium`}
                  onClick={() => handleNavigation(`/userss/${name}`, id)}
                >
                  {action}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProprietorCard;
