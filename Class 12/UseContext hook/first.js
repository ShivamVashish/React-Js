import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Second from "./second";
import GlobalContext from "./Globalfile"
import Fourth from "./fourth";
function App(){
    const [count,setCount] = useState(10) 
    return(
        <div>
            <Fourth/>
            <GlobalContext.Provider value={{count:count,setCount:setCount}}>
            <h1>Hello Coder Army {count}</h1>
            <Second/> 
            {/* ye data jara h object ki form m isliye second m destructuring kri h   */}
            </GlobalContext.Provider> 
        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(<App/>)