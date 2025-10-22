import React, { useEffect } from "react";
import ReactDOM from "react-dom/client"
import Stores from "./Stores";
import {Provider} from "react-redux"
import CoinCreate from "./CoinCreate";

function App(){

    return(
        <Provider store={Stores}>
            <CoinCreate></CoinCreate>
        </Provider>
    )
}



const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App></App>)




