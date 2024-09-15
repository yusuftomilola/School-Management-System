import { scoresheetData } from "./scoresheet";
import avatar from "../../../assets/icons/avatar.png";
import upDownArrow from "../../../assets/icons/upDownArrow.png";

const ScoresheetTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-[150%] border-b-2 border-[#DFE1E6] my-4 table-auto md:min-w-full">
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
              1st Test <img src={upDownArrow} alt="" className="inline" />
            </th>
            <th className="px-3">
              1st Test <img src={upDownArrow} alt="" className="inline" />
            </th>
            <th>
              Exams <img src={upDownArrow} alt="" className="inline" />
            </th>
            <th className="px-3">
              Average Score <img src={upDownArrow} alt="" className="inline" />
            </th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {scoresheetData.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  className="outline-none cursor-pointer w-3 h-3 rounded-sm mx-2"
                />
              </td>
              <td className="flex items-center gap-x-2 px-3">
                <span>
                  <img src={avatar} width={30} alt="" />
                </span>

                <div>
                  <span className="font-[400] text-sm text-[#172B4D] ">
                    {item.student_name.fullName}
                  </span>{" "}
                  <br />
                  <span className="font-[400] text-[11px] text-[#6B778C]">
                    {item.student_name.class}
                  </span>
                </div>
              </td>
              <td className="text-[#6B778C] text-[11px] font-[400] px-3">
                {item.testOne}
              </td>
              <td className="text-[#6B778C] text-[11px] font-[400] px-3">
                {item.testTwo}
              </td>
              <td className="text-[#6B778C] text-[11px] font-[400] px-3">
                {item.exams}
              </td>
              <td className="text-[#0052CC] text-sm font-[400] px-3">
                {item.averageScore}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoresheetTable;
