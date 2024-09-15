import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Pagination";
import studentsTableData from "../../../data/students";
import SearchFilterButton from "../../SearchBoxWithoutFilter";
import downArrow from "../../../assets/icons/shortDownArrowIcon.svg";
import upDownArrow from "../../../assets/icons/upDownArrow.png";
import BtnWithDownArrow from "../../BtnWithDownArrow";
import editIcon from "../../../assets/icons/editIcon.svg";
import deleteIcon from "../../../assets/icons/deleteIcon.svg";

const StudentsTable = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredStudents, setFilteredStudents] = useState(studentsTableData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [currentSection, setCurrentSection] = useState("All Students");
  const [selectedStudents, setSelectedStudents] = useState({});

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = () => {
    const filtered = studentsTableData.filter((student) =>
      student.student_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
    setCurrentPage(1);
    setIsFiltered(true);
  };

  const handleReset = () => {
    setFilteredStudents(studentsTableData);
    setSearchTerm("");
    setCurrentPage(1);
    setIsFiltered(false);
    setCurrentSection("All Students");
  };

  const handleSectionFilter = (section) => {
    let filtered;
    if (section === "All Students") {
      filtered = studentsTableData;
    } else {
      filtered = studentsTableData.filter(
        (student) => student.section === section
      );
    }
    setFilteredStudents(filtered);
    setCurrentPage(1);
    setIsFiltered(section !== "All Students");
    setCurrentSection(section);
  };

  const handleStudentSelection = (id) => {
    setSelectedStudents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredStudents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const anyStudentSelected = Object.values(selectedStudents).some(Boolean);

  const getSelectedStudent = () => {
    const selectedId = Object.keys(selectedStudents).find(
      (id) => selectedStudents[id]
    );
    return currentItems.find((item) => item.id.toString() === selectedId);
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex justify-between mb-12">
        <BtnWithDownArrow
          text={currentSection}
          handleSectionFilter={handleSectionFilter}
        />

        <div className="flex gap-4 items-center">
          <SearchFilterButton
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
            handleReset={handleReset}
            isFiltered={isFiltered}
          />

          {anyStudentSelected &&
            (() => {
              const selectedStudent = getSelectedStudent();
              return (
                <div className="flex gap-2">
                  <Link
                    to={`/students/${selectedStudent.id}/${selectedStudent.student_name}`}
                  >
                    <button
                      className="flex items-center gap-1 text-[#FF8B00] bg-[#FFF0B3] rounded text-[14px] 
      px-[10px] h-[28px] border-[#FFE380] border-[1px]"
                    >
                      Edit
                      <img src={editIcon} alt="edit icon" />
                    </button>
                  </Link>
                  <Link
                    to={`/students/${selectedStudent.id}/${selectedStudent.student_name}`}
                  >
                    <button
                      className="flex items-center gap-1 bg-[#FFBDAD] text-[#BF2600] rounded text-[14px] 
      px-[10px] h-[28px] border-[#FF8F73] border-[1px]"
                    >
                      Delete
                      <img src={deleteIcon} alt="delete icon" />
                    </button>
                  </Link>
                </div>
              );
            })()}
        </div>
      </div>

      <table className="min-w-[200%] border-b-2 border-[#DFE1E6] my-4 table-auto md:min-w-full">
        {/* Table Head */}
        <thead className="border-b-2 border-[#DFE1E6] text-[#6B778C] text-xs font-[600] text-left">
          <tr>
            <th>
              <input
                type="checkbox"
                className="outline-none cursor-pointer w-3 h-3 rounded-sm mx-2"
              />
            </th>
            <th className="px-3 py-3">Student Name</th>
            <th>
              Gender <img src={downArrow} alt="" className="inline" />
            </th>
            <th className="px-3">
              Class <img src={downArrow} alt="" className="inline" />{" "}
              <img src={upDownArrow} alt="" className="inline" />
            </th>
            <th>Average Score</th>
            <th className="px-3">
              School Fees <img src={downArrow} alt="" className="inline" />
            </th>
            <th>Parent/Guardian</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  className="outline-none cursor-pointer w-3 h-3 rounded-sm mx-2"
                  checked={selectedStudents[item.id] || false}
                  onChange={() => handleStudentSelection(item.id)}
                />
              </td>
              <Link to={`/students/${item.id}/${item.student_name}`}>
                <td className="text-[12px] font-[400] text-[#172B4D] px-3 py-3 flex items-center cursor-pointer">
                  <img src={item.student_image} alt="" className="pr-2" />
                  <span>{item.student_name}</span>
                </td>
              </Link>
              <td className="text-[#172B4D] font-[400] text-sm">
                {item.gender}
              </td>
              <td className="text-[#0052CC] font-[400] text-sm px-3">
                {item.class}
              </td>
              <td className="text-[#6B778C] text-xs font-[600] ">
                {item.average_score}
              </td>
              <td>
                <p
                  className={`w-fit rounded-sm text-[11px] font-[700] ${
                    item.school_fees === "PAID"
                      ? "text-[#006644] bg-[#E3FCEF]"
                      : "text-[#BF2600] bg-[#FFEBE6]"
                  } px-1`}
                >
                  {item.school_fees}
                </p>
              </td>
              <td className="flex items-center gap-2 px-3">
                <img src={item.parent.parent_image} alt="" />
                <div className="flex flex-col items-start justify-start">
                  <span className="text-[#172B4D] text-sm font-[400]">
                    {item.parent.fullName}
                  </span>

                  <div className=" mt-[-8px]">
                    <span className="text-[#6B778C] font-[400] text-[11px]">
                      {item.parent.email}
                    </span>
                    <span className="text-[#6B778C] font-[400] text-[11px] px-2">
                      {item.parent.contact}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default StudentsTable;
