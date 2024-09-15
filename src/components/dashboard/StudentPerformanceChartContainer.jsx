import { TwelvePercent } from "../../assets/icons/dashboard";
import EarningsChart from "./EarningsChart";

const StudentPerformanceChartContainer = () => {
  return (
    <div className="bg-white shadow-sm rounded-b-md p-4 h-[210px] flex flex-col mt-3">
      <p className="text-[#606060] text-[12px] font-semibold">
        Student Average Perfomance this term
      </p>

      <div className="flex gap-1 mb-4 pt-4">
        <div className="flex gap-2 items-center">
          <span className="text-[20px] font-semibold">91%</span>
          <img src={TwelvePercent} alt="twelve percent icon" className="h-5" />
        </div>
      </div>

      {/* Chart container takes remaining space */}
      <div className="flex-grow relative mt-[-15px]">
        <div className="absolute inset-0">
          <EarningsChart />
        </div>
      </div>
    </div>
  );
};

export default StudentPerformanceChartContainer;
