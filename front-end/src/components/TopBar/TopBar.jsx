import style from "./TopBar.module.css";

export function TopBar({ children }) {
    return <div className={style.topBar}>{children}</div>;
}
