import React from "react";

const Modal = () => {
  const [selectedClass, setSelectedClass] = useState("All");
  return (
    <div>
      <div className="fixed top-0 right-0 h-full mt-4 w-[400px] p-5 bg-white shadow-lg z-50">
        <div className="flex justify-between">
          <h1 className="text-[#403294] font-bold  text-[20px]">
            {selectedSubject.name} {/* Display the clicked subject name */}
          </h1>
          <div className="flex gap-1">
            <p className="text-[#403294] font-medium text-[14px]">Close</p>
            <img
              src="./Assets/cross-circle.svg"
              className="w-6 h-6"
              onClick={closeModal}
            ></img>
          </div>
        </div>
        <h1 className="text-[#000000] font-bold text-[14px] mt-3">
          List of classes taking the subject
        </h1>
        <div className="flex flex-wrap gap-2 mt-5 ">
          {classes.map((className, index) => (
            <button
              key={index}
              className={`px-2 py-[1px] text-[12px] font-normal w-[80px] whitespace-nowrap rounded-lg ${
                selectedClass === className
                  ? "bg-[#403294] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedClass(className)}
            >
              {className}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button className="text-[14px] font-normal text-[#000000] px-2 rounded-md">
            Remove Class
          </button>
          <button className="bg-[#8777d9] text-[14px] text-white px-2 pb-1 rounded-md">
            Add Class
          </button>
        </div>
        <h1 className="text-[16px] font-bold my-5">Subject Teacher</h1>
        <div className="teacher-list h-80 overflow-y-scroll rounded-lg w-full">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
          <h1 className="text-[16px] font-bold my-2 px-1">Student</h1>
          <img src="./Assets/Group 33.svg" className="p-1" />
          <div className="flex justify-end mt-4">
            <button className="text-[14px] font-normal text-[#000000] px-2 rounded-md">
              Add Student
            </button>
            <button className="bg-[#8777d9] text-[14px] text-white px-2 pb-1 rounded-md">
              View All
            </button>
          </div>
          <h1 className="text-[16px] font-bold my-2 px-1">
            Course Leaderboard
          </h1>
          <div className="flex flex-col gap-2">
            {/* Leaderboard content */}

            <div className="flex flex-col gap-2">
              <div className="card flex justify-between items-center border border-solid p-2  rounded-md border-[#dadada]">
                <div className="flex justify-center items-center gap-3">
                  <img
                    src="./Assets/Avatar (40px, presence).svg"
                    alt=""
                    className="h-[60px] w-[60px]"
                  />

                  <div>
                    <h1 className="text-[16px] font-normal">Hanson John</h1>
                    <h1 className="text-[12px] font-normal">92%</h1>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#36b37e] flex justify-center items-center rounded-full text-white">
                  <span className="font-bold">1</span>st
                </div>
              </div>
              <div className="card flex justify-between items-center border border-solid p-2  rounded-md border-[#dadada]">
                <div className="flex justify-center items-center gap-3">
                  <img
                    src="./Assets/Avatar (40px, presence).svg"
                    alt=""
                    className="h-[60px] w-[60px]"
                  />

                  <div>
                    <h1 className="text-[16px] font-normal">Hanson John</h1>
                    <h1 className="text-[12px] font-normal">92%</h1>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#36b37e] flex justify-center items-center rounded-full text-white">
                  <span className="font-bold">1</span>st
                </div>
              </div>
              <div className="card flex justify-between items-center border border-solid p-2  rounded-md border-[#dadada]">
                <div className="flex justify-center items-center gap-3">
                  <img
                    src="./Assets/Avatar (40px, presence).svg"
                    alt=""
                    className="h-[60px] w-[60px]"
                  />

                  <div>
                    <h1 className="text-[16px] font-normal">Hanson John</h1>
                    <h1 className="text-[12px] font-normal">92%</h1>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#36b37e] flex justify-center items-center rounded-full text-white">
                  <span className="font-bold">1</span>st
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
