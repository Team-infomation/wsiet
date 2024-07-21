// MODULE
import { createBrowserRouter } from "react-router-dom";
// COMPONENT
import App from "../App";
import { Home } from "../page/home/Home";

const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const Routers = createBrowserRouter(routers, {
  basename:
    process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "/",
});

export default Routers;
