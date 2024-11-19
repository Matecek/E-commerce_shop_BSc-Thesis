import { NavLink } from "react-router-dom";
import { ABOUT, CONTACT, HELP } from "../../const/categories";
import style from "./FooterMenu.module.css";

export function FooterMenu() {
    return (
        <div className={style.footerMenu}>
            <ul>
                <div>O Matt</div>
                {/* Mapowanie kategorii */}
                {ABOUT.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={category.path}>
                                {category.categoryName}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            <ul>
                <div>Kontakt</div>
                {/* Mapowanie kategorii */}
                {CONTACT.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={category.path}>
                                {category.categoryName}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            <ul>
                <div>FAQ</div>
                {/* Mapowanie kategorii */}
                {HELP.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={category.path}>
                                {category.categoryName}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
