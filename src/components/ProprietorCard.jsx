import MoreDropdown from "./MoreDropdown"

function ProprietorCard({ name, qualification, rank, imageUser }) {
  return (
    <div className="flex flex-col w-full rounded-md shadow-sm bg-white px-3 pt-3 border-slate-500 mb-8">
      <div className="flex ">
        <div className="">
          <img src={imageUser} alt="user" />
        </div>
        <div className="ml-4 mt-5">
          <h4 className="text-[#172B4D] text-[14px] font-bold mb-2">{name}</h4>
          <p className="text-[#5243aa] bg-[#faf5f7] p-1 text-sm mb-2">
            {qualification}
          </p>

          <p className="text-[#5E6C84] text-sm">Rank: {rank}</p>
        </div>
      </div>
      <div className="flex items-center justify-end ">
        <MoreDropdown />
        <img src="src/assets/icons/shortDownArrowIcon2.svg" alt="arrow down" />
      </div>
    </div>
  );
}

export default ProprietorCard;
