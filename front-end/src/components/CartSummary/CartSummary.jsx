import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR from "../../assets/car.svg";
import RETURN from "../../assets/return.svg";
import TIME from "../../assets/time.svg";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";

import styles from "./CartSummary.module.css";
import { CURRENCY, CURRENCY_SIGNS } from "../../const/currency";

export function CartSummary({ cartProducts }) {
    const [currency] = useContext(CurrencyContext);

    const deliveryCosts = {
        [CURRENCY.PLN]: 19,
        [CURRENCY.EUR]: 4,
        [CURRENCY.USD]: 5,
    };

    const minSumsForFreeDelivery = {
        [CURRENCY.PLN]: 300,
        [CURRENCY.EUR]: 70,
        [CURRENCY.USD]: 80,
    };

    const deliveryCost = deliveryCosts[currency];
    const minSumForFreeDelivery = minSumsForFreeDelivery[currency];

    const currencySigns = CURRENCY_SIGNS[currency];

    let sum = 0;
    cartProducts.forEach((product) => {
        let price =
            currency === CURRENCY.PLN
                ? product.product.pricePLN
                : currency === CURRENCY.EUR
                ? product.product.priceEUR
                : product.product.priceUSD;
        sum += price * product.quantity;
    });

    const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

    return (
        <div className={styles.cartSummary}>
            <h2>Podsumowanie</h2>
            <div className={styles.cartRow}>
                <p>Wartość produktów</p>
                <p>
                    {sum} {currencySigns}
                </p>
            </div>
            <div className={styles.cartRow}>
                <p>Rabat</p>
                <p>0 {currencySigns}</p>
            </div>
            <div className={styles.cartRow}>
                <p>Koszt dostawy</p>
                <p>
                    {sum > minSumForFreeDelivery ? 0 : deliveryCost}{" "}
                    {currencySigns}
                </p>
            </div>
            <div className={styles.cartRow}>
                <p>Koszt płatności</p>
                <p>0 {currencySigns}</p>
            </div>
            <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
                <p>Kwota do zapłaty</p>
                <p>
                    {totalCost} {currencySigns}
                </p>
            </div>
            <FullWidthButton disabled={totalCost < 20}>Dalej</FullWidthButton>
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
                    <p>
                        Darmowa dostawa od {minSumForFreeDelivery}{" "}
                        {currencySigns}
                    </p>
                    <p>30 dni na wymianę lub zwrot</p>
                </div>
            </div>
        </div>
    );
}
