import { Outlet } from "react-router-dom";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { Content } from "../Content/Content";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { MenuIcon } from "../MenuIcon/MenuIcon";
import { SelectCurrency } from "../SelectCurrency/SelectCurrency";
import { TopBar } from "../TopBar/TopBar";

export function Layout() {
    return (
        <>
            <Content>
                <TopBar>
                    <Logo />
                    <MainMenu />
                    <div>
                        <SelectCurrency />
                        <MenuIcon />
                    </div>
                </TopBar>
                <CategoryMenu />
                <Outlet />
            </Content>
            <Footer />
        </>
    );
}
