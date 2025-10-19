import Third from "./third"
import GlobalContext from "./Globalfile"
import { useContext } from "react"
export default function Second(){
       const {count,setCount} =   useContext(GlobalContext)
    return(
        <div>
            <h2>kaise hai ap sb log</h2>
            <Third/>
        </div>
    )
}