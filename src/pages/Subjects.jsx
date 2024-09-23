import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchFilterButton2 from "../components/SearchFilterButton2";
import TeacherCard from "../components/forms/TeacherCard";
import SubjectCard from "../components/SubjectCard";
import CreateNewButton from "../components/CreateNewButton";
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
import SubjectLogo from "../assets/icons/subjects/subjectsIcon.svg";
import CloseIconLogo from "../assets/icons/closeIcon.svg";

const Subjects = () => {
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCreateFormVisible, setCreateFormVisible] = useState(false); // State for the form visibility
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeImportModal = () => setIsModalOpen(false);

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
      navigate("/subject-created"); // Redirect to success page

      // After 4 seconds, redirect to /students
      setTimeout(() => {
        navigate("/subjects");
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

  const classes = [
    "All",
    "Primary 5",
    "Primary 6",
    "JSS 1",
    "JSS 3",
    "SS 1",
    "SS 2",
    "Primary 1",
    "Primary 2",
  ];

  const [newSubject, setNewSubject] = useState({
    name: "",
    students: "",
    url: "",
  }); // State for new subject form

  const [subjects, setSubjects] = useState([
    {
      name: "Mathematics",
      students: 12,
      url: SubjectLogo,
    },
    {
      name: "English",
      students: 11,
      url: SubjectLogo,
    },
    {
      name: "Biology",
      students: 12,
      url: SubjectLogo,
    },
    {
      name: "Chemistry",
      students: 11,
      url: SubjectLogo,
    },
    {
      name: "",
      students: 12,
      url: SubjectLogo,
    },
    {
      name: "English",
      students: 11,
      url: SubjectLogo,
    },
    {
      name: "Mathematics",
      students: 12,
      url: SubjectLogo,
    },
    {
      name: "English",
      students: 11,
      url: SubjectLogo,
    },
    {
      name: "Mathematics",
      students: 12,
      url: SubjectLogo,
    },
    {
      name: "English",
      students: 11,
      url: SubjectLogo,
    },
  ]);

  const teachers = [
    {
      name: "Ane Itodo Ibrahim",
      degree: "BSC English",
      startDate: "2020-03-01",
      subjects: ["Primary 1", "Primary 5"],
    },
  ];

  useEffect(() => {
    setFilteredSubjects(subjects);
  }, [subjects]);

  const handleSearch = () => {
    let filtered = subjects.filter((subject) =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "A-Z") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortOrder === "Z-A") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredSubjects(filtered);
    setIsFiltered(searchTerm !== "" || sortOrder !== "none");
  };

  const handleReset = () => {
    setSearchTerm("");
    setSortOrder("none");
    setFilteredSubjects(subjects);
    setIsFiltered(false);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...filteredSubjects];
    if (order === "A-Z") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "Z-A") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      sorted = subjects.filter((subject) =>
        subject.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredSubjects(sorted);
    setIsFiltered(searchTerm !== "" || order !== "none");
  };

  const handleImageClick = (subject) => {
    setSelectedSubject(subject);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedSubject(null);
  };

  // Show the create subject form
  const handleCreateNewSubject = () => {
    setCreateFormVisible(true);
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSubject((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file change for the subject image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewSubject((prev) => ({ ...prev, url: imageUrl }));
    }
  };

  // Handle form submission to add a new subject
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSubject.name && newSubject.students && newSubject.url) {
      setSubjects([...subjects, newSubject]); // Add new subject to the subjects array
      setNewSubject({ name: "", students: "", url: "" }); // Reset the form fields
      setCreateFormVisible(false); // Hide the form
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flex flex-col gap-6 mb-[50px] lg:mb-0">
      <Breadcrumbs
        title1={"Dashboard"}
        url1={"/dashboard"}
        title2={"Subjects"}
      />

      <div className="flex flex-col sm:flex-row  justify-between">
        <h1 className="font-bold">All Subjects ({filteredSubjects.length})</h1>

        <div className="flex gap-3 ">
          <div onClick={openModal}>
            <CreateNewButton backgroundColor={"#EAE6FF"} textColor={"#403294"}>
              Import Subject
            </CreateNewButton>
          </div>

          <div onClick={handleCreateNewSubject}>
            <CreateNewButton backgroundColor={"#5243AA"} textColor={"#EAE6FF"}>
              Create New Subject
            </CreateNewButton>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        <SearchFilterButton2
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          handleReset={handleReset}
          isFiltered={isFiltered}
          handleSort={handleSort}
          sortOrder={sortOrder}
        />
      </div>

      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredSubjects.map((subject, index) => (
          <div onClick={() => handleImageClick(subject)} key={index}>
            <SubjectCard
              image={subject.url}
              subject={subject.name}
              noOfStudent={subject.students}
            />
          </div>
        ))}
      </div>

      {/* Popup for subject details */}
      {isModalVisible && selectedSubject && (
        <div className="fixed top-0 right-0 h-full mt-4 md:w-[400px] p-5 bg-white shadow-lg z-50">
          <div className="flex justify-between">
            <h1 className="text-[#403294] font-bold  text-[20px]">
              {selectedSubject.name} {/* Display the clicked subject name */}
            </h1>
            <div className="flex gap-1">
              <p className="text-[#403294] font-medium text-[14px]">Close</p>
              <img
                src={CloseIconLogo}
                className="w-6 h-6"
                onClick={closeModal}
              ></img>
            </div>
          </div>
          <h1 className="text-[#000000] font-bold text-[14px] mt-3">
            List of classes taking the subject
          </h1>
          <div className="flex flex-wrap gap-2 mt-5 ">
            {classes.map((className, index) => (
              <button
                key={index}
                className={`px-2 py-[1px] text-[12px] font-normal w-[80px] whitespace-nowrap rounded-lg ${
                  selectedClass === className
                    ? "bg-[#403294] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedClass(className)}
              >
                {className}
              </button>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-[14px] font-normal text-[#000000] px-2 rounded-md">
              Remove Class
            </button>
            <button className="bg-[#8777d9] text-[14px] text-white px-2 pb-1 rounded-md">
              Add Class
            </button>
          </div>
          <h1 className="text-[16px] font-bold my-5">Subject Teacher</h1>
          <div className="teacher-list h-80 overflow-y-scroll rounded-lg w-full">
            {teachers.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
            <h1 className="text-[16px] font-bold my-2 px-1">Student</h1>
            <img src="./Assets/Group 33.svg" alt="omoo" className="p-1" />
            <div className="flex justify-end mt-4">
              <button className="text-[14px] font-normal text-[#000000] px-2 rounded-md">
                Add Student
              </button>
              <button className="bg-[#8777d9] text-[14px] text-white px-2 pb-1 rounded-md">
                View All
              </button>
            </div>
            <h1 className="text-[16px] font-bold my-2 px-1">
              Course Leaderboard
            </h1>
            <div className="flex flex-col gap-2">
              {/* Leaderboard content */}

              <div className="flex flex-col gap-2">
                <div className="card flex justify-between items-center border border-solid p-2  rounded-md border-[#dadada]">
                  <div className="flex justify-center items-center gap-3">
                    <img
                      src="./Assets/Avatar (40px, presence).svg"
                      alt=""
                      className="h-[60px] w-[60px]"
                    />

                    <div>
                      <h1 className="text-[16px] font-normal">Hanson John</h1>
                      <h1 className="text-[12px] font-normal">92%</h1>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#36b37e] flex justify-center items-center rounded-full text-white">
                    <span className="font-bold">1</span>st
                  </div>
                </div>
                <div className="card flex justify-between items-center border border-solid p-2  rounded-md border-[#dadada]">
                  <div className="flex justify-center items-center gap-3">
                    <img
                      src="./Assets/Avatar (40px, presence).svg"
                      alt=""
                      className="h-[60px] w-[60px]"
                    />

                    <div>
                      <h1 className="text-[16px] font-normal">Hanson John</h1>
                      <h1 className="text-[12px] font-normal">92%</h1>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#36b37e] flex justify-center items-center rounded-full text-white">
                    <span className="font-bold">1</span>st
                  </div>
                </div>
                <div className="card flex justify-between items-center border border-solid p-2  rounded-md border-[#dadada]">
                  <div className="flex justify-center items-center gap-3">
                    <img
                      src="./Assets/Avatar (40px, presence).svg"
                      alt=""
                      className="h-[60px] w-[60px]"
                    />

                    <div>
                      <h1 className="text-[16px] font-normal">Hanson John</h1>
                      <h1 className="text-[12px] font-normal">92%</h1>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#36b37e] flex justify-center items-center rounded-full text-white">
                    <span className="font-bold">1</span>st
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form to create a new subject */}
      {isCreateFormVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-md shadow-md w-[400px]"
          >
            <h2 className="text-2xl font-bold mb-4">Create New Subject</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium">Subject Name</label>
              <input
                type="text"
                name="name"
                value={newSubject.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter subject name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Number of Students
              </label>
              <input
                type="number"
                name="students"
                value={newSubject.students}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter number of students"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Subject Image</label>
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
                  onClick={closeImportModal}
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
    </div>
  );
};

export default Subjects;
