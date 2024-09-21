import React from "react";
import SubjectLogo from "../../assets/icons/subjects/subjectsIcon.svg";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="teacher-card border p-4 rounded-lg shadow-sm mb-4 ">
      <div className="flex justify-between">
        <img
          src={SubjectLogo}
          alt="Teacher"
          className="rounded-full h-20 w-20 mr-4"
        />
        <div>
          <h3 className="font-bold text-[16px]">{teacher.name}</h3>
          <p className="text-[14px] font-normal">{teacher.degree}</p>
          <p className="text-[11px] font-normal">
            Class Subject Teacher in {teacher.startDate}
          </p>
          <div className="subjects">
            {teacher.subjects.map((subject, index) => (
              <span
                key={index}
                className="subject-tag bg-[#f4f5f7]  py-1 rounded mr-2 text-[14px] font-normal"
              >
                {subject}
              </span>
            ))}
          </div>
          <div className="flex justify-end mt-4 ">
            <button className=" px-4 rounded pb-1 text-[14px] font-normal whitespace-nowrap">
              View Profile
            </button>
            <button className="bg-[#8777d7] text-white px-2 pb-1 rounded text-[14px] font-normal">
              Replace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
