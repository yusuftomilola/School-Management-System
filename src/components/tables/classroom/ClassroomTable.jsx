import { Link } from "react-router-dom";

import SearchFilterButton from "../../../components/SearchFilterButton";
import { classroomData } from "./classroomTableData";
// Import Avatar from Flowbite
import { Avatar } from "flowbite-react";
import image from "../../../assets/icons/AvatarImage.png";
import imageTwo from "../../../assets/icons/AvatarImage2.png";
import avatar from "../../../assets/icons/AvatarIcon.png";

const ClassroomTable = () => {
  return (
    <>
      <section className="flex justify-end mt-10 mb-2">
        <SearchFilterButton />
      </section>
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
              <th className="px-3 py-3">Class Name</th>
              <th>Number of Student</th>
              <th className="px-3">Number of Subjects in Class</th>
              <th>Subjects Taught By</th>
              <th className="px-3">Staff assigned to Class</th>
            </tr>
          </thead>

          {/* Table Body */}

          <tbody>
            {classroomData.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    className="outline-none cursor-pointer w-3 h-3 rounded-sm mx-2"
                  />
                </td>
                <td className="text-sm font-[400] text-[#172B4D] px-3 py-3 whitespace-nowrap">
                  <Link to={"/primary1"}> {item.className}</Link>
                </td>
                <td className="text-[#0052CC] font-[400] text-sm">
                  {item.studentNumber}
                </td>
                <td className="text-[#6B778C] font-[600] text-sm px-3">
                  {item.classSubjects}
                </td>
                <td>
                  <Avatar.Group>
                    <Avatar img={image} rounded />
                    <Avatar img={imageTwo} rounded />
                    <Avatar img={image} rounded />
                    <Avatar img={imageTwo} rounded />
                    <Avatar.Counter total={3} href="#" />
                  </Avatar.Group>
                </td>
                <td className="flex items-center gap-2 px-3">
                  <img src={avatar} alt="" />
                  <div>
                    <span className="text-[#172B4D] text-sm font-[400]">
                      {item.assignedStaff.fullName}
                    </span>

                    <div className="whitespace-nowrap">
                      <span className="text-[#6B778C] font-[400] text-[11px]">
                        {item.assignedStaff.subject}
                      </span>
                      <span className="text-[#6B778C] font-[400] text-[11px] px-2">
                        {item.assignedStaff.assignedDate}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClassroomTable;
