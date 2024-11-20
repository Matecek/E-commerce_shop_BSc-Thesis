import "./styles/theme.css";
import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import { Cart } from "./views/Cart/Cart";
import { Favorite } from "./views/Favorite/Favorite";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./views/MainPage/MainPage";
import { Error } from "./views/Error/Error";
import { ProductDetails } from "./views/ProductDetails/ProductDetails";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { About } from "./views/About/About";
import { mainPageLoader } from "./api/mainPageLoader";
import { productListLoader } from "./api/productListloader";
import { productLoader } from "./api/productLoader";
import { addProductToFavorites } from "./api/addProductToFavorites";
import { favoritesLoader } from "./api/favoritesLoader";
import { deleteFavoriteProduct } from "./api/deleteFavoriteProduct";
import { Newsletter } from "./views/Newsletter/Newsletter";
import { CompanyInfo } from "./views/CompanyInfo/CompanyInfo";

const router = createBrowserRouter([
    {
        path: "/add-to-favorites/:productId", //ścieżka do dodawania produktu do ulubionych
        action: addProductToFavorites,
    },
    {
        path: "/delete-from-favorites/:favoriteId", //ścieżka do usuwania produktu z ulubionych
        action: deleteFavoriteProduct,
    },
    {
        path: "",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "", //ścieżka do strony głównej
                element: <MainPage />,
                loader: () => redirect("/home"), //przekierowanie na stronę główną
            },
            {
                path: "/firma", //ścieżka do strony o nas
                element: <About />,
            },
            {
                path: "/newsletter", //ścieżka do newslettera
                element: <Newsletter />,
            },
            {
                path: "/info", //ścieżka do informacji
                element: <CompanyInfo />,
            },
            {
                path: "/koszyk", //ścieżka do koszyka
                element: <Cart />,
            },
            {
                path: "/ulubione", //ścieżka do ulubionych
                element: <Favorite />,
                loader: favoritesLoader, //ładowanie ulubionych
            },
            {
                path: "/404", //ścieżka do strony błędu
                element: <Error />,
            },
            {
                path: "/:gender",
                element: <MainPage />, //ścieżka do strony głównej
                loader: mainPageLoader, //ładowanie strony głównej
            },
            {
                path: "/:gender/:category/:subcategory?", //ścieżka do kategorii
                element: <ProductsList />,
                loader: productListLoader, //ładowanie produktów
            },
            {
                path: "/:gender/:category/:subcategory/:productId", //ścieżka do produktu
                element: <ProductDetails />,
                loader: productLoader, //ładowanie produktu
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
