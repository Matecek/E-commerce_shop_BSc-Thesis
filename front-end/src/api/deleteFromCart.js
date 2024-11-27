import { BACK_END_URL } from "../const/api";

export function deleteFromCart({ params }) {
    return fetch(`${BACK_END_URL}/cart/${params.productId}`, {
        method: "DELETE",
    });
}
