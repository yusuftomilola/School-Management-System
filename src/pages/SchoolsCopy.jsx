import React, { useState, useContext } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SchoolContext from "../contexts/schoolContext";
import SubjectCard from "../components/SubjectCard";

const Schools = () => {
  const { schoolsData, addNewSchool, updateExistingSchool } =
    useContext(SchoolContext);
  const [newSchoolData, setNewSchoolData] = useState({
    schoolName: "",
    schoolType: "",
    schoolLocation: "",
    schoolLogo: null,
  });

  const [editSchoolData, setEditSchoolData] = useState(null);

  function handleInputChange(e) {
    const { name, value, files } = e.target;
    if (name === "schoolLogo") {
      setNewSchoolData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setNewSchoolData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function handleEditInputChange(e) {
    const { name, value, files } = e.target;
    if (name === "schoolLogo") {
      setEditSchoolData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setEditSchoolData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    addNewSchool(newSchoolData);
    // Reset form after submission
    setNewSchoolData({
      schoolName: "",
      schoolType: "",
      schoolLocation: "",
      schoolLogo: null,
    });
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    if (editSchoolData) {
      updateExistingSchool(editSchoolData.id, editSchoolData);
      setEditSchoolData(null); // Close edit form after submission
    }
  }

  return (
    <div>
      <Breadcrumbs title1={"Dashboard"} title2={"Schools"} />

      <h1 className="font-bold">All Schools ({schoolsData.length})</h1>

      {/* Create a new school Form */}
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={newSchoolData.schoolName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="schoolType">School Type:</label>
          <input
            type="text"
            id="schoolType"
            name="schoolType"
            value={newSchoolData.schoolType}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="schoolLocation">School Location:</label>
          <input
            type="text"
            id="schoolLocation"
            name="schoolLocation"
            value={newSchoolData.schoolLocation}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="schoolLogo">School Logo:</label>
          <input
            type="file"
            id="schoolLogo"
            name="schoolLogo"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Edit Form */}
      {editSchoolData && (
        <form onSubmit={handleEditFormSubmit}>
          <div>
            <label htmlFor="editSchoolName">School Name:</label>
            <input
              type="text"
              id="editSchoolName"
              name="schoolName"
              value={editSchoolData.schoolName}
              onChange={handleEditInputChange}
            />
          </div>

          <div>
            <label htmlFor="editSchoolType">School Type:</label>
            <input
              type="text"
              id="editSchoolType"
              name="schoolType"
              value={editSchoolData.schoolType}
              onChange={handleEditInputChange}
            />
          </div>

          <div>
            <label htmlFor="editSchoolLocation">School Location:</label>
            <input
              type="text"
              id="editSchoolLocation"
              name="schoolLocation"
              value={editSchoolData.schoolLocation}
              onChange={handleEditInputChange}
            />
          </div>

          <div>
            <label htmlFor="editSchoolLogo">School Logo:</label>
            <input
              type="file"
              id="editSchoolLogo"
              name="schoolLogo"
              accept="image/*"
              onChange={handleEditInputChange}
            />
          </div>

          <button type="submit">Update</button>
        </form>
      )}

      <div className={"mb-[100px]"} />

      {!schoolsData || (schoolsData.length === 0 && "Loading....")}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schoolsData &&
          schoolsData.map((eachSchool) => {
            const { id, schoolName, schoolLocation, schoolLogo } = eachSchool;

            return (
              <div key={id}>
                <SubjectCard
                  id={id}
                  image={schoolLogo}
                  subject={schoolName}
                  noOfStudent={schoolLocation}
                />
                <button onClick={() => setEditSchoolData(eachSchool)}>
                  Edit
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Schools;
