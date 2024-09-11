import React from 'react'

function ClassromCard({image, headerText, text, backgroundColor}) {

  
  return (
    <div>
      <div className={`flex w-full p-8 gap-5 rounded bg-[${backgroundColor}]`}>
        <div>
          <img src={image} alt="plus sign" />
        </div>
        <div>
          <h2 className="text-[#172B4D] text-[40px] font-bold">{headerText}</h2>
          <p className="text-[#172B4D] text-[16px] font-normal">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ClassromCard
