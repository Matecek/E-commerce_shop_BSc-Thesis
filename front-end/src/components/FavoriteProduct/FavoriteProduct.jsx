import BAG_ICON from "../../assets/bag.svg";
import REMOVE_ICON from "../../assets/remove.svg";

import styles from "./FavoriteProduct.module.css";

export function FavoriteProduct({ product }) {
    return (
        <div className={styles.favoriteProduct}>
            <img src={product.photos[0]} />
            <div>
                <h3 className={styles.brand}>
                    {product.brand} {product.productName}
                </h3>
                <p>{product.pricePLN}zł</p>
            </div>
            <p className={styles.favoriteProductInfo}>
                <span>Cena: </span>
                {product.pricePLN}zł
            </p>
            <div>
                <button>
                    <img src={REMOVE_ICON} />
                    Usuń z ulubionych
                </button>
                <button>
                    <img src={BAG_ICON} />
                    Przenieś do koszyka
                </button>
            </div>
        </div>
    );
}
