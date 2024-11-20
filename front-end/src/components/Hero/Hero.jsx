import { CenterContent } from "../CenterContent/CenterContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { useParams } from "react-router-dom";

import styles from "./Hero.module.css";

export function Hero({ heroImage }) {
    const params = useParams();
    if (params.gender === "nowosci") {
        return null;
    }
    return (
        <div
            className={styles.hero}
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <CenterContent>
                <div className={styles.contentWrapper}>
                    <h2>Back to school -70%!</h2>
                    <p>Na wybrane produkty</p>
                    <FullWidthButton>Zobacz</FullWidthButton>
                </div>
            </CenterContent>
        </div>
    );
}
