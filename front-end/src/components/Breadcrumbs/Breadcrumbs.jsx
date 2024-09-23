import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";

import styles from "./Breadcrumbs.module.css";

export function Breadcrumbs() {
    const breadcrumbs = [
        {
            categoryName: "Mężczyzna",
            path: "mezczyzni",
        },
        {
            categoryName: "Buty",
            path: "buty",
        },
        {
            categoryName: "Sneakersy",
            path: "sneakersy",
        },
    ];

    return (
        <ul className={styles.breadcrumbs}>
            {breadcrumbs.map((breadcrumb) => {
                return (
                    <li key={breadcrumb.path}>
                        <NavLink to={breadcrumb.path}>
                            {breadcrumb.categoryName}
                            <img src={ARROW_ICON} />
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}
