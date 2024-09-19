import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Filter from "../components/forms/filter";
import TeacherCard from "../components/forms/TeacherCard";
import SubjectCard from "../components/SubjectCard";

const Subjects = () => {
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCreateFormVisible, setCreateFormVisible] = useState(false); // State for the form visibility

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
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "English",
      students: 11,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Biology",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Chemistry",
      students: 11,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "English",
      students: 11,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Mathematics",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "English",
      students: 11,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Mathematics",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "English",
      students: 11,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Mathematics",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "English",
      students: 11,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "Mathematics",
      students: 12,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
    },
    {
      name: "English",
      students: 11,
      url: "/src/assets/icons/subjects/subjectsIcon.svg",
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

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div>
      <Breadcrumbs title1={"Dashboard"} title2={"Subjects"} />
      <div className="flex flex-col md:flex-row justify-between md:items-center mt-6">
        <h1 className="font-bold text-[20px] text-[#000000]">
          All Subjects (25)
        </h1>
        <div className="flex gap-2 justify-start mt-2 items-center">
          <button className="whitespace-nowrap text-center text-[#5243aa] text-[10px] py-2 px-2 rounded-md font-medium bg-[#eae6ff]">
            Import Subject
          </button>
          <button
            className="whitespace-nowrap text-[#ffffff] text-[10px] py-2 px-2  rounded-md font-medium bg-[#5243aa]"
            onClick={handleCreateNewSubject}
          >
            Create New Subject
          </button>
        </div>
      </div>
      <div className="flex gap-2 justify-end mt-10">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="bg-[url('./Assets/search-svgrepo-com.svg')] bg-[length:20px_20px] bg-[position:10px_center] bg-no-repeat py-5 px-8 h-6 rounded-lg outline-none border border-solid border-[#eae6ff]"
        />
        <Filter className="hidden md:flex sm:ml-5 text-[10px]" />
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
        <div className="fixed top-0 right-0 h-full mt-4 w-[400px] p-5 bg-white shadow-lg z-50">
          <div className="flex justify-between">
            <h1 className="text-[#403294] font-bold  text-[20px]">
              {selectedSubject.name} {/* Display the clicked subject name */}
            </h1>
            <div className="flex gap-1">
              <p className="text-[#403294] font-medium text-[14px]">Close</p>
              <img
                src="./Assets/cross-circle.svg"
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
            <img src="./Assets/Group 33.svg" className="p-1" />
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
    </div>
  );
};

export default Subjects;
