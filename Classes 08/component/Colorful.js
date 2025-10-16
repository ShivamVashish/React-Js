import React ,{ useEffect,useState } from "react";

function Color(){

    console.log('first');
    const [color ,setColor] = useState("black") // default color

    useEffect(()=>{
        console.log("UseEffect Executed");
        document.body.style.backgroundColor = color
    },[color])
    // console.log("second");
    return(
        <div className="bg-white p-5 text-center rounded-sm sm:w-[70%">
            <h1 className="p-2 font-bold text-3xl mb-8">Background Color Changer</h1>
            <div>
                <button onClick={()=>setColor('red')}   className="border-2 px-2 py-1 mr-1 bg-red-700 text-white rounded-md">Red</button>
                <button onClick={()=>setColor('blue')}  className="border-2 px-2 py-1 mr-1 bg-blue-700 text-white rounded-md">Blue</button>
                <button onClick={()=>setColor('orange')}className="border-2 px-2 py-1 mr-1 bg-orange-700 text-white rounded-md">Ornage</button>
                <button onClick={()=>setColor('green')} className="border-2 px-2 py-1 mr-1 bg-green-700 text-white rounded-md">Green</button>
                <button onClick={()=>setColor('pink')}  className="border-2 px-2 py-1 bg-pink-700 text-white rounded-md">Pink</button>
            </div>
        </div>
    )
}

export default React.memo(Color)