import { TwelvePercent } from "../../assets/icons/dashboard";
import EarningsChart from "./EarningsChart";

const EarningsChartContainer = () => {
  return (
    <div className="bg-white shadow-sm rounded-md p-4 h-[200px]">
      <p className="text-[#606060] text-[12px] mb-8">Earnings this month</p>

      <div className="flex gap-1 mb-4">
        <div className="relative">
          <span className="text-[11px] absolute top-[-10px]">(NGN)</span>
        </div>

        <div className="flex ml-8 gap-2 items-center">
          <span className="text-[20px] font-semibold">120,000,000,000</span>
          <img src={TwelvePercent} alt="twelve percent icon" className="h-5" />
        </div>
      </div>

      {/* Set the height of the chart */}
      <div className="relative h-[60px]">
        <EarningsChart />
      </div>
    </div>
  );
};

export default EarningsChartContainer;
