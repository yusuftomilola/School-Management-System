import ScoresheetTable from "../components/tables/scoresheet/ScoresheetTable";
import Breadcrumbs from "../components/Breadcrumbs";
import StudentFeesTable from "../components/tables/studentFees/StudentFeesTable";
import StaffSalariesTable from "../components/tables/staffSalaries/StaffSalariesTable";
// import Search from "../components/Search";

const Scoresheet = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Breadcrumbs title1={"Scoresheet"} />
        {/* <section className="flex justify-end items-center gap-[10px]">
          <button className="text-sm font-[500] bg-[#EAE6FF] text-[#403294] py-[6px] px-3">
            Import Score Sheet
          </button>
          <button className="text-sm font-[500] text-[#EAE6FF] bg-[#403294] py-[6px] px-3">
            Create New Record
          </button>
        </section> */}
      </div>
      {/* <Search /> */}
      <ScoresheetTable />
    </div>
  );
};

export default Scoresheet;
