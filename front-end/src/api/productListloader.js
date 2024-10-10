import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../const/api";
import { CATEGORIES } from "../const/categories";

export function productListLoader({
    params: { gender, category, subcategory },
}) {
    const foundCategory = CATEGORIES.find(
        (element) => element.path === category
    );
    const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

    if (foundCategory && foundGender) {
        let url = `${BACK_END_URL}/products/?gender=${foundGender}&category=${category}`;

        if (subcategory) {
            const foundSubcategory = foundCategory.subCategory.find(
                (element) => element.path === subcategory
            );
            if (foundSubcategory) {
                url = `${url}&subcategory=${subcategory}`;
            } else {
                return redirect("/404");
            }
        }
        return fetch(url);
    } else {
        return redirect("/");
    }
}
