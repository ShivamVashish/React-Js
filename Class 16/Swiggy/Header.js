import { useSelector } from "react-redux";
export default function Headers(){
const count =  useSelector((state)=>state.Shivam.count)
    return(
        <div className="flex justify-center gap-[30px] bg-black text-white p-4 font-bold text-4xl">
            <h1>Swiggy</h1>
            <h1>Cart : ({count})</h1>
        </div>
    )
}