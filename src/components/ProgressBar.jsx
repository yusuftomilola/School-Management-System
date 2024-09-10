import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles.css";

const ProgressBar = ({ title, amount, mainColor, secondaryColor }) => {
  const percentage = 36;
  // const value = 1200;

  return (
    <div className="flex rounded-md py-3 px-4 w-full h-[100px] items-center bg-white justify-between">
      <div style={{ width: 60, height: 60 }}>
        <CircularProgressbar
          value={percentage}
          strokeWidth={30}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            textSize: "16px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: mainColor,
            textColor: "#f88",
            trailColor: secondaryColor,
            backgroundColor: "#3e98c7",
          })}
        />
      </div>

      <div>
        <h3 className="text-[22px] text-[#172B4D] font-semibold">{amount}</h3>
        <p className="text-[#172B4D] text-[14px]">{title}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
