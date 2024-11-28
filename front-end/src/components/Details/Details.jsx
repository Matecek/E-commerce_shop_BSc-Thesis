import { useFetcher } from "react-router-dom";
import CAR from "../../assets/car.svg";
import RETURN from "../../assets/return.svg";
import { Accordion } from "../Accordion/Accordion";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { SizeSelector } from "../SizeSelector/SizeSelector";

import styles from "./Details.module.css";
import { useState } from "react";

import { editQuantity } from "../../api/editQuantity";

export function Details({ product, currentCart }) {
    //Komponent wyświetlający szczegóły produktu

    const { Form } = useFetcher(); //Użycie hooka useFetcher
    const [quantity, setQuantity] = useState(1);
    const sizeArray = ["S", "M", "L", "XL"];
    const [selectedSize, setSelectedSize] = useState(null);

    const accordionContent = [
        { title: "Opis", content: product.description },
        { title: "Pielęgnacja", content: product.care },
    ];

    const handleAddToCart = (id, size) => {
        currentCart.map((cartItem) => {
            if (cartItem.productId === id && cartItem.size === size) {
                setSelectedSize(null);
                setQuantity((cartItem.quantity = 1));
                editQuantity(cartItem, quantity);
            }
        });
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
                onClick={() => {
                    handleAddToCart(product.id, sizeArray[selectedSize]);
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
