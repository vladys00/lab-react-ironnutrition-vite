import foodsJson from "./foods.json";
import "./App.css";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodFrom from "./components/AddFoodForm";

function App() {
  const [foods, setFood] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const filteredArray = foods.filter((food) => food.id !== foodId)
    setFood(filteredArray)
  };

  const addNewFood = (newFood) => {
    setFood([...foods, newFood])
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodFrom addNewFood={addNewFood}/>
      {foods.map((food) => (
        <FoodBox food={food} key={food.id} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;
