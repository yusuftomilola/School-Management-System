import MoreDropdown from "./MoreDropdown"

function UserCard({ name, qualification, rank, imageUser }) {
  return (
    <div className="flex flex-col w-full rounded-md shadow-sm bg-white p-6 mb-5">
      <div className="flex">
        <div>
          <img src={imageUser} alt="user" />
        </div>
        <div className="ml-4">
          <h3 className="text-[#172B4D] text-[20px] font-bold">{name}</h3>
          <p className="text-[#5243aa] bg-[#faf5f7] p-1">{qualification}</p>
          <p className="text-[#172B4D]">Rank: {rank}</p>
          
        </div>
      </div>

      <div className="flex items-center mt-4 justify-end ">
        <MoreDropdown />
        <img src="src/assets/icons/shortDownArrowIcon2.svg" alt="arrow down" />
      </div>
    </div>
  );
}

export default UserCard;
