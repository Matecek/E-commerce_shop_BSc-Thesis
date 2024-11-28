import styles from "./FullWidthButton.module.css";

export function FullWidthButton({ children, onClick, disabled }) {
    return (
        <button
            className={styles.fullWidthButton}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
