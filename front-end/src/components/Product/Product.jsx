import { Link, useFetcher } from "react-router-dom";

import styles from "./Product.module.css";
import { Price } from "../Price/Price";

const ENDPOINT_TO_PATH_MAPPING = {
    //Mapowanie endpointów na ścieżki
    men: "mezczyzni",
    women: "kobiety",
    Children: "dzieci",
};

export function Product({ product }) {
    const { Form } = useFetcher(); //Użycie hooka useFetcher

    return (
        <Link
            to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${
                product.category
            }/${product.subcategory}/${product.id}`}
            className={styles.product}
        >
            <img src={product.photos[0]} />

            <h3>{product.productName}</h3>
            <p>
                <Price product={product} />
            </p>
            <Form //Formularz do dodawania produktu do ulubionych
                onClick={(e) => {
                    e.stopPropagation(); //Zatrzymanie propagacji
                }}
                method="POST"
                action={`/add-to-favorites/${product.id}`}
            >
                <button>
                    <div className={styles.heart}></div>
                </button>
            </Form>
        </Link>
    );
}
