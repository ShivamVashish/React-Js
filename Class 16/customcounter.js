import { useState } from "react"
import { useDispatch } from "react-redux"
import { CustomIncreaser } from "./Slicer1"
export default function CustomCounter(){
    
    const [number,setnumber] = useState("")
    const dispatch = useDispatch()
    function handlClick(){
        dispatch(CustomIncreaser(Number(number)))
        setnumber('')
    }
    return(
        <div>
             <input type="number" value={number} onChange={(e)=>setnumber(Number(e.target.value))}/>
             <button onClick={handlClick}>Submit</button>
        </div>
    )
}