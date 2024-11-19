import { BACK_END_URL } from "../const/api";

export function deleteFavoriteProduct({ params }) {
    return fetch(`${BACK_END_URL}/favorites/${params.favoriteId}`, {
        method: "DELETE",
    });
}
