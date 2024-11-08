import { BACK_END_URL } from "../const/api";

export function productLoader({ params: { productId } }) {
    return fetch(`${BACK_END_URL}/products/${productId}`); //Pobranie danych produktu z API
}
