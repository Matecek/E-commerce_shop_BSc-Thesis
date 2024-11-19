import { BACK_END_URL } from "../const/api";

export function addProductToFavorites({ params: { productId } }) {
    return fetch(`${BACK_END_URL}/favorites`, {
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
