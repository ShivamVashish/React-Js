import { useCallback, useEffect, useState } from "react"
function Body(){
    const [Profile,setProfile] = useState([])
    const [numberofprofile,setNumberofprofile] = useState('')
  const GenerateProfile = useCallback(async (count)=>{
    if(!count || count <=0){
        alert("Please enter a valid number of profiles");
        return
    }
    try{
        let random = Math.floor(Math.random()*10000)
      const response = await fetch(`https://api.github.com/users?since=${random}&per_page=${count}`);
      if(!response.ok){
        throw new Error(`HTTPS Error :${response.status}`)
      }
      const data = await response.json();
      setProfile(data)
      
    }catch(error){
            console.log("Error fetching profiles");
    }
    },[])
    useEffect(()=>{
        GenerateProfile(10)
    },[])
    return(
        <div className="mt-15">
            <input type="text" placeholder="type here" value={numberofprofile} onChange={(e)=>setNumberofprofile(e.target.value)} className="p-1 bg-white rounded-sm text-black font-bold pl-2 max-w-[50%]"/>
            <button onClick={()=>GenerateProfile(Number(numberofprofile))}  className="text-black font-bold rounded-sm border-2 px-2 py-1 ml-2 bg-white ">Click</button>
        <div className="flex justify-center items-center text-center ml-10 mr-10 flex-wrap pt-5 bg-black text-white gap-4">   
        {
            Profile.map((value)=>{
                return(
                <div key={value.id} className="border-2 p-2">
                <img src={value.avatar_url} className="h-[200px] w-[200px] rounded-md mb-2"></img>
                <h1 className="font-bold mb-3 text-2xl">Name : {value.login}</h1>
                <a href={value.html_url} target="_blank" className="font-bold text-xl mb-3 block underline ">Github Profile</a>
                </div>
                )
            })
        }
        </div>
        </div>
    )
}
export default Body;