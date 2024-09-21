import Breadcrumbs from "../components/Breadcrumbs";
import SearchFilterButton from "../components/SearchFilterButton";
import ProprietorCard from "../components/ProprietorCard";
import CreateNewButton from "../components/CreateNewButton";
import SubjectCardSlider from "../components/SubjectCardSlider";
import EarningsChartContainer from "../components/dashboard/EarningsChartContainer";
import ProgressBar from "../components/ProgressBar";
import ClassSubject from "../components/ClassSubject";
import { useState } from "react";
import user from "../assets/icons/userProprietor.svg";
import profile from "../assets/icons/profile-photo.png";

const PrimaryOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Breadcrumbs
        title1={"Dashboard"}
        url1={"/dashboard"}
        title2={"Classrooms"}
        url2={"/classrooms"}
        title3={"Primary1"}
      />
      <section className="flex flex-col justify-between  mt-6 mb-3 md:flex-row md:items-center">
        <h2 className="font-[500] text-[20px]">Lead Teachers</h2>
        <SearchFilterButton />
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ProprietorCard
          name={"Anne Itodo Ibrahim"}
          qualification={"BSC English"}
          rank={"Head of class in 2020-03-01"}
          imageUser={user}
        />

        <ProprietorCard
          name={"Anne Itodo Ibrahim"}
          qualification={"BSC English"}
          rank={"Head of class in 2020-03-01"}
          imageUser={profile}
        />
      </section>

      {/*  */}
      <section className="flex justify-between items-center">
        <h2 className="font-[500] text-[18px]">Class Subjects (12)</h2>
        <CreateNewButton backgroundColor={"#EAE6FF"}>
          Import Subject
        </CreateNewButton>
      </section>

      {/*  */}
      <section>
        <SubjectCardSlider onClick={openModal} />
        <ClassSubject isOpen={isModalOpen} onClose={closeModal} />
      </section>

      {/*  */}
      <section>
        <h3>Students</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EarningsChartContainer text={"Student Performance this term"} />

          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-4 bg-[#EAE6FF] h-auto rounded-md p-5 pt-3 items-center">
              <div>
                <h4 className="text-[15px] font-semibold text-[#172B4D]">
                  5400
                </h4>
                <p className="text-[12px] text-[]">
                  Total number of class students
                </p>
              </div>

              <button className="bg-[#0052CC] px-3 py-2 text-white text-xs rounded">
                Add Student
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <ProgressBar
                title={"Male Students"}
                amount={"1,200"}
                mainColor={`#00875A`}
                secondaryColor={"#E3FCEF"}
              />

              <ProgressBar
                title={"Female Students"}
                amount={"1,200"}
                mainColor={`#0052CC`}
                secondaryColor={"#DEEBFF"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrimaryOne;
