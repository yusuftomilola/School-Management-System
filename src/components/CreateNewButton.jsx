import React from 'react'

function CreateNewButton({children, backgroundColor}) {
  return (
    <div>
    <button className={`px-[6px] py-3 text-[#403294] bg-[${backgroundColor}] rounded`}>{children}</button>
    </div>
  );
}

export default CreateNewButton
