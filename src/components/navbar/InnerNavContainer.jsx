import styles from "./innerNavContainer.module.css";

export default function NavContainer({ children }) {
  return <div className={styles.navContainer}>{children}</div>;
}
