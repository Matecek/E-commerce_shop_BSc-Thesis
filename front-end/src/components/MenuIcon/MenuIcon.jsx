import style from "./MenuIcon.module.css";
import { Link } from "react-router-dom";

import BAG from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";

export function MenuIcon() {
    const cartList = 2;

    return (
        <ul className={style.menuIcon}>
            <li>
                <Link to="/ulubione">
                    <img src={HEART} />
                </Link>
            </li>
            <li>
                <Link to="/koszyk">
                    <img src={BAG} />
                    <div className={style.productsNumber}>{cartList}</div>
                </Link>
            </li>
        </ul>
    );
}
