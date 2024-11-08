import { useState } from "react";
import ARROW from "../../assets/arrow.svg";
import styles from "./Accordion.module.css";

export function Accordion({ items }) {
    const [activeItemIndices, setActiveItemIndices] = useState([]);

    // Funkcja do obsługi rozwijania i zwijania elementów
    const toggleItem = (index) => {
        setActiveItemIndices((prevIndices) => {
            if (prevIndices.includes(index)) {
                return prevIndices.filter((i) => i !== index);
            } else {
                return [...prevIndices, index];
            }
        });
    };

    return (
        <ul>
            {items.map((item, index) => {
                // Zmienna `isActive` sprawdza, czy dany indeks znajduje się w stanie aktywnych indeksów
                const isActive = activeItemIndices.includes(index);

                return (
                    <li key={item.title} onClick={() => toggleItem(index)}>
                        {/*Wyświetla tytuł i ikonę rozwijania/zwijania */}
                        <div className={styles.title}>
                            <p>{item.title}</p>
                            <img
                                src={ARROW}
                                className={isActive ? styles.expanded : ""}
                                alt="arrow icon"
                            />
                        </div>
                        {/*Wyświetla
                        zawartość tylko jeśli element jest aktywny*/}
                        {isActive && <p>{item.content}</p>}
                    </li>
                );
            })}
        </ul>
    );
}
