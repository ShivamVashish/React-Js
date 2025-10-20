import React from "react";
import ReactDOM from "react-dom/client"
import Counting from "./src/counting";
function App(){
    return(
        <div>
            <Counting></Counting>
        </div>
    )
}









const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App/>)