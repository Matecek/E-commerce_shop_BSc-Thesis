import { useFetcher } from "react-router-dom";
import CAR from "../../assets/car.svg";
import RETURN from "../../assets/return.svg";
import { Accordion } from "../Accordion/Accordion";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

import styles from "./Details.module.css";
import { useState } from "react";

export function Details({ product, currentCart }) {
    //Komponent wyświetlający szczegóły produktu

    const { Form } = useFetcher(); //Użycie hooka useFetcher
    const [quantity, setQuantity] = useState(1);

    const accordionContent = [
        {
            title: "Opis",
            content: product.description,
        },
        {
            title: "Pielęgnacja",
            content: product.care,
        },
    ];

    const checkACart = (id) => {
        currentCart.map((cartItem) => {
            if (cartItem.productId === id) {
                setQuantity((cartItem.quantity = cartItem.quantity + 1));
            }
        });
    };

    return (
        <div className={styles.details}>
            <h2>{product.brand}</h2>
            <p className={styles.productName}>{product.productName}</p>
            <p className={styles.price}>{product.pricePLN}zł</p>
            <Form //Formularz do dodawania produktu do ulubionych
                method="POST"
                action={`/add-to-cart/${product.id}/${quantity}`}
                onClick={(e) => {
                    e.stopPropagation(); //Zatrzymanie propagacji
                    checkACart(product.id);
                }}
            >
                <FullWidthButton isBlack={true}>
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
