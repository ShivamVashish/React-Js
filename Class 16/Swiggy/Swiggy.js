import React from "react";
import ReactDOM from "react-dom/client"
import { Provider, useSelector } from "react-redux";
import Headers from "./Header";
import Card from "./Card";
import { Provider } from "react-redux";
import Stores from "./Stores";

function App(){
    return(
        <div>
            <Provider store={Stores}>
            <Headers></Headers>
             <Card></Card>
             </Provider>
        </div>
            
        
    )
}

const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App></App>)