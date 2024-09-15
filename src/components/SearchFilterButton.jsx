import React from "react";

function SearchFilterButton() {
  return (
    <div className="flex flex-wrap gap-2">
      <div className=" flex bg-white gap-2 pl-2 pr-12 items-center border-[#DFE1E6] border-2 rounded-md">
        <img
          src="src/assets/icons/search-icon.png"
          alt="search-icon"
          className="w-3 h-3"
        />
        <input
          type="text"
          placeholder="Search"
          className="border-none font-medium outline-none"
        />
      </div>
      <button className="bg-[#403294] px-[28px] rounded text-white font-medium outline-none ">
        Search
      </button>
      <div>
        <select
          name="filter"
          id=""
          className="bg-[#DFE1E6] rounded px-2 py-2 text-[#42526e] text-[14px] font-light outline-none"
        >
          <option value="Filter">Filter</option>
          <option value="A-z">A-Z</option>
          <option value="Date Created">Date Created</option>
          <option value="Filter 1">Filter 1</option>
          <option value="filter 2">Filter 2</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilterButton;
