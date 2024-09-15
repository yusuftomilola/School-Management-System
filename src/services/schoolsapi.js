import { v4 as uuidv4 } from "uuid";
import schoolsData from "../data/schools";

// Function to convert File to base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

// Function for fetching the schools data
export const getSchools = async () => {
  return new Promise((resolve) => {
    const savedSchools = JSON.parse(localStorage.getItem("schoolsData"));
    if (savedSchools && savedSchools.length > 0) {
      setTimeout(() => resolve(savedSchools), 500);
    } else {
      setTimeout(() => resolve(schoolsData), 500);
    }
  });
};

// Function for adding new school to the localStorage database
export const addSchool = async (newSchoolData) => {
  const newSchool = { id: uuidv4(), ...newSchoolData };

  // If there's an image file, convert it to base64
  if (newSchool.schoolLogo instanceof File) {
    try {
      newSchool.schoolLogo = await fileToBase64(newSchool.schoolLogo);
    } catch (error) {
      console.error("Error converting image to base64:", error);
      // If conversion fails, use a default image or null
      newSchool.schoolLogo = null;
    }
  }

  const currentSchools =
    JSON.parse(localStorage.getItem("schoolsData")) || schoolsData;
  currentSchools.push(newSchool);
  localStorage.setItem("schoolsData", JSON.stringify(currentSchools));

  return newSchool;
};

// Function to delete a school from the localStorage database
export const deleteSchool = async (id) => {
  const currentSchools =
    JSON.parse(localStorage.getItem("schoolsData")) || schoolsData;
  const index = currentSchools.findIndex((school) => school.id === id);

  if (index !== -1) {
    currentSchools.splice(index, 1);
    localStorage.setItem("schoolsData", JSON.stringify(currentSchools));
    return true;
  }

  throw new Error("School Not Found");
};

// Function to update school
export const updateSchool = async (id, schoolData) => {
  let currentSchools =
    JSON.parse(localStorage.getItem("schoolsData")) || schoolsData;
  const index = currentSchools.findIndex((school) => school.id === id);

  if (index !== -1) {
    // If there's a new image file, convert it to base64
    if (schoolData.schoolLogo instanceof File) {
      try {
        schoolData.schoolLogo = await fileToBase64(schoolData.schoolLogo);
      } catch (error) {
        console.error("Error converting image to base64:", error);
        // If conversion fails, keep the old image
        delete schoolData.schoolLogo;
      }
    }

    // Update the school with the new data
    currentSchools[index] = { ...currentSchools[index], ...schoolData };
    localStorage.setItem("schoolsData", JSON.stringify(currentSchools));
    return currentSchools[index];
  }

  throw new Error("School not found");
};
