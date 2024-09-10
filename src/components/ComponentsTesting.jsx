// import React from "react";
// import CreateNewButton from "./CreateNewButton";
import ClassromCard from "./ClassromCard";
import UserCard from "./UserCard";
// import SearchFilterButton from "./SearchFilterButton";

const ComponentsTesting = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* <h1 className="bg-red-500">Register/SignIn Page</h1> */}
      <UserCard
        name={"John Doe"}
        qualification={"Bsc Compputer science"}
        subject={"Mathematics"}
        clas={"Primary 5"}
        imageUser={"src/assets/icons/userProprietor.svg"}
      />

      {/* <CreateNewButton backgroundColor={'#EAE6FF'}>Create New School</CreateNewButton> */}
      {/* <SearchFilterButton /> */}
      <ClassromCard
        image={"src/assets/icons/add-circle.svg"}
        headerText={"Create"}
        text={"new classroom"}
        backgroundColor={"#ffffff"}
      />
    </div>
  );
};

export default ComponentsTesting;
