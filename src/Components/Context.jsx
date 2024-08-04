import { useState } from "react"
import { createContext } from "react"

export const Context=createContext()
export const ContextProvider = (props) => {
    const[move,setMove]=useState("")
    const[isMoved,setIsMoved]=useState(false)
    const[compMoved,setCompMoved]=useState(false)
    const[compMove,setCompMove]=useState("")
    const [colour,setColour]=useState("Gray")
    const [result,setResult]=useState("")
    const [wins,setWins]=useState(0)
    const [loses,setLoses]=useState(0)
    const [draws,setDraws]=useState(0)
    
  return (
    <Context.Provider value={{move,setMove,isMoved,setIsMoved,compMoved,setCompMoved,compMove,setCompMove,colour,setColour,result,setResult,wins,setWins,draws,setDraws,loses,setLoses
    }}>
        {props.children}
    </Context.Provider>
  )
}
