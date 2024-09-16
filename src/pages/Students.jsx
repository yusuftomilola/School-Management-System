import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import StudentsTable from "../components/tables/students/StudentsTable";
import StudentDashboardCard from "../components/students/StudentDashboardCard";
import {
  FemaleStudentsIcon,
  MaleStudentsIcon,
  TotalStudentsIcon,
} from "../assets/icons/students";
import CreateNewButton from "../components/CreateNewButton";
import MultiStepStudentForm from "../components/forms/StudentsForm";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import CloseIcon from "../assets/icons/closeIcon.svg";
import UploadIcon1 from "../assets/icons/uploadIcon1.svg";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import studentsTableData from "../data/students";

const Students = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateStudentModalOpen, setIsCreateStudentModalOpen] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openCreateStudentModal = () => setIsCreateStudentModalOpen(true);
  const closeCreateStudentModal = () => setIsCreateStudentModalOpen(false);

  // Count Male Students
  const NrofMaleStudents = studentsTableData.reduce((acc, val) => {
    return val.gender === "Male" ? acc + 1 : acc;
  }, 0);

  // Count Female Students
  const NrofFemaleStudents = studentsTableData.reduce((acc, val) => {
    return val.gender === "Female" ? acc + 1 : acc;
  }, 0);

  // Count of both male and female
  const totalStudents = NrofMaleStudents + NrofFemaleStudents;

  // Function to handle file drop
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  };

  // File upload handler
  const handleFileUpload = () => {
    if (!file) return;

    // Simulate file upload
    setLoading(true); // Start loader

    // Simulate a file upload API call
    setTimeout(() => {
      setLoading(false); // Stop loader
      closeModal(); // Close modal
      navigate("/success"); // Redirect to success page

      // After 4 seconds, redirect to /students
      setTimeout(() => {
        navigate("/students");
      }, 2500); // 2.5 second delay
    }, 2000); // Simulate 2-second delay for upload
  };

  // Initialize Dropzone for drag and drop functionality
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept:
      "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Accept Excel file types
  });

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col sm:flex-row justify-between items-start gap-10">
        <Breadcrumbs title1={"Dashboard"} title2={"Students"} />

        <div className="flex gap-3">
          <div onClick={openModal}>
            <CreateNewButton backgroundColor={"#EAE6FF"} textColor={"#403294"}>
              Import Students
            </CreateNewButton>
          </div>

          {/* <div onClick={openCreateStudentModal}> */}
          <div>
            <CreateNewButton backgroundColor={"#5243AA"} textColor={"#EAE6FF"}>
              Create New Student
            </CreateNewButton>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[25px]">
        <StudentDashboardCard
          number={totalStudents}
          title={"Total Students"}
          url={TotalStudentsIcon}
        />
        <StudentDashboardCard
          number={NrofMaleStudents}
          title={"Male Students"}
          url={MaleStudentsIcon}
        />
        <StudentDashboardCard
          number={NrofFemaleStudents}
          title={"Female Students"}
          url={FemaleStudentsIcon}
        />
      </section>

      <StudentsTable />

      {/* Modal Component */}
      {isModalOpen && (
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          className="relative z-10"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
          <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div>
                <div
                  className="mx-auto flex items-center justify-end rounded-full gap-2 text-[15px] font-semibold cursor-pointer"
                  onClick={closeModal}
                >
                  Close
                  <img src={CloseIcon} alt="close icon" />
                </div>

                <div className="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    className="text-base lg:text-[20px] font-bold leading-6 text-[#172B4D]"
                  >
                    Import Student Information
                  </DialogTitle>

                  <div
                    {...getRootProps()}
                    className={`mt-2 text-[#403294] bg-[#EAE6FF] flex flex-col gap-2 items-center py-4 px-6 rounded cursor-pointer ${
                      isDragActive
                        ? "border border-dashed border-[#403294]"
                        : ""
                    }`}
                  >
                    <input {...getInputProps()} />
                    <img src={UploadIcon1} alt="icon to upload student info" />
                    <p className="text-[13px] text-center">
                      {isDragActive
                        ? "Drop the file here..."
                        : "Drag and drop the file or click here to upload"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  onClick={handleFileUpload}
                  disabled={!file || loading}
                  className={`inline-flex w-full justify-center rounded bg-[#5243AA] px-3 py-2 text-sm text-white shadow-sm 
    hover:bg-[#4a3aa3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 
    ${!file || loading ? "opacity-90 cursor-not-allowed" : ""}`}
                >
                  {!file && !loading && "Create Student Account"}
                  {file && !loading && "Upload File"}
                  {loading && "Uploading..."}
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}

      {/* Create Student Modal */}
      <MultiStepStudentForm
        isOpen={isCreateStudentModalOpen}
        onClose={closeCreateStudentModal}
      />
    </div>
  );
};

export default Students;
