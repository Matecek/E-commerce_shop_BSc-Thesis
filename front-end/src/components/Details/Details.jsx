import CAR from "../../assets/car.svg";
import RETURN from "../../assets/return.svg";
import { Accortion } from "../Accordion/Accordion";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

import styles from "./Details.module.css";

export function Details({ product }) {
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

    return (
        <div className={styles.details}>
            <h2>{product.brand}</h2>
            <p className={styles.productName}>{product.productName}</p>
            <p className={styles.price}>{product.pricePLN}zł</p>

            <FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>

            <ul className={styles.extraInfo}>
                <li>
                    <img src={CAR} />
                    Dostawa do 24H
                </li>
                <li>
                    <img src={RETURN} />
                    Zwrot do 100dni!
                </li>
            </ul>
            <Accortion items={accordionContent} />
        </div>
    );
}
