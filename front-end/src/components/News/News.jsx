import { CenterContent } from "../CenterContent/CenterContent";
import { Product } from "../Product/Product";

export function News({ products }) {
    return (
        <CenterContent>
            <h2>Sprawdz nasze nowości</h2>
            <div>
                {products.map((product) => {
                    return <Product key={product.id} product={product} />;
                })}
            </div>
        </CenterContent>
    );
}
