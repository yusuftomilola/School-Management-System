import React from "react";

const users = [
  {
    name: "Mary May John Doe",
    qualification: "Bsc Computer Science",
    rank: "Rank: Proprietor I",
    subject: "Math",
  },

];

function UserCard() {
  return (
    <div>
      {users.map((user, index) => (
        <div
          key={index}
          className="flex flex-col w-full rounded-md shadow-sm bg-white p-5 mb-5"
        >
          <div className="flex">
            <div>
              <img src="src/assets/icons/userProprietor.svg" alt="user" />
            </div>
            <div className="ml-4">
              <h3 className="text-[#172B4D] text-[20px] font-bold">
                {user.name}
              </h3>
              <p className="text-[#5243aa] bg-[#faf5f7] p-1">
                {user.qualification}
              </p>
              <p className="text-[#172B4D]">Subject: {user.subject}</p>
              <p className="">{user.rank}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4 justify-end ">
            <p className="text-[#7A869A]">more</p>
            <img
              src="src/assets/icons/shortDownArrowIcon2.svg"
              alt="arrow down"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserCard;
