import { CATEGORIES } from "../../const/categories";
import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";

import styles from "./ExpandableMenu.module.css";

const PATH_TO_GENDER_NAME = {
    // obiekt, który przypisuje ścieżce nazwę płci
    kobiety: "Kobieta",
    mezczyzni: "Mężczyzna",
    dzieci: "Dziecko",
};

export function ExpandableMenu() {
    const params = useParams();
    const activePath = params.category;
    return (
        <div className={styles.expandableMenu}>
            <p>{PATH_TO_GENDER_NAME[params.gender]}</p>
            <ul>
                {/*mapowanie kategorii*/}
                {CATEGORIES.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={`/${params.gender}/${category.path}`}>
                                {category.categoryName}{" "}
                                <img
                                    src={ARROW_ICON}
                                    className={
                                        activePath === category.path
                                            ? styles.expanded
                                            : ""
                                    }
                                />
                            </NavLink>
                            {activePath === category.path && (
                                <ul>
                                    {category.subCategory.map((subCategory) => {
                                        return (
                                            <li key={subCategory.path}>
                                                <NavLink
                                                    to={`/${params.gender}/${params.category}/${subCategory.path}`}
                                                >
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
