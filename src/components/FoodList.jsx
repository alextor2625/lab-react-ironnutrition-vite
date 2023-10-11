import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

const FoodList = () => {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    const updatedFood = [newFood, ...foods];
    setFoods(updatedFood);
  };

  const filter = (food) => {
    
  }

  const deleteFood = (id) => {
    let deleted = foods.filter((food) => food.id !== id);

    console.log(
      "Deleted",
      deleted,
      "\nID",
      id,
      "\nRemainingLength",
      deleted.length,
      "\nTotalFoods",
      foods.length
    );

    setFoods(deleted);
  };

  return (
    <div>
      <Search />

      <AddFoodForm addFood={addFood} />
      {foods.map((food) => {
        return (
          <div>
            <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
          </div>
        );
      })}
    </div>
  );
};

export default FoodList;
