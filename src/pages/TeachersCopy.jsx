import React, { useState, useContext } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import UserCard from "../components/UserCard";
import TeachersContext from "../contexts/teachersContext";

const Teachers = () => {
  const { teachersData, addNewTeacher, updateExistingTeacher } =
    useContext(TeachersContext);

  const [newTeachersData, setNewTeachersData] = useState({
    fullName: "",
    email: "",
    phoneNr: "",
    stateOfOrigin: "",
    religion: "",
    lga: "",
    address: "",
    nationality: "",
    degree: "",
    subject: "",
    classs: "",
    level: "",
    image: null,
  });

  const [editTeacherData, setEditTeacherData] = useState(null);

  const handleTeachersInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setNewTeachersData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setNewTeachersData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  function handleEditTeachersInputChange(e) {
    const { name, value, files } = e.target;
    if (name === "image") {
      setEditTeacherData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setEditTeacherData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  const handleTeacherFormSubmit = (e) => {
    e.preventDefault();
    addNewTeacher(newTeachersData);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    if (editTeacherData && editTeacherData.id) {
      updateExistingTeacher(editTeacherData.id, editTeacherData);
      setEditTeacherData(null);
    } else {
      console.error("Cannot update teacher: Missing id");
    }
  };

  // Load teacher data for editing
  const handleEditTeacher = (teacher) => {
    setEditTeacherData({ ...teacher });
  };

  return (
    <div>
      <Breadcrumbs title1={"Teachers"} />

      {/* ADD A NEW TEACHER */}
      <form onSubmit={handleTeacherFormSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={newTeachersData.fullName}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newTeachersData.email}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="phoneNr">Phone Number:</label>
          <input
            type="number"
            id="phoneNr"
            name="phoneNr"
            value={newTeachersData.phoneNr}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="stateOfOrigin">State of Origin:</label>
          <input
            type="text"
            id="stateOfOrigin"
            name="stateOfOrigin"
            value={newTeachersData.stateOfOrigin}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="religion">Religion:</label>
          <input
            type="text"
            id="religion"
            name="religion"
            value={newTeachersData.religion}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="lga">LGA:</label>
          <input
            type="text"
            id="lga"
            name="lga"
            value={newTeachersData.lga}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={newTeachersData.address}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="nationality">Nationality:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={newTeachersData.nationality}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={newTeachersData.degree}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={newTeachersData.subject}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="classs">Class:</label>
          <input
            type="text"
            id="classs"
            name="classs"
            value={newTeachersData.classs}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="level">Level:</label>
          <input
            type="text"
            id="level"
            name="level"
            value={newTeachersData.level}
            onChange={handleTeachersInputChange}
          />
        </div>

        <div>
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleTeachersInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="mb-100" />

      {/* EDIT A TEACHER */}
      {/* Edit Teacher Form */}
      {editTeacherData && (
        <form onSubmit={handleEditFormSubmit}>
          <h2>Edit Teacher</h2>
          <div>
            <label htmlFor="edit-fullName">Full Name:</label>
            <input
              type="text"
              id="edit-fullName"
              name="fullName"
              value={editTeacherData.fullName}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-email">Email:</label>
            <input
              type="email"
              id="edit-email"
              name="email"
              value={editTeacherData.email}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-phoneNr">Phone Number:</label>
            <input
              type="number"
              id="edit-phoneNr"
              name="phoneNr"
              value={editTeacherData.phoneNr}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-stateOfOrigin">State of Origin:</label>
            <input
              type="text"
              id="edit-stateOfOrigin"
              name="stateOfOrigin"
              value={editTeacherData.stateOfOrigin}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-religion">Religion:</label>
            <input
              type="text"
              id="edit-religion"
              name="religion"
              value={editTeacherData.religion}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-lga">LGA:</label>
            <input
              type="text"
              id="edit-lga"
              name="lga"
              value={editTeacherData.lga}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-address">Address:</label>
            <input
              type="text"
              id="edit-address"
              name="address"
              value={editTeacherData.address}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-nationality">Nationality:</label>
            <input
              type="text"
              id="edit-nationality"
              name="nationality"
              value={editTeacherData.nationality}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-degree">Degree:</label>
            <input
              type="text"
              id="edit-degree"
              name="degree"
              value={editTeacherData.degree}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-subject">Subject:</label>
            <input
              type="text"
              id="edit-subject"
              name="subject"
              value={editTeacherData.subject}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-classs">Class:</label>
            <input
              type="text"
              id="edit-classs"
              name="classs"
              value={editTeacherData.classs}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-level">Level:</label>
            <input
              type="text"
              id="edit-level"
              name="level"
              value={editTeacherData.level}
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <div>
            <label htmlFor="edit-image">Upload Image:</label>
            <input
              type="file"
              id="edit-image"
              name="image"
              accept="image/*"
              onChange={handleEditTeachersInputChange}
            />
          </div>

          <button type="submit">Update Teacher</button>
          <button type="button" onClick={() => setEditTeacherData(null)}>
            Cancel
          </button>
        </form>
      )}

      {!teachersData || (teachersData.length === 0 && <p>Loading....</p>)}

      {teachersData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {teachersData.map((teacher) => {
            const { id, fullName, degree, subject, classs, image } = teacher;
            return (
              <div key={id}>
                <UserCard
                  id={id}
                  name={fullName}
                  qualification={degree}
                  subject={subject}
                  clas={classs}
                  imageUser={image}
                />

                <button onClick={() => handleEditTeacher(teacher)}>Edit</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Teachers;
