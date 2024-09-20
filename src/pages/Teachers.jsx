import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Forms from "../components/forms/Forms";
import FormContext from "../components/forms/context";
import TeachersContext from "../contexts/teachersContext";
import TeacherCard from "../components/TeacherCard";
import CreateNewButton from "../components/CreateNewButton";
import SearchFilterButton2 from "../components/SearchFilterButton2";

const Teachers = () => {
  const { toggleFormVisibility, isFormVisible, setIsFormVisible } =
    useContext(FormContext);
  const { teachersData, fetchTeachers } = useContext(TeachersContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    fetchTeachers();
  }, []);

  useEffect(() => {
    setFilteredTeachers(
      teachersData.filter((teacher) => teacher.staffID === "teacher")
    );
  }, [teachersData]);

  const handleFormSubmit = () => {
    setIsFormVisible(false);
    fetchTeachers();
  };

  const handleSearch = () => {
    let filtered = teachersData.filter(
      (teacher) =>
        teacher.staffID === "teacher" &&
        (teacher.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          teacher.classs.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (sortOrder === "A-Z") {
      filtered.sort((a, b) => a.fullName.localeCompare(b.fullName));
    }

    if (sortOrder === "Z-A") {
      filtered.sort((a, b) => b.fullName.localeCompare(a.fullName));
    }

    setFilteredTeachers(filtered);
    setIsFiltered(searchTerm !== "" || sortOrder !== "none");
  };

  const handleReset = () => {
    setSearchTerm("");
    setSortOrder("none");
    setFilteredTeachers(
      teachersData.filter((teacher) => teacher.staffID === "teacher")
    );
    setIsFiltered(false);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...filteredTeachers];
    if (order === "A-Z") {
      sorted.sort((a, b) => a.fullName.localeCompare(b.fullName));
    } else if (order === "Z-A") {
      sorted.sort((a, b) => b.fullName.localeCompare(a.fullName));
    } else {
      sorted = teachersData.filter(
        (teacher) =>
          teacher.staffID === "teacher" &&
          (teacher.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.classs.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    setFilteredTeachers(sorted);
    setIsFiltered(searchTerm !== "" || order !== "none");
  };

  return (
    <div>
      <Breadcrumbs
        title1={"Dashboard"}
        url1={"/dashboard"}
        title2={"Teachers"}
      />

      <div className="flex flex-col gap-5 items-end">
        <div onClick={toggleFormVisibility}>
          <CreateNewButton backgroundColor={"#EAE6FF"} textColor={"#403294"}>
            Create New Teacher
          </CreateNewButton>
        </div>

        <SearchFilterButton2
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          handleReset={handleReset}
          isFiltered={isFiltered}
          handleSort={handleSort}
          sortOrder={sortOrder}
        />
      </div>

      {isFormVisible && <Forms onSubmitSuccess={handleFormSubmit} />}

      {filteredTeachers.length === 0 && <p>No teachers found</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4 xl:grid-cols-3 mt-6">
        {filteredTeachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            name={teacher.fullName}
            qualification={teacher.highestQualification}
            subject={teacher.subject}
            classs={teacher.classs}
            imageUser={teacher.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
