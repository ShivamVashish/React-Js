import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import arry from "./utils/dummy";
import arry, { greet as goa,meet as roa } from "./utils/dummy";

function App() {
  let [A,setA] = useState(arry)
  function sortArray(){
    A.sort((a,b)=>a.Price - b.Price)
    setA([...A])
}
function sortFilter(){
 const B =  arry.filter((value)=>value.Price>699)
  setA(B)
}
  return (
    <div className="text-center fbg-gray-100 min-h-screen">
      <Header />
      
        <button onClick={sortArray} className="mt-[160px] md:mt-[120px] mr-2 bg-green-700 p-2 mb-3 text-white font-bold rounded-md">Sort by Price</button>
        <button onClick={sortFilter} className="mt-[160px] md:mt-[120px] bg-green-700 p-2 mb-3 text-white font-bold rounded-md">Filter by Price</button>
      
      <div className=" flex flex-wrap justify-center gap-6 p-4">
        {A.map((value, index) => (
          <Card key={index} image={value.image} Price={value.Price} cloth={value.cloth} Offer={value.Offer} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}
const Root = ReactDOM.createRoot(document.querySelector("#root"));
Root.render(<App />);
