import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR from "../../assets/car.svg";
import RETURN from "../../assets/return.svg";
import TIME from "../../assets/time.svg";

import styles from "./CartSummary.module.css";

export function CartSummary({ products }) {
    const deliveryCost = 19;
    const minSumForFreeDelivery = 300;

    let sum = 0;
    products.forEach((product) => {
        sum += product.pricePLN;
    });

    const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

    return (
        <div className={styles.cartSummary}>
            <h2>Podsumowanie</h2>
            <div className={styles.cartRow}>
                <p>Wartość produktów</p>
                <p>{sum} zł</p>
            </div>
            <div className={styles.cartRow}>
                <p>Rabat</p>
                <p>0 zł</p>
            </div>
            <div className={styles.cartRow}>
                <p>Koszt dostawy</p>
                <p>{sum > minSumForFreeDelivery ? 0 : deliveryCost} zł</p>
            </div>
            <div className={styles.cartRow}>
                <p>Koszt płatności</p>
                <p>0 zł</p>
            </div>
            <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
                <p>Kwota do zapłaty</p>
                <p>{totalCost} zł</p>
            </div>
            <FullWidthButton>Dalej</FullWidthButton>
            <div className={styles.deliveryInfo}>
                <div className={styles.deliveryInfoImg}>
                    <img src={TIME} />
                    <img src={CAR} />
                    <img src={RETURN} />
                </div>
                <div className={styles.deliveryInfoP}>
                    <p>
                        Dostawa w ciągu <b>2 - 5 dni roboczych</b>
                    </p>
                    <p>Darmowa dostawa od {minSumForFreeDelivery} zł</p>
                    <p>30 dni na wymianę lub zwrot</p>
                </div>
            </div>
        </div>
    );
}
