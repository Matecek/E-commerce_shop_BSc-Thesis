import { CenterContent } from "../CenterContent/CenterContent";
import { Product } from "../Product/Product";

import styles from "./News.module.css";

export function News({ products }) {
    return (
        <CenterContent>
            <h2 className={styles.newsHeader}>Sprawdź nasze nowości</h2>
            <div className={styles.productsWrapper}>
                {products.map((product) => {
                    return <Product key={product.id} product={product} />;
                })}
            </div>
        </CenterContent>
    );
}
