import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./Slicer";
import CoinCard from "./CoinCard";

export default function CoinCreate() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.Slice);

  useEffect(() => {
    dispatch(FetchData(20));
  }, []);

  if (loading) {
    return <h1>Data is loading</h1>;
  }

  if (error) {
    return <h1>Error has occurred</h1>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((value) => (
        <CoinCard key={value.id} coin={value} />
      ))}
    </div>
  );
}
