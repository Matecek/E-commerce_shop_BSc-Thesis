import { Link } from "react-router-dom";

import BAG from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";

import styles from "./MenuIcon.module.css";

export function MenuIcon() {
    const cartList = 2;

    return (
        <ul className={styles.menuIcon}>
            <li>
                <Link to="/ulubione">
                    <img src={HEART} />
                </Link>
            </li>
            <li>
                <Link to="/koszyk">
                    <img src={BAG} />
                    <div className={styles.productsNumber}>{cartList}</div>
                </Link>
            </li>
        </ul>
    );
}
