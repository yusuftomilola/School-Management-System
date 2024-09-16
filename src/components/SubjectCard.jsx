// import { useContext } from "react";
// import SchoolContext from "../contexts/schoolContext";

function SubjectCard({ image, subject, noOfStudent, id }) {
  // const { removeSchool } = useContext(SchoolContext);

  // function deleteSchool() {
  //   removeSchool(id);
  // }

  return (
    <div className="flex flex-col bg-[#EAE6FF] border-[1px] border-[#403294] rounded-md px-[30px] py-[30px] items-center h-[130px] w-full cursor-pointer justify-center gap-2">
      <div className="">
        <img src={image} alt="math-icon" width={35} height={35} />
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-[#403294] font-bold text-center text-[14px]">
          {subject}
        </h2>
        <p className="font-normal text-[#403294] text-center text-[12px]">
          {noOfStudent}
        </p>
      </div>
      {/* <button onClick={deleteSchool}>Delete School</button> */}
    </div>
  );
}

export default SubjectCard;
