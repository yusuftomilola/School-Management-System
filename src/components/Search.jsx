import arrowDown from "../assets/icons/shortDownArrowIcon.svg";

const Search = () => {
  return (
    <section className="flex justify-end items-center gap-x-[10px] my-3">
        <div className="flex gap-x-[10px]">
          <input
            type="text"
            placeholder="Search"
            className="border-1 outline-0 border-[#DFE1E6] rounded h-8 text-sm"
          />
          <button className="text-sm font-[500] text-white bg-[#403294] px-3 py-[6px] rounded">
            Search
          </button>
        </div>
        <button className="bg-[#091E420A] rounded text-sm font-[400] text-[#42526E]  px-3 py-[6px]">
          Filter <img src={arrowDown} alt="" className="inline" />
        </button>
      </section>
  )
}

export default Search