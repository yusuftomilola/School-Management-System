import { studentScoresheetTable } from "./studentScoresheetTable";
import downArrow from "../../../assets/icons/shortDownArrowIcon.svg";

const StudentScoresheet = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-[700] text-sm">Student Scoresheet</p>
        <button className="bg-[#091E420A] rounded font-[400]text-sm py-1 px-3">
          Add Subject
        </button>
      </div>
      <div>
        <div>
          <table className="border-b-2 border-[#DFE1E6] my-4 w-full bg-white">
            {/* Table Head */}
            <thead className="border-b-2 border-[#DFE1E6] text-[#6B778C] text-xs font-[600] text-left">
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
                  <td className="font-[400] text-sm text-[#172B4D] px-3 py-3">
                    {item.subject}
                  </td>
                  <td className="font-[400] text-sm">{item.assignment}</td>
                  <td className="font-[400] text-sm">{item.testOne}</td>
                  <td className="font-[400] text-sm">{item.testTwo}</td>
                  <td className="font-[400] text-sm">{item.exams}</td>
                  <td className="font-[400] text-sm">{item.total}</td>
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
