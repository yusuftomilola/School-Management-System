import React, { useReducer } from 'react';
import DashboardUsers from '../pages/DashboardUsers';


function SearchFilterButton({ teachers }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: 'FILTER_DATA' }); 
  };

  const handleCategoryChange = (e) => {
    dispatch({ type: 'SETCATEGORY', payload: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <div className="flex bg-white gap-2 pl-2 pr-12 items-center border-[#DFE1E6] border-2 rounded-md">
              <img
                src="src/assets/icons/search-icon.png"
                alt="search-icon"
                className="w-3 h-3"
              />
              <input
                type="text"
                placeholder="Search"
                value={state.searchValue}
                onChange={(e) =>
                  dispatch({ type: 'SETSEARCH', payload: e.target.value })
                }
                className="border-none font-medium outline-none"
              />
            </div>
            <button
              className="bg-[#403294] px-[28px] rounded text-white font-medium outline-none"
              type="submit"
            >
              Search
            </button>
          </div>

          <div>
            <select
              name="filter"
              id=""
              className="bg-[#DFE1E6] rounded px-2 py-3 text-[#42526e] text-[14px] font-light outline-none"
              onChange={handleCategoryChange}
            >
              <option value="">Filter</option>
              <option value="A-z">A-Z</option>
              <option value="DateCreated">Date Created</option>
              <option value="Filter1">Filter 1</option>
              <option value="Filter2">Filter 2</option>
            </select>
          </div>
        </div>
      </form>
      <div>
        {state.error && <p className="text-red-500">{state.error}</p>}
      {state.filteredData.length > 0 ? (
      state.filteredData.map((teacher, index) => (
        <div key={index}>{teacher.name}</div>
      ))
    ) : (
      <p>No data to display</p>
    )}
      </div>
    </div>
  );
}

export default SearchFilterButton;
