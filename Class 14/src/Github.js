import { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function Github(){

    const {name} = useParams() // information ko fetch krne ke liye ata h useparam
    const [profile,setProfile] = useState(null)
    async function Fetchuser() {
        const response = await fetch(`https://api.github.com/users/${name}`)
         const data = await response.json()
         setProfile(data)
    }

    useEffect(()=>{
        Fetchuser()
    },[name])
    return(
        <div>
            <h1>My Github Profile</h1>
            <div>
            <img src={profile?.avatar_url} alt="avatar" width={200}/>
            <h1>{profile?.login}</h1>
            </div>
        </div>
    )
}   