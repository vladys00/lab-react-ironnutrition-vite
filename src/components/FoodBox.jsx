import './FoodBox.css'

function FoodBox(props) {
  return (
    <div className='food-box'>
      <h2>{props.food.name}</h2>

      <img src={props.food.image} />

      <p>Calories: {props.food.calories}</p>
      <p>Servings {props.food.servings}</p>

      <p>
        <b>Total Calories: {props.food.servings * props.food.calories} </b> kcal
      </p>

      <button onClick={()=> props.deleteFood(props.food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
