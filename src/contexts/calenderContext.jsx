import React, { useState } from "react";
import { createContext } from "react";

const DateContext = createContext();
export const CalenderProvider = ({ children }) => {
  const [calender, setCalender] = useState(false);
  const toggleCalenderVisibility = () => {
    setCalender(true);
  };
  return (
    <DateContext.Provider
      value={{ toggleCalenderVisibility, calender, setCalender }}
    >
      {children}
    </DateContext.Provider>
  );
};

export default DateContext;
