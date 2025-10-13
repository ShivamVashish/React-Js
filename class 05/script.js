import React from "react";
import ReactDOM from "react-dom/client";

// const element1 = <h1>Hello Coder Army</h1>
// function greet(name) {
//     return <h2> {name} Bhaiya jii Ram Ram</h2>
// }
// const element2 = greet("Mohan")
// const Root = ReactDOM.createRoot(document.querySelector('#root'))
// Root.render(greet("Shivam"))

//
const element1 = <h1>Hello Coder Army</h1>
function Greet(props) {
    return <h2>Ram Ram Bhaiya ji {props.name} {props.age}</h2> // or ab usko yha access asa kr skte h 
}

const element2 = <Greet name="Shivam"  age="23"/> // iske argume html ki trah class id ki trah hi de skte h dekhao // ab jo name or age h wo Greet catch kse krga dekho iske pass hota h props means jo bhi hmne iske andr properties bheji h wo usme cli jayga or props ek object h
const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(element2)