import { BACK_END_URL } from "../const/api";

export function addProductToFavorites({ params: { productId } }) {
    return fetch(`${BACK_END_URL}/favorites`, {
        method: "POST",
        body: JSON.stringify({
            productId: Number(productId),
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
