import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client"

function Stopwatch(){
    const [timer,setTimer] = useState(0)
    const [isRunning,isRunningSet] = useState(0)
    const intervalRef = useRef(null) // yha pr agr ye nhi hogi to value clti rheygi but yha pe show nhi hogi isliye iskko show krana ke liye useRef use kia ha 
function Start(){
    if(!isRunning){
    intervalRef.current = setInterval(() => { // intervalRef.current clearInterval hone ek pr bhi hold krke rkhta h previous value ko 
        setTimer((previewTimer)=>previewTimer + 1) // yha kuchb hi de skte h value ka naam
    },1000);
    isRunningSet(true)
}
// ye function hmesha previous wale ko hi call krega jayda 0+1 ,0+1,etc isliye hi iski value 1 se agge nhi bd rhi kyuki ye updated ko nhi lega previous wali ko hi lega 
}
function Stop(){
    if(isRunning){
    clearInterval(intervalRef.current) // ye function hmara rok rha h hmare interval ko to value to sustain rheygi na phir isliy hi value ruk rhi h
    intervalRef.current = null
    }
    isRunningSet(false)
}
function Reset(){
    clearInterval(intervalRef.current)
    intervalRef.current = null;
    setTimer(0)
}

    return(
        <div className="bg-white p-4 text-center rounded-sm">
            <h1 className="font-bold text-xl">StopWatch is : {timer}</h1>
            <button onClick={()=>Start()} className="border-2 bg-black text-white px-2 mt-2 rounded-md">Star</button>
            <button onClick={()=>Stop()} className="border-2 bg-black text-white px-2 mt-2 rounded-md">Stop</button>
            <button onClick={()=>Reset()} className="border-2 bg-black text-white px-2 mt-2 rounded-md">Reset</button>
        </div>
    )
}
const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<Stopwatch/>)