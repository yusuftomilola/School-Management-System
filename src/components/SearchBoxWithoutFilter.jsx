import React from 'react'

function SearchFilterButton() {
  return (
    <div className="flex gap-3">
      <div className=" flex bg-white gap-2 pl-2 pr-12 items-center border-[#DFE1E6] border-2 rounded-md ">
        <img
          src="src/assets/icons/search-icon.png"
          alt="search-icon"
          className="w-4 h-4"
        />
        <input type="text" placeholder='Search' className='border-none font-medium' />
      </div>
      <button className="bg-[#403294] px-6 rounded text-white font-medium outline-none ">
        Search
      </button>
      
    </div>
  );
}

export default SearchFilterButton
