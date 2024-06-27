import styles from "./fooditem.module.css";

export default function Fooditem({ food, setFoodID }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt=""></img>
      <div className={styles.itemContext}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => setFoodID(food.id)}
        >
          View Resipe
        </button>
      </div>
    </div>
  );
}
