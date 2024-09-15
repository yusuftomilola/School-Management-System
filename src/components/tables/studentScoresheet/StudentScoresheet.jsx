import { studentScoresheetTable } from "./studentScoresheetTable";
import downArrow from "../../../assets/icons/shortDownArrowIcon.svg";

const StudentScoresheet = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-[700] text-sm">Student Scoresheet</p>
        <button className="font-[400] text-[13px] py-1 px-2 bg-[#90909072] text-[#42526E] rounded">
          Add Subject
        </button>
      </div>
      <div>
        <div className="overflow-auto bg-white rounded-b-md">
          <table className="border-b-2 border-[#DFE1E6] mt-1 mb-4 w-full bg-white overflow-x-auto">
            {/* Table Head */}
            <thead className="border-b-2 border-[#DFE1E6] text-[#6B778C] text-[11px] font-[600] text-left">
              <tr>
                <td>
                  <input
                    type="checkbox"
                    className="outline-none cursor-pointer w-3 h-3 rounded-sm mx-2"
                  />
                </td>
                <td className="px-3 py-3">
                  Subject <img src={downArrow} alt="" className="inline" />
                </td>
                <td>Assignment (10%)</td>
                <td>1 Test (10%)</td>
                <td>2 Test (10%)</td>
                <td>Exams (70%)</td>
                <td>Total</td>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {studentScoresheetTable.map((item) => (
                <tr key={item.id}>
                  <td>
                    <td>
                      <input
                        type="checkbox"
                        className="outline-none cursor-pointer w-3 h-3 rounded-sm mx-2"
                      />
                    </td>
                  </td>
                  <td className="font-[400] text-[13px] text-[#172B4D] px-3 py-3">
                    {item.subject}
                  </td>
                  <td className="font-[400] text-[13px]">{item.assignment}</td>
                  <td className="font-[400] text-[13px]">{item.testOne}</td>
                  <td className="font-[400] text-[13px]">{item.testTwo}</td>
                  <td className="font-[400] text-[13px]">{item.exams}</td>
                  <td className="font-[400] text-[13px]">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>{" "}
      </div>
    </>
  );
};

export default StudentScoresheet;
