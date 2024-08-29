import style from "./Content.module.css";

export function Content({ children }) {
    return <div className={style.content}>{children}</div>;
}
