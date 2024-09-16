import React from "react";
import LottieAnimation from "../components/SuccessLottieAnimation";

const Success = () => {
  return (
    <div className="flex flex-col gap-2 items-center py-10 justify-center">
      <LottieAnimation />
      <h1 className="font-semibold text-[20px] text-[#404040]">
        Student Created Successfully
      </h1>
    </div>
  );
};

export default Success;
