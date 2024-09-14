import { v4 as uuidv4 } from "uuid";
import teachersData from "../data/teachers";

// Function to convert File to base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

//function to get teachers
export const getTeachers = async () => {
  return new Promise((resolve) => {
    const currentTeachers = JSON.parse(localStorage.getItem("teachersData"));

    if (currentTeachers && currentTeachers.length > 0) {
      setTimeout(() => resolve(currentTeachers), 500);
    } else {
      setTimeout(() => resolve(teachersData), 500);
    }
  });
};

console.log(getTeachers);

//function for adding a new teacher to local storage
export const addTeacher = async (newTeacherData) => {
  const newTeacher = { id: uuidv4(), ...newTeacherData };

  if (newTeacher.image instanceof File) {
    try {
      newTeacher.image = await fileToBase64(newTeacher.image);
    } catch (error) {
      console.error("Error converting image to base64:", error);
      newTeacher.image = null;
    }
  }

  const currentTeachers =
    JSON.parse(localStorage.getItem("teachersData")) || teachersData;

  currentTeachers.push(newTeacher);

  localStorage.setItem("teachersData", JSON.stringify(currentTeachers));

  return newTeacher;
};

// Function to delete a teacher from the localStorage database
export const deleteTeacher = async (id) => {
  const currentTeachers =
    JSON.parse(localStorage.getItem("teachersData")) || teachersData;
  const index = currentTeachers.findIndex((teacher) => teacher.id === id);

  if (index !== -1) {
    currentTeachers.splice(index, 1);
    localStorage.setItem("teachersData", JSON.stringify(currentTeachers));
    return true;
  }

  throw new Error("Teacher Not Found");
};

// Function to update teacher
export const updateTeacher = async (id, teacherData) => {
  let currentTeachers =
    JSON.parse(localStorage.getItem("teachersData")) || teachersData;
  const index = currentTeachers.findIndex((teacher) => teacher.id === id);

  if (index !== -1) {
    // If there's a new image file, convert it to base64
    if (teacherData.image instanceof File) {
      try {
        teacherData.image = await fileToBase64(teacherData.image);
      } catch (error) {
        console.error("Error converting image to base64:", error);
        // If conversion fails, keep the old image
        delete teacherData.image;
      }
    }

    // Update the teacher with the new data
    currentTeachers[index] = { ...currentTeachers[index], ...teacherData };
    localStorage.setItem("teachersData", JSON.stringify(currentTeachers));
    return currentTeachers[index];
  }

  throw new Error("Teacher not found");
};
