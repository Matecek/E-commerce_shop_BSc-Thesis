import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../const/api";
import { CATEGORIES } from "../const/categories";

export function productListLoader({
    params: { gender, category, subcategory },
    request,
}) {
    const pageUrl = new URL(request.url);
    const page = pageUrl.searchParams.get("page");
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

        url = `${url}&_limit=4&_page=${page}`;
        return fetch(url).then((response) => {
            const numberOfPages = Math.ceil(
                Number(response.headers.get("X-Total-Count")) / 4
            );

            return response.json().then((products) => {
                return {
                    products,
                    numberOfPages,
                };
            });
        });
    } else {
        return redirect("/");
    }
}
