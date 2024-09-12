import React from 'react'

function SubjectCard({image, subject,noOfStudent}) {
  return (
    <div className="flex flex-col bg-[#EAE6FF] border-2 border-[#403294] rounded-md px-[38px] py-[30px] items-center w-full">
      <div className='mb-4'>
        <img src={image} alt="math-icon" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-[#403294] font-bold">{subject}</h2>
        <p className="font-normal text-[#403294]">{noOfStudent}</p>
      </div>
    </div>
  );
}

export default SubjectCard
