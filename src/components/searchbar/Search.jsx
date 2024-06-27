import { useEffect, useState } from "react";
import styles from "./search.module.css";

//https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=78d3c03a6ca141a49e3cbd3a90dbc9cd

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  const url = import.meta.env.VITE_APP_URL;
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  //Syntex of the useEffect hook
  // useEffect(() => {}(callback function), [](Dependancy list))
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <div className={styles.searchContainer}>
        <input
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
      </div>
    </div>
  );
}
