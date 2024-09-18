import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchBoxEditDelete from "../components/SearchBoxEditDelete";
import studentsTableData from "../data/students";
import StudentPerformanceChartContainer from "../components/dashboard/StudentPerformanceChartContainer";
import AddSubject from "../components/AddSubject";
import StudentScoresheet from "../components/tables/studentScoresheet/StudentScoresheet";
import CreateNewButton from "../components/CreateNewButton";
import teachersData from "../data/teachers";

const Teacher = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <section className="flex items-start justify-between mb-8 flex-col sm:flex-row sm:items-center gap-5 sm:gap-0">
        <Breadcrumbs
          title1={"Dashboard"}
          url1={"/dashboard"}
          title2={"Teachers"}
          url2={"/teachers"}
          title3={`${params.userName}`}
        />

        <CreateNewButton backgroundColor={"#EAE6FF"} textColor={"#403294"}>
          Create New Teacher
        </CreateNewButton>
      </section>

      {teachersData
        .filter((teacher) => teacher.fullName === params.userName)
        .map((teacher) => {
          return (
            <section
              className="flex flex-col lg:flex-row gap-4  justify-between"
              key={teacher.id}
            >
              <h1>Teacher Name is: {teacher.fullName}</h1>
            </section>
          );
        })}
    </div>
  );
};

export default Teacher;
