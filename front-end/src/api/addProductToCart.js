import { BACK_END_URL } from "../const/api";

export function addProductToCart({
    params: { productId, size, quantity = "0" },
}) {
    return fetch(`${BACK_END_URL}/cart`, {
        method: "POST",
        body: JSON.stringify({
            productId: Number(productId),
            size: size,
            quantity: Number(quantity),
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
