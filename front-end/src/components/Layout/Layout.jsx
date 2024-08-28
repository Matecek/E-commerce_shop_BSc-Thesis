import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { MenuIcon } from "../MenuIcon/MenuIcon";
import { SelectCurrency } from "../SelectCurrency/SelectCurrency";

export function Layout() {
    return (
        <>
            <MainMenu />
            <Logo />
            <SelectCurrency />
            <MenuIcon />
            <Footer />
        </>
    );
}
