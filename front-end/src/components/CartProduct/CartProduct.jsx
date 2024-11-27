import { useFetcher } from "react-router-dom";
import REMOVE_ICON from "../../assets/remove.svg";

import styles from "../CartProduct/CartProduct.module.css";
import { Price } from "../Price/Price";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { editQuantity } from "../../api/editQuantity";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCY, CURRENCY_SIGNS } from "../../const/currency";

export function CartProduct({ cartProduct }) {
    const product = cartProduct.product;
    const { Form } = useFetcher();
    const [quantity, setQuantity] = useState(cartProduct.quantity);
    const [, setQty] = useContext(CartContext);
    const [currency] = useContext(CurrencyContext);

    const price = <Price product={product} />;
    const priceToCount =
        currency === CURRENCY.PLN
            ? product.pricePLN
            : currency === CURRENCY.EUR
            ? product.priceEUR
            : product.priceUSD;
    const totalPrice = priceToCount * quantity;

    return (
        <div className={styles.cartProduct}>
            <img src={product.photos[0]} />
            <div className={styles.cartProductInfo}>
                <div className={styles.top}>
                    <h3>
                        {product.brand} {product.productName}
                    </h3>
                    <p>
                        {totalPrice} {CURRENCY_SIGNS[currency]}
                    </p>
                </div>
                <p className={styles.price}>
                    <span>Cena: </span>
                    {price}
                </p>
                <p className={styles.quantity}>
                    <span>Ilość: </span>
                    <Form
                        method="PATCH"
                        action="edit-item-quantity"
                        onChange={(e) => {
                            setQuantity(
                                (cartProduct.quantity = Number(e.target.value))
                            );
                            editQuantity(cartProduct, e.target.value);
                            console.log(quantity);
                            setQty((prev) => !prev);
                        }}
                    >
                        <input
                            type="number"
                            className={styles.quantityNumber}
                            onChange={(e) => {
                                setQuantity(e.target.value);
                            }}
                            value={quantity}
                            min={1}
                        />
                    </Form>
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
