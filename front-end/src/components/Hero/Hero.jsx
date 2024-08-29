import style from "./Hero.module.css";
import { CenterContent } from "../CenterContent/CenterContent";

export function Hero({ heroImage }) {
    return (
        <div
            className={style.hero}
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <CenterContent>
                <div>
                    <h2>Back to schools -70%!</h2>
                    <p>Na wybrane produkty</p>
                    <button>Zobacz</button>
                </div>
            </CenterContent>
        </div>
    );
}
