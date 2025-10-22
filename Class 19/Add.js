import React, { useState } from "react";

export default function Add({value}){
    const[count,setCount] = useState(0)
    return(
        <div className="bg-black p-2 rounded-md">
            <h1 className="text-center text-white mb-2 font-bold">{value} : {count}</h1>
            <button className="border-2 p-1 bg-black text-white font-bold rounded-md text-center" onClick={()=>setCount(count + 1)}>Increment</button>
        </div>
    )
}









