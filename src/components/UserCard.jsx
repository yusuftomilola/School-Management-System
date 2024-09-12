

function UserCard({name, qualification, subject, clas, imageUser }) {
  return (
    <div className="flex flex-col w-full rounded-md shadow-sm bg-white p-5 mb-5">
      <div className="flex">
        <div>
          <img src={imageUser} alt="user" />
        </div>
        <div className="ml-4">
          <h4 className="text-[#172B4D] text-[16px] font-bold">{name}</h4>
          <p className="text-[#5243aa] bg-[#faf5f7] p-1 text-sm">
            {qualification}
          </p>
          <p className="text-[#172B4D] text-sm">Subject: {subject}</p>
          <p className="text-[#172B4D] text-sm">{clas}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 justify-end ">
        <p className="text-[#7A869A]">more</p>
        <img src="src/assets/icons/shortDownArrowIcon2.svg" alt="arrow down" />
      </div>
    </div>
  );
}

export default UserCard;