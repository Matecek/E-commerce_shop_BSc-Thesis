import { CenterContent } from "../CenterContent/CenterContent";
import { CartProduct } from "../CartProduct/CartProduct";

import styles from "../CartProductList/CartProductList.module.css";

export function CartProductList({ cartProducts }) {
    return (
        <CenterContent>
            <div className={styles.cartList}>
                <h2>Koszyk</h2>
                <div>
                    {cartProducts.map((cartProduct) => {
                        return (
                            <CartProduct
                                key={cartProduct.id}
                                cartProduct={cartProduct}
                            />
                        );
                    })}
                </div>
            </div>
        </CenterContent>
    );
}
