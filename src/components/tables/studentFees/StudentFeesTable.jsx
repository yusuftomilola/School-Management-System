import downArrow from "../../../assets/icons/shortDownArrowIcon.svg";
import upDownArrow from "../../../assets/icons/upDownArrow.png";
import avatar from "../../../assets/icons/AvatarIcon.png";
import image from "../../../assets/icons/AvatarImage.png";
import { studentFeesData } from "./studentFeesData";

const StudentFeesTable = () => {
  return (
    <>
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
              <th className="px-3">Parent/Gaurdian</th>
              <th className="px-3">
                School Fees <img src={downArrow} alt="" className="inline" />
              </th>
              <th>Transaction ID</th>
              <th>
                Date <img src={downArrow} alt="" className="inline" />{" "}
                <img src={upDownArrow} alt="" className="inline" />
              </th>
            </tr>
          </thead>

          {/* Table Body */}

          <tbody>
            {studentFeesData.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    className="outline-none cursor-pointer w-3 h-3 rounded-sm mx-2"
                  />
                </td>
                <td className="flex items-center gap-x-2 px-3 py-2">
                  <span>
                    <img src={avatar} alt="" />
                  </span>
                  <div className="font-[400]">
                    <span className=" text-sm text-[#172B4D]">
                      {item.studentName.fullName}
                    </span>
                    <br />
                    <span className="text-[11px] text-[#6B778C]">
                      {item.studentName.class}
                    </span>
                  </div>
                </td>
                <td className="text-[#172B4D] text-sm font-[400] px-3">
                  {item.gender}
                </td>
                <td className="flex items-center px-3">
                  <span>
                    <img src={image} alt="" width={40} />
                  </span>
                  <div>
                    <span className="text-sm font-[400] text-[#172B4D]">
                      {item.parent.fullName}
                    </span>
                    <div className="font-[400] text-[11px] text-[#6B778C]">
                      <span>{item.parent.email}</span>
                      <span>{item.parent.contact}</span>
                    </div>
                  </div>
                </td>
                <td className="px-3">
                  <p
                    className={`text-[11px] font-[700] w-fit ${
                      item.schoolFees === "PAID"
                        ? "text-[#006644] bg-[#E3FCEF]"
                        : item.schoolFees === "UNPAID"
                        ? "text-[#BF2600] bg-[#FFEBE6]"
                        : "text-[#FF8B00] bg-[#FFFAE6]"
                    }`}
                  >
                    {" "}
                    {item.schoolFees}
                  </p>
                </td>
                <td className="text-[#0052CC] font-[400] text-sm">
                  {item.transactionId}
                </td>
                <td className="text-[#6B778C] font-[400] text-[11px]">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentFeesTable;
