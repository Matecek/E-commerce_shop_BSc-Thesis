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
import { mainPageLoader } from "./api/mainPageLoader";
import { productListLoader } from "./api/productListloader";
import { productLoader } from "./api/productLoader";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "", //ścieżka do strony głównej
                element: <MainPage />,
                loader: () => redirect("/home"),
            },
            {
                path: "/koszyk", //ścieżka do koszyka
                element: <Cart />,
            },
            {
                path: "/ulubione", //ścieżka do ulubionych
                element: <Favorite />,
            },
            {
                path: "/404", //ścieżka do strony błędu
                element: <Error />,
            },
            {
                path: "/:gender",
                element: <MainPage />, //ścieżka do strony głównej
                loader: mainPageLoader,
            },
            {
                path: "/:gender/:category/:subcategory?", //ścieżka do kategorii
                element: <ProductsList />,
                loader: productListLoader,
            },
            {
                path: "/:gender/:category/:subcategory/:productId", //ścieżka do produktu
                element: <ProductDetails />,
                loader: productLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
