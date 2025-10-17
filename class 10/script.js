import React , {useCallback , useEffect , useState} from "react";
import ReactDOM from 'react-dom/client'
import Header from "./Components/Header";
import Body from "./Components/Body";

function GithubProfile(){
    return(
         <>
            <Header></Header>
            <Body></Body>
         </>
    )
}








const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<GithubProfile/>)