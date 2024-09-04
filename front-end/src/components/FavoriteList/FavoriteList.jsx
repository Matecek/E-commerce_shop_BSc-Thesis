import { FavoriteProduct } from "../FavoriteProduct/FavoriteProduct";
import { CenterContent } from "../CenterContent/CenterContent";

import styles from "./FavoriteList.module.css";

export function FavoriteList({ products }) {
    return (
        <CenterContent>
            <div className={styles.favoriteList}>
                <h2>Ulubione</h2>
                <div>
                    {products.map((product) => {
                        return (
                            <FavoriteProduct
                                key={product.id}
                                product={product}
                            />
                        );
                    })}
                </div>
            </div>
        </CenterContent>
    );
}
