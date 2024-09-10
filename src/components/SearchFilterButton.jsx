import React from 'react'

function SearchFilterButton() {
  return (
    <div className="flex gap-3">
      <div className=" flex bg-white gap-3 p-2 items-center border-[#DFE1E6] border-2 rounded ">
        <img
          src="src/assets/icons/search-icon.png"
          alt="search-icon"
          className="w-4 h-4 "
        />
        <input type="text" placeholder='Search' />
      </div>
      <button className="bg-[#403294] px-4 py-2 rounded text-white font-medium text-[14px] outline-none ">
        Search
      </button>
      <div>
        <select
          name="filter"
          id=""
          className="bg-[#DFE1E6] rounded px-2 py-3 text-[#42526e] text-[14px] font-medium"
        >
          <option value="">Filter</option>
          <option value="vfrfr">A-Z</option>
          <option value="rfre">Date Created</option>
          <option value="refr">Filter 1</option>
          <option value="refer">Filter 2</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilterButton
