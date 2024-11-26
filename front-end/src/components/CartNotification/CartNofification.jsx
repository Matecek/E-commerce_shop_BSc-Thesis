import { useEffect } from "react";
import styles from "./CartNotification.module.css";

export function CartNotification({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000); // Animacja trwa 2 sekundy

        return () => clearTimeout(timer); // Wyczyść timer, jeśli komponent zostanie usunięty
    }, [message, onClose]);

    return (
        message && (
            <div className={styles.cartNotification}>
                <p>{message}</p>
            </div>
        )
    );
}
