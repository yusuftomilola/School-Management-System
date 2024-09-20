import React, { useContext } from "react";
import FormContext from "../components/forms/context";
import Forms from "../components/forms/Forms";
import PreprietorCard from "../components/ProprietorCard";
import userImg from "../assets/images/ProprietorImg.svg";
import CreateNewButton from "../components/CreateNewButton";

const Users = () => {
  const { toggleFormVisibility, isFormVisible, setIsFormVisible } =
    useContext(FormContext);

  return (
    <>
      <div className="flex justify-between mt-5 mb-4 items-center">
        <h1 className="font-semibold text-base text-[#172B4D]">Users</h1>

        <div onClick={toggleFormVisibility}>
          <CreateNewButton backgroundColor={"#403294"} textColor={"#EAE6FF"}>
            Create New User
          </CreateNewButton>
        </div>
      </div>

      {/* Modal to display the form */}
      {isFormVisible && <Forms />}

      <div
        className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4 xl:grid-cols-3
      "
      >
        <PreprietorCard
          imageUser={userImg}
          name={"Mary Joe Angela"}
          qualification={"BSC Computer Science"}
          rank={"Proprietor 1"}
        />
      </div>
    </>
  );
};

export default Users;
