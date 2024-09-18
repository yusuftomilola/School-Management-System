import React, { useState, useContext } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchFilterField from "../components/forms/SearchFilterField";
import Forms from "../components/forms/Forms";
import CancelBtn from "../components/forms/CancelBtn";
import { useContext } from "react";
import FormContext from "../components/forms/context";

// YUSUF'S CHANGES
import UserCard from "../components/UserCard";
import TeachersContext from "../contexts/teachersContext";

const Teachers = () => {
  const { toggleFormVisibility, isFormVisible, setIsFormVisible } =
    useContext(FormContext);

  const { teachersData } = useContext(TeachersContext);
  console.log(teachersData);

  return (
    <div>
      <Breadcrumbs title1={"Dashboard"} title2={"Teachers"} />

      <div className="flex flex-col gap-5 items-end">
        <CancelBtn
          onClick={toggleFormVisibility}
          type="button"
          className="w-fit px-2 py-2 bg-[#eae6ff] text-[#403294] font-medium text-[14px]"
        >
          {isFormVisible ? "Create New Teacher " : "Create New Teacher"}
        </CancelBtn>
        <SearchFilterField />
      </div>

      {/* Modal to display the form */}
      {isFormVisible && <Forms />}

      {teachersData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          {teachersData.map((teacher) => {
            const {
              id,
              fullName,
              highestQualification,
              subject,
              classs,
              image,
            } = teacher;
            return (
              <div key={id}>
                <UserCard
                  id={id}
                  name={fullName}
                  qualification={highestQualification}
                  subject={subject}
                  clas={classs}
                  imageUser={image}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Teachers;
