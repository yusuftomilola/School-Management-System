import { useState } from "react";
import studentsTableData from "./studentsTableData";
import avatar from "../../../assets/icons/AvatarImage.png";
import downArrow from "../../../assets/icons/shortDownArrowIcon.svg";
import upDownArrow from "../../../assets/icons/upDownArrow.png";
// import Pagination from "../../Pagination";

const StudentsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  return (
    <div className="overflow-x-auto w-full">
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
            <th>Parent/Gaurdian</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {studentsTableData.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  className="outline-none cursor-pointer w-3 h-3 rounded-sm mx-2"
                />
              </td>
              <td className="text-sm font-[400] text-[#172B4D] px-3 py-3 flex items-center">
                {" "}
                <img src={avatar} alt="" className="pr-2" />
                <span>{item.student_name}</span>
              </td>
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
                {" "}
                <p
                  className={`w-fit rounded-sm text-[11px] font-[700] ${
                    item.school_fees === "paid"
                      ? "text-[#006644] bg-[#E3FCEF]"
                      : "text-[#BF2600] bg-[#FFEBE6]"
                  }`}
                >
                  {" "}
                  {item.school_fees}
                </p>
              </td>
              <td className="flex items-center gap-2 px-3">
                <img src={avatar} alt="" />
                <div>
                  <span className="text-[#172B4D] text-sm font-[400]">
                    {item.parent.fullName}
                  </span>
                  <br />
                  <span className="text-[#6B778C] font-[400] text-[11px]">
                    {item.parent.email}
                  </span>
                  <span className="text-[#6B778C] font-[400] text-[11px] px-2">
                    {item.parent.contact}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default StudentsTable;
