import { TwelvePercent } from "../../assets/icons/dashboard";
import EarningsChart from "./EarningsChart";

const EarningsChartContainer = () => {
  return (
    <div className="bg-white shadow-sm rounded-md p-4 h-[300px]">
      <p className="text-[#606060] text-[14px] mb-6">Earnings this month</p>

      <div className="flex gap-1">
        <span>(NGN)</span>
        <span>120,000,000,000</span>
        <img src={TwelvePercent} alt="twelve percent icon" />
      </div>

      <EarningsChart />
    </div>
  );
};

export default EarningsChartContainer;
