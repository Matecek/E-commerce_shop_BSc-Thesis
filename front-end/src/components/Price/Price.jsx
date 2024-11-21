import { useContext } from "react";
import { CURRENCY, CURRENCY_SIGNS } from "../../const/currency";
import { CurrencyContext } from "../../contexts/CurrencyContect";

export function Price({ product }) {
    const [currency] = useContext(CurrencyContext);
    return (
        <p>
            {currency === CURRENCY.PLN
                ? product.pricePLN
                : currency === CURRENCY.EUR
                ? product.priceEUR
                : product.priceUSD}{" "}
            {
                CURRENCY_SIGNS[currency] //Wyświetlanie ceny w zależności od waluty
            }
        </p>
    );
}
