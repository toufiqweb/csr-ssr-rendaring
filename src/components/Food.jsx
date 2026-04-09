import React from "react";

const Food = ({ food }) => {
  console.log(food);
  const {dish_name , category} = food

  return (
    <div className="card bg-success text-black ">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{dish_name}</h2>
        <p>{category}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error">Show details</button>
          
        </div>
      </div>
    </div>
  );
};

export default Food;
