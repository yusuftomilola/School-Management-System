import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import StudentsTable from "../components/tables/students/StudentsTable";
import GuardianForms from "../components/forms/GuardianForm.JSX";
import StudentForm from "../components/forms/StudentForm";

const Students = () => {
  return (
    <div>
      <Breadcrumbs title1={"Students"} />
      <StudentsTable />
      <GuardianForms />
      <StudentForm />
    </div>
  );
};

export default Students;
