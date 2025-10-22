import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add";

function App(){
    const [language,setlanguage] = useState(['TS','JS','Java'])
    function handlClick(){
        setlanguage(['Python',"C++",...language])
    }
return(
    <>
    <div className="flex justify-center items-center h-[100vh] gap-3">
        {
            language.map((value,index)=><Add key={value} value={value}></Add> )
        }
        <button className="bg-black text-white p-1 font-bold rounded-md" onClick={handlClick}>Add language</button>
    </div>
    
    </>
)
}

const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App/>)

// TS = 3 js = 2 ,Java = 7 m chahta hu ki new add ho c++ but ye sb same rhe changes na ho 
// Add krne pr new  ( ye changes isliye hora h kyuki key ko as a index krne se ye prblem face hogi )
// C++ = 3 ,TS = 2,Js = 7,Java = 0