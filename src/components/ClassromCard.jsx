import React from 'react'

function ClassromCard({image, headerText, text, backgroundColor}) {

  
  return (
    <div>
      <div className={`flex p-8 gap-4 rounded bg-[${backgroundColor}]`}>
        <div>
          {/* <img src="src/assets/icons/add-circle.svg" alt="plus sign" /> */}
          <img src={image} alt="plus sign" />
        </div>
        <div>
          {/* <h2 className="text-[#172B4D] text-[40px] font-bold">Create</h2> */}
          <h2 >{headerText}</h2>
          {/* <p className="text-[#172B4D] text-[16px] font-normal">new classroom</p> */}
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ClassromCard
