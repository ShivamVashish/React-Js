import React from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add";

const arr = [0,1,2,3]
function App(){

    return(
        <div className="border-2 inline-block p-2">
            {arr.map((value)=><Add key={value}/>)}
        </div>
    )   
}

const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App></App>)