import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCount, incrementCount } from "../store/slices/counterSlice";

function Home() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counterReducer);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Home
      </h1>
      <h3 className="text-2xl mb-2"> {count}</h3>
      <button
        onClick={() => dispatch(incrementCount())}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Click me
      </button>

      <button
        onClick={() => dispatch(clearCount())}
        className="bg-blue-500 text-white mt-3 px-4 py-2 rounded-md"
      >
        Clear count
      </button>
    </div>
  );
}

export default Home;
