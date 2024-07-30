// MODULE
import { createBrowserRouter } from "react-router-dom";
// COMPONENT
import App from "../App";
import { Home } from "../page/home/Home";
import { Result } from "../page/result/Result";

const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
];
const Routers = createBrowserRouter(routers, {
  basename:
    process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "/",
});

export default Routers;
