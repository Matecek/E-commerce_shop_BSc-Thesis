import REMOVE_ICON from "../../assets/remove.svg";

import styles from "../CartProduct/CartProduct.module.css";

export function CartProduct({ product }) {
    return (
        <div className={styles.CartProduct}>
            <img src={product.photos[0]} />
            <div className={styles.CartProductInfo}>
                <div className={styles.brand}>
                    <h3>
                        {product.brand} {product.productName}
                    </h3>
                    <p>{product.pricePLN}zł</p>
                </div>
                <p className={styles.price}>
                    <span>Cena: </span>
                    {product.pricePLN}zł
                </p>
                <div className={styles.button}>
                    <button>
                        <img src={REMOVE_ICON} />
                        Usuń z koszyka
                    </button>
                </div>
            </div>
        </div>
    );
}
