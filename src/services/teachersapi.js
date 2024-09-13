import { v4 } from "uuid";
import teachersData from "../data/teachers";

export const getTeachers = async () => {
  return new Promise((resolve) => {
    const currentTeachers = JSON.parse(localStorage.getItem("teachersData"));

    if (currentTeachers && currentTeachers > 0) {
      resolve(currentTeachers);
    } else {
      resolve(teachersData);
    }
  });
};
