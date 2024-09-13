import Breadcrumbs from "../components/Breadcrumbs";

const SchoolCalender = () => {
  return (
    <div className="w-full center-calendar">
      <h1 className="text-xl font-bold">School Calendar</h1>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex  flex-col items-center">
          <img
            src="../src/assets/icons/calendar.svg"
            alt=""
            className="h-[228px] w-[349px] mb-7"
          />
          <h2 className="text-xl font-bold">
            You currently don't have an active calendar
          </h2>
          <button className="text-[#0052CC] p-5">Add Academic Calendar</button>
        </div>
      </div>
    </div>
  );
};

export default SchoolCalender;
