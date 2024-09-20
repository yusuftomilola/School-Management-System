import React, { useContext } from "react";
import FormContext from "../components/forms/context";
import Forms from "../components/forms/Forms";
import Breadcrumbs from "../components/Breadcrumbs";
import CreateNewButton from "../components/CreateNewButton";
import ProprietorCard from "../components/ProprietorCard";
import { userss } from "../data/users";

const DashboardUsers = () => {
  const { toggleFormVisibility, isFormVisible, setIsFormVisible } =
    useContext(FormContext);

  return (
    <div>
      <div>
        <Breadcrumbs
          title1={"Dashboard"}
          url1={"/dashboard"}
          title2={"Users"}
        />
      </div>
      <div className="flex justify-between mt-5 mb-4">
        <h1 className="text-xl font-normal">Proprietors</h1>

        <div onClick={toggleFormVisibility}>
          <CreateNewButton backgroundColor={"#403294"} textColor={"#EAE6FF"}>
            Create New Users
          </CreateNewButton>
        </div>
      </div>

      {/* Modal to display the form */}
      {isFormVisible && <Forms />}

      <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4 xl:grid-cols-3">
        {userss.map((Proprietor) => {
          if (Proprietor.staffID === "Proprietor") {
            return (
              <ProprietorCard
                key={Proprietor.id}
                name={Proprietor.name}
                qualification={Proprietor.qualification}
                rank={Proprietor.rank}
                imageUser={Proprietor.imageUser}
              />
            );
          }
        })}
      </div>

      <div>
        <h1 className="text-xl font-normal mb-4">School Staffs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4 xl:grid-cols-3">
          {userss.map((staff) => {
            if (staff.staffID === "staff") {
              return (
                <ProprietorCard
                  key={staff.id}
                  name={staff.name}
                  qualification={staff.qualification}
                  rank={staff.rank}
                  imageUser={staff.imageUser}
                  staffID={"staff"}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardUsers;
