import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import CreateNewButton from "../components/CreateNewButton";
import ClassromCard from "../components/ClassromCard";

import ClassroomTable from "../components/tables/classroom/ClassroomTable";
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

const Classrooms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    <>
      <section className="flex justify-between items-center">
        <Breadcrumbs
          title1={"Dashboard"}
          url1={"/dashboard"}
          title2={"Classrooms"}
        />

        <div onClick={openModal}>
          <CreateNewButton backgroundColor={"#EAE6FF"}>
            Import Classroom
          </CreateNewButton>
        </div>
      </section>

      {/* Card Section */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  my-2">
        <ClassromCard
          image={"src/assets/icons/switcher.png"}
          headerText={20}
          text={"Classrooms"}
          backgroundColor={"#FFFFFF"}
        />
        <ClassromCard
          image={"src/assets/icons/add-circle.svg"}
          headerText={"Create"}
          text={"new classroom"}
          backgroundColor={"#EAE6FF"}
        />
        <ClassromCard
          image={"src/assets/icons/Group.png"}
          headerText={"Assign"}
          text={"Teacher to a classroom"}
          backgroundColor={"#DEEBFF"}
        />
      </section>

      <ClassroomTable />

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
                    Import Classroom Information
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
                  {!file && !loading && "Create New Classroom"}
                  {file && !loading && "Upload File"}
                  {loading && "Uploading..."}
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Classrooms;
