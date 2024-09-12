import { CartContainer } from "../../components/CartContainer/CartContainer";
import { CartProductList } from "../../components/CartProductList/CartProductList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { Layout } from "../../components/Layout/Layout";

export function Cart() {
    const cartProducts = [
        {
            id: 1,
            gender: "men",
            category: "odziez",
            subcategory: "koszulki",
            productName: "T-Shirt",
            brand: "Top Brand",
            pricePLN: 49,
            priceUSD: 10,
            priceEUR: 9,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
        },
        {
            id: 2,
            gender: "men",
            category: "odziez",
            subcategory: "koszulki",
            productName: "T-Shirt 2",
            brand: "Top Brand",
            pricePLN: 49,
            priceUSD: 10,
            priceEUR: 9,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
        },
    ];

    return (
        <Layout>
            <CartContainer>
                <CartProductList products={cartProducts} />
                <CartSummary products={cartProducts} />
            </CartContainer>
        </Layout>
    );
}
