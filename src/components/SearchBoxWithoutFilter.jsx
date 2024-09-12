import React from 'react'

function SearchFilterButton() {
  return (
    <div >
      <form action="">
        <div className="flex gap-2">
          <div className='flex gap-2'>
            <div className=" flex bg-white gap-2 pl-2 pr-12 items-center border-[#DFE1E6] border-2 rounded-md ">
              <img
                src="src/assets/icons/search-icon.png"
                alt="search-icon"
                className="w-3 h-3"
              />
              <input
                type="text"
                placeholder="Search"
                className="border-none font-medium outline-none py-2"
              />
            </div>
            <button className="bg-[#403294] px-[28px] py-2 rounded text-white font-medium outline-none ">
              Search
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default SearchFilterButton
