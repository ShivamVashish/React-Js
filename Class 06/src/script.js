import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import arry from "./utils/dummy";
import { greet as goa,meet as roa } from "./utils/dummy";

function App() {
  return (
    <div className="text-center fbg-gray-100 min-h-screen">
      <Header />
      {
        <button id="filter" className="mt-[160px] md:mt-[90px] bg-green-700 text-white font-bold px-6 py-2 rounded-lg mb-5">Price</button>
      }
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {arry.map((value, index) => (
          <Card key={index} image={value.image} Price={value.Price} cloth={value.cloth} Offer={value.Offer} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}
const Root = ReactDOM.createRoot(document.querySelector("#root"));
Root.render(<App />);
