// MODULE
import { createBrowserRouter } from "react-router-dom";
// COMPONENT
import App from "../App";

const routers = [
  {
    path: "/",
    element: <App />,
    children: [],
  },
];

const Routers = createBrowserRouter(routers, {
  basename:
    process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "/",
});

export default Routers;
