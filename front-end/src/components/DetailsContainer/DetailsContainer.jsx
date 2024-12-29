import styles from "./DetailsContainer.module.css";

export function DetailsContainer({ children }) {
    return <div className={styles.container}>{children}</div>;
}
