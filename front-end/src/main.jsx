import "./styles/theme.css";
import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsList } from "./views/ProductsList/ProductsList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductsList />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
