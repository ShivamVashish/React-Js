function Card(props) {
  return (
    <div className="border-2 border-green-600 p-3 bg-green-700 rounded-xl text-center flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200">
      <img src={props.image}
        className="h-[250px] w-full md:w-[200px] rounded-lg object-cover"
        alt={props.cloth}
      />
      <div className="text-white mt-3">
        <h2 className="font-bold text-lg md:text-2xl">{props.cloth}</h2>
        <h1 className="font-bold text-xl md:text-3xl">{props.Offer}</h1>
        <h2 className="font-semibold mt-1 cursor-pointer">Shop Now</h2>
        <h2 className="font-semibold mt-1 cursor-pointer">Price : {props.Price}</h2>
      </div>
      <div>
      </div>
    </div>
  );
}
export default Card