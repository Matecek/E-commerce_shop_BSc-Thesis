import { CURRENCY } from "../../const/currency";
import Styles from "./SelectCurrency.module.css";

export function SelectCurrency() {
    return (
        <select className={Styles.selectCurrency}>
            <option value={CURRENCY.PLN}>{CURRENCY.PLN}</option>
            <option value={CURRENCY.EUR}>{CURRENCY.EUR}</option>
            <option value={CURRENCY.USD}>{CURRENCY.USD}</option>
        </select>
    );
}
