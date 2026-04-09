"use client"
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  
  return (
    <div className="">
      <h3 className="text-black text-3xl font-bold mt-10 text-center">
        Count :  {count}
      </h3>

      <div className="flex justify-center items-center mt-5">
        <button
          onClick={() => setCount(count + 1)}
          className="text-black bg-cyan-400 p-4 rounded-2xl"
        >
          Increase Count
        </button>
      </div>
    </div>
  );
};

export default Count;
