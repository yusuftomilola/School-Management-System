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
      }}
    >
      {children}
    </TeachersContext.Provider>
  );
};
export default TeachersContext;
