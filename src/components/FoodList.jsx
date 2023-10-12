import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import {Row} from 'antd'

const FoodList = () => {
  const [foods, setFoods] = useState(foodsJson);
  const [searchTerm, setSearchTerm] = useState("");

  const addFood = (newFood) => {
    const updatedFood = [newFood, ...foods];
    setFoods(updatedFood);
  };

  const setSearch = (str) => {
    setSearchTerm(str);
  };

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

  let filtered = searchTerm ? foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase())) : foods


  return (
    <div>
      <Search setSearch={setSearch} />

      <AddFoodForm addFood={addFood} />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {filtered.map((food) => {
          return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
        })}
      </Row>
    </div>
  );
};

export default FoodList;
