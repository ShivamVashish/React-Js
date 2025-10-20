import { useSelector } from "react-redux"

export default function Counting(){

   const count =  useSelector((state)=> state.slice1.count)
    return(
        <div>
            <h1>Count is : {count}</h1>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    )
}
// Jo Hm data la rhe useSelector ke throw wo hmara ek Redux ki state h or uske ander hmari slice h 
// store = {  state m ye arra h 
//     slice1: { count: 0 }
// }

