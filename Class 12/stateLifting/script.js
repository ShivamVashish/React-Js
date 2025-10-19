import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Increment from "./Increment";
import Decrement from "./decrement";

function App(){
    const [count,setCount] = useState(0) 
    return(
        <div>
            <h1>Hello Coder Army</h1>
            <Increment counts={count} setCounts={setCount}/>
            <Decrement counts={count} setCounts={setCount}/>
        </div>
    )
}










const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(<App/>)