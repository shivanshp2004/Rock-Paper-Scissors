import { useContext } from "react"
import { Context } from "./Context"

const Icon = (props) => {
  const context=useContext(Context)
  return (
    <div className="flex flex-col justify-center items-center mt-[30px] ">
    <div className="w-[220px] h-[220px] bg-white rounded-full ml-[30px] bg-[#e5e5e5] flex justify-center items-center hover:w-[230px] hover:h-[230px] hover:ml-[26px] hover:mr-[-6px] hover:bg-[#f5cac3] cursor-pointer border-4 border-black"
    onClick={()=> { context.setMove(props.move)
      context.setIsMoved(true)
    }}
    >
        <img src={props.image} className="w-[150px] "
        />
    </div>
        <p className="text-[2.5rem] mt-[10px] font-bold font-sans text-white ml-[30px]">{props.move}</p>
        </div>
  )
}

export default Icon