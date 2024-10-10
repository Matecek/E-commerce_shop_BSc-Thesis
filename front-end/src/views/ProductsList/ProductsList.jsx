import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES } from "../../const/categories";

export function ProductsList() {
    const products = useLoaderData();
    const params = useParams();

    const foundCategory = CATEGORIES.find(
        (category) => category.path === params.category
    );

    let foundSubcategory;

    if (params.subcategory) {
        foundSubcategory = foundCategory.subCategory.find(
            (subcategory) => subcategory.path === params.subcategory
        );
    }

    return (
        <FlexContainer>
            <ExpandableMenu />
            <div>
                <Breadcrumbs />
                <Products
                    headerText={
                        foundSubcategory
                            ? foundSubcategory.categoryName
                            : foundCategory.categoryName
                    }
                    products={products}
                />
                <Pagination numberOfPages={5} />
            </div>
        </FlexContainer>
    );
}
