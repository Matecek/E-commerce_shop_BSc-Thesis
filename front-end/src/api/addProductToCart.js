import { BACK_END_URL } from "../const/api";

export function addProductToCart({ params: { productId, quantity = "1" } }) {
    return fetch(`${BACK_END_URL}/cart`, {
        //Zapytanie do serwera o dodanie produktu do ulubionych
        method: "POST",
        body: JSON.stringify({
            //Przekazanie danych w formacie JSON
            productId: Number(productId),
            quantity: Number(quantity),
        }),
        headers: {
            "Content-Type": "application/json", //Ustalenie typu przesyłanych danych
        },
    });
}
