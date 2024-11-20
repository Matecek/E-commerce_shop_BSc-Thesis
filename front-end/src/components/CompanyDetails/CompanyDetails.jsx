import { NavLink } from "react-router-dom";
import { CenterContent } from "../CenterContent/CenterContent";
import style from "./CompanyDetails.module.css";

export function CompanyDetails() {
    return (
        <CenterContent>
            <div className={style.companyDetails}>
                <h1>Dane Firmy</h1>
                <h2>Adres firmy:</h2>
                <p>MATT</p>
                <p>ul. xyz 123</p>
                <p>00-000 Xyz</p>
                <p>Polska</p>

                <h2>Adres do zwrotów: </h2>
                <p>MATT</p>
                <p>ul. xyz 123</p>
                <p>00-000 Xyz</p>
                <p>Polska</p>

                <NavLink to="/" className={style.link}>
                    www.matt.com
                </NavLink>
            </div>
        </CenterContent>
    );
}
