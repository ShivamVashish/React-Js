import GlobalContext from "./Globalfile"
import { useContext } from "react"
export default function Third(){

  const {count,setCount} =   useContext(GlobalContext)


    return(
        <div>
            <h1>I am Printing : {count} </h1>
            <button onClick={()=>setCount(count + 5)}>Increment</button>
            
        </div>
    )
}