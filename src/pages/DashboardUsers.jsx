import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import CreateNewButton from "../components/CreateNewButton";
import UserCard from "../components/UserCard";
import SearchFilterButton from "../components/SearchFilterButton";
import SearchBoxWithoutFilter from "../components/SearchBoxWithoutFilter"

const DashboardUsers = () => {

  const teachers = [
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      subject: "Mathematics",
      clas: "Primary 5",
      imageUser: "src/assets/icons/userProprietor.svg",
    },
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      subject: "Mathematics",
      clas: "Primary 5",
      imageUser: "src/assets/icons/user7.svg",
    },
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      subject: "Mathematics",
      clas: "Primary 5",
      imageUser: "src/assets/icons/user3.svg",
    },
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      subject: "Mathematics",
      clas: "Primary 5",
      imageUser: "src/assets/icons/user4.svg",
    },
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      subject: "Mathematics",
      clas: "Primary 5",
      imageUser: "src/assets/icons/user8.svg",
    },
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      subject: "Mathematics",
      clas: "Primary 5",
      imageUser: "src/assets/icons/user5.svg",
    },
  ];
  return (
    <div>
      <div className=" flex justify-between">
        <Breadcrumbs title1={"Dashboard"} title2={"Users"} />
        <CreateNewButton backgroundColor={"#EAE6FF"} color={"#403294"}>
          Create New Users
        </CreateNewButton>
      </div>

      <div className="flex justify-end my-5">
        <SearchFilterButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-6 lg:grid-cols-3">
        {teachers.map((teacher) => {
         return <UserCard 
            name={teacher.name}
            qualification={teacher.qualification}
            subject={teacher.subject}
            clas={teacher.clas}
            imageUser={teacher.imageUser}
          />;
        })}
        
      </div>

     
    </div>
  );
};

export default DashboardUsers;
