import { createContext, useState, useEffect } from "react";
import {
  getTeachers,
  addTeacher,
  deleteTeacher,
  updateTeacher,
} from "../services/teachersapi";

const TeachersContext = createContext();

export const TeachersProvider = ({ children }) => {
  const [teachersData, setTeachersData] = useState([]);
  //   const [searchTerm, setSearchTerm] = useState("");
  // const [filteredData, setFilteredData] = useState([]);

  // Handle search input change
  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // Function to handle search
  // const handleSearch = () => {
  //   if (searchTerm === "") {
  //     // If no search term, reset the filtered data to show all teachers
  //     setFilteredData(myData);
  //   } else {
  // Filter the teachers based on searchTerm
  //     const filtered = teachersData.filter((teacher) =>
  //       teacher.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setFilteredData(filtered);
  //   }
  // };

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const teachersData = await getTeachers();
        setTeachersData(teachersData);
      } catch (error) {
        console.log("ERROR GETTING TEACHERS", error);
      }
    };

    loadTeachers();
  }, []);

  //fetch teachers
  const fetchTeachers = async () => {
    try {
      const storedTeachers = await getTeachers();
      setTeachersData(storedTeachers);
    } catch (error) {
      console.log("ERROR GETTING TEACHERS", error);
    }
  };

  //add a new teacher
  const addNewTeacher = async (newTeacherData) => {
    try {
      const newTeacher = await addTeacher(newTeacherData);
      setTeachersData([...teachersData, newTeacher]);
    } catch (error) {
      console.log("ERROR ADDING A NEW TEACHER", error);
    }
  };

  // Delete a teacher
  const removeTeacher = async (id) => {
    try {
      const result = await deleteTeacher(id);
      if (result) {
        console.log("Teacher successfully deleted");
        setTeachersData(teachersData.filter((teacher) => teacher.id !== id));
      }
    } catch (error) {
      console.log("ERROR DELETING TEACHER: ", error);
    }
  };

  //update a teacher

  const updateExistingTeacher = async (id, updatedData) => {
    try {
      const updatedTeacher = await updateTeacher(id, updatedData);
      console.log("Teacher updated successfully:", updatedTeacher);
      setTeachersData(
        teachersData.map((teacher) =>
          teacher.id === id ? updatedTeacher : teacher
        )
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <TeachersContext.Provider
      value={{
        teachersData,
        addNewTeacher,
        removeTeacher,
        updateExistingTeacher,
        fetchTeachers,
      }}
    >
      {children}
    </TeachersContext.Provider>
  );
};
export default TeachersContext;
