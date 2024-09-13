import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchFilterField from "../components/forms/SearchFilterField";
import Forms from "../components/forms/Forms";
import CancelBtn from "../components/forms/CancelBtn";
import { useContext } from "react";
import FormContext from "../components/forms/context";

const Teachers = () => {
  const { toggleFormVisibility, isFormVisible, setIsFormVisible } =
    useContext(FormContext);

  return (
    <div>
      <Breadcrumbs title1={"Dashboard"} title2={"Teachers"} />
      <div className="flex flex-col gap-5 items-end">
        <CancelBtn
          onClick={toggleFormVisibility}
          type="button"
          className="w-fit px-2 py-1 bg-[#eae6ff] text-[#403294] font-medium text-[14px]"
        >
          {isFormVisible ? "Cancel" : "Create New Teacher"}
        </CancelBtn>
        <SearchFilterField />
      </div>
      {/* Modal to display the form */}
      {isFormVisible && <Forms />}
    </div>
  );
};

export default Teachers;
