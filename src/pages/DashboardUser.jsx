import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchBoxEditDelete from "../components/SearchBoxEditDelete";
import studentsTableData from "../data/students";
import StudentPerformanceChartContainer from "../components/dashboard/StudentPerformanceChartContainer";
import AddSubject from "../components/AddSubject";
import StudentScoresheet from "../components/tables/studentScoresheet/StudentScoresheet";
import CreateNewButton from "../components/CreateNewButton";
import { userss } from "../data/users";

const DashboardUser = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <section className="flex items-start justify-between mb-8 flex-col sm:flex-row sm:items-center gap-5 sm:gap-0">
        <Breadcrumbs
          title1={"Dashboard"}
          url1={"/dashboard"}
          title2={"Users"}
          url2={"/userss"}
          title3={`${params.userName}`}
        />

        <CreateNewButton backgroundColor={"#403294"} textColor={"#EAE6FF"}>
          Create New User
        </CreateNewButton>
      </section>

      {userss
        .filter((user) => user.name === params.userName)
        .map((user) => {
          return (
            <section
              className="flex flex-col lg:flex-row gap-4  justify-between"
              key={user.id}
            >
              <h1>Staff Name is: {user.name}</h1>
            </section>
          );
        })}
    </div>
  );
};

export default DashboardUser;
