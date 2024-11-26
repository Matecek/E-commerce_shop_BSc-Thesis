import { useContext } from "react";
import { CartProductList } from "../../components/CartProductList/CartProductList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
    const [cartItems] = useContext(CartContext);

    return (
        <FlexContainer>
            <CartProductList products={cartItems} />
            <CartSummary products={cartItems} />
        </FlexContainer>
    );
}
