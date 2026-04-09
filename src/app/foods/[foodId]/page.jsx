import React from 'react';

const FoodDetailsPage = async ({params}) => {

    const {foodId} = await params 
    console.log(foodId);

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
    const data = await res.json()
    const food = data.data

    console.log(food);
    

    return (
        <div>
            <h1>Food Details is here {food.dish_name}</h1>
        </div>
    );
};

export default FoodDetailsPage;