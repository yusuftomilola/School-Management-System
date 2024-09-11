import React from "react";

const StudentClass = () => {
  return (
    <div>
      <form className="w-full max-w-[600px] p-[10px] max-h-[100vh] md:h-[100%] overflow-y-auto bg-white">
        <h1 className="text-[16px] font-bold text-[#3A3B3F] mb-5">
          Create Student
        </h1>

        <hr />

        <div className="flex flex-col-reverse sm:flex-row gap-8 mt-3">
          <div className="flex flex-col gap-4  md:flex-row">
            <div className="flex flex-col flex-1 gap-1">
              <label
                htmlFor="fullname"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Assign School Section
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] sm:w-full md:w-[250px]"
                placeholder="Primary Section"
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <label
                htmlFor="fullname"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Assign Student to a Class
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] sm:w-full md:w-[250px]"
                placeholder="Primary 2"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentClass;
