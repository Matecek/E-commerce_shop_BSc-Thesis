import { Link, useFetcher } from "react-router-dom";
// import BAG_ICON from "../../assets/bag.svg";
import REMOVE_ICON from "../../assets/remove.svg";

import styles from "./FavoriteProduct.module.css";
import { Price } from "../Price/Price";
import { ENDPOINT_TO_PATH_MAPING_GENDER } from "../../const/api";

export function FavoriteProduct({ favorite }) {
    const product = favorite.product;
    const { Form } = useFetcher();

    const price = <Price product={product} />;
    return (
        <div className={styles.favoriteProduct}>
            <Link
                to={`/${ENDPOINT_TO_PATH_MAPING_GENDER[product.gender]}/${
                    product.category
                }/${product.subcategory}/${product.id}`}
            >
                <img src={product.photos[0]} />
            </Link>
            <div className={styles.favoriteProductInfo}>
                <div className={styles.top}>
                    <Link
                        to={`/${
                            ENDPOINT_TO_PATH_MAPING_GENDER[product.gender]
                        }/${product.category}/${product.subcategory}/${
                            product.id
                        }`}
                    >
                        <h3>
                            {product.brand} {product.productName}
                        </h3>
                    </Link>
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
                    {/* <Form action={`/add-to-cart/${product.id}`} method="POST">
                        <button>
                            <img src={BAG_ICON} />
                            Przenieś do koszyka
                        </button>
                    </Form> */}
                </div>
            </div>
        </div>
    );
}
