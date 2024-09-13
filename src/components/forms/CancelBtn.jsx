import React from "react";

const CancelBtn = ({ children, className = "", ...props }) => {
  return (
    <button
      onClick={() => {}}
      className={`text-[14px] font-normal border border-solid border-[#dfe1e6] p-3 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CancelBtn;
