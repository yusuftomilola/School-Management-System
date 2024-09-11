import React from "react";
import { DatePicker } from "antd";
import Button from "./Button";
import CancelBtn from "./CancelBtn";

const { RangePicker } = DatePicker;
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const SchoolCalender = () => {
  return (
    <div>
      <form className=" border border-solid border-red-600 max-w-[500px] p-5">
        <h1 className="font-medium text-[20px] pt-3 pb-3">School Calender</h1>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-semibold text-[12px]">Academic Session</h1>

            <DatePicker
              onChange={onChange}
              picker="year"
              className="w-full  hover:border-purple-500 focus:border-purple-500"
              placeholder={["11/15/24"]}
            />
          </div>
          <div>
            <h1 className="font-semibold text-[12px]">First term</h1>
            <RangePicker
              picker="date"
              className="w-full  hover:border-purple-500 focus:border-purple-500"
              placeholder={["11/15/24", "12/4/2025"]}
            />
          </div>
          <div>
            <h1 className="font-semibold text-[12px]">Second term</h1>
            <RangePicker
              picker="date"
              className="w-full  hover:border-purple-500 focus:border-purple-500"
              placeholder={["11/15/24", "12/4/2025"]}
            />
          </div>
          <div>
            <h1 className="font-semibold text-[12px]">Third term</h1>
            <RangePicker
              picker="date"
              className="w-full  hover:border-purple-500 focus:border-purple-500"
              placeholder={["11/15/24", "12/4/2025"]}
            />
          </div>
        </div>
        <div className="flex gap-5 mt-8">
          <CancelBtn>Cancel</CancelBtn>
          <Button className="text-white font-normal border border-solid border-[#dfe1e6]">
            Create Clender
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SchoolCalender;
