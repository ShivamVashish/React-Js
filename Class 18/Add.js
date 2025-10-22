import { useState } from "react";

export default function Add(){
    
    const [count,setCount] = useState(0)
    return(
        <div className="">
            <h1 className="bg-black text-white p-2 mb-2 font-bold rounded-md">Count is : {count}</h1>
            <button className="bg-white text-black font-bold mb-2 p-2 text-center" onClick={()=>setCount(count + 1)}>Increment</button>
        </div>
    )
}