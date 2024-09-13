import { createContext } from "react";
import { useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  // State to manage the visibility of the form
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to toggle the form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <FormContext.Provider
      value={{ toggleFormVisibility, isFormVisible, setIsFormVisible }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
