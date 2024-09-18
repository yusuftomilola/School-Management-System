import React, { useReducer } from "react";
import DashboardUsers from "../pages/DashboardUsers";
import searchIcon from "../assets/icons/searchIcon.svg";
import shortDownArrowIcon from "../assets/icons/shortDownArrowIcon.svg";

function SearchFilterButton({
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleReset,
  isFiltered,
  handleSort,
  sortOrder,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-end gap-2 items-center justify-start w-full">
      <div className="flex pl-2 pr-12 bg-white items-center border-[#DFE1E6] border-2 rounded h-[30px] w-[200px]">
        <img src={searchIcon} alt="search-icon" className="w-[16px] h-[16px]" />
        <input
          type="text"
          placeholder="Search Student"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none font-medium h-[20px] outline-none focus:ring-0 focus:outline-none placeholder:text-[11px] w-full text-[12px] text-gray-500"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleSearch}
          className="bg-[#403294] px-[12px] rounded text-white outline-none h-[28px] text-[13px]"
        >
          Search
        </button>

        <div>
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="flex items-center gap-1 bg-[#90909072] text-[#42526E] rounded text-[14px] 
    px-[10px] h-[28px] w-[85px] appearance-none text-center leading-none border-none"
            style={{ paddingTop: "2px", paddingBottom: "2px" }}
          >
            <option value="none">Filter</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>

        {isFiltered && (
          <button
            onClick={handleReset}
            className="text-red-500 text-[13px] font-medium"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchFilterButton;
