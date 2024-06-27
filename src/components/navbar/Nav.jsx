import styles from "./nav.module.css";

export default function Nav({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
