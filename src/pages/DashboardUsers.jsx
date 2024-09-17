import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import CreateNewButton from "../components/CreateNewButton";
import ProprietorCard from "../components/ProprietorCard";


const DashboardUsers = () => {

  const userss = [
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      rank: "Proprietor 1",
      imageUser: "src/assets/icons/userProprietor.svg",
    },
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      rank: "Proprietor 2",
      imageUser: "src/assets/icons/user7.svg",
    },
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      rank: "Proprietor 2",
      imageUser: "src/assets/icons/user3.svg",
    },
   
  ];

  const schoolStaffs = [
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      rank: "Principal",
      imageUser: "src/assets/icons/user4.svg",
    },
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      rank: "VP Academics",
      
      imageUser: "src/assets/icons/user8.svg",
    },
    {
      name: "Mary Joe John Doe",
      qualification: "Bsc Computer Science",
      rank: "VP Admin",
      imageUser: "src/assets/icons/user5.svg",
    },
  ];
  return (
    <div>
      <div>
        <Breadcrumbs title1={"Dashboard"} title2={"Users"} />
      </div>
      <div className=" flex justify-between mt-5 mb-4">
        <h1 className="text-xl font-normal ">Proprietors</h1>
        <CreateNewButton backgroundColor={"#403294"} textColor={"#EAE6FF"}>
          Create New Users
        </CreateNewButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4 lg:grid-cols-3">
        {userss.map((user) => {
          return (
            <ProprietorCard
              name={user.name}
              qualification={user.qualification}
              rank={user.rank}
              imageUser={user.imageUser}
            />
          );
        })}
      </div>

      <div>
        <h1 className="text-xl font-normal mb-4">School Staffs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4 lg:grid-cols-3">
          {schoolStaffs.map((staff) => {
            return (
              <ProprietorCard
                name={staff.name}
                qualification={staff.qualification}
                rank={staff.rank}
                imageUser={staff.imageUser}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardUsers;
