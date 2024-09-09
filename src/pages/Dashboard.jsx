import Breadcrumbs from "../components/Breadcrumbs";
import Card from "../components/dashboard/Card";
import {
  StudentsIcon,
  TeachersIcon,
  ClassroomsIcon,
  SubjectsIcon,
} from "../assets/icons/dashboard";
import EarningsChartContainer from "../components/dashboard/EarningsChartContainer";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-7">
      <Breadcrumbs title1={"Dashboard"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card number={"1,200"} title={"Students"} url={StudentsIcon} />
        <Card number={"1,200"} title={"Teachers"} url={TeachersIcon} />
        <Card number={"1,200"} title={"Classrooms"} url={ClassroomsIcon} />
        <Card
          number={"24"}
          title={"Total Number Subjects"}
          url={SubjectsIcon}
        />
      </div>

      <div>
        <h2 className="text-[20px] font-semibold">Earnings</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <EarningsChartContainer />

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
