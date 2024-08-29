import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import HERO_IMAGE from "../../assets/hero.jpg";

export function MainPage() {
    return (
        <Layout>
            <Hero heroImage={HERO_IMAGE} />
        </Layout>
    );
}
