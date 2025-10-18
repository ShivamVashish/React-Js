import React, { useRef, useState ,useRef} from "react";
import ReactDOM from "react-dom/client" // UseRef (hooks)

function App(){
    const [count,setCount] = useState(0);
    // let money = 0 // state variables nhi bnaya ek normal hi use kia h mne(hm yha pe pichli wale ka ref le skte h)
    const money = useRef(0)// isse ye hoga jha se value khtm hui thi usse agge se start hogi 
    // console.log(money);
    return(
        <div className="bg-white p-2 text-center rounded-md">
            <h1 className="font-bold mb-2 text-xl">Count is : {count}</h1>
            <button className="border-2 bg-black text-white p-1 rounded-sm" onClick={()=>setCount(count + 1)}>Increment</button>

            <h1 className="font-bold mb-2 text-xl">Money is : {money.current}</h1>
            <button className="border-2 bg-black text-white p-1 rounded-sm" onClick={()=>{money.current = money.current + 1
                console.log(money.current)
            }}>Increment</button>
        </div>
    )
}
const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App/>)
