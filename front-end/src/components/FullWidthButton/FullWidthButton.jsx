import style from "./FullWidthButton.module.css";

export function FullWidthButton({ children, onClick }) {
    return (
        <button className={style.fullWidthButton} onClick={onClick}>
            {children}
        </button>
    );
}
