import downArrow from "../../../assets/icons/shortDownArrowIcon.svg";
import upDownArrow from "../../../assets/icons/upDownArrow.png";
import { staffSalariesData } from "./staffSalariesData";
import avatar from "../../../assets/icons/AvatarIcon.png";

const StaffSalariesTable = () => {
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
              <th className="px-3 py-3">Staff Name</th>
              <th>
                Gender <img src={downArrow} alt="" className="inline" />
              </th>
              <th className="px-3">
                Salary <img src={downArrow} alt="" className="inline" />
              </th>
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
            {staffSalariesData.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    className="outline-none cursor-pointer w-3 h-3 rounded-sm mx-2"
                  />
                </td>
                {/* data */}
                <td className="flex items-center gap-x-2 px-3 py-2">
                  <span>
                    <img src={avatar} alt="" />
                  </span>
                  <div className="font-[400]">
                    <span className=" text-sm text-[#172B4D]">
                      {item.staffName.fullName}
                    </span>
                    <div className="text-[11px] text-[#6B778C] flex gap-x-2">
                      <span>{item.staffName.email}</span>
                      <span>{item.staffName.contact}</span>
                    </div>
                  </div>
                </td>
                {/* data */}
                <td className="text-[#172B4D] text-sm font-[400] px-3">
                  {item.gender}
                </td>
                {/* data */}
                <td className="px-3">
                  {" "}
                  <p
                    className={`text-[11px] font-[700] w-fit ${
                      item.schoolFees === "PAID"
                        ? "text-[#006644] bg-[#E3FCEF]"
                        : item.schoolFees === "UNPAID"
                        ? "text-[#BF2600] bg-[#FFEBE6]"
                        : "text-[#FF8B00] bg-[#FFFAE6]"
                    }`}
                  >
                    {item.schoolFees}
                  </p>
                </td>
                {/* data */}
                <td className="text-[#172B4D] text-sm font-[400] px-3">
                  {" "}
                  {item.salary}
                </td>
                {/* data */}
                <td className="text-[#0052CC] font-[400] text-sm">
                  {item.transactionId}
                </td>
                {/* data */}
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

export default StaffSalariesTable;
