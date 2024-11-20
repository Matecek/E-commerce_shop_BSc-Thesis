import { CenterContent } from "../CenterContent/CenterContent";

import styles from "./AboutUs.module.css";

export function AboutUs() {
    return (
        <CenterContent>
            <div className={styles.aboutUs}>
                <h2>O nas</h2>
                <p>
                    Jesteśmy firmą, która zajmuje się sprzedażą produktów w
                    sklepie internetowym. W naszej ofercie znajdziesz szeroki
                    wybór produktów w atrakcyjnych cenach.
                </p>
            </div>
            <div>DOKOŃCZYĆ TĄ STRONĘ</div>
        </CenterContent>
    );
}
