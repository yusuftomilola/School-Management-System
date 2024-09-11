import React from "react";

const Button = ({ onClick, children, className = "", ...props }) => {
  return (
    <button
      onClick={onclick}
      className={`text-[14px]  bg-[#5243aa] p-3 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
