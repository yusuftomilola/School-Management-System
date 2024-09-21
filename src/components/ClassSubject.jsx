import { Avatar } from "flowbite-react";
import CourseLeaderBoardCard from "./CourseLeaderBoardCard";
import ProprietorCard from "../components/ProprietorCard";
import avatar from "../assets/icons/avatar.png";
import close from "../assets/icons/closeIcon.svg";
import user from "../assets/icons/userProprietor.svg";

const ClassSubject = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      {/* Transparent black backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
      <div className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg overflow-y-auto p-6 z-50 md:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#0747A6]">Mathematics</h2>
          <div
            className="flex items-center cursor-pointer text-sm text-[#0747A6]"
            onClick={onClose}
          >
            Close <img src={close} alt="close icon" className=" " />
          </div>
        </div>
        <h3 className="text-[16px] font-medium mb-2">Subject Teacher</h3>
        <ProprietorCard
          name={"Anne Itodo Ibrahim"}
          qualification={"BSC English"}
          rank={"Class Subject Teacher in 2020-03-01"}
          imageUser={user}
        />

        <section className="my-6">
          <h3 className="text-[16px] font-medium mb-3">Stuents</h3>
          <Avatar.Group className="mb-4">
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar img={avatar} rounded />
            <Avatar.Counter total={24} href="#" />
          </Avatar.Group>
          <div className="flex justify-end items-center gap-2">
            <button className="bg-[#EAE6FF] px-4 py-2 text-[#403294] text-xs rounded">
              Add Student
            </button>
            <button className="bg-[#0052CC] px-3 py-2 text-white text-xs rounded">
              View all
            </button>
          </div>
        </section>

        {/*  */}
        <section className="my-6">
          <h3 className="text-[16px] font-medium mb-3">Course Leaderboard</h3>
          <div>
            <CourseLeaderBoardCard
              name={"Hanson John"}
              score={"92%"}
              position={1}
              suffix={"st"}
              avatar={"src/assets/icons/courseLeadershipAvatar.svg"}
            />
            <CourseLeaderBoardCard
              name={"Hanson John"}
              score={"90%"}
              position={2}
              suffix={"nd"}
              avatar={"src/assets/icons/courseLeadershipAvatar.svg"}
            />
            <CourseLeaderBoardCard
              name={"Hanson John"}
              score={"89%"}
              position={3}
              suffix={"rd"}
              avatar={"src/assets/icons/courseLeadershipAvatar.svg"}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ClassSubject;
