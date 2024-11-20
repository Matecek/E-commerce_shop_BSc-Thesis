import { CURRENCY } from "../../const/currency";
import styles from "./SelectCurrency.module.css";

export function SelectCurrency() {
    return (
        <select className={styles.selectCurrency}>
            <option value={CURRENCY.PLN}>{CURRENCY.PLN}</option>
            <option value={CURRENCY.EUR}>{CURRENCY.EUR}</option>
            <option value={CURRENCY.USD}>{CURRENCY.USD}</option>
        </select>
    );
}
