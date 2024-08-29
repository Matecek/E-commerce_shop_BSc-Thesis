import style from "./Logo.module.css";
import { Link } from "react-router-dom";
import LOGO from "../../assets/Logo.png";

export function Logo() {
    return (
        <Link to="/">
            <img className={style.logo} src={LOGO} />
        </Link>
    );
}
