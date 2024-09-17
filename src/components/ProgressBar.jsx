import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles.css";

const ProgressBar = ({ title, amount, mainColor, secondaryColor }) => {
  // Initial percentage starts from 0 for animation
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Animate the progress to 36% over 1 second
    const timer = setTimeout(() => {
      setPercentage(36); // Target percentage
    }, 500); // Delay to smooth the start of the animation

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex rounded-md py-3 px-4 w-full h-[90px] items-center bg-white justify-between gap-x-3">
      <div style={{ width: 60, height: 60 }}>
        <CircularProgressbar
          value={percentage}
          strokeWidth={30}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0,

            // Whether to use rounded or flat corners on the ends
            strokeLinecap: "butt",

            // Text size
            textSize: "16px",

            // Animation duration for path transition
            pathTransitionDuration: 1, // 1 second for animation

            // Colors
            pathColor: mainColor,
            textColor: "#f88",
            trailColor: secondaryColor,
            backgroundColor: "#3e98c7",
            // Ensure smooth stroke-dashoffset transition
            transition: "stroke-dashoffset 1s ease 0s",
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          })}
        />
      </div>

      <div>
        <h3 className="text-[22px] text-[#172B4D] font-semibold">{amount}</h3>
        <p className="text-[#172B4D] text-[13px]">{title}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
