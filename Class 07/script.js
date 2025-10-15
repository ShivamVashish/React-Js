import React,{useState} from "react";
import ReactDOM from 'react-dom/client'

function Counter(){
    let [count , setCount] = useState(0)
    function Increment(){
    count = count + 1 
    setCount(count)
    console.log(count);
    
}

function Decrement(){
    count = count -1
    setCount(count)
    console.log(count);
    // document.querySelector('h1').innerText = `Count is : ${count}`
}
    return (
        <div className="bg-white text-black p-5 rounded-md">
        <h1 className="pb-6 text-center  font-bold text-2xl">Count is : {count}</h1>
        <button onClick={Increment} className="border-2 mr-2 p-2 text-white bg-black rounded-md">Increment : {count}</button>
        <button onClick={Decrement} className="border-2 p-2 ml-2 text-white bg-black rounded-md">Decrement : {count}</button>
        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(<Counter/>)
