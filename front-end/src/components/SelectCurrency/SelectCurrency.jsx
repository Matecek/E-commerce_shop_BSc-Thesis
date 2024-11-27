import { CURRENCY } from "../../const/currency";
import styles from "./SelectCurrency.module.css";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";

export function SelectCurrency() {
    const [currency, setCurrency] = useContext(CurrencyContext); //Użycie hooka useContext

    return (
        <select
            value={currency}
            onChange={(e) => {
                setCurrency(e.currentTarget.value);
                localStorage["currency"] = e.currentTarget.value;
            }}
            className={styles.selectCurrency}
        >
            <option value={CURRENCY.PLN}>{CURRENCY.PLN}</option>
            <option value={CURRENCY.EUR}>{CURRENCY.EUR}</option>
            <option value={CURRENCY.USD}>{CURRENCY.USD}</option>
        </select>
    );
}
