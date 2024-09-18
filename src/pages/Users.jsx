import React from "react";
import PreprietorCard from "../components/ProprietorCard";
import userImg from "../assets/images/ProprietorImg.svg";

const Users = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-[#172B4D]">Users</h1>
        <button className="btn  bg-[#5243AA] items-center text-white font-semibold px-7 py-2 rounded-sm">Create Users</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-10 w-full ">
        <PreprietorCard
          imageUser={userImg}
          name={"Mark May John Doe"}
          qualification={"BSC Computer Science"}
          rank={"Proprietor 1"}
        />
      </div>
    </>
  );
};

export default Users;
