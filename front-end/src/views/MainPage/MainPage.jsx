import { useState } from "react";
import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Products";
import { useLoaderData } from "react-router-dom";
import { NewsletterPopUp } from "../../components/NewsletterPopUp/NewsletterPopUp";

export function MainPage() {
    const { news, heroImageUrl } = useLoaderData(); // Pobranie danych z hooka useLoaderData
    const [isModalVisible, setIsModalVisible] = useState(true);

    return (
        <>
            <Hero heroImage={heroImageUrl} />
            <Products headerText="Sprawdź nasze nowości" products={news} />
            <NewsletterPopUp
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
            />
        </>
    );
}
