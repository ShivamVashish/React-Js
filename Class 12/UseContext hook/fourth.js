import GlobalContext from "./Globalfile"
import { useContext } from "react"
export default function Fourth(){
    
   const data  =   useContext(GlobalContext)

    return(
        <div>
            <h1>Mein hu Don {data}</h1>
        </div>
    )
}