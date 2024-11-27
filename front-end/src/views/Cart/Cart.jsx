import { useLoaderData } from "react-router-dom";
import { CartProductList } from "../../components/CartProductList/CartProductList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CartContext } from "../../contexts/CartContext";
import { useState } from "react";

export function Cart() {
    const cartProducts = useLoaderData();
    const [qty, setQty] = useState(false);

    return (
        <CartContext.Provider value={[qty, setQty]}>
            <FlexContainer>
                <CartProductList cartProducts={cartProducts} />
                <CartSummary cartProducts={cartProducts} />
            </FlexContainer>
        </CartContext.Provider>
    );
}
