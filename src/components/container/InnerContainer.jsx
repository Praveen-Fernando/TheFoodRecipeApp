import styles from "./innerContainer.module.css";

export default function InnerContiner({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
