import React from "react";
import LottieAnimation from "../components/LottieAnimation";

const Success = () => {
  return (
    <div className="flex flex-col gap-2 items-center py-10">
      <LottieAnimation />
      <h1 className="font-bold text-[22px]">Student Created Successfully</h1>
    </div>
  );
};

export default Success;
