import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client"

function App(){

    const [count,setCount] = useState(0)
    const [number,setNumber] = useState("")
    const [result ,setResult] = useState(null)
    // counter
    const Fibbonacci = useCallback((n)=>{
        if(n<=1) return n;
        return Fibbonacci(n-1) + Fibbonacci(n-2) 
    },[])
     // hm isse globally hi bna skta hu phir ye ek hi bar create hogi app function se bhr
// const result = useMemo(()=>Fibbonacci(Number(number)), [number]) kya yha pe useEffect use nhi kr skta tha m
useEffect(()=>{
    setResult(Fibbonacci(Number(number)))
},[number])
    return (
        <div className="bg-white p-2 text-center rounded-sm">
            <h1 className="font-bold text-2xl mb-2 m-1 text-center">Counter is : {count}</h1>
            <button className="border-2 p-1 bg-black text-white mb-2" onClick={()=>setCount(Number(count+1))}>Increment</button>
            <button className="border-2 p-1 ml-1 bg-black text-white mb-2" onClick={()=>setCount(Number(count-1))}>Decrement</button>
            <div>
                <h2 className="font-bold mb-2">Fibbonacci Number : {result}</h2>
                <input className="bg-black text-white pl-2" type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            </div>
        </div>
    )
}

const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App/>)