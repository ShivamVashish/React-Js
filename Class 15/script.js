import React from "react";
import ReactDOM from "react-dom/client"
import Counting from "./src/counting";
import Stores from "./Stores"
import { Provider } from "react-redux";
function App(){
    return(
        <div className="bg-black h-[100vh] flex justify-center items-center">
            <Provider store={Stores}>
            <Counting></Counting> 
            </Provider>
        </div>
    )
}
// File hori counting wali run na ki count function h








const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App/>)