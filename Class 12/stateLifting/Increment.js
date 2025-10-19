import { useState } from "react"
import Decrement from "./decrement"
export default function Increment({counts,setCounts}){
    return(
        <>
            <h2>Child Counter is : {counts*5}</h2>
            <button onClick={()=>setCounts(counts + 1)}>Increment</button>
        </>
    )
}

