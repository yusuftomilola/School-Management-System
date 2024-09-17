import { createContext, useState, useEffect } from "react";
import { getSchools, addSchool } from "../services/schoolsapi";

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
      setSchoolsData((prevSchools) => [...prevSchools, newSchool]);
      return newSchool;
    } catch (error) {
      console.log("ERROR ADDING NEW SCHOOL: ", error);
      throw error;
    }
  };

  return (
    <SchoolContext.Provider value={{ schoolsData, addNewSchool }}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContext;
