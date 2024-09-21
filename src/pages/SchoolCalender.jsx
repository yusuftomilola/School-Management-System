import React from "react";
import Calender from "../components/forms/Calender";
import DateContext from "../contexts/calenderContext";
import { useContext } from "react";
import calenderLogo from "../assets/icons/calendar.svg";

const SchoolCalender = () => {
  const { toggleCalenderVisibility, calender, setCalender } =
    useContext(DateContext);

  return (
    <div className="w-full center-calendar">
      <h1 className="text-xl font-bold">School Calendar</h1>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex  flex-col items-center">
          <img src={calenderLogo} alt="" className="h-[228px] w-[349px] mb-7" />
          <h2 className="text-xl font-bold">
            You currently don't have an active calendar
          </h2>
          <button
            className="text-[#0052CC] p-5"
            onClick={() => setCalender(true)}
          >
            Add Academic Calender
          </button>
        </div>
      </div>
      {calender && (
        <div className="w-full md:w-auto h-full border border-solid border-amber-50 bg-white md:h-auto fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center items-center  bg-[transparent] ">
          <Calender />
        </div>
      )}
    </div>
  );
};

export default SchoolCalender;
