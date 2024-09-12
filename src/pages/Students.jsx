import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import StudentsTable from "../components/tables/students/StudentsTable";

const Students = () => {
  return (
    <div>
      <Breadcrumbs title1={"Students"} />
      <StudentsTable />
    </div>
  );
};

export default Students;
