import { useState } from "react"
import { addItems,removeItems } from "./Slice"
import { useDispatch } from "react-redux"
export default function FoodCart(value){
// wha pe sbhi ke liye ek hi cart tha m yha ye chahta hu ki har item ke liye apna cart ho 
     const [inCart,setinCart] = useState(false)
     const dispatch = useDispatch()
    function handlClick(){
        if(inCart){
            dispatch(removeItems())
            setinCart(false)
        }else{
            dispatch(addItems())
            setinCart(true)
        }
    }

    return(
        <div>
            <h1 className="font-bold mt-2 mb-2 text-center">{value.food}</h1>
            <h1 className="font-bold text-center">{value.Price}</h1>
            <button onClick={handlClick} className="border-2 px-2 py-1 text-white bg-black rounded-md mt-2 text-center">{inCart?"Remove":"Add"}</button>
        </div>
    )
}