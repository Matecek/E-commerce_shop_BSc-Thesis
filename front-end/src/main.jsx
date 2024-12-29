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
import { cartLoader } from "./api/cartLoader";
import { deleteFavoriteProduct } from "./api/deleteFavoriteProduct";
import { addProductToCart } from "./api/addProductToCart";
import { Newsletter } from "./views/Newsletter/Newsletter";
import { CompanyInfo } from "./views/CompanyInfo/CompanyInfo";
import { Policy } from "./views/Policy/Policy";
import { Cookies } from "./views/Cookies/Cookies";
import { FAQ } from "./views/FAQ/FAQ";
import { Delivery } from "./views/Delivery/Delivery";
import { deleteFromCart } from "./api/deleteFromCart";

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
        path: "/add-to-cart/:productId/:size/:quantity?", //ścieżka do dodawania produktu do koszyka
        action: addProductToCart,
    },
    {
        path: "/delete-from-cart/:productId/", //ścieżka do usuwania produktu z koszyka
        action: deleteFromCart,
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
                path: "/policy", //ścieżka do polityki prywatności
                element: <Policy />,
            },
            {
                path: "/cookies", //ścieżka do polityki cookie
                element: <Cookies />,
            },
            {
                path: "/faq", //ścieżka do często zadawanych pytań
                element: <FAQ />,
            },
            {
                path: "/centrum-informacji", //ścieżka do centrum informacji
                element: <Delivery />,
            },
            {
                path: "/koszyk", //ścieżka do koszyka
                element: <Cart />,
                loader: cartLoader, //ładowanie koszyka
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
                path: "/:gender/:category?/:subcategory/:productId", //ścieżka do produktu
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
