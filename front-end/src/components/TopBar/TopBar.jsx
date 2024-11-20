import styles from "./TopBar.module.css";

export function TopBar({ children }) {
    //komponent TopBar
    return <div className={styles.topBar}>{children}</div>;
}
