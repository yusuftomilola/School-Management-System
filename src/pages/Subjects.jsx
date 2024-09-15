import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Filter from "../components/forms/filter";
import { useState } from "react";

const Subjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const subjects = [
    {
      name: "Mathematics",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "English",
      students: 11,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Literature",
      students: 15,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Chemistry",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Physics",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "History",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Mathematics",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "English",
      students: 11,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Literature",
      students: 15,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Chemistry",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Physics",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "History",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
  ];

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Breadcrumbs title1={"Dashboard"} title2={"Subjects"} />
      <div className="flex justify-between items-center mt-6">
        <h1 className="font-bold text-[20px] text-[#000000]">
          All Subjects (25)
        </h1>
        <div className="flex gap-2 justify-center items-center">
          <button className="text-[#5243aa] text[14px] px-2 pb-1 rounded-md font-medium bg-[#eae6ff]">
            Import Subject
          </button>
          <button className="text-[#ffffff] text[14px] px-2 pb-1 rounded-md font-medium bg-[#5243aa]">
            Create New subject
          </button>
        </div>
      </div>
      <div className="flex gap-2 justify-end mt-10">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className=" bg-[url('./Assets/search-svgrepo-com.svg')] bg-[length:20px_20px] bg-[position:10px_center] bg-no-repeat py-5 px-8  h-6 rounded-lg outline-none border border-solid border-[#eae6ff]"
        />
        <button
          className="py-[8px] px-4 text-white bg-[#403294] rounded-md"
          onClick={filteredSubjects}
        >
          Search
        </button>
        <Filter />
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-4  md:m-auto">
        {filteredSubjects.map((subject, index) => (
          <div
            className="grid justify-center items-center bg-[#eae6ff] p-4 rounded-lg shadow-lg w-[168px] gap-2 mt-7"
            key={index}
          >
            <img src={subject.url} alt="" className="m-auto" />
            <h3 className="text-[#4032944] font-bold text-[14px] m-auto">
              {subject.name}
            </h3>
            <p className="font-normal text-[12px]">
              {subject.students} students
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
