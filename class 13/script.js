import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Route, Routes,Link } from "react-router";
import Home from "./src/Home"
import About from "./src/About";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/DetailNested";
import Zero from "./src/Zero";
import Hello from "./src/hello";
import Hii from "./src/hii";
import DetailNested from "./src/DetailNested";
function App(){

    return(
        <BrowserRouter>
        <nav className="flex justify-center gap-4  bg-black text-white p-4 font-bold text-2xl">
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="DetailNested">DetailNested</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/DetailNested" element={<DetailNested/>}>
            <Route path="Hello" element={<Hello/>}></Route>
            <Route path="Hii" element={<Hii/>}></Route>
            {/* <Route index element={<Zero/>}></Route> */}
            
            </Route>
        </Routes>
        {/* Footer  */}
        </BrowserRouter>
    )
}

const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App/>)