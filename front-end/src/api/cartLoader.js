import { BACK_END_URL } from "../const/api";

export function cartLoader() {
    return fetch(`${BACK_END_URL}/cart?_expand=product`); //Zapytanie do serwera o pobranie koszyka
}
