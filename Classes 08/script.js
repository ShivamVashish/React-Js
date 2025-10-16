import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Color from "./component/Colorful";
// Background Color Changer

function Main(){
    const [count,setCount] = useState(0)
    return (
        <>
        <div className="h-[100px] wi-[200px] bg-white flex justify-center gap-2 items-center pt-5 rounded-sm">
        <h1 className="bg-black text-white p-2 font-bold rounded mb-2">Count is : {count}</h1>
        <button onClick={()=>{setCount(count + 1)}} className="bg-black text-white p-2 font-bold rounded mb-2">Increment</button>
        </div>
        <><Color></Color></>
        </>
    )
}
const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(<Main/>)