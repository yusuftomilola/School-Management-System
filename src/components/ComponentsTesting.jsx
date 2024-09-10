// import React from "react";
// import CreateNewButton from "./CreateNewButton";
import ClassromCard from "./ClassromCard";
import UserCard from "./UserCard";
import SubjectCard from "./SubjectCard";
import CourseLeaderBoardCard from "./CourseLeaderBoardCard";
import SearchFilterButton from "./SearchFilterButton";

const ComponentsTesting = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <UserCard
        name={"John Doe"}
        qualification={"Bsc Compputer science"}
        subject={"Mathematics"}
        clas={"Primary 5"}
        imageUser={"src/assets/icons/userProprietor.svg"}
      />

      {/* <CreateNewButton backgroundColor={'#EAE6FF'}>Create New School</CreateNewButton> */}

      <ClassromCard
        image={"src/assets/icons/add-circle.svg"}
        headerText={"Create"}
        text={"new classroom"}
        backgroundColor={"#EAE6FF"}
      />

      <SubjectCard
        image={"src/assets/icons/Math-icon.svg"}
        subject={"Mathermatics"}
        noOfStudent={"12 Students"}
      />

      <CourseLeaderBoardCard
        name={"Hanson John"}
        score={"92%"}
        avatar={"src/assets/icons/courseLeadershipAvatar.svg"}
      />
      <SearchFilterButton />
     
      
    </div>
  );
};

export default ComponentsTesting;
