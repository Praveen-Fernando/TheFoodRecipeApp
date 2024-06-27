import styles from "./foodApp.module.css";

export default function FoodApp() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img className={styles.logo} src="/mainlogo.svg" alt=""></img>
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.nav}>TheFoodRecipe</div>
      </div>
    </div>
  );
}
