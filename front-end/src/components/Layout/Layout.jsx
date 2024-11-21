import { Outlet, useLocation } from "react-router-dom";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { Content } from "../Content/Content";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { MenuIcon } from "../MenuIcon/MenuIcon";
import { SelectCurrency } from "../SelectCurrency/SelectCurrency";
import { TopBar } from "../TopBar/TopBar";
import { CurrencyContext } from "../../contexts/CurrencyContect";
import { useState } from "react";
import { CURRENCY } from "../../const/currency";

export function Layout() {
    const location = useLocation();
    const showCategoryMenu = [
        "/mezczyzni",
        "/kobiety",
        "/dzieci",
        "/nowosci",
    ].some((path) => location.pathname.startsWith(path));

    const [currency, setCurrency] = useState(
        localStorage["currency"] || CURRENCY.PLN
    );

    return (
        <>
            <CurrencyContext.Provider value={[currency, setCurrency]}>
                <Content>
                    <TopBar>
                        <Logo />
                        <MainMenu />
                        <div>
                            <SelectCurrency />
                            <MenuIcon />
                        </div>
                    </TopBar>
                    {showCategoryMenu && <CategoryMenu />}
                    <Outlet />
                </Content>
                <Footer />
            </CurrencyContext.Provider>
        </>
    );
}
