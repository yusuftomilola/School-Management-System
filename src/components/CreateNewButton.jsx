import React from "react";
import React from "react";

function CreateNewButton({ children, backgroundColor }) {
  return (
    <div>
      <button
        style={{ backgroundColor }}
        className={`px-[6px] py-3 text-[#403294] text-sm bg-[${backgroundColor}] rounded`}
      >
        {children}
      </button>
    </div>
  );
}

export default CreateNewButton;
export default CreateNewButton;
