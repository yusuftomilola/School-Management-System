import React from 'react'
import PreprietorCard from '../components/ProprietorCard'
import userImg from '../assets/images/ProprietorImg.svg'

const Users = () => {
  return (
    <div className='w-[40%] ring-1'>
      <PreprietorCard
      img={userImg}
      name={'Mark May John Doe'}
      qualification={'BSC Computer Science'}
      rank={'Proprietor 1'}
      />
    </div>
  )
}

export default Users
