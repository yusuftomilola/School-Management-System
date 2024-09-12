import React from 'react'

function CreateNewButton({children, backgroundColor, color}) {
  return (
    <div>
    <button className={`px-[8px] py-3 font-bold text-[12px] text-[${color}] bg-[${backgroundColor}] rounded`}>{children}</button>
    </div>
  );
}

export default CreateNewButton
