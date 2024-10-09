import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../const/api";
import { CATEGORIES } from "../const/categories";

export function productListLoader({ params: { gender, category } }) {
    const foundCategory = CATEGORIES.find(
        (element) => element.path === category
    );
    const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

    if (foundCategory && foundGender) {
        return fetch(
            `${BACK_END_URL}/products/?gender=${foundGender}&category=${category}`
        );
    } else {
        return redirect("/");
    }
}
