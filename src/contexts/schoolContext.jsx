import { createContext, useState, useEffect } from "react";
import {
  getSchools,
  addSchool,
  deleteSchool,
  updateSchool,
} from "../services/schoolsapi";

const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [schoolsData, setSchoolsData] = useState([]);

  // Load our schools once the page loads
  useEffect(() => {
    const loadSchools = async () => {
      const schoolData = await getSchools();
      setSchoolsData(schoolData);
    };

    loadSchools();
  }, []);

  // Add a new School to our local database
  const addNewSchool = async (schoolData) => {
    try {
      const newSchool = await addSchool(schoolData);
      setSchoolsData([...schoolsData, newSchool]);
    } catch (error) {
      console.log("ERROR ADDING NEW SCHOOL: ", error);
    }
  };

  // Delete a school
  const removeSchool = async (id) => {
    try {
      const result = await deleteSchool(id);
      if (result) {
        console.log("School successfully deleted");
        setSchoolsData(schoolsData.filter((school) => school.id !== id));
      }
    } catch (error) {
      console.log("ERROR DELETING SCHOOL: ", error);
    }
  };

  const updateExistingSchool = async (id, updatedData) => {
    try {
      const updatedSchool = await updateSchool(id, updatedData);
      console.log("School updated successfully:", updatedSchool);
      setSchoolsData(
        schoolsData.map((school) => (school.id === id ? updatedSchool : school))
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <SchoolContext.Provider
      value={{ schoolsData, addNewSchool, removeSchool, updateExistingSchool }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContext;
