import { FavoriteProduct } from "../FavoriteProduct/FavoriteProduct";
import { CenterContent } from "../CenterContent/CenterContent";

import styles from "./FavoriteList.module.css";

export function FavoriteList({ favorites }) {
    return (
        <CenterContent>
            <div className={styles.favoriteList}>
                <h2>Ulubione</h2>
                <div>
                    {favorites.map((favorite) => {
                        return (
                            <FavoriteProduct
                                key={favorite.id}
                                favorite={favorite}
                            />
                        );
                    })}
                </div>
            </div>
        </CenterContent>
    );
}
