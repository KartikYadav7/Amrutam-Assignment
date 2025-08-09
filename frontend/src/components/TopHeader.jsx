import React from 'react'

const TopHeader = () => {
  return (
    <>
     <div className='bg-[#373636] p-3 sticky font-[DM Sans]   top-0 z-50 flex justify-center gap-x-4 items-center'>
    <p className='text-[#D9D9D9] text-center text-[20px] ml-40'>
Register Yourself As An Amrutam Doctor
    </p>
    <button className='bg-[#3A643B] text-[#FFFFFF] gap-x-4 flex items-center justify-center py-2 px-20 rounded-xl ml-20'> <img src="./topParaImg.png" alt="" /><span>join now</span></button>
   </div> 
    </>
  )
}

export default TopHeader
