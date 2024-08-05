import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from './Context'
const Restart = () => {
    const context=useContext(Context)
    const scorecard = () => {
      if (context.result === "You Lost !!") {
        context.setLoses(loses=>loses+1)
      } else if (context.result === "You Won !!") {
        context.setWins(wins=>wins+1)
      } else {
        context.setDraws(draws=>draws+1)
      }
    };
  return (
    <>
    <NavLink to="/Rock-Paper-Scissors/">
   <button className=' mt-[40px] h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center border-4 border-black max-sm:h-[70px] max-sm:w-[70px]'
   onClick={()=>{context.setIsMoved(false)
    context.setMove("")
    context.setIsMoved(false)
    context.setCompMoved(false)
    context.setCompMove("")
    context.setColour("Gray")
    context.setResult("")
    scorecard()
}
   }
   >
    <img src="home.png" className='w-[65px] h-[65px] max-sm:w-[45px] max-sm:h-[45px]'/>
   </button>
    </NavLink>
    </>
  )
}

export default Restart
