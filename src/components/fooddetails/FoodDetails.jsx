import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const URL = import.meta.env.VITE_APP_RECIPE_URL;
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [food, setFood] = useState("");
  const [isLoading, setIsLoding] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const recipe = await fetch(
        `${URL}/${foodId}/information?apiKey=${API_KEY}`
      );
      const data = await recipe.json();
      setFood(data);
      setIsLoding(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt=""></img>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲️{food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            <strong>👪 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🍅 Vegetarian" : " 🥩 Non-vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🍅 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          ${" "}
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h1>Instructions</h1>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step, foodId) => (
                <li key={foodId}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
