import { BACK_END_URL } from "../const/api";

export function addProductToCart({ params: { productId } }) {
    return fetch(`${BACK_END_URL}/cart`, {
        //Zapytanie do serwera o dodanie produktu do ulubionych
        method: "POST",
        body: JSON.stringify({
            //Przekazanie danych w formacie JSON
            productId: Number(productId),
        }),
        headers: {
            "Content-Type": "application/json", //Ustalenie typu przesyłanych danych
        },
    });
}
