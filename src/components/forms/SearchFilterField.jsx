import React from "react";

import Filter from "./filter";
import Button from "./Button";
const SearchFilterField = () => {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Search"
        className="bg-[url('./Assets/search-svgrepo-com.svg')] bg-[length:20px_20px] bg-[position:10px_center] bg-no-repeat py-5 px-8  h-6 rounded-lg outline-none border border-solid border-[#dfe1e6]"
      />
      <Button className="py-[8px] px-4 text-white">Search</Button>
      <Filter />
    </div>
  );
};

export default SearchFilterField;
