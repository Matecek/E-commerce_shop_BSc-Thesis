import { FooterMenu } from "../FooterMenu/FooterMenu";

import styles from "./Footer.module.css";

export function Footer() {
    return (
        <div className={styles.footer}>
            <FooterMenu />
            <p>Copyright 2024 © Mateusz Wojtas</p>
        </div>
    );
}
