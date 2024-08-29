import style from "./CenterContent.module.css";

export function CenterContent({ children }) {
    return <div className={style.wrapper}>{children}</div>;
}
