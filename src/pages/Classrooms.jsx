
import Breadcrumbs from "../components/Breadcrumbs";
import ClassroomTable from "../components/tables/classroom/ClassroomTable";

const Classrooms = () => {
  return (
    <div>
      <Breadcrumbs title1={"Classrooms"} />
      <ClassroomTable />
    </div>
  );
};

export default Classrooms;
