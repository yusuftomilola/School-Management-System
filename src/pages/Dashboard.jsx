import Breadcrumbs from "../components/Breadcrumbs";
import Card from "../components/dashboard/Card";
import {
  StudentsIcon,
  TeachersIcon,
  ClassroomsIcon,
  SubjectsIcon,
} from "../assets/icons/dashboard";
import EarningsChartContainer from "../components/dashboard/EarningsChartContainer";
import ProgressBar from "../components/ProgressBar";
import checkIcon from "../assets/icons/purpleCheckIcon.svg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-7 mb-[70px] lg:mb-0">
      <Breadcrumbs title1={"Dashboard"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/students">
          <Card number={"1,200"} title={"Students"} url={StudentsIcon} />
        </Link>

        <Link to="/teachers">
          <Card number={"1,200"} title={"Teachers"} url={TeachersIcon} />
        </Link>

        <Link to="/classrooms">
          <Card number={"1,200"} title={"Classrooms"} url={ClassroomsIcon} />
        </Link>

        <Link to="/subjects">
          <Card number={"24"} title={"Subjects"} url={SubjectsIcon} />
        </Link>
      </div>

      <div>
        <h2 className="mt-6 mb-3 text-[20px] font-bold">Earnings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EarningsChartContainer
            text={"Earnings this month"}
            currency={"(NGN)"}
            amount={"120,000,000,000"}
          />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <ProgressBar
                title={"School Fees"}
                amount={"1,200"}
                mainColor={`#00875A`}
                secondaryColor={"#E3FCEF"}
              />

              <ProgressBar
                title={"Lesson Fees"}
                amount={"1,200"}
                mainColor={`#0052CC`}
                secondaryColor={"#DEEBFF"}
              />
            </div>

            <div className="flex gap-4 bg-[#EAE6FF] h-[103px] rounded-md px-4 pt-3 items-start">
              <img src={checkIcon} alt="checkbox" />

              <div className="flex flex-col gap-[2px]">
                <h4 className="text-[15px] font-semibold text-[#172B4D]">
                  New Activity
                </h4>
                <p className="text-[12px] text-[]">
                  Title and actions are optional. Toggle their visibility as
                  needed
                </p>
                <p className="text-[12px] text-[#0052CC] font-semibold">
                  Add new action
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
