import { v4 as uuidv4 } from "uuid";
import schoolsData from "../data/schools";

//Function for fetching the schools data
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

// Function for adding new school to the localstorage database and returnung a new school which has a unique id
export const addSchool = async (newSchoolData) => {
  const newSchool = { id: uuidv4(), ...newSchoolData };

  const currentSchools =
    JSON.parse(localStorage.getItem("schoolsData")) || schoolsData;

  currentSchools.push(newSchool);

  localStorage.setItem("schoolsData", JSON.stringify(currentSchools));

  return newSchool;
};

//Fuction to delete a school from the local storage database
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

//update school
export const updateSchool = async (id, schoolData) => {
  let currentSchools =
    JSON.parse(localStorage.getItem("schoolsData")) || schoolsData;

  const index = currentSchools.findIndex((school) => school.id === id);

  if (index !== -1) {
    // Update the school with the new data
    currentSchools[index] = { ...currentSchools[index], ...schoolData };

    localStorage.setItem("schoolsData", JSON.stringify(currentSchools));

    return currentSchools[index];
  }

  throw new Error("School not found");
};
