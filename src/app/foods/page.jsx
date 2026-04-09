
import Food from "@/components/Food";
import React from "react";

const FoodsPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data
  console.log(foods);

  return (
    <div className="container mx-auto py-10 ">
      <h1 className="text-6xl text-center font-bold ">ALL FOODS</h1>

      <div className="grid grid-cols-3 gap-15 my-10 ">
        {
            foods.map(food => <Food key={ food.id} food={food}/>)
        }
      </div>
    </div>
  );
};

export default FoodsPage;
