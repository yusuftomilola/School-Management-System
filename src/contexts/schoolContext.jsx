import { createContext, useState, useEffect } from "react";
import { getSchools } from "../services/schoolsapi";

const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [schoolsData, setSchoolsData] = useState([]);

  useEffect(() => {
    const loadSchools = async () => {
      const schoolData = await getSchools();
      setSchoolsData(schoolData);
    };

    loadSchools();
  }, []);

  return (
    <SchoolContext.Provider value={{ schoolsData }}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContext;
