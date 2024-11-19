import style from "./Footer.module.css";
import { FooterMenu } from "../FooterMenu/FooterMenu";

export function Footer() {
    return (
        <div className={style.footer}>
            <FooterMenu />
            <p>Copyright 2024 © Mateusz Wojtas</p>
        </div>
    );
}
