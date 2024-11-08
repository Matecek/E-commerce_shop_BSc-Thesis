import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Products";
import { useLoaderData } from "react-router-dom";

export function MainPage() {
    const { news, heroImageUrl } = useLoaderData(); //Pobranie danych z hooka useLoaderData

    return (
        <>
            <Hero heroImage={heroImageUrl} />
            <Products headerText="Sprawdź nasze nowości" products={news} />
        </>
    );
}
