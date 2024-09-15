import React from "react";
import Lottie from "react-lottie";
import animationData from "./successLottie.json"; // Replace with the correct path to your Lottie JSON file

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // The Lottie JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Adjust as needed
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;
