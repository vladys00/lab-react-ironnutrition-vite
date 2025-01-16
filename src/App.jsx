import foodsJson from "./foods.json";
import "./App.css";
import { useState } from "react";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFood] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const filteredArray = foods.filter((food) => food.id !== foodId)
    setFood(filteredArray)
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food) => (
        <FoodBox food={food} key={food.id} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;
