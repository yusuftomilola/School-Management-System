import { v4 as uuidv4 } from "uuid";
import schoolsData from "../data/schools";

export const getSchools = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(schoolsData), 500);
  });
};

// export const getSchools = async () => {
//   return schoolsData;
// };
