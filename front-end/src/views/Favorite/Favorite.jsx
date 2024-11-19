import { useLoaderData } from "react-router-dom";
import { FavoriteList } from "../../components/FavoriteList/FavoriteList";

export function Favorite() {
    const favoriteProducts = useLoaderData();

    return <FavoriteList favorites={favoriteProducts} />;
}
