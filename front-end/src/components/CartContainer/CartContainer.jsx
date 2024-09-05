import styles from "./CartContainer.module.css";

export function CartContainer({ childern }) {
    return <div className={styles.cartContainer}>{childern}</div>;
}
