import { useContext, useEffect } from "react"
import Icons from "./Components/Icons"
import Move from "./Components/Move"
import { Context } from "./Components/Context"
import Picked from "./Components/Picked"
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom"
import Scorecard from "./Components/Scorecard"
function App() {
 const context=useContext(Context)
 const router=createBrowserRouter([{
  path:"/Rock-Paper-Scissors",
  element:
  <div className="h-screen w-full bg-[#343434]">
  <div className="w-full h-[100px] bg-[#575757] text-[#dee2e6]  flex justify-center items-center font-bold text-[2.5rem]">
      LegyStormE's Rock Paper Scissors
  </div>
  {context.isMoved===false ? <>
  <NavLink to={"/scorecard"}>
  <button className="bg-gray-200 rounded-2xl text-[1.5rem] mt-[25px] ml-[1350px] p-4 border-black border-4 h-[45px] flex justify-center items-center hover:bg-gray-400 font-semibold font-sans"
  >Scorecard</button> </NavLink>
  <Icons/><Move/> </> : <Picked/>}
</div>
 },
{
  path:"/scorecard",
  element: <Scorecard/>
}])
 useEffect(()=>{},[context.isMoved])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
