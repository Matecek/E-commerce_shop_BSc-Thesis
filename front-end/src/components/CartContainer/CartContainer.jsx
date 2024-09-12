import styles from "./CartContainer.module.css";

export function CartContainer({ children }) {
    return <div className={styles.cartContainer}>{children}</div>;
}
