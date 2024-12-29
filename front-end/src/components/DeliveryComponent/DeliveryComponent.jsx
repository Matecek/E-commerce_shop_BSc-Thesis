import { CenterContent } from "../CenterContent/CenterContent";

import styles from "./DeliveryComponent.module.css";

export function DeliveryComponent() {
    return (
        <CenterContent>
            <div className={styles.deliveryComponent}>
                <h1>DOSTAWA I PŁATNOŚCI</h1>
                <div className={styles.deliveryContent}>
                    <h2>Dostawy</h2>
                    <ul>
                        <li>
                            <b>Czas dostawy:</b> Wszystkie zamówienia złożone
                            przed godziną 14:00 wysyłamy tego samego dnia.
                            Przewidywany czas dostawy wynosi 1–2 dni robocze.
                        </li>
                        <li>
                            <b>Koszt dostawy:</b>

                            <li>
                                Darmowa dostawa dla zamówień powyżej 200 zł.
                            </li>
                            <li>Kurier: 15 zł</li>
                            <li>Paczkomaty InPost: 12 zł</li>
                        </li>
                        <li>
                            <b>Śledzenie przesyłki:</b> Po nadaniu paczki
                            otrzymasz e-mail z linkiem do jej śledzenia.
                        </li>
                    </ul>

                    <h2>Płatności</h2>
                    <ul>
                        <li>
                            <b>Dostępne metody płatności:</b> Karta kredytowa,
                            przelew, BLIK, płatność za pobraniem.
                        </li>
                        <li>
                            <b>Bezpieczeństwo:</b> Wszystkie transakcje są
                            zabezpieczone protokołem SSL.
                        </li>
                        <li>
                            <b>Zwroty płatności:</b> Środki zostaną zwrócone w
                            ciągu 7 dni roboczych.
                        </li>
                    </ul>
                </div>
            </div>
        </CenterContent>
    );
}
