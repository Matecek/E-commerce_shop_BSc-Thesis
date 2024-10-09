import "./styles/theme.css";
import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom";
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
import { ProductsList } from "./views/ProductsList/ProductsList";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "", //ścieżka do strony głównej
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
                path: "/:gender",
                element: <MainPage />, //ścieżka do strony głównej
                loader: ({ params }) => {
                    const PATH_TO_ENDPOINT_MAPPING = {
                        kobiety: "women",
                        mezczyzni: "men",
                        dzieci: "children",
                        home: "news",
                    };

                    const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender];
                    if (backEndPath) {
                        return fetch(`http://localhost:3000/${backEndPath}`);
                    } else {
                        return redirect("/"); //zabezpieczenie przed niepoprawnymi ścieżkami
                    }
                },
            },
            {
                path: "/:gender/:category", //ścieżka do kategorii
                element: <ProductsList />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
