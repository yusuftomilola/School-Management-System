import React from "react";

function CourseLeaderBoardCard({ name, score, avatar, position, suffix }) {
  return (
    <div className="flex justify-between bg-[white] border-stone-500 w-full rounded p-6">
      <div className="flex gap-5">
        <div>
          <img src={avatar} alt="student-image" />
        </div>
        <div>
          <h2 className="text-[#253858] text-lg font-medium">{name}</h2>
          <p className="text-[#253858] text-[12px]">{score}</p>
        </div>
      </div>
      <div className="bg-[#36B37E] w-14 h-14 text-white rounded-full flex items-center justify-center">
        <p className="font-bold text-white text-2xl">
          {position}
          <span className="font-light text-[16px]">{suffix}</span>
        </p>
      </div>
    </div>
  );
}

export default CourseLeaderBoardCard;
