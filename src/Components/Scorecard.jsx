import React, { useContext } from 'react'
import { Context } from './Context'
import { NavLink } from 'react-router-dom'
const Scorecard = () => {
    const context=useContext(Context)
  return (
    <div className='h-screen w-full bg-[#343434] overflow-none'>
        <div className='w-full h-[100px] bg-[#575757] flex justify-center items-center font-serif'>
            <p className='text-white font-bold text-[4rem] max-sm:text-[2rem]'>SCORECARD</p>
        </div>
    <div className='w-full h-[55%] bg-[#343434] flex justify-around items-start mt-[100px] max-sm:mt-[200px] max-sm:h-[47%]'>
        <div className='flex flex-col justify-center items-center mr-[20px]'>
        <p className='text-[1.8rem] text-white font-bold font-sans'>You</p>
        <p className='text-[1.8rem] text-white font-bold font-sans'>{context.wins}</p>
        </div>
        <div className='flex flex-col justify-center items-center ml-[30px] max-sm:ml-[0px]'>
        <p className='text-[1.8rem] text-white font-bold font-sans'>Draws</p>
        <p className='text-[1.8rem] text-white font-bold font-sans'>{context.draws}</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-[1.8rem] text-white font-bold font-sans'>Computer</p>
            <p className='text-[1.8rem] text-white font-bold font-sans'>{context.loses}</p>
        </div>


    </div>
    <NavLink to={"/Rock-Paper-Scissors/"}><button className='text-black text-[2.5rem] bg-[#d4a373] ml-[70px] p-2 h-[70px] flex justify-center items-center rounded-3xl w-[145px] border-[6px] border-black hover:bg-[#f6bd60] hover:h-[75px] hover:w-[150px] hover:ml-[67px] hover:mt-[-2px] font-semibold max-sm:text-[1.4rem] max-sm:ml-[10px] max-sm:h-[50px] max-sm:w-[100px]'>Back</button></NavLink>
    </div>
  )
}

export default Scorecard