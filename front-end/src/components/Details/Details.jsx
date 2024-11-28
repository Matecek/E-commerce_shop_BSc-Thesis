import { useContext, useState } from "react";
import { useFetcher } from "react-router-dom";
import CAR from "../../assets/car.svg";
import RETURN from "../../assets/return.svg";
import { Accordion } from "../Accordion/Accordion";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { SizeSelector } from "../SizeSelector/SizeSelector";

import styles from "./Details.module.css";
import { CartContext } from "../../contexts/CartContext"; // Importowanie kontekstu koszyka

export function Details({ product }) {
    const { Form } = useFetcher();
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const { cartItems, addToCart } = useContext(CartContext); // Używamy CartContext
    const sizeArray = ["S", "M", "L", "XL"];
    const accordionContent = [
        { title: "Opis", content: product.description },
        { title: "Pielęgnacja", content: product.care },
    ];

    // Funkcja do dodawania produktu do koszyka, zaktualizowana z kontekstem
    const handleAddToCart = () => {
        if (selectedSize !== null) {
            const existingItem = cartItems.find(
                (cartItem) =>
                    cartItem.productId === product.id &&
                    cartItem.size === sizeArray[selectedSize]
            );

            if (existingItem) {
                // Jeśli produkt jest już w koszyku, zwiększamy jego ilość
                existingItem.quantity += quantity;
            } else {
                // Jeśli produktu nie ma w koszyku, dodajemy go
                addToCart({
                    productId: product.id,
                    productName: product.productName,
                    price: product.pricePLN,
                    size: sizeArray[selectedSize],
                    quantity: quantity,
                    brand: product.brand,
                });
            }

            // Zresetowanie wybranego rozmiaru i ilości po dodaniu do koszyka
            setSelectedSize(null);
            setQuantity(1);
        }
    };

    return (
        <div className={styles.details}>
            <h2>{product.brand}</h2>
            <p className={styles.productName}>{product.productName}</p>
            <p className={styles.price}>{product.pricePLN}zł</p>

            <SizeSelector
                sizeArray={sizeArray}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
            />

            <Form
                method="POST"
                action={
                    selectedSize !== null
                        ? `/add-to-cart/${product.id}/${sizeArray[selectedSize]}/${quantity}`
                        : ""
                }
                onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(); // Zmieniamy nazwę funkcji
                }}
            >
                <FullWidthButton
                    disabled={selectedSize === null}
                    isBlack={true}
                >
                    Dodaj do koszyka
                </FullWidthButton>
            </Form>

            <ul className={styles.extraInfo}>
                <li>
                    <img src={CAR} />
                    Dostawa do 24H
                </li>
                <li>
                    <img src={RETURN} />
                    Zwrot do 100 dni!
                </li>
            </ul>
            <Accordion items={accordionContent} />
        </div>
    );
}
