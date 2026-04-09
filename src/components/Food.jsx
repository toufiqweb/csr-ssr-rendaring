import Image from "next/image";
import Link from "next/link";
import React from "react";

const Food = ({ food }) => {
  console.log(food);
  const { id , dish_name, rating, price, image_link, cuisine } = food;

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <Image
          src={image_link}
          alt={dish_name}
          width={250}
          height={250}
          className="py-5"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{cuisine}</p>
        <div className="flex justify-between items-center py-5">
          <p className="text-xl font-bold ">Price : ${price}</p>{" "}
          <p className="font-bold text-right text-lg">Rating : {rating}</p>{" "}
        </div>
        <div className="card-actions justify-center gap-2">
          <button className="btn btn-secondary">Add to cart</button>
          <Link href={`/foods/${id}`}>
         
            <button className="btn btn-accent">Show details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
