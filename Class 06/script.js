import React from "react";
import ReactDOM from "react-dom/client";


function Card(props){
    return (
        <div className=" border-2 border-green p-2 bg-green-700">
            <img src="https://cottonworld.net/cdn/shop/files/L-TSHIRT-17552-21457-BLACK_1.jpg?v=1754572640&width=960" className="h-[200px] w-[200px]"/>
            <div className="text-center text-white">
                <h2 className="font-bold text-2xl m-2">{props.cloth}</h2>
                <h1 className="font-bold text-3xl m-2">{props.Offer}</h1>
                <h2 className="font-bold text-2xl p-2">Shop Now</h2>
            </div>
        </div>
    )
}
const arr = [{cloth:"T-Shirt",Offer:"20-80%OFF"},{cloth:"Shoes",Offer:"10-50%OFF"},{cloth:"Jeans",Offer:"20-70%OFF"},{cloth:"Kurta",Offer:"20-40%OFF"},{cloth:"Pajama",Offer:"20-60%OFF"},{cloth:"Shirt",Offer:"20-80%OFF"},{cloth:"Skirt",Offer:"20-80%OFF"},{cloth:"Underwear",Offer:"50-80%OFF"},{cloth:"Jacket",Offer:"40-80%OFF"},{cloth:"Hoodie",Offer:"20-80%OFF"},{cloth:"Caps",Offer:"20-80%OFF"}]
function App(){
return(
    <div className=" flex gap-6 overflow-fit flex-wrap">
{
    arr.map((value,index,array)=><Card key={index} cloth={value.cloth} Offer={value.Offer}/>)
}
    </div>
)
}
const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App/>)