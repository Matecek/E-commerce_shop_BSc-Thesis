import { BACK_END_URL } from "../const/api";

export function favoritesLoader() {
    return fetch(`${BACK_END_URL}/favorites?_expand=product`); //pobranie ulubionych
}
