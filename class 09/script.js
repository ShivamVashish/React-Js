import React,{useCallback, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";

function Passwordgenerator(){

const [Password,setPassword] = useState("")
const [length,setLength] = useState(10)
const [numberChanged,Setnumberchnge] = useState(false)
const [characterChanged,SetCharacterchnge] = useState(false)


const GeneratepassRandom = useCallback(()=>{
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numberChanged)
        str +="0123456789"
    if(characterChanged)
        str +="+-)({^%$#!`~&/*><?][}@"
    let answer = ""
    for(let i = 0;i<length;i++){
       answer +=str[Math.floor(Math.random()*str.length)] 
    }
    setPassword(answer)
},[length,numberChanged,characterChanged])

    
useEffect(()=>{
    GeneratepassRandom()
},[length,numberChanged,characterChanged]) //GeneratepassRandom ye bhi likh skte h iske andr
return(
    <>
    <h1 className="text-4xl text-white font-bold mb-6 underline">Password Generator</h1>
    <h1 className="mb-5 font-bold text-2xl text-white">{Password}</h1>
    <div>
        <input className="mr-2 relative top-1 " type="range" min={5} max={20} value={length} onChange={(e)=>setLength(e.target.value)}/>
        <label className="font-bold mr-2 text-white">Length is : ({length})</label>

        <input className="mr-2" type="checkbox" defaultChecked={numberChanged} onChange={()=>Setnumberchnge(!numberChanged)}/>
        <label className="mr-2 font-bold text-white">Number</label>

        <input className="mr-2" type="checkbox" defaultChecked={characterChanged} onChange={()=>SetCharacterchnge(!characterChanged)}/>
        <label className="font-bold text-white">Character</label>
    </div>
    </>
)


}


const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<Passwordgenerator/>)