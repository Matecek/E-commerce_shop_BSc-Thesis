import { useContext } from "react";
import { CartProductList } from "../../components/CartProductList/CartProductList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
    const [cartProducts] = useContext(CartContext);

    return (
        <FlexContainer>
            <CartProductList products={cartProducts} />
            <CartSummary products={cartProducts} />
        </FlexContainer>
    );
}
