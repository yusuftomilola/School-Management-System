import Breadcrumbs from "../components/Breadcrumbs";
import CreateNewButton from "../components/CreateNewButton";
import ClassromCard from "../components/ClassromCard";

import ClassroomTable from "../components/tables/classroom/ClassroomTable";

const Classrooms = () => {
  return (
    <>
      <section className="flex justify-between items-center">
        <Breadcrumbs title1={"Dashboard"} title2={"Classrooms"} />
        <CreateNewButton backgroundColor={"#EAE6FF"}>
          Import Classroom
        </CreateNewButton>
      </section>

      {/* Card Section */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  my-2">
        <ClassromCard
          image={"src/assets/icons/switcher.png"}
          headerText={20}
          text={"Classrooms"}
          backgroundColor={"#FFFFFF"}
        />
        <ClassromCard
          image={"src/assets/icons/add-circle.svg"}
          headerText={"Create"}
          text={"new classroom"}
          backgroundColor={"#EAE6FF"}
        />
        <ClassromCard
          image={"src/assets/icons/Group.png"}
          headerText={"Assign"}
          text={"Teacher to a classroom"}
          backgroundColor={"#DEEBFF"}
        />
      </section>
     
      
      <ClassroomTable />
    </>
  );
};

export default Classrooms;
