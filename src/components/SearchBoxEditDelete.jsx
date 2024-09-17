import React from "react";
import editIcon from "../assets/icons/editIcon.svg";
import deleteIcon from "../assets/icons/deleteIcon.svg";

function SearchFilterButton() {
  return (
    <div className="flex gap-2">
      <button
        className="flex items-center gap-1 text-[#FF8B00] bg-[#FFF0B3] rounded text-[14px] 
      px-[10px] h-[28px] border-[#FFE380] border-[1px]"
      >
        Edit
        <img src={editIcon} alt="edit icon" />
      </button>

      <button
        className="flex items-center gap-1 bg-[#FFBDAD] text-[#BF2600] rounded text-[14px] 
      px-[10px] h-[28px] border-[#FF8F73] border-[1px]"
      >
        Delete
        <img src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  );
}

export default SearchFilterButton;
