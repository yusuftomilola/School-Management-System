import React, { useState, useEffect } from "react";
import ScoresheetTable from "../components/tables/scoresheet/ScoresheetTable";
import Breadcrumbs from "../components/Breadcrumbs";
import CreateNewButton from "../components/CreateNewButton";
import SearchFilterButton2 from "../components/SearchFilterButton2";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import CloseIcon from "../assets/icons/closeIcon.svg";
import UploadIcon1 from "../assets/icons/uploadIcon1.svg";
import { scoresheetData } from "../components/tables/scoresheet/scoresheet";

const Scoresheet = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(scoresheetData);
  const [sortOrder, setSortOrder] = useState("none");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [isCreateFormVisible, setCreateFormVisible] = useState(false);
  const [newScoresheet, setnewScoresheet] = useState({
    name: "",
    class: "",
    url: "",
  });
  const [subjects, setSubjects] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form submission to add a new subject
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newScoresheet.name && newScoresheet.class && newScoresheet.url) {
      setSubjects([...subjects, newScoresheet]);
      setnewScoresheet({ name: "", class: "", url: "" });
      setCreateFormVisible(false);
    } else {
      alert("Please fill all fields");
    }
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setnewScoresheet((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file change for the subject image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setnewScoresheet((prev) => ({ ...prev, url: imageUrl }));
    }
  };

  // Show the create subject form
  const handleCreatenewScoresheet = () => {
    setCreateFormVisible(true);
  };

  // Function to handle file drop
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  };

  // File upload handler
  const handleFileUpload = () => {
    if (!file) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      closeModal();
      navigate("/scoresheet-created");

      setTimeout(() => {
        navigate("/scoresheet");
      }, 2500);
    }, 2000);
  };

  // Initialize Dropzone for drag and drop functionality
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept:
      "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Function to handle search
  const handleSearch = () => {
    const filtered = scoresheetData.filter((student) =>
      student.student_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Function to handle reset search and sort
  const handleReset = () => {
    setSearchTerm("");
    setSortOrder("none");
    setFilteredData(scoresheetData);
  };

  // Function to handle sort by A-Z or Z-A
  const handleSort = (order) => {
    setSortOrder(order);
    let sortedData = [...filteredData];
    if (order === "A-Z") {
      sortedData = sortedData.sort((a, b) =>
        a.student_name.localeCompare(b.student_name)
      );
    } else if (order === "Z-A") {
      sortedData = sortedData.sort((a, b) =>
        b.student_name.localeCompare(a.student_name)
      );
    }
    setFilteredData(sortedData);
  };

  return (
    <div className="flex flex-col gap-6">
      <section className="flex items-start flex-col sm:flex-row sm:justify-between gap-6 sm:gap-none">
        <Breadcrumbs
          title1={"Dashboard"}
          url1={"/dashboard"}
          title2={"Scoresheet"}
        />

        <div className="flex gap-3">
          <div onClick={openModal}>
            <CreateNewButton backgroundColor={"#EAE6FF"} textColor={"#403294"}>
              Import Score Sheet
            </CreateNewButton>
          </div>

          <div onClick={handleCreatenewScoresheet}>
            <CreateNewButton backgroundColor={"#5243AA"} textColor={"#EAE6FF"}>
              Create New Record
            </CreateNewButton>
          </div>
        </div>
      </section>

      <div className="flex justify-end mb-[-10px]">
        <SearchFilterButton2
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          handleReset={handleReset}
          isFiltered={searchTerm || sortOrder !== "none"}
          handleSort={handleSort}
          sortOrder={sortOrder}
        />
      </div>

      <ScoresheetTable data={filteredData} />

      {/* Form to create a new subject */}
      {isCreateFormVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-md shadow-md w-[400px]"
          >
            <h2 className="text-2xl font-bold mb-4">Create New Scoresheet</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium">Student Name</label>
              <input
                type="text"
                name="name"
                value={newScoresheet.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter student name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Student Class</label>

              <input
                type="text"
                name="class"
                value={newScoresheet.class}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter student class"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Scoresheet Image
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border-none rounded-md"
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="text-red-500 font-medium"
                onClick={() => setCreateFormVisible(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#5243aa] text-white py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

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
                    Import Student Scoresheet
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
                  {!file && !loading && "Create Scoresheet Record"}
                  {file && !loading && "Upload File"}
                  {loading && "Uploading..."}
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Scoresheet;
