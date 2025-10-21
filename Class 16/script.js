import React from "react";
import ReactDOM from "react-dom/client"
import Counting from "./src/counting";
import Stores from "./Stores"
import { Provider } from "react-redux";
import CustomCounter from "./customcounter";
function App(){
    console.log(Stores);
    return(
        <div>
            <Provider store={Stores}>
            <Counting></Counting> 
            <br></br>
            <br></br>
            <br></br>
            <CustomCounter></CustomCounter>
            </Provider>
        </div>
    )
}
const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App/>)
// File run hori counting wali run na ki count function h