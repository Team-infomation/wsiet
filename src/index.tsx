// MODULE
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { isMobile } from "react-device-detect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// COMPONENT
import Routers from "./router/router";
// STYLE
import "./asset/style/_index.css";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log(process.env.NODE_ENV);

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      {isMobile ? (
        <RouterProvider router={Routers} />
      ) : (
        <div>앵? 핸드폰이 아니네요?</div>
      )}
    </CookiesProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
  // </React.StrictMode>
);

reportWebVitals();
