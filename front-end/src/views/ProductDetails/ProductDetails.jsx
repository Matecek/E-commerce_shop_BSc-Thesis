import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Photos } from "../../components/Photos/Photos";
import { Details } from "../../components/Details/Details";
import { useLoaderData } from "react-router-dom";

export function ProductDetails() {
    const product = useLoaderData(); //Pobranie danych produktu z hooka useLoaderData
    const singleProduct = product[0];
    const currentCart = product[1];

    return (
        <FlexContainer>
            <ExpandableMenu />
            <div style={{ width: "100%" }}>
                <Breadcrumbs />
                <FlexContainer>
                    <Photos product={singleProduct} />
                    <Details
                        currentCart={currentCart}
                        product={singleProduct}
                    />
                </FlexContainer>
            </div>
        </FlexContainer>
    );
}
