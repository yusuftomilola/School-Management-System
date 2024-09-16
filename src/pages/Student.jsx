import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchBoxEditDelete from "../components/SearchBoxEditDelete";
import studentsTableData from "../data/students";
import StudentPerformanceChartContainer from "../components/dashboard/StudentPerformanceChartContainer";
import AddSubject from "../components/AddSubject";
import StudentScoresheet from "../components/tables/studentScoresheet/StudentScoresheet";

const Student = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <section className="flex items-start justify-between mb-8 flex-col sm:flex-row sm:items-center gap-5 sm:gap-0">
        <Breadcrumbs
          title1={"Dashboard"}
          url1={"/dashboard"}
          title2={"Students"}
          url2={"/students"}
          title3={`${params.studentName}`}
        />

        <SearchBoxEditDelete />
      </section>

      {studentsTableData
        .filter((student) => student.student_name === params.studentName)
        .map((student) => {
          return (
            <section
              className="flex flex-col lg:flex-row gap-4  justify-between"
              key={student.id}
            >
              {/* LEFT */}
              <div className="flex flex-col gap-[40px] w-full justify-start bg-white rounded-md pt-6 pb-4 px-6">
                {/* STUDENT INFORMATION */}
                <div className="flex gap-3 justify-center items-center">
                  <img
                    src={student.student_image}
                    alt={student.student_name}
                    width={"150px"}
                    height="auto"
                  />

                  <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-[17px] text-[#172B4D]">
                      {student.student_name}
                    </h2>
                    <div className="flex justify-between gap-2">
                      <span className="studentInfo">
                        <h3>DOB:</h3> <p> {student.dob}</p>
                      </span>{" "}
                      <span className="studentInfo">
                        <h3>Gender:</h3> <p>{student.gender}</p>
                      </span>
                    </div>
                    <span className="studentInfo">
                      <h3>Religion:</h3> <p>{student.religion}</p>
                    </span>
                    <span className="studentInfo">
                      <h3>Nationality:</h3> <p>{student.nationality}</p>
                    </span>

                    <div className="flex justify-between gap-2">
                      <span className="studentInfo">
                        <h3>State:</h3> <p>{student.state}</p>
                      </span>
                      <span className="studentInfo">
                        <h3>LGA:</h3> <p> {student.lga}</p>
                      </span>
                    </div>
                  </div>
                </div>

                {/* PARENT/GUARDIAN INFORMATION */}
                <div className="flex flex-col gap-5">
                  <h2 className="font-bold text-[14px] text-[#172B4D]">
                    Parent/Guardian
                  </h2>

                  <div className="flex gap-3 studentInfo items-center">
                    <span className="flex items-center gap-1">
                      <img
                        src={student.parent.parent_image}
                        alt={student.parent.fullName}
                      />

                      <p>{student.parent.fullName}</p>
                    </span>

                    <div className="flex items-center gap-2">
                      <h3 className="studentInfo">{student.parent.email}</h3>

                      <h3 className="studentInfo">{student.parent.contact}</h3>
                    </div>
                  </div>

                  <div className="studentInfo">
                    <h3>Residential Address</h3>
                    <p>{student.parent.address}</p>
                  </div>

                  <div className="flex justify-between">
                    {/* 1st */}
                    <div className="flex flex-col gap-3">
                      <div className="studentInfo">
                        <h3>Relationship</h3>
                        <p>{student.parent.relationship}</p>
                      </div>

                      <div className="studentInfo">
                        <h3>Nationality</h3>
                        <p>{student.parent.nationality}</p>
                      </div>
                    </div>

                    {/* 2nd */}
                    <div className="flex flex-col gap-3">
                      <div className="studentInfo">
                        <h3>Occupation</h3>
                        <p>{student.parent.occupation}</p>
                      </div>

                      <div className="studentInfo">
                        <h3>State</h3>
                        <p>{student.parent.state}</p>
                      </div>
                    </div>

                    {/* 3rd */}
                    <div className="flex flex-col gap-3">
                      <div className="studentInfo">
                        <h3>Religion</h3>
                        <p>{student.parent.religion}</p>
                      </div>

                      <div className="studentInfo">
                        <h3>LGA</h3>
                        <p>{student.parent.lga}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-4 w-full">
                {/* TOP */}
                <div className="bg-white rounded-md">
                  <div className="px-4 pt-6 flex flex-col">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex w-full">
                        {/* school fees */}
                        <div className=" w-full">
                          <h3 className="text-[13px] font-semibold">
                            School Fee
                          </h3>
                          <span
                            className={`text-[10px] text-[#006644] font-bold ${
                              student.school_fees === "PAID"
                                ? "text-[#006644] bg-[#E3FCEF]"
                                : "text-[#BF2600] bg-[#FFEBE6]"
                            } px-[6px] rounded`}
                          >
                            {student.school_fees}
                          </span>
                        </div>

                        {/* class */}
                        <div className=" w-full">
                          <h3 className="text-[13px] font-semibold">Class</h3>
                          <span className="bg-[#E3FCEF] text-[#006644] font-bold rounded text-[10px] px-[6px]">
                            {student.fullclass}
                          </span>
                        </div>
                      </div>

                      {/* total subjects */}
                      <div className=" w-full">
                        <h3 className="text-[13px] font-semibold">
                          Total Subjects
                        </h3>
                        <span className="bg-[#EAE6FF] text-[#403294] font-bold rounded text-[10px] px-[6px]">
                          {student.total_subjects}
                        </span>
                      </div>

                      {/* teacher details */}
                      <div className=" w-full pt-2 hidden xl:block">
                        <h3 className="text-[13px] font-semibold">Teacher</h3>

                        <div className="flex pt-2 gap-2">
                          <img
                            src={student.teacher.teacher_image}
                            alt={student.teacher.fullName}
                          />

                          <div>
                            <p className="text-[13px] font-semibold">
                              {student.teacher.fullName}
                            </p>
                            <div
                              className="text-[10px] 
                          mt-[-3px]"
                            >
                              {student.teacher.email} |{" "}
                              {student.teacher.contact}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="xl:hidden block">
                      {/* teacher details */}
                      <div className=" w-full pt-2">
                        <h3 className="text-[13px] font-semibold">Teacher</h3>

                        <div className="flex pt-2 gap-2">
                          <img
                            src={student.teacher.teacher_image}
                            alt={student.teacher.fullName}
                          />

                          <div>
                            <p className="text-[13px] font-semibold">
                              {student.teacher.fullName}
                            </p>
                            <div
                              className="text-[10px] 
                          mt-[-3px]"
                            >
                              {student.teacher.email} |{" "}
                              {student.teacher.contact}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <StudentPerformanceChartContainer />
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col gap-2">
                  {/* <div className="flex justify-between">
                    <h2>Student Scoresheet</h2>
                    <AddSubject />
                  </div> */}
                  <StudentScoresheet />
                </div>
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default Student;
