import style from "./Hero.module.css";
import { CenterContent } from "../CenterContent/CenterContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { useParams } from "react-router-dom";

export function Hero({ heroImage }) {
    const params = useParams();
    if (params.gender === "nowosci") {
        return null;
    }
    return (
        <div
            className={style.hero}
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <CenterContent>
                <div className={style.contentWrapper}>
                    <h2>Back to school -70%!</h2>
                    <p>Na wybrane produkty</p>
                    <FullWidthButton>Zobacz</FullWidthButton>
                </div>
            </CenterContent>
        </div>
    );
}
