import { useEffect,useDispatch,useSelector } from "react";
import { FetchData } from "./Slicer";

export default function CoinCreate(){

   const dispatch =  useDispatch()
  const {data,loading,error} = useSelector((state)=>state.Slice)
    useEffect(()=>{
        dispatch(FetchData(20))
    },[])
    // Display Information of 20 User
    if(loading){
        return <h1>Data is loading</h1>
    }
    if(error){
        return <h1>Erro has Occurred</h1>
    }

    return(
        <>
        <div>
            
                {data.map((value)=>value)}
            
        </div>
        </>
    )
}