import { CenterContent } from "../CenterContent/CenterContent";
import { CartProduct } from "../CartProduct/CartProduct";

import styles from "../CartProductList/CartProductList.module.css";

export function CartProductList({ products }) {
    return (
        <CenterContent>
            <div className={styles.cartList}>
                <h2>Koszyk</h2>
                <div>
                    {products.map((product) => {
                        return (
                            <CartProduct key={product.id} product={product} />
                        );
                    })}
                </div>
            </div>
        </CenterContent>
    );
}
