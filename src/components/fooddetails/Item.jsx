import styles from "./item.module.css";

export default function Item({ item, foodId }) {
  const itemName = item.name;

  function itemNametoCamelCase(itemName) {
    return itemName
      .split(" ")
      .map((word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  }

  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt=""
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{itemNametoCamelCase(itemName)}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
