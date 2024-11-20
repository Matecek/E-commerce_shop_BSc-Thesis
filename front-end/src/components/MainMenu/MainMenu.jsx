import { NavLink } from "react-router-dom";
import { GENDERS } from "../../const/categories";

import styles from "./MainMenu.module.css";

export function MainMenu() {
    return (
        <ul className={styles.mainMenu}>
            {/* Mapowanie kategorii */}
            {GENDERS.map((category) => {
                return (
                    <li key={category.path}>
                        <NavLink to={category.path}>
                            {category.categoryName}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}
