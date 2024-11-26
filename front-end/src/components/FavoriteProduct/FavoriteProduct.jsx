import { useFetcher } from "react-router-dom";
import BAG_ICON from "../../assets/bag.svg";
import REMOVE_ICON from "../../assets/remove.svg";
import { Price } from "../Price/Price";

import styles from "./FavoriteProduct.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function FavoriteProduct({ favorite }) {
    const product = favorite.product;
    const { Form } = useFetcher();

    const price = <Price product={product} />;

    const [, addProductToCart] = useContext(CartContext);

    return (
        <div className={styles.favoriteProduct}>
            <img src={product.photos[0]} />
            <div className={styles.favoriteProductInfo}>
                <div className={styles.top}>
                    <h3>
                        {product.brand} {product.productName}
                    </h3>
                    <p>{price}</p>
                </div>
                <p className={styles.price}>
                    <span>Cena: </span>
                    {price}
                </p>
                <div className={styles.button}>
                    <Form
                        action={`/delete-from-favorites/${favorite.id}`}
                        method="DELETE"
                    >
                        <button>
                            <img src={REMOVE_ICON} />
                            Usuń z ulubionych
                        </button>
                    </Form>
                    <button
                        onClick={() => {
                            addProductToCart(product);
                        }}
                    >
                        <img src={BAG_ICON} />
                        Przenieś do koszyka
                    </button>
                </div>
            </div>
        </div>
    );
}
