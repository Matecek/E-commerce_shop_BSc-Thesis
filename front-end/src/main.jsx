import "./styles/theme.css";
import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Favorite } from "./views/Favorite/Favorite.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Favorite />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
