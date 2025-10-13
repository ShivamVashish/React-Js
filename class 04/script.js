import React, { Component } from "react"
import ReactDOM from "react-dom/client"

// const element1 = React.createElement('h1',{style:{backgroundColor:'black',color:'white',padding:'10px',textAlign:'center',fontSize:'50px'},id:'first',className:'Header1'},"Hello Coder Army")
// const element2 = React.createElement('h2',{style:{backgroundColor:'black',color:'white',padding:'10px',textAlign:'center',fontSize:'50px',marginTop:'20px'},id:'Second',className:'Header1'},"Frontend Developer")
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'))
// const Div1 = React.createElement('div',{},[element1,element2])
// Reactroot.render(Div1)

// JSX(JavaScript => Means HTML jsa code hm javascript m likh skte h iski help se)
// jo code hm itna bda likh rhe the ab wo bs thode se m hi hora h 



//Babel JSX
// JSX => JSX ka code sbse phle react.createElement() m convert hota h or isko kr kon rha h isko babel kr rha h or uske baad to react.createElement hme object lakr deta h or phir render krne wo hTML(actual DOM) m convert krta h
// const names = 'Shivam'
// const obj = {
//     age:23,
//     salary:50
// }
// // Ye h React ke element
// const newElement = (<>
//     <h1 id="first" className="bg-black text-white text-4xl font-bold text-center p-4 mb-2">Hello Coder Army {obj.age}</h1>
//     <h2 name={23} id="Second" className="bg-black text-white text-4xl font-bold text-center p-4">Frontend Developer {names}</h2>
// </>)
// const Reactroot1 = ReactDOM.createRoot(document.getElementById('root'))
// Reactroot1.render(newElement)



// React Components
// functional Based Component (Most Important )
// React m function likhna hi react functional based component hota h 

// **React me jo bhi function JSX return karta hai, ya HTML-like UI return karta hai, wo functional component kehlata hai.
function Greet(){
    return <h1>Functional Based Component</h1>
}

const Meet = ()=>{
    return <h2>Frontend Developer</h2>
}
const newElement1 = Greet()
const newElement2 = Meet()

// const newElement4 = <>{newElement1} {newElement2}</> asa bhi kr skte h niche wale ki trah bhi kr skte h
const newElement4 = <>{Greet()} {Meet()}</>
const Reactroot = ReactDOM.createRoot(document.getElementById('root'))
Reactroot.render(newElement4) //dono ek sath call krne h to ye kro 
