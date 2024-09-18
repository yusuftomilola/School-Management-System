import avatar from "../../../assets/icons/avatar.png";
import upDownArrow from "../../../assets/icons/upDownArrow.png";
import { Link } from "react-router-dom";

const ScoresheetTable = ({ data }) => {
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
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  className="outline-none cursor-pointer w-3 h-3 rounded-sm mx-2"
                />
              </td>

              <Link to={`/students/${item.id}/${item.student_name}`}>
                <td className="flex items-center gap-x-2 px-3 mb-2">
                  <span>
                    <img src={item.student_image} width={30} alt="" />
                  </span>

                  <div className="flex flex-col">
                    <span className="font-[400] text-[13px] text-[#172B4D] ">
                      {item.student_name}
                    </span>

                    <span className="font-[400] text-[11px] text-[#6B778C] mt-[-2px]">
                      {item.fullclass}
                    </span>
                  </div>
                </td>
              </Link>

              <td className="text-[#6B778C] text-[11px] font-[400] px-3">
                {item.scoresheet.testOne}
              </td>
              <td className="text-[#6B778C] text-[11px] font-[400] px-3">
                {item.scoresheet.testTwo}
              </td>
              <td className="text-[#6B778C] text-[11px] font-[400] px-3">
                {item.scoresheet.exams}
              </td>
              <td className="text-[#0052CC] text-[13px] font-[400] px-3">
                {item.scoresheet.averageScore}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoresheetTable;
