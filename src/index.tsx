// MODULE
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
// COMPONENT
import Routers from "./router/router";
// STYLE
import "./asset/style/_index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <CookiesProvider>
    <RouterProvider router={Routers} />
  </CookiesProvider>
  // </React.StrictMode>
);

reportWebVitals();
