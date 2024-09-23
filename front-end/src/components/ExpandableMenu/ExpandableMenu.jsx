import { CATEGORIES } from "../../const/categories";
import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";

import styles from "./ExpandableMenu.module.css";

export function ExpandableMenu() {
    const activePath = "buty";
    return (
        <div className={styles.expandableMenu}>
            <p>Mężczyzna</p>
            <ul>
                {CATEGORIES.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={category.path}>
                                {category.categoryName}{" "}
                                {category.categoryName !== "Nowości" && (
                                    <img
                                        src={ARROW_ICON}
                                        className={
                                            activePath === category.path
                                                ? styles.expanded
                                                : ""
                                        }
                                    />
                                )}
                            </NavLink>
                            {activePath === category.path && (
                                <ul>
                                    {category.subCategory.map((subCategory) => {
                                        return (
                                            <li key={subCategory.path}>
                                                <NavLink to={subCategory.path}>
                                                    {subCategory.categoryName}
                                                </NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
