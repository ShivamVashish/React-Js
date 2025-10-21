import { useDispatch, useSelector } from "react-redux"
import { Increment,Decrement,Reset } from "../Slicer1"
export default function Counting(){

   const count =  useSelector((state)=> state.slice1.count)
   const dispatch = useDispatch()
//    console.log(Increment());
    return(
        <div>
            <h1 className="text-2xl mb-2">Count is : {count}</h1>
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <button onClick={()=>dispatch(Decrement())}>Decrement</button>
            <button onClick={()=>dispatch(Reset())}>Reset</button>
        </div>
    )
}
// Jo Hm data la rhe useSelector ke throw wo hmara ek Redux ki state h or uske ander hmari slice h 
// store = {  state m ye arra h 
//     slice1: { count: 0 }
// }

