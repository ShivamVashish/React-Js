import { useDispatch, useSelector } from "react-redux"
import { Increment,Decrement,Reset } from "../Slicer1"
export default function Counting(){

   const count =  useSelector((state)=> state.slice1.count)
   const dispatch = useDispatch()
    return(
        <div className="bg-white p-2 text-black gap font-bold rounded-md">
            <h1 className="text-2xl mb-2">Count is : {count}</h1>
            <button className="border-2 mr-2 p-1 bg-black text-white rounded-sm" onClick={()=>dispatch(Increment())}>Increment</button>
            <button className="border-2 mr-2 p-1 bg-black text-white rounded-sm" onClick={()=>dispatch(Decrement())}>Decrement</button>
            <button className="border-2 p-1 bg-black text-white rounded-sm" onClick={()=>dispatch(Reset())}>Reset</button>
        </div>
    )
}
// Jo Hm data la rhe useSelector ke throw wo hmara ek Redux ki state h or uske ander hmari slice h 
// store = {  state m ye arra h 
//     slice1: { count: 0 }
// }

