import style from "./TopBar.module.css";

export function TopBar({ children }) {
    //komponent TopBar
    return <div className={style.topBar}>{children}</div>;
}
