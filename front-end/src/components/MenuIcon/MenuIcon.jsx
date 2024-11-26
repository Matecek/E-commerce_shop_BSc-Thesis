import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext"; // Importuj CartContext

import BAG from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";

import styles from "./MenuIcon.module.css";

export function MenuIcon() {
    const [cart] = useContext(CartContext); // Pobierz stan koszyka z contextu

    // Liczba produktów w koszyku
    const cartList = cart.length;

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
                    {cartList > 0 && (
                        <div className={styles.productsNumber}>{cartList}</div>
                    )}
                </Link>
            </li>
        </ul>
    );
}
