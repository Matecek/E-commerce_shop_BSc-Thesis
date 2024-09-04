import { FavoriteProduct } from "../FavoriteProduct/FavoriteProduct";
import { CenterContent } from "../CenterContent/CenterContent";

export function FavoriteList({ products }) {
    return (
        <CenterContent>
            <h2>Ulubione</h2>
            <div>
                {products.map((product) => {
                    return (
                        <FavoriteProduct key={product.id} product={product} />
                    );
                })}
            </div>
        </CenterContent>
    );
}
