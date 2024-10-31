import { useState } from "react";
import ARROW from "../../assets/arrow.svg";
import styles from "./Accordion.module.css";

export function Accortion({ items }) {
    const [activeItemIndex, setActiveItemIndex] = useState(null);

    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <li
                        key={item.title}
                        onClick={() => {
                            setActiveItemIndex(index);
                        }}
                    >
                        <div className={styles.title}>
                            <p>{item.title}</p>
                            <img
                                src={ARROW}
                                className={
                                    activeItemIndex === index
                                        ? styles.expanded
                                        : ""
                                }
                            />
                        </div>
                        {activeItemIndex === index && <p>{item.content}</p>}
                    </li>
                );
            })}
        </ul>
    );
}
