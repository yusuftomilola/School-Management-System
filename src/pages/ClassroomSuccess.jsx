import React from "react";
import LottieAnimation from "../components/SuccessLottieAnimation";

const ClassroomSuccess = () => {
  return (
    <div className="flex flex-col gap-2 items-center py-10">
      <LottieAnimation />
      <h1 className="font-semibold text-[20px] text-[#404040]">
        Classroom Created Successfully
      </h1>
    </div>
  );
};

export default ClassroomSuccess;
