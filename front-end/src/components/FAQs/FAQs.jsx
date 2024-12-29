import { Accordion } from "../Accordion/Accordion";
import { CenterContent } from "../CenterContent/CenterContent";
import { FAQ } from "../../const/faq"; // Import danych z pliku faq.js

import styles from "./FAQS.module.css";

export function FAQs() {
    // Mapujemy dane FAQ, aby pasowały do struktury oczekiwanej przez Accordion
    const accordionContent = FAQ.map((item) => ({
        title: item.question,
        content: item.answer,
    }));

    return (
        <CenterContent>
            <div className={styles.faq}>
                <h1>FAQ</h1>
                <h2>Odpowiedzi na najszczęściej zadawane pytania</h2>
                {/* Przekazujemy przekonwertowaną tablicę do Accordion */}
            </div>
            <div className={styles.accordion}>
                <Accordion items={accordionContent} />
            </div>
        </CenterContent>
    );
}
