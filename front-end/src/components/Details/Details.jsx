import CAR from "../../assets/car.jpg";
import RETURN from "../../assets/return.jpg";

export function Details({ product }) {
    return (
        <div>
            <h2>{product.brand}</h2>
            <p>{product.productName}</p>
            <p>{product.pricePLN}</p>
        </div>
    );
}
