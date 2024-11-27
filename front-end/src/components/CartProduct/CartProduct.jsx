import { useFetcher } from "react-router-dom";
import REMOVE_ICON from "../../assets/remove.svg";

import styles from "../CartProduct/CartProduct.module.css";
import { Price } from "../Price/Price";

export function CartProduct({ cartProduct }) {
    const product = cartProduct.product;
    const { Form } = useFetcher();

    const price = <Price product={product} />;
    return (
        <div className={styles.cartProduct}>
            <img src={product.photos[0]} />
            <div className={styles.cartProductInfo}>
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
                        action={`/delete-from-cart/${cartProduct.id}`}
                        method="DELETE"
                    >
                        <button>
                            <img src={REMOVE_ICON} />
                            Usuń z koszyka
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
