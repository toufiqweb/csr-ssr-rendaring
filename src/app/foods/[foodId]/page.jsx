import Image from "next/image";
import React from "react";

const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;
  console.log(foodId);

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const food = data.data;

  const{ dish_name , image_link ,price,rating, category,origin_and_popularity, approximate_nutrition_per_serving :{calories}} = food

  console.log(food);

  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-5xl text-center my-10">Food Details</h1>
      <div className="flex max-w-4xl mx-auto justify-center items-center bg-base-200 p-4">
        <div className="card w-full  bg-base-100 shadow-xl">
          {/* Food Image */}
          <figure>
            <Image
              src={image_link}
              alt={dish_name}
              width={350}
              height={350}
              className="object-cover"
            />
          </figure>

          {/* Content */}
          <div className="card-body">
            <h2 className="card-title">
              { dish_name}
              <div className="badge badge-secondary">{category}</div>
            </h2>

            <p className="text-sm text-gray-500">{origin_and_popularity}</p>

            {/* Info */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-bold text-primary">
                ${price}
              </span>
              <div className="badge badge-outline">⭐ {rating}</div>
            </div>

            {/* Extra Info */}
            <div className="mt-3 text-sm space-y-1">
              <p>
                <span className="font-semibold">Calories:</span> {calories}  
              </p>
              <p>
                <span className="font-semibold">Delivery Time:</span>
                {food.time}
              </p>
            </div>

            {/* Actions */}
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary">Order Now</button>
              <button className="btn btn-outline">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;
