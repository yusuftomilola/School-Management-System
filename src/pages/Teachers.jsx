import React, { useContext, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Forms from "../components/forms/Forms";
import FormContext from "../components/forms/context";

// YUSUF'S CHANGES
import TeachersContext from "../contexts/teachersContext";
import TeacherCard from "../components/TeacherCard";
import CreateNewButton from "../components/CreateNewButton";
import SearchFilterButton2 from "../components/SearchFilterButton2";

const Teachers = () => {
  const { toggleFormVisibility, isFormVisible, setIsFormVisible } =
    useContext(FormContext);

  const { teachersData, fetchTeachers } = useContext(TeachersContext);
  console.log(teachersData);

  useEffect(() => {
    fetchTeachers(); // Fetch teachers when the component mounts
  }, []);

  const handleFormSubmit = () => {
    setIsFormVisible(false);
    fetchTeachers(); // Refetch teachers after form submission
  };

  return (
    <div>
      <Breadcrumbs
        title1={"Dashboard"}
        url1={"/dashboard"}
        title2={"Teachers"}
      />

      <div className="flex flex-col gap-5 items-end">
        {/* <CancelBtn
          onClick={toggleFormVisibility}
          type="button"
          className="w-fit px-2 py-2 bg-[#eae6ff] text-[#403294] font-medium text-[14px]"
        >
          {isFormVisible ? "Create New Teacher " : "Create New Teacher"}
        </CancelBtn> */}

        <div onClick={toggleFormVisibility}>
          <CreateNewButton backgroundColor={"#EAE6FF"} textColor={"#403294"}>
            Create New Teacher
          </CreateNewButton>
        </div>

        {/* <SearchFilterField /> */}
        <SearchFilterButton2 />
      </div>

      {/* Modal to display the form */}
      {isFormVisible && <Forms onSubmitSuccess={handleFormSubmit} />}

      <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4 xl:grid-cols-3 mt-6">
        {teachersData.map((teacher) => {
          if (teacher.staffID === "teacher") {
            return (
              <TeacherCard
                key={teacher.id}
                name={teacher.fullName}
                qualification={teacher.highestQualification}
                subject={teacher.subject}
                classs={teacher.classs}
                imageUser={teacher.image}
              />
            );
          }
          return null;
        })}
      </div>

      {/* {teachersData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          {teachersData.map((teacher) => {
            const {
              id,
              fullName,
              highestQualification,
              subject,
              classs,
              image,
            } = teacher;
            return (
              <div key={id}>
                <UserCard
                  id={id}
                  name={fullName}
                  qualification={highestQualification}
                  subject={subject}
                  clas={classs}
                  imageUser={image}
                />
              </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
};

export default Teachers;
