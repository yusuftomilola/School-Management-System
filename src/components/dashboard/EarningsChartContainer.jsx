import { TwelvePercent } from "../../assets/icons/dashboard";
import EarningsChart from "./EarningsChart";

const EarningsChartContainer = () => {
  return (
    <div className="bg-white shadow-sm rounded-md p-4 h-[210px] flex flex-col">
      <p className="text-[#606060] text-[12px]">Earnings this month</p>

      <div className="flex gap-1 mb-4 pt-10">
        <div className="relative">
          <span className="text-[11px] absolute top-[-10px]">(NGN)</span>
        </div>

        <div className="flex ml-8 gap-2 items-center">
          <span className="text-[20px] font-semibold">120,000,000,000</span>
          <img src={TwelvePercent} alt="twelve percent icon" className="h-5" />
        </div>
      </div>

      {/* Chart container takes remaining space */}
      <div className="flex-grow relative mt-[-20px]">
        <div className="absolute inset-0">
          <EarningsChart />
        </div>
      </div>
    </div>
  );
};

export default EarningsChartContainer;
