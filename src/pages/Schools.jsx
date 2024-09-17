import React, { useState, useContext, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SubjectCard from "../components/SubjectCard";
import CreateNewButton from "../components/CreateNewButton";
import SearchFilterButton2 from "../components/SearchFilterButton2";
import { Link } from "react-router-dom";
import SchoolContext from "../contexts/schoolContext";

const Schools = () => {
  const { schoolsData } = useContext(SchoolContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    setFilteredSchools(schoolsData);
  }, [schoolsData]);

  const handleSearch = () => {
    let filtered = schoolsData.filter(
      (school) =>
        school.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.schoolLocation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "A-Z") {
      filtered.sort((a, b) => a.schoolName.localeCompare(b.schoolName));
    }

    if (sortOrder === "Z-A") {
      filtered.sort((a, b) => b.schoolName.localeCompare(a.schoolName));
    }

    setFilteredSchools(filtered);
    setIsFiltered(searchTerm !== "" || sortOrder !== "none");
  };

  const handleReset = () => {
    setSearchTerm("");
    setSortOrder("none");
    setFilteredSchools(schoolsData);
    setIsFiltered(false);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...filteredSchools];
    if (order === "A-Z") {
      sorted.sort((a, b) => a.schoolName.localeCompare(b.schoolName));
    } else if (order === "Z-A") {
      sorted.sort((a, b) => b.schoolName.localeCompare(a.schoolName));
    } else {
      sorted = schoolsData.filter(
        (school) =>
          school.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          school.schoolLocation.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredSchools(sorted);
    setIsFiltered(searchTerm !== "" || order !== "none");
  };

  return (
    <div className="flex flex-col gap-6 mb-[50px] lg:mb-0">
      <Breadcrumbs
        title1={"Dashboard"}
        url1={"/dashboard"}
        title2={"Schools"}
      />

      <div className="flex justify-between">
        <h1 className="font-bold">All Schools ({filteredSchools.length})</h1>

        <Link to={"/create-school"}>
          <CreateNewButton backgroundColor={"#EAE6FF"} textColor={"#403294"}>
            Create New School
          </CreateNewButton>
        </Link>
      </div>

      <div className="flex justify-end">
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

      {!filteredSchools || (filteredSchools.length === 0 && "No schools found")}

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredSchools &&
          filteredSchools.map((eachSchool) => {
            const { id, schoolName, schoolLocation, schoolLogo } = eachSchool;

            return (
              <div key={id}>
                <SubjectCard
                  id={id}
                  image={schoolLogo}
                  subject={schoolName}
                  noOfStudent={schoolLocation}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Schools;
